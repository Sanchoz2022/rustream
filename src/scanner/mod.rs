use anyhow::Result;
use std::collections::{BTreeMap, HashSet};
use std::path::{Path, PathBuf};
use std::sync::Arc;
use tokio::sync::RwLock;
use tracing::{error, info, warn};

pub mod cue;
pub mod tags;

use crate::AppState;

const AUDIO_EXTS: &[&str] = &[
    "flac", "mp3", "m4a", "aac", "ogg", "opus", "wav", "aiff", "aif", "wma", "alac",
];

const GENERIC_DIRS: &[&str] = &[
    "music",
    "audio",
    "albums",
    "album",
    "compilations",
    "compilation",
    "ep",
    "eps",
    "singles",
    "single",
    "tracks",
    "lossless",
    "flac",
    "mp3",
    "media",
    "library",
];

#[derive(Debug, Clone)]
struct Song {
    track_id: String,
    title: String,
    track_number: Option<i32>,
    duration_ms: i64,
    file_path: String,
    file_size: i64,
    is_cue_virtual: bool,
    cue_start_ms: Option<i64>,
    cue_end_ms: Option<i64>,
    bitrate: Option<i32>,
    sample_rate: Option<i32>,
    channels: Option<i32>,
    suffix: String,
    content_type: String,
    created_at: i64,
}

#[derive(Debug)]
struct AlbumBuild {
    album_id: String,
    artist_id: String,
    title: String,
    year: Option<i32>,
    genre: Option<String>,
    cover_path: Option<String>,
    songs: Vec<Song>,
    created_at: i64,
}

#[derive(Default)]
struct Library {
    artists: BTreeMap<String, String>, // artist_id -> name
    albums: BTreeMap<String, AlbumBuild>,
    files: u64,
}

static SCAN_LOCK: tokio::sync::Mutex<()> = tokio::sync::Mutex::const_new(());

pub async fn run_scanner(state: Arc<RwLock<AppState>>) -> Result<()> {
    info!("Starting music library scanner");
    loop {
        if let Err(e) = scan_all(state.clone()).await {
            error!("Scanner error: {}", e);
        }
        let interval = {
            let s = state.read().await;
            s.config.scan_interval_secs.max(30)
        };
        info!("Scanner sleeping for {} seconds", interval);
        tokio::time::sleep(tokio::time::Duration::from_secs(interval)).await;
    }
}

/// Full rescan: rebuilds the library tables from the filesystem.
pub async fn scan_all(state: Arc<RwLock<AppState>>) -> Result<()> {
    let _guard = SCAN_LOCK.lock().await;
    scan_all_inner(state).await
}

async fn scan_all_inner(state: Arc<RwLock<AppState>>) -> Result<()> {
    let music_dirs = {
        let s = state.read().await;
        s.config.music_dirs.clone()
    };

    let mut library = Library::default();
    let mut scanned_roots = 0usize;

    for root in &music_dirs {
        let root_path = Path::new(root);
        if !root_path.exists() {
            warn!("Music directory does not exist: {}", root);
            continue;
        }
        scanned_roots += 1;
        if let Err(e) = scan_root(root_path, &mut library).await {
            error!("Error scanning {}: {}", root, e);
        }
    }

    // A missing mount must not wipe a working library. This happens when the
    // host share is not mounted yet or a container lost its bind mount.
    if scanned_roots == 0 {
        warn!("No music directories available; keeping the existing library");
        return Ok(());
    }

    info!(
        "Scan finished: {} files, {} artists, {} albums",
        library.files,
        library.artists.len(),
        library.albums.len()
    );

    persist(state, library).await?;
    Ok(())
}

/// Watch the library for new files (torrent downloads, rsync, etc.) and
/// trigger a debounced rescan. The periodic scan remains as a safety net.
pub async fn run_watcher(state: Arc<RwLock<AppState>>) -> Result<()> {
    use notify::{EventKind, RecursiveMode, Watcher};

    let music_dirs = {
        let s = state.read().await;
        s.config.music_dirs.clone()
    };

    let (tx, mut rx) = tokio::sync::mpsc::unbounded_channel::<()>();
    let mut watcher = notify::recommended_watcher(move |result: notify::Result<notify::Event>| {
        if let Ok(event) = result {
            if matches!(
                event.kind,
                EventKind::Create(_) | EventKind::Modify(_) | EventKind::Remove(_)
            ) {
                let _ = tx.send(());
            }
        }
    })?;

    let mut watched = 0usize;
    for dir in &music_dirs {
        let path = Path::new(dir);
        if !path.exists() {
            continue;
        }
        if let Err(error) = watcher.watch(path, RecursiveMode::Recursive) {
            warn!("Cannot watch {}: {}", dir, error);
        } else {
            watched += 1;
        }
    }

    if watched == 0 {
        warn!("No music directories to watch; relying on the periodic scan");
        return Ok(());
    }

    info!("Watching {} music director(ies) for changes", watched);

    loop {
        if rx.recv().await.is_none() {
            break;
        }
        // Debounce: a torrent client writes many events per second.
        tokio::time::sleep(tokio::time::Duration::from_secs(4)).await;
        while rx.try_recv().is_ok() {}
        info!("Music directory changed, rescanning");
        if let Err(error) = scan_all(state.clone()).await {
            error!("Watcher rescan failed: {}", error);
        }
    }

    Ok(())
}

async fn scan_root(root: &Path, library: &mut Library) -> Result<()> {
    info!("Scanning directory: {}", root.display());

    let mut audio_files: Vec<PathBuf> = Vec::new();
    let mut cue_files: Vec<PathBuf> = Vec::new();

    for entry in walkdir::WalkDir::new(root)
        .follow_links(true)
        .into_iter()
        .filter_map(|e| e.ok())
    {
        if !entry.file_type().is_file() {
            continue;
        }
        let path = entry.path();
        let ext = path
            .extension()
            .map(|e| e.to_string_lossy().to_lowercase())
            .unwrap_or_default();
        if ext == "cue" {
            cue_files.push(path.to_path_buf());
        } else if AUDIO_EXTS.contains(&ext.as_str()) {
            audio_files.push(path.to_path_buf());
        }
    }

    audio_files.sort();
    cue_files.sort();

    info!(
        "Found {} audio files and {} CUE sheets",
        audio_files.len(),
        cue_files.len()
    );

    let mut cue_images: HashSet<PathBuf> = HashSet::new();

    for cue_path in &cue_files {
        match process_cue_image(root, cue_path, library).await {
            Ok(Some(image)) => {
                cue_images.insert(image);
            }
            Ok(None) => {}
            Err(e) => error!("Error processing CUE {}: {}", cue_path.display(), e),
        }
    }

    for flac_path in &audio_files {
        if cue_images.contains(flac_path) {
            continue;
        }
        if let Err(e) = process_standalone_track(root, flac_path, library).await {
            error!("Error processing {}: {}", flac_path.display(), e);
        }
    }

    Ok(())
}

async fn process_cue_image(
    root: &Path,
    cue_path: &Path,
    library: &mut Library,
) -> Result<Option<PathBuf>> {
    let cue_data = cue::parse_cue_sheet(cue_path)?;

    // Multi-file CUE sheets are just tracklists; the files themselves carry
    // tags and are scanned individually. Only a single-file sheet with
    // several INDEX entries describes one image with virtual tracks.
    if cue_data.files.len() != 1 || cue_data.tracks.len() <= 1 {
        return Ok(None);
    }

    let image_path = match cue_data.files.first().map(|s| s.as_str()) {
        Some(name) => cue_path.parent().unwrap_or(Path::new(".")).join(name),
        None => cue_path.with_extension("flac"),
    };

    if !image_path.exists() {
        warn!(
            "CUE references missing audio file: {}",
            image_path.display()
        );
        return Ok(None);
    }

    let file_meta = std::fs::metadata(&image_path)?;
    let file_size = file_meta.len() as i64;
    let created_at = file_created_at(&file_meta);

    let tag_data = tags::read_tags(&image_path);
    let album_dir = cue_path.parent().unwrap_or(Path::new("."));

    let artist_name = cue_data
        .performer
        .clone()
        .or(tag_data.album_artist.clone())
        .or(tag_data.artist.clone())
        .unwrap_or_else(|| resolve_dir_artist(root, &image_path));
    let artist_name = display_artist(root, &image_path, &artist_name);

    let (dir_year, dir_title) = parse_album_dir(
        album_dir
            .file_name()
            .and_then(|s| s.to_str())
            .unwrap_or("Unknown Album"),
    );
    let album_title = cue_data
        .title
        .clone()
        .or(tag_data.album.clone())
        .unwrap_or(dir_title);
    let year = tag_data.year.or(dir_year);

    let artist_id = generate_id(&format!("artist:{}", artist_name.to_lowercase()));
    let album_id = generate_id(&format!(
        "album:{}:{}",
        artist_id,
        album_title.to_lowercase()
    ));

    let cover_path = find_cover(album_dir).or_else(|| embedded_marker(&image_path));

    let total_ms = if tag_data.duration_ms > 0 {
        tag_data.duration_ms
    } else {
        cue_data
            .tracks
            .iter()
            .map(|t| t.start_ms + t.duration_ms)
            .max()
            .unwrap_or(0)
    };

    let mut songs = Vec::new();
    for (idx, track) in cue_data.tracks.iter().enumerate() {
        let start = track.start_ms;
        let end = track.end_ms.unwrap_or(total_ms).min(total_ms);
        let duration = if end > start { end - start } else { 0 };

        let title = track
            .title
            .clone()
            .filter(|t| !t.trim().is_empty())
            .unwrap_or_else(|| format!("Track {}", idx + 1));

        let track_number = if track.number > 0 {
            track.number as i32
        } else {
            (idx + 1) as i32
        };

        songs.push(Song {
            track_id: generate_id(&format!("cue:{}:{}:{}", album_id, track_number, title)),
            title,
            track_number: Some(track_number),
            duration_ms: duration,
            file_path: image_path.to_string_lossy().to_string(),
            file_size,
            is_cue_virtual: true,
            cue_start_ms: Some(start),
            cue_end_ms: Some(end),
            bitrate: tag_data.bitrate,
            sample_rate: tag_data.sample_rate,
            channels: tag_data.channels,
            suffix: "flac".to_string(),
            content_type: "audio/flac".to_string(),
            created_at,
        });
    }

    library.artists.insert(artist_id.clone(), artist_name);
    library.albums.insert(
        album_id.clone(),
        AlbumBuild {
            album_id,
            artist_id,
            title: album_title,
            year,
            genre: tag_data.genre.clone(),
            cover_path,
            songs,
            created_at,
        },
    );

    info!(
        "Indexed CUE image with {} tracks: {}",
        cue_data.tracks.len(),
        cue_path.display()
    );

    Ok(Some(image_path))
}

async fn process_standalone_track(root: &Path, path: &Path, library: &mut Library) -> Result<()> {
    let tag_data = tags::read_tags(path);
    let file_meta = std::fs::metadata(path)?;
    let file_size = file_meta.len() as i64;
    let created_at = file_created_at(&file_meta);

    let suffix = path
        .extension()
        .map(|e| e.to_string_lossy().to_lowercase())
        .unwrap_or_else(|| "flac".to_string());
    let content_type = content_type_for(&suffix).to_string();

    let album_dir = path.parent().unwrap_or(Path::new("."));
    let (dir_year, dir_album_title) = parse_album_dir(
        album_dir
            .file_name()
            .and_then(|s| s.to_str())
            .unwrap_or("Unknown Album"),
    );
    let (file_track_number, file_title) = parse_filename(
        path.file_stem()
            .and_then(|s| s.to_str())
            .unwrap_or("Unknown"),
    );

    let tag_artist = tag_data
        .album_artist
        .clone()
        .or(tag_data.artist.clone())
        .unwrap_or_else(|| resolve_dir_artist(root, path));
    let artist_name = display_artist(root, path, &tag_artist);

    let album_title = tag_data
        .album
        .clone()
        .filter(|a| !a.trim().is_empty())
        .unwrap_or(dir_album_title);
    let year = tag_data.year.or(dir_year);
    let title = tag_data
        .title
        .clone()
        .filter(|t| !t.trim().is_empty())
        .unwrap_or(file_title);
    let track_number = tag_data.track_number.or(file_track_number);

    let artist_id = generate_id(&format!("artist:{}", artist_name.to_lowercase()));
    let album_id = generate_id(&format!(
        "album:{}:{}",
        artist_id,
        album_title.to_lowercase()
    ));

    let cover_path = find_cover(album_dir).or_else(|| embedded_marker(path));

    let song = Song {
        track_id: generate_id(&format!("track:{}", path.to_string_lossy())),
        title,
        track_number,
        duration_ms: tag_data.duration_ms,
        file_path: path.to_string_lossy().to_string(),
        file_size,
        is_cue_virtual: false,
        cue_start_ms: None,
        cue_end_ms: None,
        bitrate: tag_data.bitrate,
        sample_rate: tag_data.sample_rate,
        channels: tag_data.channels,
        suffix,
        content_type,
        created_at,
    };

    library.artists.insert(artist_id.clone(), artist_name);

    let album = library
        .albums
        .entry(album_id.clone())
        .or_insert_with(|| AlbumBuild {
            album_id,
            artist_id,
            title: album_title,
            year,
            genre: tag_data.genre.clone(),
            cover_path: cover_path.clone(),
            songs: Vec::new(),
            created_at,
        });

    if album.cover_path.is_none() {
        album.cover_path = cover_path;
    }
    if album.genre.is_none() {
        album.genre = tag_data.genre.clone();
    }
    album.created_at = album.created_at.max(created_at);
    album.songs.push(song);
    library.files += 1;

    Ok(())
}

async fn persist(state: Arc<RwLock<AppState>>, library: Library) -> Result<()> {
    let db = {
        let s = state.read().await;
        s.db.clone()
    };

    let mut tx = db.begin().await?;

    sqlx::query("DELETE FROM tracks").execute(&mut *tx).await?;
    sqlx::query("DELETE FROM albums").execute(&mut *tx).await?;
    sqlx::query("DELETE FROM artists").execute(&mut *tx).await?;

    for (artist_id, name) in &library.artists {
        sqlx::query(
            "INSERT INTO artists (artist_id, name, album_count, created_at) VALUES (?, ?, 0, ?)",
        )
        .bind(artist_id)
        .bind(name)
        .bind(chrono::Utc::now().timestamp())
        .execute(&mut *tx)
        .await?;
    }

    for album in library.albums.values() {
        let track_count = album.songs.len() as i32;
        let duration_ms: i64 = album.songs.iter().map(|s| s.duration_ms).sum();

        sqlx::query(
            "INSERT INTO albums (album_id, artist_id, title, year, genre, cover_path, track_count, duration_ms, created_at)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        )
        .bind(&album.album_id)
        .bind(&album.artist_id)
        .bind(&album.title)
        .bind(album.year)
        .bind(&album.genre)
        .bind(&album.cover_path)
        .bind(track_count)
        .bind(duration_ms)
        .bind(album.created_at)
        .execute(&mut *tx)
        .await?;

        for song in &album.songs {
            sqlx::query(
                r#"INSERT OR REPLACE INTO tracks
                (track_id, album_id, artist_id, title, track_number, duration_ms, file_path, file_size,
                 is_cue_virtual, cue_start_ms, cue_end_ms, bitrate, sample_rate, channels,
                 suffix, content_type, created_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"#,
            )
            .bind(&song.track_id)
            .bind(&album.album_id)
            .bind(&album.artist_id)
            .bind(&song.title)
            .bind(song.track_number)
            .bind(song.duration_ms)
            .bind(&song.file_path)
            .bind(song.file_size)
            .bind(song.is_cue_virtual)
            .bind(song.cue_start_ms)
            .bind(song.cue_end_ms)
            .bind(song.bitrate)
            .bind(song.sample_rate)
            .bind(song.channels)
            .bind(&song.suffix)
            .bind(&song.content_type)
            .bind(song.created_at)
            .execute(&mut *tx)
            .await?;
        }
    }

    // Fix artist album counters in one statement.
    sqlx::query(
        "UPDATE artists SET album_count = (
            SELECT COUNT(*) FROM albums WHERE albums.artist_id = artists.artist_id
        )",
    )
    .execute(&mut *tx)
    .await?;

    // Drop playlist entries and favourites pointing to tracks that no longer exist.
    sqlx::query("DELETE FROM playlist_tracks WHERE track_id NOT IN (SELECT track_id FROM tracks)")
        .execute(&mut *tx)
        .await?;
    sqlx::query(
        "DELETE FROM stars WHERE item_type = 'track' AND item_id NOT IN (SELECT track_id FROM tracks)",
    )
    .execute(&mut *tx)
    .await?;
    sqlx::query(
        "DELETE FROM stars WHERE item_type = 'album' AND item_id NOT IN (SELECT album_id FROM albums)",
    )
    .execute(&mut *tx)
    .await?;
    sqlx::query(
        "DELETE FROM stars WHERE item_type = 'artist' AND item_id NOT IN (SELECT artist_id FROM artists)",
    )
    .execute(&mut *tx)
    .await?;

    tx.commit().await?;

    info!(
        "Library saved: {} artists, {} albums",
        library.artists.len(),
        library.albums.len()
    );
    Ok(())
}

fn content_type_for(suffix: &str) -> &'static str {
    match suffix {
        "mp3" => "audio/mpeg",
        "m4a" | "alac" => "audio/mp4",
        "aac" => "audio/aac",
        "ogg" => "audio/ogg",
        "opus" => "audio/opus",
        "wav" => "audio/wav",
        "aiff" | "aif" => "audio/aiff",
        "wma" => "audio/x-ms-wma",
        _ => "audio/flac",
    }
}

fn file_created_at(meta: &std::fs::Metadata) -> i64 {
    meta.modified()
        .ok()
        .and_then(|t| t.duration_since(std::time::UNIX_EPOCH).ok())
        .map(|d| d.as_secs() as i64)
        .unwrap_or_else(|| chrono::Utc::now().timestamp())
}

fn parse_album_dir(name: &str) -> (Option<i32>, String) {
    let trimmed = name.trim();
    // "2024 - Album Name", "2024. Album Name", "[2024] Album Name"
    let (year_part, rest) = if let Some((first, rest)) = trimmed.split_once(" - ") {
        (Some(first), rest)
    } else if let Some((first, rest)) = trimmed.split_once(". ") {
        (Some(first), rest)
    } else if trimmed.starts_with('[') {
        match trimmed.find(']') {
            Some(idx) => (
                Some(&trimmed[1..idx]),
                trimmed[idx + 1..].trim_start_matches([' ', '-', '.']),
            ),
            None => (None, trimmed),
        }
    } else {
        (None, trimmed)
    };

    let year = year_part.and_then(tags::parse_year);
    let title = rest.trim().to_string();

    if year.is_some() && !title.is_empty() {
        (year, title)
    } else {
        (tags::parse_year(trimmed), prettify_dir(trimmed))
    }
}

fn prettify_dir(name: &str) -> String {
    name.replace('_', " ").trim().to_string()
}

/// The artist for a file is the first directory below the music root. This is
/// how the library is organised and it avoids tags splitting one artist into
/// several entries ("Б.А.У.", "Бездна Анального Угнетения", ...).
fn resolve_dir_artist(root: &Path, path: &Path) -> String {
    let rel = path.strip_prefix(root).unwrap_or(path);
    let components: Vec<_> = rel.components().collect();
    if components.len() < 2 {
        return "Unknown Artist".to_string();
    }
    let candidate = components[0]
        .as_os_str()
        .to_string_lossy()
        .trim()
        .to_string();
    if candidate.is_empty() || GENERIC_DIRS.contains(&candidate.to_lowercase().as_str()) {
        return "Unknown Artist".to_string();
    }
    prettify_dir(&candidate)
}

/// Use the tag name when it matches the folder name (nicer formatting:
/// "Chikoi_The_Maid" -> "Chikoi The Maid"), otherwise trust the folder.
fn display_artist(root: &Path, path: &Path, tag_artist: &str) -> String {
    let dir_artist = resolve_dir_artist(root, path);
    let tag_artist = tag_artist
        .split(';')
        .next()
        .unwrap_or(tag_artist)
        .trim()
        .to_string();

    if tag_artist.is_empty() || normalize_name(&tag_artist) == normalize_name(&dir_artist) {
        if dir_artist != "Unknown Artist" {
            dir_artist
        } else if !tag_artist.is_empty() {
            tag_artist
        } else {
            "Unknown Artist".to_string()
        }
    } else if dir_artist != "Unknown Artist" {
        dir_artist
    } else if !tag_artist.is_empty() {
        tag_artist
    } else {
        "Unknown Artist".to_string()
    }
}

fn normalize_name(value: &str) -> String {
    value
        .chars()
        .filter(|c| c.is_alphanumeric())
        .flat_map(|c| c.to_lowercase())
        .collect()
}

fn find_cover(album_dir: &Path) -> Option<String> {
    const PREFERRED: &[&str] = &[
        "cover",
        "folder",
        "front",
        "album",
        "albumart",
        "albumartsmall",
        "artwork",
    ];
    const IMAGE_EXTS: &[&str] = &["jpg", "jpeg", "png", "webp"];

    let entries: Vec<PathBuf> = std::fs::read_dir(album_dir)
        .ok()?
        .filter_map(|e| e.ok())
        .map(|e| e.path())
        .filter(|p| p.is_file())
        .collect();

    for name in PREFERRED {
        for entry in &entries {
            let stem = entry
                .file_stem()
                .map(|s| s.to_string_lossy().to_lowercase())
                .unwrap_or_default();
            let ext = entry
                .extension()
                .map(|e| e.to_string_lossy().to_lowercase())
                .unwrap_or_default();
            if stem == *name && IMAGE_EXTS.contains(&ext.as_str()) {
                return Some(entry.to_string_lossy().to_string());
            }
        }
    }

    // Otherwise any image in the album folder (prefer large ones? first is fine).
    let mut images: Vec<&PathBuf> = entries
        .iter()
        .filter(|p| {
            IMAGE_EXTS.contains(
                &p.extension()
                    .map(|e| e.to_string_lossy().to_lowercase())
                    .unwrap_or_default()
                    .as_str(),
            )
        })
        .collect();
    images.sort();
    images.first().map(|p| p.to_string_lossy().to_string())
}

fn embedded_marker(path: &Path) -> Option<String> {
    let has_cover = tags::embedded_cover(path).is_some();
    has_cover.then(|| format!("embed:{}", path.to_string_lossy()))
}

/// Parse "01 - Title", "01. Title", "Artist - 01 Title".
fn parse_filename(filename: &str) -> (Option<i32>, String) {
    let trimmed = filename.trim();

    if let Some((num, rest)) = trimmed.split_once(" - ") {
        if let Ok(n) = num.trim().parse::<i32>() {
            return (Some(n), rest.trim().to_string());
        }
    }
    if let Some((num, rest)) = trimmed.split_once(". ") {
        if let Ok(n) = num.trim().parse::<i32>() {
            return (Some(n), rest.trim().to_string());
        }
    }
    if let Some((num, rest)) = trimmed.split_once(' ') {
        if let Ok(n) = num.trim().parse::<i32>() {
            return (Some(n), rest.trim().to_string());
        }
    }

    // "Chikoi The Maid - 01 The Past"
    if let Some((left, right)) = trimmed.rsplit_once(" - ") {
        if let Some((num, rest)) = right.trim().split_once(' ') {
            if let Ok(n) = num.trim().parse::<i32>() {
                let _ = left;
                return (Some(n), rest.trim().to_string());
            }
        }
    }

    (None, trimmed.to_string())
}

fn generate_id(input: &str) -> String {
    use sha2::{Digest, Sha256};
    let mut hasher = Sha256::new();
    hasher.update(input.as_bytes());
    hex::encode(&hasher.finalize()[..16])
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parse_filename() {
        assert_eq!(parse_filename("01 - Title"), (Some(1), "Title".to_string()));
        assert_eq!(parse_filename("01. Title"), (Some(1), "Title".to_string()));
        assert_eq!(parse_filename("01 Title"), (Some(1), "Title".to_string()));
        assert_eq!(
            parse_filename("Chikoi The Maid - 01 The Past"),
            (Some(1), "The Past".to_string())
        );
        assert_eq!(
            parse_filename("Just Title"),
            (None, "Just Title".to_string())
        );
    }

    #[test]
    fn test_parse_album_dir() {
        assert_eq!(
            parse_album_dir("2012 - Хроники Последних Дней"),
            (Some(2012), "Хроники Последних Дней".to_string())
        );
        assert_eq!(
            parse_album_dir("Insertion"),
            (None, "Insertion".to_string())
        );
    }
}

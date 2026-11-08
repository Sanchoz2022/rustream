//! YouTube Music, bound to local profiles: each user connects their own
//! cookies, and every search, stream and cache entry is keyed by user id.
//! Nothing a user does with YouTube Music is visible to or reusable by others.

pub mod cookies;
pub mod innertube;

use anyhow::{anyhow, Result};
use axum::{
    body::Body,
    http::{header, HeaderMap, StatusCode},
    response::{IntoResponse, Response},
};
use serde_json::{json, Value};
use sqlx::SqlitePool;
use std::collections::{HashMap, HashSet};
use std::path::{Path, PathBuf};
use std::sync::Arc;
use std::time::{Duration, Instant};
use tokio::io::AsyncWriteExt;
use tokio::sync::Mutex;

use crate::config::Config;
use cookies::Cookie;
use innertube::{Account, Song};

pub const ID_PREFIX: &str = "ytm-";
/// How long a resolved CDN URL is trusted before asking yt-dlp again.
const RESOLVE_TTL: Duration = Duration::from_secs(4 * 3600);
const YTDLP_TIMEOUT: Duration = Duration::from_secs(60);

/// (user id, video id, data-saver flag). The flag is part of the key so a
/// cached high-quality URL is not reused after switching to saver mode.
type TrackKey = (String, String, bool);

#[derive(Clone)]
struct Resolved {
    url: String,
    ext: String,
    size: u64,
    at: Instant,
}

pub struct YtmState {
    client: reqwest::Client,
    resolved: Mutex<HashMap<TrackKey, Resolved>>,
    /// One resolve per (user, video) at a time: a prefetch and a play request
    /// for the same track must not spawn two yt-dlp processes.
    inflight: Mutex<HashMap<TrackKey, Arc<Mutex<()>>>>,
    downloading: Arc<Mutex<HashSet<(String, String)>>>,
}

impl YtmState {
    pub fn new(proxy: Option<&str>) -> Result<Self> {
        let mut builder = reqwest::Client::builder()
            .user_agent(innertube::USER_AGENT)
            .connect_timeout(Duration::from_secs(10))
            .timeout(Duration::from_secs(30));
        // YouTube is unreachable from some networks; a proxy fixes both the
        // API calls and the audio CDN.
        if let Some(proxy) = proxy.filter(|proxy| !proxy.trim().is_empty()) {
            builder = builder.proxy(reqwest::Proxy::all(proxy)?);
        }
        Ok(Self {
            client: builder.build()?,
            resolved: Mutex::new(HashMap::new()),
            inflight: Mutex::new(HashMap::new()),
            downloading: Arc::new(Mutex::new(HashSet::new())),
        })
    }
}

/// `ytm-<videoId>` -> `<videoId>`, only for well-formed ids. The id ends up in
/// file names and yt-dlp arguments, so anything unexpected is rejected.
pub fn video_id(id: &str) -> Option<&str> {
    let video_id = id.strip_prefix(ID_PREFIX)?;
    let valid = video_id.len() == 11
        && video_id
            .bytes()
            .all(|b| b.is_ascii_alphanumeric() || b == b'-' || b == b'_');
    valid.then_some(video_id)
}

fn content_type(ext: &str) -> &'static str {
    match ext {
        "m4a" | "mp4" => "audio/mp4",
        "webm" => "audio/webm",
        "opus" | "ogg" => "audio/ogg",
        "mp3" => "audio/mpeg",
        _ => "application/octet-stream",
    }
}

// ---------------------------------------------------------------------------
// Per-user connection
// ---------------------------------------------------------------------------

pub async fn load_cookies(db: &SqlitePool, user_id: &str) -> Result<Option<Vec<Cookie>>> {
    let row: Option<(Option<String>,)> =
        sqlx::query_as("SELECT ytm_cookies_enc FROM users WHERE user_id = ?")
            .bind(user_id)
            .fetch_optional(db)
            .await?;
    let Some((Some(encrypted),)) = row else {
        return Ok(None);
    };
    let header = crate::auth::decrypt_secret(db, &encrypted).await?;
    Ok(Some(cookies::from_header(&header)))
}

/// Validate pasted cookies against YouTube and store them encrypted.
pub async fn connect(
    state: &YtmState,
    db: &SqlitePool,
    user_id: &str,
    input: &str,
) -> Result<Account, ConnectError> {
    let parsed = cookies::parse(input).map_err(|error| ConnectError::Invalid(error.to_string()))?;
    let account = innertube::account(&state.client, &parsed)
        .await
        .map_err(ConnectError::Upstream)?
        .ok_or(ConnectError::NotLoggedIn)?;

    let encrypted = crate::auth::encrypt_secret(db, &cookies::to_header(&parsed))
        .await
        .map_err(ConnectError::Upstream)?;
    let account_json =
        serde_json::to_string(&account).map_err(|error| ConnectError::Upstream(error.into()))?;
    sqlx::query(
        "UPDATE users SET ytm_cookies_enc = ?, ytm_account = ?, ytm_updated_at = ? WHERE user_id = ?",
    )
    .bind(encrypted)
    .bind(account_json)
    .bind(chrono::Utc::now().timestamp())
    .bind(user_id)
    .execute(db)
    .await
    .map_err(|error| ConnectError::Upstream(error.into()))?;

    forget_resolved(state, user_id).await;
    Ok(account)
}

#[derive(Debug)]
pub enum ConnectError {
    Invalid(String),
    NotLoggedIn,
    Upstream(anyhow::Error),
}

/// Remove the user's cookies, cached metadata and cached audio.
pub async fn disconnect(
    state: &YtmState,
    db: &SqlitePool,
    config: &Config,
    user_id: &str,
) -> Result<()> {
    sqlx::query(
        "UPDATE users SET ytm_cookies_enc = NULL, ytm_account = NULL, ytm_updated_at = NULL WHERE user_id = ?",
    )
    .bind(user_id)
    .execute(db)
    .await?;
    purge_user(db, config, user_id).await?;
    forget_resolved(state, user_id).await;
    Ok(())
}

/// Drop cached tracks and files of a user (also used when deleting a user).
pub async fn purge_user(db: &SqlitePool, config: &Config, user_id: &str) -> Result<()> {
    sqlx::query("DELETE FROM ytm_tracks WHERE user_id = ?")
        .bind(user_id)
        .execute(db)
        .await?;
    let dir = user_dir(config, user_id);
    match tokio::fs::remove_dir_all(&dir).await {
        Ok(()) => Ok(()),
        Err(error) if error.kind() == std::io::ErrorKind::NotFound => Ok(()),
        Err(error) => Err(anyhow!("cannot remove {}: {error}", dir.display())),
    }
}

async fn forget_resolved(state: &YtmState, user_id: &str) {
    state
        .resolved
        .lock()
        .await
        .retain(|(owner, _, _), _| owner != user_id);
}

pub async fn status(db: &SqlitePool, user_id: &str) -> Result<Value> {
    let row: Option<(Option<String>, Option<String>, Option<i64>)> = sqlx::query_as(
        "SELECT ytm_cookies_enc, ytm_account, ytm_updated_at FROM users WHERE user_id = ?",
    )
    .bind(user_id)
    .fetch_optional(db)
    .await?;
    let Some((Some(_), account, updated_at)) = row else {
        return Ok(json!({ "connected": false, "account": null, "updatedAt": null }));
    };
    let account: Option<Account> = account.and_then(|text| serde_json::from_str(&text).ok());
    Ok(json!({ "connected": true, "account": account, "updatedAt": updated_at }))
}

// ---------------------------------------------------------------------------
// Local library preference
// ---------------------------------------------------------------------------

/// (track id, file path, suffix, content type, title, artist, bitrate, duration)
type LocalRow = (
    String,
    String,
    String,
    String,
    String,
    String,
    Option<i64>,
    i64,
);

/// A track that exists in the local library, used instead of YouTube audio.
pub struct LocalTrack {
    pub id: String,
    pub path: String,
    pub suffix: String,
    pub content_type: String,
    pub bitrate: Option<i64>,
}

/// Lowercase, strip bracketed noise ("(Remastered)", "[Official Video]"),
/// drop punctuation and collapse spaces. YouTube and file tags rarely agree
/// character for character, so comparison happens on this form.
fn normalize(value: &str) -> String {
    let mut out = String::with_capacity(value.len());
    let mut depth = 0usize;
    for ch in value.chars() {
        match ch {
            '(' | '[' | '{' => depth += 1,
            ')' | ']' | '}' => depth = depth.saturating_sub(1),
            _ if depth > 0 => {}
            c if c.is_alphanumeric() => out.extend(c.to_lowercase()),
            _ => out.push(' '),
        }
    }
    out.split_whitespace().collect::<Vec<_>>().join(" ")
}

/// Longest word of a normalized title, used to narrow the SQL query.
fn search_token(normalized: &str) -> Option<String> {
    normalized
        .split_whitespace()
        .filter(|word| word.chars().count() >= 3)
        .max_by_key(|word| word.chars().count())
        .map(|word| word.to_string())
}

/// Find the local file for a YouTube track. Duration is the tie-breaker: a
/// cover or a live version can share the title, but not both artist and length.
pub async fn local_match(
    db: &SqlitePool,
    title: &str,
    artist: &str,
    duration_ms: i64,
) -> Option<LocalTrack> {
    let title_norm = normalize(title);
    if title_norm.is_empty() {
        return None;
    }
    let token = search_token(&title_norm)?;
    // SQLite's LIKE/lower() only fold ASCII, so a Cyrillic title would never
    // match by text alone. Rows of the same length are pulled in too; the
    // normalized comparison below is what actually decides.
    let rows: Vec<LocalRow> = sqlx::query_as(
        "SELECT t.track_id, t.file_path, t.suffix, t.content_type, t.title, a.name,
                    t.bitrate, t.duration_ms
             FROM tracks t JOIN artists a ON a.artist_id = t.artist_id
             WHERE lower(t.title) LIKE ? OR t.duration_ms BETWEEN ? AND ?",
    )
    .bind(format!("%{token}%"))
    .bind(duration_ms - 8_000)
    .bind(duration_ms + 8_000)
    .fetch_all(db)
    .await
    .ok()?;

    let artist_norm = normalize(artist);
    let mut best: Option<(i64, LocalTrack)> = None;
    for (id, path, suffix, content_type, row_title, row_artist, bitrate, row_duration) in rows {
        let row_title_norm = normalize(&row_title);
        if row_title_norm != title_norm
            && !(row_title_norm.contains(&title_norm) || title_norm.contains(&row_title_norm))
        {
            continue;
        }
        let row_artist_norm = normalize(&row_artist);
        let artist_ok = artist_norm.is_empty()
            || row_artist_norm == artist_norm
            || row_artist_norm.contains(&artist_norm)
            || artist_norm.contains(&row_artist_norm);
        let diff = (row_duration - duration_ms).abs();
        // Same song, different master: allow 8s, but an artist mismatch must be
        // covered by a near-exact duration.
        let duration_ok = diff <= 8_000;
        if !duration_ok || (!artist_ok && diff > 2_000) {
            continue;
        }
        if best
            .as_ref()
            .is_some_and(|(best_diff, _)| *best_diff <= diff)
        {
            continue;
        }
        best = Some((
            diff,
            LocalTrack {
                id,
                path,
                suffix,
                content_type,
                bitrate,
            },
        ));
    }
    best.map(|(_, track)| track)
}

/// Add the local file's quality to a YouTube listing entry so the UI shows
/// FLAC (and the real bitrate) instead of a generic m4a.
async fn attach_local(
    db: &SqlitePool,
    value: &mut Value,
    title: &str,
    artist: &str,
    duration_ms: i64,
) {
    let Some(local) = local_match(db, title, artist, duration_ms).await else {
        return;
    };
    value["suffix"] = Value::String(local.suffix);
    value["contentType"] = Value::String(local.content_type);
    if let Some(bitrate) = local.bitrate {
        value["bitRate"] = Value::from(bitrate);
    }
    value["localId"] = Value::String(local.id);
    value["localSource"] = Value::Bool(true);
}

// ---------------------------------------------------------------------------
// Catalogue
// ---------------------------------------------------------------------------

pub enum Listing {
    Search(String),
    Liked,
}

pub async fn list(
    state: &YtmState,
    db: &SqlitePool,
    user_id: &str,
    listing: Listing,
    limit: usize,
) -> Result<Option<Vec<Value>>> {
    let Some(cookies) = load_cookies(db, user_id).await? else {
        return Ok(None);
    };
    let songs = match listing {
        Listing::Search(query) => innertube::search(&state.client, &cookies, &query, limit).await?,
        Listing::Liked => innertube::liked(&state.client, &cookies, limit).await?,
    };
    remember(db, user_id, &songs).await?;
    let mut tracks = Vec::with_capacity(songs.len());
    for song in &songs {
        let mut value = song_json(song);
        attach_local(
            db,
            &mut value,
            &song.title,
            &song.artist,
            song.duration_secs * 1000,
        )
        .await;
        tracks.push(value);
    }
    Ok(Some(tracks))
}

/// How many upcoming tracks are resolved in the background. Each one costs a
/// yt-dlp run, so the list stays short.
const PREFETCH_LIMIT: usize = 3;

/// Warm the resolved URL cache so the first play does not wait for yt-dlp
/// (~3 s per track). Sequential on purpose: prefetch must never slow down the
/// request that triggered it, and yt-dlp is CPU-hungry.
pub fn spawn_prefetch(
    state: Arc<YtmState>,
    db: SqlitePool,
    config: Config,
    user_id: String,
    ids: Vec<String>,
) {
    if ids.is_empty() || !config.ytm_enabled {
        return;
    }
    tokio::spawn(async move {
        let Ok(Some(cookies)) = load_cookies(&db, &user_id).await else {
            return;
        };
        let saver = crate::auth::data_saver(&db, &user_id).await;
        for id in ids.into_iter().take(PREFETCH_LIMIT) {
            let Some(video_id) = video_id(&id) else {
                continue;
            };
            if let Err(error) =
                resolve(&state, &db, &config, &user_id, video_id, &cookies, saver).await
            {
                tracing::debug!("YouTube Music prefetch failed for {video_id}: {error}");
            }
        }
    });
}

/// Store metadata so stream, cover and scrobble requests can find the song
/// later without asking YouTube again.
async fn remember(db: &SqlitePool, user_id: &str, songs: &[Song]) -> Result<()> {
    let now = chrono::Utc::now().timestamp();
    let mut tx = db.begin().await?;
    for song in songs {
        sqlx::query(
            "INSERT INTO ytm_tracks (user_id, video_id, title, artist, album, duration_ms, thumbnail, created_at, last_used_at)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
             ON CONFLICT (user_id, video_id) DO UPDATE SET
                title = excluded.title, artist = excluded.artist, album = excluded.album,
                duration_ms = excluded.duration_ms, thumbnail = excluded.thumbnail",
        )
        .bind(user_id)
        .bind(&song.video_id)
        .bind(&song.title)
        .bind(&song.artist)
        .bind(&song.album)
        .bind(song.duration_secs * 1000)
        .bind(&song.thumbnail)
        .bind(now)
        .bind(now)
        .execute(&mut *tx)
        .await?;
    }
    tx.commit().await?;
    Ok(())
}

/// Треки YouTube, которые этот профиль уже слушал.
/// Живёт в локальной БД, поэтому доступен без похода в YouTube —
/// это и есть «главная» вкладки YouTube до первого поиска.
///
/// `ytm_tracks` — ещё и кэш метаданных: туда попадает каждый результат
/// поиска. Поэтому историю строим по `plays`, иначе одна выдача забивает
/// «Недавно из YouTube» десятком версий одного трека.
pub async fn history(db: &SqlitePool, user_id: &str, limit: usize) -> Result<Vec<Value>> {
    let rows: Vec<(String, String, String, String, i64)> = sqlx::query_as(
        "SELECT t.video_id, t.title, t.artist, t.album, t.duration_ms
         FROM ytm_tracks t
         JOIN (
             SELECT track_id, MAX(started_at) AS played_at
             FROM plays
             WHERE user_id = ?
             GROUP BY track_id
         ) p ON p.track_id = ? || t.video_id
         WHERE t.user_id = ?
         ORDER BY p.played_at DESC
         LIMIT ?",
    )
    .bind(user_id)
    .bind(ID_PREFIX)
    .bind(user_id)
    .bind(limit as i64)
    .fetch_all(db)
    .await?;

    let mut tracks = Vec::with_capacity(rows.len());
    for (video_id, title, artist, album, duration_ms) in rows {
        let id = format!("{ID_PREFIX}{video_id}");
        let mut value = json!({
            "id": id,
            "parent": "",
            "isDir": false,
            "title": title,
            "album": album,
            "artist": artist,
            "coverArt": id,
            "duration": duration_ms / 1000,
            "suffix": "m4a",
            "contentType": "audio/mp4",
            "isVideo": false,
            "type": "music",
            "source": "ytm",
        });
        attach_local(db, &mut value, &title, &artist, duration_ms).await;
        tracks.push(value);
    }
    Ok(tracks)
}

fn song_json(song: &Song) -> Value {
    let id = format!("{ID_PREFIX}{}", song.video_id);
    json!({
        "id": id,
        "parent": "",
        "isDir": false,
        "title": song.title,
        "album": song.album,
        "artist": song.artist,
        "coverArt": id,
        "duration": song.duration_secs,
        "suffix": "m4a",
        "contentType": "audio/mp4",
        "isVideo": false,
        "type": "music",
        "source": "ytm",
    })
}

#[derive(Debug, Clone)]
pub struct TrackMeta {
    pub title: String,
    pub artist: String,
    pub album: String,
    pub duration_ms: i64,
    thumbnail: String,
    file_path: Option<String>,
}

pub async fn track_meta(db: &SqlitePool, user_id: &str, video_id: &str) -> Option<TrackMeta> {
    let row: Option<(String, String, String, i64, String, Option<String>)> = sqlx::query_as(
        "SELECT title, artist, album, duration_ms, thumbnail, file_path
         FROM ytm_tracks WHERE user_id = ? AND video_id = ?",
    )
    .bind(user_id)
    .bind(video_id)
    .fetch_optional(db)
    .await
    .ok()?;
    row.map(
        |(title, artist, album, duration_ms, thumbnail, file_path)| TrackMeta {
            title,
            artist,
            album,
            duration_ms,
            thumbnail,
            file_path,
        },
    )
}

// ---------------------------------------------------------------------------
// Covers
// ---------------------------------------------------------------------------

pub async fn serve_cover(
    state: &YtmState,
    db: &SqlitePool,
    user_id: &str,
    video_id: &str,
) -> Response {
    let Some(meta) = track_meta(db, user_id, video_id).await else {
        return StatusCode::NOT_FOUND.into_response();
    };
    let Ok(url) = reqwest::Url::parse(&meta.thumbnail) else {
        return StatusCode::NOT_FOUND.into_response();
    };
    // Only fetch image CDNs: the URL comes from YouTube's response, and this
    // keeps the server from being used to reach arbitrary hosts.
    let host_ok = url.scheme() == "https"
        && url.host_str().is_some_and(|host| {
            host.ends_with(".googleusercontent.com")
                || host.ends_with(".ytimg.com")
                || host == "i.ytimg.com"
        });
    if !host_ok {
        return StatusCode::NOT_FOUND.into_response();
    }

    match state.client.get(url).send().await {
        Ok(response) if response.status().is_success() => {
            let content_type = response
                .headers()
                .get(header::CONTENT_TYPE)
                .and_then(|value| value.to_str().ok())
                .unwrap_or("image/jpeg")
                .to_string();
            match response.bytes().await {
                Ok(bytes) => (
                    [
                        (header::CONTENT_TYPE, content_type),
                        (header::CACHE_CONTROL, "private, max-age=604800".to_string()),
                    ],
                    bytes,
                )
                    .into_response(),
                Err(_) => StatusCode::BAD_GATEWAY.into_response(),
            }
        }
        _ => StatusCode::BAD_GATEWAY.into_response(),
    }
}

// ---------------------------------------------------------------------------
// Streaming
// ---------------------------------------------------------------------------

fn user_dir(config: &Config, user_id: &str) -> PathBuf {
    Path::new(&config.ytm_cache_dir).join(user_id)
}

pub async fn serve_stream(
    state: &YtmState,
    db: &SqlitePool,
    config: &Config,
    user_id: &str,
    video_id: &str,
    headers: &HeaderMap,
) -> Result<Response, StatusCode> {
    if !config.ytm_enabled {
        return Err(StatusCode::NOT_FOUND);
    }
    // Unknown to this user means "not found", even if another user has it.
    let meta = track_meta(db, user_id, video_id)
        .await
        .ok_or(StatusCode::NOT_FOUND)?;

    sqlx::query("UPDATE ytm_tracks SET last_used_at = ? WHERE user_id = ? AND video_id = ?")
        .bind(chrono::Utc::now().timestamp())
        .bind(user_id)
        .bind(video_id)
        .execute(db)
        .await
        .ok();

    // Max quality: a YouTube track that also exists locally (usually FLAC) is
    // streamed from the library, not re-downloaded from YouTube.
    if let Some(local) = local_match(db, &meta.title, &meta.artist, meta.duration_ms).await {
        let path = Path::new(&local.path);
        if tokio::fs::try_exists(path).await.unwrap_or(false) {
            return crate::streaming::serve_file(path, &local.content_type, headers).await;
        }
    }

    if let Some(path) = meta.file_path.as_deref() {
        let path = Path::new(path);
        if tokio::fs::try_exists(path).await.unwrap_or(false) {
            let ext = path.extension().and_then(|ext| ext.to_str()).unwrap_or("");
            return crate::streaming::serve_file(path, content_type(ext), headers).await;
        }
    }

    let cookies = load_cookies(db, user_id)
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?
        .ok_or(StatusCode::FORBIDDEN)?;
    let saver = crate::auth::data_saver(db, user_id).await;
    let mut resolved = resolve(state, db, config, user_id, video_id, &cookies, saver)
        .await
        .map_err(|error| {
            tracing::warn!("YouTube Music resolve failed for {video_id}: {error}");
            StatusCode::BAD_GATEWAY
        })?;

    let mut response = proxy(state, &resolved, headers).await;
    // A cached URL dies long before its `expire` timestamp: googlevideo stops
    // serving bytes past the traffic its signature allows. One fresh resolve
    // fixes the track, and the broken entry does not poison the next play.
    if response.status() == StatusCode::BAD_GATEWAY {
        match refresh_resolved(state, db, config, user_id, video_id, &cookies, saver).await {
            Ok(fresh) => {
                resolved = fresh;
                response = proxy(state, &resolved, headers).await;
            }
            Err(error) => {
                tracing::warn!("YouTube Music re-resolve failed for {video_id}: {error}");
            }
        }
    }

    if config.ytm_cache_max_mb > 0 {
        spawn_download(state, db, config, user_id, video_id, &resolved).await;
    }
    Ok(response)
}

async fn resolve(
    state: &YtmState,
    db: &SqlitePool,
    config: &Config,
    user_id: &str,
    video_id: &str,
    cookies: &[Cookie],
    saver: bool,
) -> Result<Resolved> {
    let key = (user_id.to_string(), video_id.to_string(), saver);
    if let Some(found) = memory_cached(state, &key).await {
        return Ok(found);
    }

    let gate = {
        let mut inflight = state.inflight.lock().await;
        inflight
            .entry(key.clone())
            .or_insert_with(|| Arc::new(Mutex::new(())))
            .clone()
    };
    let _guard = gate.lock().await;

    // The winner of the race may have filled the cache while we waited.
    if let Some(found) = memory_cached(state, &key).await {
        return Ok(found);
    }
    if let Some(found) = db_cached(db, &key).await {
        state
            .resolved
            .lock()
            .await
            .insert(key.clone(), found.clone());
        return Ok(found);
    }

    let result = ytdlp_resolve(state, config, video_id, cookies, saver).await;
    state.inflight.lock().await.remove(&key);
    let resolved = result?;
    state
        .resolved
        .lock()
        .await
        .insert(key.clone(), resolved.clone());
    store_resolved(db, &key, &resolved).await;
    Ok(resolved)
}

async fn memory_cached(state: &YtmState, key: &TrackKey) -> Option<Resolved> {
    let found = state.resolved.lock().await.get(key).cloned()?;
    (found.at.elapsed() < RESOLVE_TTL).then_some(found)
}

/// A resolved URL survives a restart, so the first play after an upgrade (or
/// from another device) is as fast as a cached one.
async fn db_cached(db: &SqlitePool, key: &TrackKey) -> Option<Resolved> {
    let row: Option<(String, String, i64, i64, Option<i64>)> = sqlx::query_as(
        "SELECT resolved_url, resolved_ext, resolved_size, resolved_at, resolved_saver
         FROM ytm_tracks WHERE user_id = ? AND video_id = ?",
    )
    .bind(&key.0)
    .bind(&key.1)
    .fetch_optional(db)
    .await
    .ok()?;
    let (url, ext, size, at, saver) = row?;
    let age = chrono::Utc::now().timestamp() - at;
    if url.is_empty()
        || size <= 0
        || saver.unwrap_or(0) != i64::from(key.2)
        || !(0..RESOLVE_TTL.as_secs() as i64).contains(&age)
    {
        return None;
    }
    Some(Resolved {
        url,
        ext,
        size: size as u64,
        at: Instant::now(),
    })
}

async fn store_resolved(db: &SqlitePool, key: &TrackKey, resolved: &Resolved) {
    sqlx::query(
        "UPDATE ytm_tracks SET resolved_url = ?, resolved_ext = ?, resolved_size = ?, resolved_at = ?,
                resolved_saver = ?
         WHERE user_id = ? AND video_id = ?",
    )
    .bind(&resolved.url)
    .bind(&resolved.ext)
    .bind(resolved.size as i64)
    .bind(chrono::Utc::now().timestamp())
    .bind(i64::from(key.2))
    .bind(&key.0)
    .bind(&key.1)
    .execute(db)
    .await
    .ok();
}

/// Everything below `resolve` used to be its body; kept separate so the
/// cache bookkeeping above stays readable.
async fn ytdlp_resolve(
    state: &YtmState,
    config: &Config,
    video_id: &str,
    cookies: &[Cookie],
    saver: bool,
) -> Result<Resolved> {
    let cookie_file = write_cookie_file(cookies).await?;
    let first = run_ytdlp(config, video_id, Some(&cookie_file), saver).await;
    tokio::fs::remove_file(&cookie_file).await.ok();

    // Cookies из профиля могут протухнуть (SAPISID легко инвалидируется
    // сменой пароля или выходом из аккаунта). Тогда yt-dlp завершается с
    // ошибкой, хотя публичный трек прекрасно резолвится анонимно. Поэтому
    // вторая попытка — без cookies: пользователь получает звук, а не 502.
    let output = match first {
        Ok(output) if output.status.success() => output,
        Ok(output) => {
            let stderr = String::from_utf8_lossy(&output.stderr);
            let reason = stderr
                .trim()
                .lines()
                .next()
                .unwrap_or("exit != 0")
                .to_string();
            if cookies.is_empty() {
                return Err(anyhow!("yt-dlp failed: {}", stderr.trim()));
            }
            tracing::warn!(
                "YouTube Music: cookies профиля не сработали ({reason}); повторяю без cookies"
            );
            let retry = run_ytdlp(config, video_id, None, saver).await?;
            if !retry.status.success() {
                let stderr = String::from_utf8_lossy(&retry.stderr);
                return Err(anyhow!("yt-dlp failed без cookies: {}", stderr.trim()));
            }
            retry
        }
        Err(error) => {
            if cookies.is_empty() {
                return Err(error);
            }
            tracing::warn!(
                "YouTube Music: cookies профиля не сработали ({error}); повторяю без cookies"
            );
            let retry = run_ytdlp(config, video_id, None, saver).await?;
            if !retry.status.success() {
                let stderr = String::from_utf8_lossy(&retry.stderr);
                return Err(anyhow!("yt-dlp failed без cookies: {}", stderr.trim()));
            }
            retry
        }
    };

    #[derive(serde::Deserialize)]
    struct Info {
        url: String,
        ext: String,
        filesize: Option<u64>,
        filesize_approx: Option<u64>,
    }
    let info: Info = serde_json::from_slice(&output.stdout)?;
    let size = match info.filesize {
        Some(size) => size,
        // Approximate sizes break Content-Range; ask the CDN instead.
        None => probe_size(&state.client, &info.url)
            .await
            .or(info.filesize_approx)
            .ok_or_else(|| anyhow!("unknown stream size"))?,
    };

    Ok(Resolved {
        url: info.url,
        ext: info.ext,
        size,
        at: Instant::now(),
    })
}

async fn probe_size(client: &reqwest::Client, url: &str) -> Option<u64> {
    let response = client
        .get(url)
        .header(header::RANGE, "bytes=0-0")
        .send()
        .await
        .ok()?;
    let range = response
        .headers()
        .get(header::CONTENT_RANGE)?
        .to_str()
        .ok()?;
    range.rsplit_once('/')?.1.parse().ok()
}

/// yt-dlp reads cookies only from a file. It lives for one invocation and is
/// readable by the server user only.
/// Один запуск yt-dlp. `cookies` = `None` → анонимный резолв.
async fn run_ytdlp(
    config: &Config,
    video_id: &str,
    cookies: Option<&Path>,
    saver: bool,
) -> Result<std::process::Output> {
    let mut command = tokio::process::Command::new(&config.ytdlp_path);
    command.args([
        "--quiet",
        "--no-warnings",
        "--no-playlist",
        "--no-cache-dir",
        // Fail fast when the CDN is unreachable instead of hanging the player.
        "--socket-timeout",
        "15",
        "-f",
        // Saver mode: ~48 kbps Opus/m4a if YouTube has it, never above 64.
        if saver {
            "bestaudio[abr<=64]/bestaudio[ext=m4a]/bestaudio"
        } else {
            "bestaudio[ext=m4a]/bestaudio"
        },
        "-O",
        "%(.{url,ext,filesize,filesize_approx})j",
    ]);
    if let Some(path) = cookies {
        command.arg("--cookies").arg(path);
    }
    if let Some(proxy) = config
        .ytm_proxy
        .as_deref()
        .filter(|proxy| !proxy.trim().is_empty())
    {
        command.arg("--proxy").arg(proxy);
    }
    command.arg(format!("https://music.youtube.com/watch?v={video_id}"));
    command.kill_on_drop(true);

    tokio::time::timeout(YTDLP_TIMEOUT, command.output())
        .await
        .map_err(|_| anyhow!("yt-dlp timed out"))?
        .map_err(|error| anyhow!("cannot run {}: {error}", config.ytdlp_path))
}

async fn write_cookie_file(cookies: &[Cookie]) -> Result<PathBuf> {
    let path =
        std::env::temp_dir().join(format!("rustream-ytm-{}.txt", crate::auth::random_hex(12)));
    let mut options = tokio::fs::OpenOptions::new();
    options.write(true).create_new(true).mode(0o600);
    let mut file = options.open(&path).await?;
    file.write_all(cookies::to_netscape(cookies).as_bytes())
        .await?;
    file.flush().await?;
    Ok(path)
}

/// Drop a cached CDN URL and ask yt-dlp for a new one. Googlevideo signs each
/// URL for a limited amount of traffic, so an old entry starts answering 403
/// in the middle of a track.
async fn refresh_resolved(
    state: &YtmState,
    db: &SqlitePool,
    config: &Config,
    user_id: &str,
    video_id: &str,
    cookies: &[Cookie],
    saver: bool,
) -> Result<Resolved> {
    let key = (user_id.to_string(), video_id.to_string(), saver);
    state.resolved.lock().await.remove(&key);
    sqlx::query("UPDATE ytm_tracks SET resolved_url = NULL, resolved_at = NULL WHERE user_id = ? AND video_id = ?")
        .bind(user_id)
        .bind(video_id)
        .execute(db)
        .await
        .ok();

    let resolved = ytdlp_resolve(state, config, video_id, cookies, saver).await?;
    state
        .resolved
        .lock()
        .await
        .insert(key.clone(), resolved.clone());
    store_resolved(db, &key, &resolved).await;
    Ok(resolved)
}

/// Serve the requested byte range by passing a single upstream request through.
///
/// This used to fetch 1 MiB chunks, which broke behind the reverse proxy of the
/// deployment: the CDN answered the first range, and every follow-up request
/// hung until the client gave up — playback stopped after exactly one chunk.
async fn proxy(state: &YtmState, resolved: &Resolved, headers: &HeaderMap) -> Response {
    let size = resolved.size;
    let requested = headers
        .get(header::RANGE)
        .and_then(|value| value.to_str().ok())
        .map(|value| crate::streaming::parse_range(value, size));
    let (start, end, partial) = match requested {
        Some(Some((start, end))) => (start, end, true),
        Some(None) => {
            return Response::builder()
                .status(StatusCode::RANGE_NOT_SATISFIABLE)
                .header(header::CONTENT_RANGE, format!("bytes */{size}"))
                .body(Body::empty())
                .unwrap_or_else(|_| StatusCode::RANGE_NOT_SATISFIABLE.into_response());
        }
        None => (0, size.saturating_sub(1), false),
    };

    let response = match state
        .client
        .get(&resolved.url)
        .header(header::RANGE, format!("bytes={start}-{end}"))
        .send()
        .await
    {
        Ok(response) => response,
        Err(error) => {
            tracing::warn!("YouTube Music CDN request failed: {error}");
            return StatusCode::BAD_GATEWAY.into_response();
        }
    };
    let status = response.status();
    if status != StatusCode::PARTIAL_CONTENT && status != StatusCode::OK {
        tracing::warn!("YouTube Music CDN answered {status} for bytes={start}-{end}");
        return StatusCode::BAD_GATEWAY.into_response();
    }
    // A range was asked for but the CDN sent the whole file: its length would
    // not match the Content-Range we are about to advertise.
    if partial && status == StatusCode::OK {
        tracing::warn!("YouTube Music CDN ignored the range request");
        return StatusCode::BAD_GATEWAY.into_response();
    }

    let stream = response.bytes_stream();
    let mut builder = Response::builder()
        .header(header::CONTENT_TYPE, content_type(&resolved.ext))
        .header(
            header::CONTENT_LENGTH,
            if partial { end - start + 1 } else { size },
        )
        .header(header::ACCEPT_RANGES, "bytes")
        .header(header::CACHE_CONTROL, "no-cache");
    builder = if partial {
        builder
            .status(StatusCode::PARTIAL_CONTENT)
            .header(header::CONTENT_RANGE, format!("bytes {start}-{end}/{size}"))
    } else {
        builder.status(StatusCode::OK)
    };
    builder
        .body(Body::from_stream(stream))
        .unwrap_or_else(|_| StatusCode::INTERNAL_SERVER_ERROR.into_response())
}

async fn spawn_download(
    state: &YtmState,
    db: &SqlitePool,
    config: &Config,
    user_id: &str,
    video_id: &str,
    resolved: &Resolved,
) {
    let key = (user_id.to_string(), video_id.to_string());
    if !state.downloading.lock().await.insert(key.clone()) {
        return;
    }
    let dir = user_dir(config, user_id);
    let target = dir.join(format!("{video_id}.{}", resolved.ext));
    let client = state.client.clone();
    let resolved = resolved.clone();
    let db = db.clone();
    let max_bytes = config.ytm_cache_max_mb * 1024 * 1024;
    let cache_dir = PathBuf::from(&config.ytm_cache_dir);
    let downloading = state.downloading.clone();

    tokio::spawn(async move {
        let result = download(&client, &resolved, &dir, &target).await;
        match result {
            Ok(written) => {
                let path = target.to_string_lossy().to_string();
                let saved = sqlx::query(
                    "UPDATE ytm_tracks SET file_path = ?, file_size = ? WHERE user_id = ? AND video_id = ?",
                )
                .bind(&path)
                .bind(written as i64)
                .bind(&key.0)
                .bind(&key.1)
                .execute(&db)
                .await;
                if let Err(error) = saved {
                    tracing::warn!("Cannot record cached YouTube Music file: {error}");
                }
                if let Err(error) = evict(&db, &cache_dir, max_bytes).await {
                    tracing::warn!("YouTube Music cache eviction failed: {error}");
                }
            }
            Err(error) => tracing::warn!("YouTube Music download of {} failed: {error}", key.1),
        }
        downloading.lock().await.remove(&key);
    });
}

async fn download(
    client: &reqwest::Client,
    resolved: &Resolved,
    dir: &Path,
    target: &Path,
) -> Result<u64> {
    tokio::fs::create_dir_all(dir).await?;
    let partial = target.with_extension("part");
    let mut file = tokio::fs::File::create(&partial).await?;

    // One request for the whole file, written as it arrives: chunked range
    // requests stall behind the deployment's proxy after the first chunk.
    let mut response = client.get(&resolved.url).send().await?;
    if !response.status().is_success() {
        tokio::fs::remove_file(&partial).await.ok();
        return Err(anyhow!("CDN returned {}", response.status()));
    }
    let mut position = 0u64;
    while let Some(bytes) = response.chunk().await? {
        file.write_all(&bytes).await?;
        position += bytes.len() as u64;
    }
    file.flush().await?;
    drop(file);
    if position != resolved.size {
        tokio::fs::remove_file(&partial).await.ok();
        return Err(anyhow!(
            "short download: {position} of {} bytes",
            resolved.size
        ));
    }
    tokio::fs::rename(&partial, target).await?;
    Ok(position)
}

/// Keep the cache under `max_bytes`, removing the least recently played files.
async fn evict(db: &SqlitePool, cache_dir: &Path, max_bytes: u64) -> Result<()> {
    let rows: Vec<(String, String, String, i64)> = sqlx::query_as(
        "SELECT user_id, video_id, file_path, file_size FROM ytm_tracks
         WHERE file_path IS NOT NULL ORDER BY last_used_at DESC",
    )
    .fetch_all(db)
    .await?;

    let mut total: u64 = 0;
    for (user_id, video_id, path, size) in rows {
        total += size.max(0) as u64;
        if total <= max_bytes {
            continue;
        }
        let path = PathBuf::from(path);
        // Never delete outside the cache directory, whatever the DB says.
        if path.starts_with(cache_dir) {
            tokio::fs::remove_file(&path).await.ok();
        }
        sqlx::query("UPDATE ytm_tracks SET file_path = NULL, file_size = NULL WHERE user_id = ? AND video_id = ?")
            .bind(&user_id)
            .bind(&video_id)
            .execute(db)
            .await?;
    }
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    async fn seed_local_track(db: &SqlitePool, title: &str, artist: &str, duration_ms: i64) {
        let now = chrono::Utc::now().timestamp();
        sqlx::query(
            "INSERT OR IGNORE INTO artists (artist_id, name, created_at) VALUES ('a1', ?, ?)",
        )
        .bind(artist)
        .bind(now)
        .execute(db)
        .await
        .unwrap();
        sqlx::query("INSERT OR IGNORE INTO albums (album_id, artist_id, title, created_at) VALUES ('al1', 'a1', ?, ?)")
            .bind(title)
            .bind(now)
            .execute(db)
            .await
            .unwrap();
        sqlx::query(
            "INSERT INTO tracks (track_id, album_id, artist_id, title, duration_ms, file_path,
                file_size, suffix, content_type, bitrate, created_at)
             VALUES ('t1', 'al1', 'a1', ?, ?, '/music/a.flac', 1, 'flac', 'audio/flac', 1411, ?)",
        )
        .bind(title)
        .bind(duration_ms)
        .bind(now)
        .execute(db)
        .await
        .unwrap();
    }

    #[tokio::test]
    async fn matches_local_flac_for_a_youtube_track() {
        let db = crate::db::test_pool().await;
        seed_local_track(&db, "The Past", "Chikoi The Maid", 214_000).await;

        // YouTube titles carry bracketed noise and different casing.
        let found = local_match(&db, "The Past (Official Video)", "chikoi the maid", 213_000)
            .await
            .expect("local match");
        assert_eq!(found.suffix, "flac");
        assert_eq!(found.path, "/music/a.flac");

        // Same title, but a different song (duration far off) must not match.
        assert!(local_match(&db, "The Past", "Chikoi The Maid", 60_000)
            .await
            .is_none());
    }

    #[tokio::test]
    async fn matches_cyrillic_titles_despite_sqlite_case_folding() {
        let db = crate::db::test_pool().await;
        seed_local_track(&db, "Тёмная ночь", "Кино", 200_000).await;

        // SQLite's lower()/LIKE cannot fold non-ASCII case, so this only works
        // because the duration window brings the row in.
        let found = local_match(&db, "ТЁМНАЯ НОЧЬ", "кино", 201_000)
            .await
            .expect("local match");
        assert_eq!(found.suffix, "flac");
    }

    /// End-to-end check of the parts that touch the real CDN. Needs network
    /// access and yt-dlp: `cargo test -- --ignored`.
    #[tokio::test]
    #[ignore = "needs network and yt-dlp"]
    async fn resolves_proxies_and_caches_real_audio() {
        let config = Config {
            ytdlp_path: "yt-dlp".into(),
            ..Config::default()
        };
        let state = YtmState::new(None).unwrap();
        let db = crate::db::test_pool().await;
        let resolved = resolve(&state, &db, &config, "u", "kJQP7kiw5Fk", &[], false)
            .await
            .unwrap();
        assert!(resolved.size > 100_000, "size {}", resolved.size);

        let mut headers = HeaderMap::new();
        headers.insert(header::RANGE, "bytes=0-1023".parse().unwrap());
        let response = proxy(&state, &resolved, &headers).await;
        assert_eq!(response.status(), StatusCode::PARTIAL_CONTENT);
        assert_eq!(
            response
                .headers()
                .get(header::CONTENT_RANGE)
                .and_then(|value| value.to_str().ok()),
            Some(format!("bytes 0-1023/{}", resolved.size).as_str())
        );
        let head = axum::body::to_bytes(response.into_body(), 8192)
            .await
            .unwrap();
        assert_eq!(head.len(), 1024);

        // A range far past the first chunk, to prove range passthrough works.
        let start = resolved.size - 2048;
        headers.insert(
            header::RANGE,
            format!("bytes={start}-{}", resolved.size - 1)
                .parse()
                .unwrap(),
        );
        let response = proxy(&state, &resolved, &headers).await;
        let tail = axum::body::to_bytes(response.into_body(), 8192)
            .await
            .unwrap();
        assert_eq!(tail.len(), 2048);

        let dir =
            std::env::temp_dir().join(format!("rustream-test-{}", crate::auth::random_hex(6)));
        let target = dir.join(format!("cache.{}", resolved.ext));
        let written = download(&state.client, &resolved, &dir, &target)
            .await
            .unwrap();
        assert_eq!(written, resolved.size);
        assert_eq!(
            tokio::fs::metadata(&target).await.unwrap().len(),
            resolved.size
        );
        tokio::fs::remove_dir_all(&dir).await.ok();
    }

    #[test]
    fn video_id_validation() {
        assert_eq!(video_id("ytm-kJQP7kiw5Fk"), Some("kJQP7kiw5Fk"));
        assert_eq!(video_id("ytm-../../etc/x"), None);
        assert_eq!(video_id("ytm-short"), None);
        assert_eq!(video_id("kJQP7kiw5Fk"), None);
        assert_eq!(video_id("ytm-abc.def/ghi"), None);
    }
}

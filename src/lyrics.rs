use serde::{Deserialize, Serialize};
use std::path::{Path, PathBuf};
use std::time::Duration;

/// How long a "no lyrics anywhere" answer is trusted before asking again.
// A miss is retried sooner than a hit: the provider gains records over time and
// our own matcher gets better, so an hour-long "no lyrics" is too sticky.
const NEGATIVE_TTL_SECS: i64 = 900;
/// Upper bound for the whole lookup, so the panel never waits for a minute.
const LOOKUP_TIMEOUT_SECS: u64 = 8;
/// lyrics.ovh answers slowly and is unreachable from some networks: it gets a
/// short leash.
const OVH_TIMEOUT_SECS: u64 = 3;
/// Client identification: LRCLIB gives named clients a higher rate limit.
const LRCLIB_USER_AGENT: &str = "rustream/0.1 (+https://github.com/sanchoz2022/rustream)";
/// LRCLIB asks clients to keep requests apart: this is the pause between them.
const LRCLIB_MIN_GAP_MS: u64 = 350;
/// Upper bound for one LRCLIB request.
const LRCLIB_TIMEOUT_SECS: u64 = 8;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct SyncedLine {
    pub time_ms: i64,
    pub text: String,
    /// Enhanced LRC word timings (`<mm:ss.xx>word`). Empty for plain LRC.
    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub words: Vec<SyncedWord>,
}

#[derive(Debug, Serialize, Deserialize, Clone, PartialEq)]
pub struct SyncedWord {
    pub start_ms: i64,
    pub end_ms: i64,
    pub text: String,
}

#[derive(Debug, Serialize, Clone)]
pub struct Lyrics {
    pub plain: String,
    pub synced: Vec<SyncedLine>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub source: Option<String>,
    /// The text was written next to the audio file.
    #[serde(default, skip_serializing_if = "std::ops::Not::not")]
    pub saved: bool,
}

/// Look for a sidecar `.lrc` or `.txt` file next to the audio file.
pub fn load(path: &Path) -> Option<Lyrics> {
    let stem = path.file_stem()?.to_string_lossy().to_string();
    let dir = path.parent()?;

    for ext in ["lrc", "LRC", "txt", "TXT"] {
        let candidate = dir.join(format!("{}.{}", stem, ext));
        if let Ok(content) = std::fs::read_to_string(&candidate) {
            if content.trim().is_empty() {
                continue;
            }
            let mut parsed = parse(&content);
            parsed.source = Some("local".to_string());
            return Some(parsed);
        }
    }

    None
}

/// Everything needed to find the text of one track.
pub struct Lookup<'a> {
    pub track_id: &'a str,
    /// Path of the audio file, when the track has one in the library.
    pub path: &'a Path,
    pub artist: &'a str,
    pub title: &'a str,
    pub duration_sec: i64,
    /// Look the text up on the internet at all.
    pub online: bool,
    /// Skip the sidecar and the cache: the user asked to search again.
    pub refresh: bool,
    /// Where found lyrics are kept when the music library is read-only.
    pub store: Option<&'a Path>,
    /// Write the text next to the audio file. Only for real library files: the
    /// cached YouTube downloads are evicted, and the text must outlive them.
    pub sidecar: bool,
    /// Optional proxy for the lyric services. LRCLIB counts requests per IP
    /// address, so a deployment behind a shared address needs a proxy.
    pub proxy: Option<&'a str>,
}

/// Where found lyrics live next to the database. The music disk of the
/// deployment is mounted read-only, so the text goes to the server's own
/// storage instead of the audio file's folder.
pub fn store_dir(db_path: &str) -> PathBuf {
    Path::new(db_path)
        .parent()
        .unwrap_or_else(|| Path::new("."))
        .join("lyrics")
}

/// Path of the stored text for one track: a readable name plus a hash of the
/// track id, so two tracks with the same title never collide.
fn store_file(store: &Path, track_id: &str, name: &str) -> PathBuf {
    let mut clean: String = name
        .chars()
        .map(|ch| {
            if ch == '/' || ch == '\\' || ch == ':' {
                '_'
            } else {
                ch
            }
        })
        .collect();
    clean.truncate(60);
    store.join(format!("{clean}-{:016x}.lrc", fnv1a(track_id)))
}

/// FNV-1a: a small stable hash, so the same track always maps to the same name.
fn fnv1a(value: &str) -> u64 {
    let mut hash: u64 = 0xcbf2_9ce4_8422_2325;
    for byte in value.as_bytes() {
        hash ^= u64::from(*byte);
        hash = hash.wrapping_mul(0x0000_0100_0000_01b3);
    }
    hash
}

/// Read the text saved for this track in the server-side store.
fn load_from_store(store: Option<&Path>, track_id: &str, name: &str) -> Option<Lyrics> {
    let store = store?;
    let content = std::fs::read_to_string(store_file(store, track_id, name)).ok()?;
    if content.trim().is_empty() {
        return None;
    }
    let mut parsed = parse(&content);
    parsed.source = Some("saved".to_string());
    Some(parsed)
}

/// The result of a lyrics lookup.
pub enum Outcome {
    /// The text was found.
    Found(Lyrics),
    /// Nobody has the text for this track.
    NotFound,
    /// The services could not answer. The text may still exist, so this must
    /// not be remembered as "no lyrics".
    Unavailable,
}

/// Resolve lyrics for a track: local sidecar, cache, then LRCLIB (open API).
pub async fn resolve(db: &sqlx::SqlitePool, lookup: &Lookup<'_>) -> Outcome {
    let Lookup {
        track_id,
        path,
        title,
        online,
        refresh,
        store,
        ..
    } = *lookup;

    // The store keeps the text under the track id, so a track without a file
    // of its own (a YouTube track) still gets its own name.
    let name = path
        .file_stem()
        .map(|stem| stem.to_string_lossy().to_string())
        .filter(|stem| !stem.is_empty())
        .unwrap_or_else(|| title.to_string());

    if !refresh {
        if let Some(mut lyrics) = load(path) {
            if lyrics.source.is_none() {
                lyrics.source = Some("local".to_string());
            }
            return Outcome::Found(lyrics);
        }
        if let Some(lyrics) = load_from_store(store, track_id, &name) {
            return Outcome::Found(lyrics);
        }
    }

    if refresh {
        return fetch_and_store(db, lookup).await;
    }

    if let Ok(Some((plain, synced, source, fetched_at))) =
        sqlx::query_as::<_, (Option<String>, Option<String>, String, i64)>(
            "SELECT plain, synced, source, fetched_at FROM lyrics_cache WHERE track_id = ?",
        )
        .bind(track_id)
        .fetch_optional(db)
        .await
    {
        let synced_lines: Vec<SyncedLine> = synced
            .and_then(|json| serde_json::from_str(&json).ok())
            .unwrap_or_default();
        if source == "none" {
            // Negative cache: a miss is remembered briefly so opening the panel
            // does not wait on the network again. "Найти заново" drops the row.
            let age = chrono::Utc::now().timestamp() - fetched_at;
            if age < NEGATIVE_TTL_SECS {
                return Outcome::NotFound;
            }
        } else if plain.is_some() || !synced_lines.is_empty() {
            // Rows cached before word-level support have no `words`; derive them
            // here instead of forcing a re-fetch from the network.
            let mut synced_lines = synced_lines;
            finalize_words(&mut synced_lines);
            return Outcome::Found(Lyrics {
                plain: plain.unwrap_or_default(),
                synced: synced_lines,
                source: Some(source),
                saved: false,
            });
        }
    }

    if !online {
        return Outcome::NotFound;
    }

    fetch_and_store(db, lookup).await
}

/// Ask the lyric services, remember the answer and put it on disk.
///
/// A miss is cached as well, so the panel does not hammer the network. A
/// service failure is not cached: the text may appear later.
async fn fetch_and_store(db: &sqlx::SqlitePool, lookup: &Lookup<'_>) -> Outcome {
    let Lookup {
        track_id,
        path,
        artist,
        title,
        duration_sec,
        online,
        store,
        sidecar,
        proxy,
        ..
    } = *lookup;
    if !online {
        return Outcome::NotFound;
    }

    let name = path
        .file_stem()
        .map(|stem| stem.to_string_lossy().to_string())
        .filter(|stem| !stem.is_empty())
        .unwrap_or_else(|| title.to_string());

    let answer = match tokio::time::timeout(
        Duration::from_secs(LOOKUP_TIMEOUT_SECS),
        fetch_lrclib(artist, title, duration_sec, proxy),
    )
    .await
    {
        Ok(ProviderAnswer::Found(lyrics)) => ProviderAnswer::Found(lyrics),
        Ok(ProviderAnswer::NotFound) => {
            // LRCLIB knows the word timings, lyrics.ovh only the plain text:
            // it is asked when LRCLIB has nothing, and it is slow, so it gets
            // a short leash. Its silence does not change the answer.
            match tokio::time::timeout(
                Duration::from_secs(OVH_TIMEOUT_SECS),
                fetch_lyrics_ovh(artist, title, proxy),
            )
            .await
            {
                Ok(ProviderAnswer::Found(lyrics)) => ProviderAnswer::Found(lyrics),
                Ok(ProviderAnswer::NotFound) | Ok(ProviderAnswer::Unavailable) | Err(_) => {
                    ProviderAnswer::NotFound
                }
            }
        }
        Ok(ProviderAnswer::Unavailable) => {
            // The main service is rate limited or down: the spare one may
            // still have the plain text, but its silence proves nothing.
            match tokio::time::timeout(
                Duration::from_secs(OVH_TIMEOUT_SECS),
                fetch_lyrics_ovh(artist, title, proxy),
            )
            .await
            {
                Ok(ProviderAnswer::Found(lyrics)) => ProviderAnswer::Found(lyrics),
                Ok(ProviderAnswer::NotFound) | Ok(ProviderAnswer::Unavailable) | Err(_) => {
                    ProviderAnswer::Unavailable
                }
            }
        }
        Err(_) => ProviderAnswer::Unavailable,
    };

    let ProviderAnswer::Found(mut lyrics) = answer else {
        let ProviderAnswer::NotFound = answer else {
            // The service did not answer: do not remember this as "no text".
            tracing::debug!("Lyric services are unavailable for {}", track_id);
            return Outcome::Unavailable;
        };
        let _ = sqlx::query(
            "INSERT OR REPLACE INTO lyrics_cache (track_id, plain, synced, source, fetched_at)
             VALUES (?, NULL, NULL, 'none', ?)",
        )
        .bind(track_id)
        .bind(chrono::Utc::now().timestamp())
        .execute(db)
        .await;
        return Outcome::NotFound;
    };

    let synced_json = serde_json::to_string(&lyrics.synced).ok();

    let _ = sqlx::query(
        "INSERT OR REPLACE INTO lyrics_cache (track_id, plain, synced, source, fetched_at)
         VALUES (?, ?, ?, ?, ?)",
    )
    .bind(track_id)
    .bind(if lyrics.plain.is_empty() {
        None
    } else {
        Some(lyrics.plain.clone())
    })
    .bind(synced_json)
    .bind(
        lyrics
            .source
            .clone()
            .unwrap_or_else(|| "lrclib".to_string()),
    )
    .bind(chrono::Utc::now().timestamp())
    .execute(db)
    .await;

    // Found lyrics live on disk from now on: the panel opens instantly next
    // time and keeps working when the lyric service is down. Next to the audio
    // file when the library is writable, in the server's own store otherwise.
    if sidecar && path.is_file() {
        lyrics.saved = save_sidecar(path, &lyrics).await;
    }
    if !lyrics.saved {
        if let Some(store) = store {
            lyrics.saved = save_to_store(store, track_id, &name, &lyrics).await;
        }
    }

    Outcome::Found(lyrics)
}

/// Keep the text in the server-side store: the music disk of the deployment is
/// mounted read-only, so there is no room next to the audio file.
async fn save_to_store(store: &Path, track_id: &str, name: &str, lyrics: &Lyrics) -> bool {
    let content = to_lrc(lyrics);
    if content.trim().is_empty() {
        return false;
    }
    if tokio::fs::create_dir_all(store).await.is_err() {
        tracing::debug!("Cannot create the lyrics store {}", store.display());
        return false;
    }
    let target = store_file(store, track_id, name);
    let temp = store.join(format!(".{}.tmp", fnv1a(track_id)));
    if tokio::fs::write(&temp, content).await.is_ok()
        && tokio::fs::rename(&temp, &target).await.is_ok()
    {
        tracing::info!("Saved lyrics to {}", target.display());
        true
    } else {
        let _ = tokio::fs::remove_file(&temp).await;
        tracing::debug!("Cannot write lyrics to {}", target.display());
        false
    }
}

/// Write the lyrics next to the audio file as an enhanced LRC, so the word
/// timings survive a restart. Best effort: a read-only library is not an error.
async fn save_sidecar(path: &Path, lyrics: &Lyrics) -> bool {
    let Some(stem) = path.file_stem() else {
        return false;
    };
    let Some(dir) = path.parent() else {
        return false;
    };
    let content = to_lrc(lyrics);
    if content.trim().is_empty() {
        return false;
    }
    let stem = stem.to_string_lossy().to_string();
    let target = dir.join(format!("{stem}.lrc"));
    let temp = dir.join(format!(".{stem}.lrc.tmp"));
    if tokio::fs::write(&temp, content).await.is_ok()
        && tokio::fs::rename(&temp, &target).await.is_ok()
    {
        tracing::info!("Saved lyrics to {}", target.display());
        true
    } else {
        let _ = tokio::fs::remove_file(&temp).await;
        tracing::debug!("Cannot write lyrics next to {}", target.display());
        false
    }
}

/// Serialize lyrics back to enhanced LRC: line timestamps plus per-word
/// timestamps, so the karaoke highlight is restored from the file.
fn to_lrc(lyrics: &Lyrics) -> String {
    let mut out = String::new();
    for line in &lyrics.synced {
        out.push('[');
        out.push_str(&format_timestamp(line.time_ms));
        out.push(']');
        if line.words.is_empty() {
            out.push_str(&line.text);
        } else {
            for word in &line.words {
                out.push('<');
                out.push_str(&format_timestamp(word.start_ms));
                out.push('>');
                out.push_str(&word.text);
                out.push(' ');
            }
        }
        out.push('\n');
    }
    if out.trim().is_empty() {
        out.push_str(&lyrics.plain);
    }
    out
}

/// `mm:ss.xx` — the format both the parser and every LRC player expect.
fn format_timestamp(ms: i64) -> String {
    let total = ms.max(0) as f64 / 1000.0;
    let minutes = (total / 60.0).floor() as u32;
    let seconds = total - minutes as f64 * 60.0;
    format!("{minutes:02}:{seconds:05.2}")
}

#[derive(Deserialize)]
struct LrclibItem {
    #[serde(rename = "plainLyrics")]
    plain_lyrics: Option<String>,
    #[serde(rename = "syncedLyrics")]
    synced_lyrics: Option<String>,
    #[serde(default)]
    duration: Option<f64>,
}

/// What a lyric provider answered.
#[derive(Debug)]
enum ProviderAnswer {
    /// The provider has the text for the track.
    Found(Lyrics),
    /// The provider answered and knows nothing about this track.
    NotFound,
    /// The provider failed: rate limit, overload or network trouble. The text
    /// may well exist, so this answer must not be cached as "no lyrics".
    Unavailable,
}

/// Why an LRCLIB request did not produce a list of records.
#[derive(Debug)]
enum LrclibError {
    /// Too many requests: the answer says how long to wait.
    RateLimited(Option<Duration>),
    /// The service is busy and asks for a retry.
    Overloaded,
    /// The request itself failed.
    Transport,
}

/// Ask LRCLIB for the text of one track.
async fn fetch_lrclib(
    artist: &str,
    title: &str,
    duration_sec: i64,
    proxy: Option<&str>,
) -> ProviderAnswer {
    if artist.trim().is_empty() || title.trim().is_empty() {
        return ProviderAnswer::NotFound;
    }

    // The "get" endpoint answers with a single record and needs the duration
    // to match: it is fast and cheap, so it goes first.
    if duration_sec > 0 {
        let mut attempt = 0;
        loop {
            match lrclib_get(artist, title, duration_sec, proxy).await {
                Ok(Some(item)) if !is_junk_record(&item) => {
                    return lyrics_from_lrclib(std::slice::from_ref(&item), duration_sec)
                        .map(ProviderAnswer::Found)
                        .unwrap_or(ProviderAnswer::NotFound);
                }
                // A test record came back: the search below finds the real one.
                Ok(Some(_)) => break,
                Ok(None) => break,
                Err(LrclibError::RateLimited(retry_after)) => {
                    if attempt == 1 {
                        tracing::debug!("LRCLIB rate limit, no answer for this track");
                        return ProviderAnswer::Unavailable;
                    }
                    let wait = retry_after
                        .unwrap_or(Duration::from_secs(2))
                        .clamp(Duration::from_millis(500), Duration::from_secs(5));
                    tracing::debug!("LRCLIB rate limit, waiting {:?}", wait);
                    tokio::time::sleep(wait).await;
                    attempt += 1;
                }
                // The endpoint failed: the search below may still work.
                Err(error) => {
                    tracing::debug!("LRCLIB get failed: {:?}", error);
                    break;
                }
            }
        }
    }

    // Structured search: it matches the title and the artist exactly.
    match lrclib_search(
        &[("artist_name", artist), ("track_name", title)],
        duration_sec,
        None,
        proxy,
    )
    .await
    {
        ProviderAnswer::Found(lyrics) => return ProviderAnswer::Found(lyrics),
        ProviderAnswer::Unavailable => return ProviderAnswer::Unavailable,
        ProviderAnswer::NotFound => {}
    }

    // Artist names disagree between YouTube and lyric databases ("Б.А.У." vs
    // "B.A.U."), so fall back to a free-text query and let the duration pick.
    let query = format!("{title} {artist}");
    match lrclib_search(&[("q", query.as_str())], duration_sec, None, proxy).await {
        ProviderAnswer::Found(lyrics) => return ProviderAnswer::Found(lyrics),
        ProviderAnswer::Unavailable => return ProviderAnswer::Unavailable,
        ProviderAnswer::NotFound => {}
    }

    // The artist tag may be a short form LRCLIB never sees ("Б.А.У." against
    // "Бездна Анального Угнетения"), which kills every artist-aware query.
    // Search by title alone and keep only records close to this track's length.
    lrclib_search(&[("q", title)], duration_sec, Some(20), proxy).await
}
/// The "get" endpoint: one record for an exact track, nothing for a miss.
async fn lrclib_get(
    artist: &str,
    title: &str,
    duration_sec: i64,
    proxy: Option<&str>,
) -> Result<Option<LrclibItem>, LrclibError> {
    let Ok(url) = reqwest::Url::parse_with_params(
        "https://lrclib.net/api/get",
        &[
            ("artist_name", artist),
            ("track_name", title),
            ("duration", &duration_sec.to_string()),
        ],
    ) else {
        return Err(LrclibError::Transport);
    };

    throttle_lrclib().await;
    let response = match lrclib_client(proxy).get(url).send().await {
        Ok(response) => response,
        Err(error) => {
            tracing::debug!("LRCLIB get failed: {}", error);
            return Err(LrclibError::Transport);
        }
    };

    let status = response.status();
    if status == reqwest::StatusCode::NOT_FOUND {
        return Ok(None);
    }
    if status == reqwest::StatusCode::TOO_MANY_REQUESTS {
        let retry_after = response
            .headers()
            .get(reqwest::header::RETRY_AFTER)
            .and_then(|value| value.to_str().ok())
            .and_then(|value| value.trim().parse::<u64>().ok())
            .map(Duration::from_secs);
        return Err(LrclibError::RateLimited(retry_after));
    }
    if status == reqwest::StatusCode::SERVICE_UNAVAILABLE {
        return Err(LrclibError::Overloaded);
    }
    if !status.is_success() {
        return Err(LrclibError::Transport);
    }

    let body = match response.bytes().await {
        Ok(body) => body,
        Err(_) => return Err(LrclibError::Transport),
    };
    match serde_json::from_slice::<LrclibItem>(&body) {
        Ok(item) => Ok(Some(item)),
        Err(error) => {
            tracing::debug!("LRCLIB get answer is not a record: {}", error);
            Err(LrclibError::Transport)
        }
    }
}

/// One search request, with a retry for the transient failures.
async fn lrclib_search(
    params: &[(&str, &str)],
    duration_sec: i64,
    tolerance: Option<i64>,
    proxy: Option<&str>,
) -> ProviderAnswer {
    let Ok(url) = reqwest::Url::parse_with_params("https://lrclib.net/api/search", params) else {
        return ProviderAnswer::Unavailable;
    };

    for attempt in 0..2 {
        throttle_lrclib().await;
        match lrclib_request(&url, proxy).await {
            Ok(Some(mut items)) => {
                // A loose query (title only) matches other songs with the same
                // name; the length keeps the record that is actually ours.
                if let (Some(tolerance), true) = (tolerance, duration_sec > 0) {
                    items.retain(|item| {
                        item.duration
                            .map(|d| (d - duration_sec as f64).abs() <= tolerance as f64)
                            .unwrap_or(false)
                    });
                }
                if items.is_empty() {
                    return ProviderAnswer::NotFound;
                }
                return match lyrics_from_lrclib(&items, duration_sec) {
                    Some(lyrics) => ProviderAnswer::Found(lyrics),
                    None => ProviderAnswer::NotFound,
                };
            }
            // The service knows the endpoint but has no record for this query.
            Ok(None) => return ProviderAnswer::NotFound,
            Err(LrclibError::RateLimited(retry_after)) => {
                if attempt == 1 {
                    return ProviderAnswer::Unavailable;
                }
                let wait = retry_after
                    .unwrap_or(Duration::from_secs(2))
                    .clamp(Duration::from_millis(500), Duration::from_secs(5));
                tokio::time::sleep(wait).await;
            }
            Err(LrclibError::Overloaded) => {
                if attempt == 1 {
                    return ProviderAnswer::Unavailable;
                }
                tokio::time::sleep(Duration::from_millis(800)).await;
            }
            Err(LrclibError::Transport) => return ProviderAnswer::Unavailable,
        }
    }

    ProviderAnswer::Unavailable
}

/// Keep at least `LRCLIB_MIN_GAP_MS` between two requests: the service asks
/// for a pause and answers 429 when clients hammer it.
async fn throttle_lrclib() {
    let wait = {
        let mut guard = lrclib_last_request()
            .lock()
            .unwrap_or_else(|error| error.into_inner());
        let now = std::time::Instant::now();
        let earliest = guard
            .map(|last| last + Duration::from_millis(LRCLIB_MIN_GAP_MS))
            .unwrap_or(now);
        // Reserve the slot, so parallel lookups queue up instead of racing.
        *guard = Some(earliest.max(now));
        earliest.saturating_duration_since(now)
    };
    if !wait.is_zero() {
        tokio::time::sleep(wait).await;
    }
}

fn lrclib_last_request() -> &'static std::sync::Mutex<Option<std::time::Instant>> {
    static LAST: std::sync::Mutex<Option<std::time::Instant>> = std::sync::Mutex::new(None);
    &LAST
}

/// One client per proxy: building a client is cheap, but reusing the pooled
/// connections is not.
fn lrclib_client(proxy: Option<&str>) -> reqwest::Client {
    let mut builder = reqwest::Client::builder()
        .user_agent(LRCLIB_USER_AGENT)
        .timeout(Duration::from_secs(LRCLIB_TIMEOUT_SECS))
        .connect_timeout(Duration::from_secs(5));
    if let Some(proxy) = proxy.map(str::trim).filter(|proxy| !proxy.is_empty()) {
        match reqwest::Proxy::all(proxy) {
            Ok(proxy) => builder = builder.proxy(proxy),
            Err(error) => tracing::warn!("Bad lyrics proxy {proxy}: {error}"),
        }
    }
    builder.build().unwrap_or_default()
}

fn lyrics_from_lrclib(items: &[LrclibItem], duration_sec: i64) -> Option<Lyrics> {
    // Records are ranked by how close their duration is to the track and by
    // having word-level timings; test entries lose.
    let mut ranked: Vec<&LrclibItem> = items.iter().collect();
    ranked.sort_by_key(|item| {
        let diff = item
            .duration
            .map(|d| (d - duration_sec as f64).abs() as i64)
            .unwrap_or(999);
        (diff, item.synced_lyrics.is_none(), is_junk_record(item))
    });

    for item in ranked {
        // Somebody uploaded a test entry for this track: it is not a lyric.
        if is_junk_record(item) {
            continue;
        }

        let synced = item
            .synced_lyrics
            .as_deref()
            .map(parse)
            .map(|parsed| parsed.synced)
            .unwrap_or_default();
        let plain = item.plain_lyrics.clone().unwrap_or_default();

        if plain.trim().is_empty() && synced.is_empty() {
            continue;
        }

        return Some(Lyrics {
            plain,
            synced,
            source: Some("lrclib".to_string()),
            saved: false,
        });
    }

    None
}

/// A record with a couple of words and no timings is a test entry, not a song.
fn is_junk_record(item: &LrclibItem) -> bool {
    let plain_len = item
        .plain_lyrics
        .as_deref()
        .map(|text| text.trim().chars().count())
        .unwrap_or(0);
    let synced_lines = item
        .synced_lyrics
        .as_deref()
        .map(|text| text.trim().lines().count())
        .unwrap_or(0);
    plain_len < 20 && synced_lines <= 1
}

/// One search request. `Ok(None)` means "no record", `Err` means the request
/// itself did not work.
async fn lrclib_request(
    url: &reqwest::Url,
    proxy: Option<&str>,
) -> Result<Option<Vec<LrclibItem>>, LrclibError> {
    let response = match lrclib_client(proxy).get(url.clone()).send().await {
        Ok(response) => response,
        Err(error) => {
            tracing::debug!("LRCLIB request failed: {}", error);
            // The static TLS stack of the binary is picky about the CA store:
            // fall back to wget, which uses the system one.
            if let Some(items) = lrclib_request_wget(url).await {
                return Ok(Some(items));
            }
            return Err(LrclibError::Transport);
        }
    };

    let status = response.status();
    if status == reqwest::StatusCode::TOO_MANY_REQUESTS {
        let retry_after = response
            .headers()
            .get(reqwest::header::RETRY_AFTER)
            .and_then(|value| value.to_str().ok())
            .and_then(|value| value.trim().parse::<u64>().ok())
            .map(Duration::from_secs);
        tracing::debug!("LRCLIB rate limit hit, retry after {retry_after:?}");
        return Err(LrclibError::RateLimited(retry_after));
    }
    if status == reqwest::StatusCode::SERVICE_UNAVAILABLE {
        return Err(LrclibError::Overloaded);
    }
    if status == reqwest::StatusCode::NOT_FOUND {
        return Ok(None);
    }
    if !status.is_success() {
        tracing::debug!("LRCLIB answered {}", status);
        return Err(LrclibError::Transport);
    }

    let body = match response.bytes().await {
        Ok(body) => body,
        Err(error) => {
            tracing::debug!("LRCLIB body failed: {}", error);
            return Err(LrclibError::Transport);
        }
    };
    match serde_json::from_slice::<Vec<LrclibItem>>(&body) {
        Ok(items) => Ok(Some(items)),
        Err(error) => {
            tracing::debug!("LRCLIB answer is not a list: {}", error);
            Err(LrclibError::Transport)
        }
    }
}

/// Fallback for the rare case where the built-in TLS stack cannot talk to
/// LRCLIB: wget uses the system CA store.
async fn lrclib_request_wget(url: &reqwest::Url) -> Option<Vec<LrclibItem>> {
    let output = tokio::process::Command::new("wget")
        .args([
            "-qO-",
            "--timeout=6",
            "--tries=1",
            &format!("--user-agent={LRCLIB_USER_AGENT}"),
            url.as_str(),
        ])
        .kill_on_drop(true)
        .output()
        .await
        .ok()?;
    if !output.status.success() || output.stdout.is_empty() {
        return None;
    }
    serde_json::from_slice(&output.stdout).ok()
}

#[derive(Deserialize)]
struct LyricsOvhResponse {
    lyrics: Option<String>,
}

/// lyrics.ovh gives the plain text of a song without timings. It is a slow
/// service (and unreachable from some networks), so it gets a short leash and
/// never decides whether the text exists: only LRCLIB does.
async fn fetch_lyrics_ovh(artist: &str, title: &str, proxy: Option<&str>) -> ProviderAnswer {
    if artist.trim().is_empty() || title.trim().is_empty() {
        return ProviderAnswer::NotFound;
    }

    let url = format!(
        "https://api.lyrics.ovh/v1/{}/{}",
        urlencode(artist),
        urlencode(title)
    );
    let Ok(url) = reqwest::Url::parse(&url) else {
        return ProviderAnswer::NotFound;
    };

    let response = tokio::time::timeout(
        Duration::from_secs(OVH_TIMEOUT_SECS),
        ovh_client(proxy).get(url).send(),
    )
    .await;

    let response = match response {
        Ok(Ok(response)) => response,
        Ok(Err(error)) => {
            tracing::debug!("lyrics.ovh request failed: {}", error);
            return ProviderAnswer::Unavailable;
        }
        Err(_) => {
            tracing::debug!("lyrics.ovh did not answer in time");
            return ProviderAnswer::Unavailable;
        }
    };

    if response.status() == reqwest::StatusCode::NOT_FOUND {
        return ProviderAnswer::NotFound;
    }
    if !response.status().is_success() {
        return ProviderAnswer::Unavailable;
    }

    let body = match response.bytes().await {
        Ok(body) => body,
        Err(_) => return ProviderAnswer::Unavailable,
    };
    let response: LyricsOvhResponse = match serde_json::from_slice(&body) {
        Ok(response) => response,
        Err(_) => return ProviderAnswer::Unavailable,
    };
    let plain = response.lyrics.unwrap_or_default().trim().to_string();
    if plain.is_empty() {
        return ProviderAnswer::NotFound;
    }

    ProviderAnswer::Found(Lyrics {
        plain,
        synced: Vec::new(),
        source: Some("lyrics.ovh".to_string()),
        saved: false,
    })
}

fn ovh_client(proxy: Option<&str>) -> reqwest::Client {
    let mut builder = reqwest::Client::builder()
        .user_agent("rustream/0.1 (+https://github.com/sanchoz2022/rustream)")
        .connect_timeout(Duration::from_secs(3));
    if let Some(proxy) = proxy.map(str::trim).filter(|proxy| !proxy.is_empty()) {
        match reqwest::Proxy::all(proxy) {
            Ok(proxy) => builder = builder.proxy(proxy),
            Err(error) => tracing::warn!("Bad lyrics proxy {proxy}: {error}"),
        }
    }
    builder.build().unwrap_or_default()
}

fn urlencode(value: &str) -> String {
    let mut out = String::new();
    for byte in value.bytes() {
        match byte {
            b'A'..=b'Z' | b'a'..=b'z' | b'0'..=b'9' | b'-' | b'_' | b'.' | b'~' => {
                out.push(byte as char)
            }
            b' ' => out.push_str("%20"),
            _ => out.push_str(&format!("%{:02X}", byte)),
        }
    }
    out
}

fn parse(content: &str) -> Lyrics {
    let content = content.strip_prefix('\u{feff}').unwrap_or(content);
    let offset_ms = parse_offset(content);
    let mut synced: Vec<SyncedLine> = Vec::new();
    let mut plain_lines: Vec<String> = Vec::new();

    for raw_line in content.lines() {
        let line = raw_line.trim_end_matches('\r').trim_end();
        if line.trim().is_empty() {
            continue;
        }

        let mut rest = line.trim_start();
        let mut timestamps = Vec::new();

        // LRC may put several timestamps on one line: [00:12.00][00:44.00] text.
        // Tags without a timestamp ([ar:...], [offset:...]) are metadata.
        while let Some(stripped) = rest.strip_prefix('[') {
            let Some(close) = stripped.find(']') else {
                break;
            };
            let tag = &stripped[..close];
            if let Some(ms) = parse_timestamp(tag) {
                timestamps.push((ms + offset_ms).max(0));
            }
            rest = &stripped[close + 1..];
        }

        // Enhanced LRC: word-level timestamps in angle brackets are part of the
        // timing data, not the visible text.
        let words = parse_words(rest, offset_ms);
        let text = strip_enhanced_tags(rest).trim().to_string();
        if text.is_empty() {
            continue;
        }

        if timestamps.is_empty() {
            plain_lines.push(text);
        } else {
            for (position, ms) in timestamps.iter().enumerate() {
                // Word tags already carry absolute times, so they only belong
                // to the first copy of a line with several timestamps.
                let line_words = if position == 0 {
                    words
                        .iter()
                        .map(|(start, word)| SyncedWord {
                            start_ms: *start,
                            end_ms: 0,
                            text: word.clone(),
                        })
                        .collect()
                } else {
                    Vec::new()
                };
                synced.push(SyncedLine {
                    time_ms: *ms,
                    text: text.clone(),
                    words: line_words,
                });
            }
            plain_lines.push(text);
        }
    }

    // Stable sort keeps the order of duplicated timestamps (e.g. translations).
    synced.sort_by_key(|line| line.time_ms);
    synced.dedup_by(|a, b| a.time_ms == b.time_ms && a.text == b.text);
    finalize_words(&mut synced);

    Lyrics {
        plain: plain_lines.join("\n"),
        synced,
        source: None,
        saved: false,
    }
}

/// `<mm:ss.xx>Hello <mm:ss.xx>world` -> [(ms, "Hello"), (ms, "world")].
/// Text before the first tag belongs to the line start and gets no word timing.
fn parse_words(text: &str, offset_ms: i64) -> Vec<(i64, String)> {
    let mut words: Vec<(i64, String)> = Vec::new();
    let mut current: Option<i64> = None;
    let mut buffer = String::new();

    let flush = |start: Option<i64>, buffer: &mut String, words: &mut Vec<(i64, String)>| {
        let text = buffer.trim();
        if let (Some(start), false) = (start, text.is_empty()) {
            words.push((start, text.to_string()));
        }
        buffer.clear();
    };

    let mut chars = text.chars().peekable();
    while let Some(ch) = chars.next() {
        if ch == '<' {
            let mut tag = String::new();
            let mut closed = false;
            for inner in chars.by_ref() {
                if inner == '>' {
                    closed = true;
                    break;
                }
                tag.push(inner);
            }
            if !closed {
                buffer.push('<');
                buffer.push_str(&tag);
                break;
            }
            if let Some(ms) = parse_timestamp(&tag) {
                flush(current, &mut buffer, &mut words);
                current = Some((ms + offset_ms).max(0));
            }
            // Unknown angle-bracket markup is dropped, matching the line text
            // (strip_enhanced_tags): lyrics must not show raw tags.
        } else {
            buffer.push(ch);
        }
    }
    flush(current, &mut buffer, &mut words);
    words
}

/// Word ends are not stored in LRC: a word lasts until the next word, and the
/// last word until the next line (or a short estimate for the final line).
fn finalize_words(lines: &mut [SyncedLine]) {
    for index in 0..lines.len() {
        let line_start = lines[index].time_ms;
        let next_line = lines.get(index + 1).map(|line| line.time_ms);
        // Plain LRC only marks line starts. Word timings are then spread over
        // the line proportionally to word length: approximate, but the karaoke
        // highlight still moves with the vocals instead of jumping per line.
        if lines[index].words.is_empty() {
            let span = next_line
                .map(|next| next - line_start)
                .unwrap_or_else(|| estimate_line_ms(&lines[index].text))
                .max(600);
            let words = interpolate_words(line_start, span, &lines[index].text);
            lines[index].words = words;
        }
        let words_len = lines[index].words.len();
        for word_index in 0..words_len {
            let start = lines[index].words[word_index].start_ms.max(line_start);
            let next_word = lines[index]
                .words
                .get(word_index + 1)
                .map(|word| word.start_ms);
            let end = next_word
                .or(next_line)
                .unwrap_or_else(|| start + estimate_word_ms(&lines[index].words[word_index].text));
            let word = &mut lines[index].words[word_index];
            word.start_ms = start;
            word.end_ms = end.max(start + 120);
        }

        // A single enhanced tag can cover a phrase ("<00:05.00>two words"):
        // split it so every word still gets its own highlight.
        if lines[index]
            .words
            .iter()
            .any(|word| word.text.contains(char::is_whitespace))
        {
            let mut expanded = Vec::with_capacity(lines[index].words.len());
            for word in std::mem::take(&mut lines[index].words) {
                if word.text.contains(char::is_whitespace) {
                    expanded.extend(interpolate_words(
                        word.start_ms,
                        word.end_ms - word.start_ms,
                        &word.text,
                    ));
                } else {
                    expanded.push(word);
                }
            }
            lines[index].words = expanded;
        }
    }
}

fn estimate_word_ms(word: &str) -> i64 {
    (word.chars().count() as i64 * 70).clamp(300, 1200)
}

/// The final line has no successor to bound it, so its length is guessed from
/// the text: singing pace is roughly one character per 70 ms.
fn estimate_line_ms(text: &str) -> i64 {
    (text.chars().count() as i64 * 70).clamp(1_500, 6_000)
}

/// Split a line into words and give each one an equal share of the line span
/// weighted by its length. Words shorter than a blink still get 120 ms so the
/// highlight is visible.
fn interpolate_words(line_start: i64, span: i64, text: &str) -> Vec<SyncedWord> {
    let parts: Vec<&str> = text.split_whitespace().collect();
    if parts.is_empty() {
        return Vec::new();
    }
    let weights: Vec<i64> = parts
        .iter()
        .map(|part| part.chars().count() as i64)
        .collect();
    let total: i64 = weights.iter().sum::<i64>().max(1);
    let span = span.max(parts.len() as i64 * 120);
    let mut start = line_start;
    let mut words = Vec::with_capacity(parts.len());
    for (index, part) in parts.iter().enumerate() {
        let end = if index + 1 == parts.len() {
            line_start + span
        } else {
            (start + (span * weights[index] / total).max(120)).min(line_start + span)
        };
        words.push(SyncedWord {
            start_ms: start,
            end_ms: end,
            text: (*part).to_string(),
        });
        start = end;
    }
    words
}

/// `[offset:+500]` shifts every timestamp by milliseconds. Some files use
/// seconds instead of milliseconds, but the LRC convention is ms.
fn parse_offset(content: &str) -> i64 {
    for line in content.lines().take(32) {
        let trimmed = line.trim();
        let Some(value) = trimmed
            .strip_prefix("[offset:")
            .and_then(|rest| rest.strip_suffix(']'))
        else {
            continue;
        };
        if let Ok(offset) = value.trim().parse::<i64>() {
            return offset;
        }
    }
    0
}

fn strip_enhanced_tags(text: &str) -> String {
    let mut out = String::with_capacity(text.len());
    let mut in_tag = false;
    for ch in text.chars() {
        match ch {
            '<' => in_tag = true,
            '>' if in_tag => in_tag = false,
            _ if !in_tag => out.push(ch),
            _ => {}
        }
    }
    out
}

fn parse_timestamp(tag: &str) -> Option<i64> {
    let parts: Vec<&str> = tag.trim().split(':').collect();
    if parts.len() < 2 || parts.len() > 3 {
        return None;
    }

    // hh:mm:ss.xx (3 parts) or mm:ss.xx (2 parts). Fractional seconds can be
    // separated by '.' or ',' and tolerate 1-3 digits.
    let (hours, minutes, seconds_part) = if parts.len() == 3 {
        (
            parts[0].trim().parse::<i64>().ok()?,
            parts[1].trim().parse::<i64>().ok()?,
            parts[2].trim(),
        )
    } else {
        (0, parts[0].trim().parse::<i64>().ok()?, parts[1].trim())
    };

    if hours < 0 || !(0..=59).contains(&minutes) {
        return None;
    }

    let (seconds_text, fraction) = seconds_part
        .split_once('.')
        .or_else(|| seconds_part.split_once(','))
        .map_or((seconds_part, None), |(s, f)| (s, Some(f)));
    let seconds: i64 = seconds_text.trim().parse().ok()?;
    if !(0..=59).contains(&seconds) {
        return None;
    }

    let millis = fraction
        .map(|f| {
            let digits: String = f.chars().filter(|c| c.is_ascii_digit()).collect();
            match digits.len() {
                0 => 0,
                1 => digits.parse::<i64>().unwrap_or(0) * 100,
                2 => digits.parse::<i64>().unwrap_or(0) * 10,
                _ => digits[..3].parse::<i64>().unwrap_or(0),
            }
        })
        .unwrap_or(0);

    Some(((hours * 60 + minutes) * 60 + seconds) * 1_000 + millis)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn parses_synced_lyrics() {
        let lrc = "[00:12.50]Hello\n[00:20.00]World\n[ar:Artist]\n";
        let lyrics = parse(lrc);
        assert_eq!(lyrics.synced.len(), 2);
        assert_eq!(lyrics.synced[0].time_ms, 12_500);
        assert_eq!(lyrics.plain, "Hello\nWorld");
    }

    #[test]
    fn parses_hours_comma_and_enhanced_tags() {
        let lrc = "\u{feff}[01:02:03,5]<00:01.00>Привет <00:02.00>мир\n";
        let lyrics = parse(lrc);
        assert_eq!(lyrics.synced.len(), 1);
        assert_eq!(lyrics.synced[0].time_ms, 3_723_500);
        assert_eq!(lyrics.synced[0].text, "Привет мир");
        assert_eq!(lyrics.plain, "Привет мир");
    }

    #[test]
    fn applies_offset_and_multiple_timestamps() {
        let lrc = "[offset:-500]\n[00:01.00][00:02.00]One\n[00:03.00]Two\n";
        let lyrics = parse(lrc);
        assert_eq!(lyrics.synced[0].time_ms, 500);
        assert_eq!(lyrics.synced[1].time_ms, 1_500);
        assert_eq!(lyrics.synced[2].time_ms, 2_500);
    }

    #[test]
    fn parses_word_level_timings() {
        let lrc = "[00:10.00]<00:10.00>Hello <00:10.60>big <00:11.20>world\n[00:13.00]next line\n";
        let lyrics = parse(lrc);
        assert_eq!(lyrics.synced.len(), 2);
        let words = &lyrics.synced[0].words;
        assert_eq!(words.len(), 3);
        assert_eq!(words[0].text, "Hello");
        assert_eq!(words[0].start_ms, 10_000);
        assert_eq!(words[0].end_ms, 10_600);
        assert_eq!(words[1].start_ms, 10_600);
        assert_eq!(words[2].start_ms, 11_200);
        // The last word lasts until the next line.
        assert_eq!(words[2].end_ms, 13_000);
        assert_eq!(lyrics.synced[0].text, "Hello big world");
        // A line without its own word tags is interpolated across its span.
        assert_eq!(lyrics.synced[1].words.len(), 2);
        assert_eq!(lyrics.synced[1].words[0].start_ms, 13_000);
    }

    #[test]
    fn plain_lrc_spreads_words_over_the_line() {
        let lyrics = parse("[00:01.00]just a line\n[00:05.00]next\n");
        assert_eq!(lyrics.synced.len(), 2);
        let words = &lyrics.synced[0].words;
        assert_eq!(words.len(), 3);
        assert_eq!(words[0].text, "just");
        assert_eq!(words[0].start_ms, 1_000);
        assert!(words[0].end_ms > words[0].start_ms);
        // Words are ordered and stay inside the line span.
        assert!(words[1].start_ms >= words[0].end_ms);
        assert!(words[2].start_ms >= words[1].end_ms);
        assert_eq!(words[2].end_ms, 5_000);
    }

    #[test]
    fn unknown_angle_tags_are_dropped_consistently() {
        let lrc = "[00:01.00]<00:01.00>keep <b>bold</b>\n";
        let lyrics = parse(lrc);
        assert_eq!(lyrics.synced[0].words.len(), 2);
        assert_eq!(lyrics.synced[0].words[0].text, "keep");
        assert_eq!(lyrics.synced[0].text, "keep bold");
    }

    #[test]
    fn ignores_invalid_timecodes_instead_of_misreading_them() {
        let lrc = "[length:03:45]\n[00:99.00]bad\n[00:01.00]good\n";
        let lyrics = parse(lrc);
        assert_eq!(lyrics.synced.len(), 1);
        assert_eq!(lyrics.synced[0].text, "good");
        assert_eq!(lyrics.plain, "bad\ngood");
    }

    #[test]
    fn lrc_roundtrip_keeps_word_timings() {
        let lyrics = parse("[00:10.00]<00:10.00>Hello <00:10.60>big <00:11.20>world\n");
        let lrc = to_lrc(&lyrics);
        assert!(lrc.starts_with("[00:10.00]<00:10.00>"), "lrc: {lrc}");
        let parsed = parse(&lrc);
        assert_eq!(parsed.synced.len(), 1);
        assert_eq!(parsed.synced[0].words.len(), 3);
        assert_eq!(parsed.synced[0].words[1].text, "big");
        assert_eq!(parsed.synced[0].words[1].start_ms, 10_600);
    }

    #[tokio::test]
    async fn saves_lyrics_in_the_server_store_when_the_library_is_read_only() {
        let root =
            std::env::temp_dir().join(format!("rustream-store-{}", crate::auth::random_hex(6)));
        let music = root.join("music");
        let store = root.join("lyrics");
        std::fs::create_dir_all(&music).unwrap();
        let audio = music.join("Song.flac");
        std::fs::write(&audio, b"not really audio").unwrap();

        let lyrics = parse("[00:05.00]<00:05.00>First <00:05.50>second\n");
        assert!(save_to_store(&store, "track-test", "Song", &lyrics).await);

        let loaded =
            load_from_store(Some(&store), "track-test", "Song").expect("stored text is readable");
        assert_eq!(loaded.source.as_deref(), Some("saved"));
        assert_eq!(loaded.synced.len(), 1);
        assert_eq!(loaded.synced[0].words.len(), 2);
        assert_eq!(loaded.synced[0].words[1].text, "second");

        // The name is stable, so the same track always maps to the same text.
        assert_eq!(
            store_file(&store, "track-test", "Song"),
            store_file(&store, "track-test", "Song")
        );
        std::fs::remove_dir_all(&root).ok();
    }

    #[test]
    fn picks_the_record_that_matches_the_track_duration() {
        let items = vec![
            LrclibItem {
                plain_lyrics: Some("short one".repeat(10)),
                synced_lyrics: None,
                duration: Some(180.0),
            },
            LrclibItem {
                plain_lyrics: Some("the right one".repeat(10)),
                synced_lyrics: Some(
                    "[00:01.00]the right one\n[00:05.00]the right one\n[00:09.00]the right one\n[00:13.00]the right one\n"
                        .to_string(),
                ),
                duration: Some(213.0),
            },
        ];
        let lyrics = lyrics_from_lrclib(&items, 213).expect("a record was picked");
        assert!(lyrics.plain.contains("the right one"));
        assert_eq!(lyrics.synced.len(), 4);
    }

    #[test]
    fn skips_test_entries_that_hold_a_couple_of_words() {
        let items = vec![
            LrclibItem {
                plain_lyrics: Some("probe".to_string()),
                synced_lyrics: Some("[00:00.00]probe".to_string()),
                duration: Some(213.0),
            },
            LrclibItem {
                plain_lyrics: Some("a real lyric".repeat(10)),
                synced_lyrics: Some("[00:01.00]a real lyric\n".repeat(4)),
                duration: Some(213.0),
            },
        ];
        let lyrics = lyrics_from_lrclib(&items, 213).expect("a record was picked");
        assert!(lyrics.plain.contains("a real lyric"));
        assert!(!lyrics.plain.contains("probe"));
    }

    #[tokio::test]
    async fn saves_lyrics_next_to_the_audio_file() {
        let dir = std::env::temp_dir().join(format!("rustream-lrc-{}", crate::auth::random_hex(6)));
        std::fs::create_dir_all(&dir).unwrap();
        let audio = dir.join("Song.flac");
        std::fs::write(&audio, b"not really audio").unwrap();

        let lyrics = parse("[00:05.00]<00:05.00>First <00:05.50>second\n");
        save_sidecar(&audio, &lyrics).await;

        let sidecar = dir.join("Song.lrc");
        assert!(sidecar.exists(), "sidecar was not written");
        // The next load must come from disk, without asking the network.
        let loaded = load(&audio).expect("sidecar is readable");
        assert_eq!(loaded.source.as_deref(), Some("local"));
        assert_eq!(loaded.synced.len(), 1);
        assert_eq!(loaded.synced[0].words.len(), 2);
        assert_eq!(loaded.synced[0].words[1].text, "second");

        std::fs::remove_dir_all(&dir).ok();
    }
}

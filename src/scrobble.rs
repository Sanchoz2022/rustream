use anyhow::{anyhow, Result};
use md5::{Digest, Md5};
use serde::Deserialize;
use serde_json::json;
use sqlx::SqlitePool;
use std::collections::BTreeMap;
use std::time::Duration;

use crate::Config;

#[derive(Debug, Clone)]
pub struct TrackInfo {
    pub title: String,
    pub artist: String,
    pub album: String,
    pub duration_ms: i64,
}

#[derive(Debug, sqlx::FromRow)]
struct PlayRow {
    user_id: String,
    track_id: String,
    started_at: i64,
    scrobbled: i64,
    duration_ms: i64,
}

/// Metadata for scrobbling. `ytm-` ids are looked up in the user's own
/// YouTube Music cache, because they have no row in the local library.
pub async fn track_info(db: &SqlitePool, user_id: &str, track_id: &str) -> Option<TrackInfo> {
    let row: Option<(String, String, String, i64)> = sqlx::query_as(
        "SELECT t.title, ar.name, a.title, t.duration_ms
         FROM tracks t
         JOIN artists ar ON ar.artist_id = t.artist_id
         JOIN albums a ON a.album_id = t.album_id
         WHERE t.track_id = ?",
    )
    .bind(track_id)
    .fetch_optional(db)
    .await
    .ok()?;

    if let Some((title, artist, album, duration_ms)) = row {
        return Some(TrackInfo {
            title,
            artist,
            album,
            duration_ms,
        });
    }

    let video_id = crate::ytm::video_id(track_id)?;
    let meta = crate::ytm::track_meta(db, user_id, video_id).await?;
    Some(TrackInfo {
        title: meta.title,
        artist: meta.artist,
        album: meta.album,
        duration_ms: meta.duration_ms,
    })
}

pub async fn record_start(
    db: &SqlitePool,
    user_id: &str,
    track_id: &str,
    source: &str,
) -> Result<i64> {
    let info = track_info(db, user_id, track_id)
        .await
        .ok_or_else(|| anyhow!("track not found"))?;
    let now = chrono::Utc::now().timestamp();
    let result = sqlx::query(
        "INSERT INTO plays (user_id, track_id, started_at, position_ms, duration_ms, completed, scrobbled, source)
         VALUES (?, ?, ?, 0, ?, 0, 0, ?)",
    )
    .bind(user_id)
    .bind(track_id)
    .bind(now)
    .bind(info.duration_ms)
    .bind(source)
    .execute(db)
    .await?;
    Ok(result.last_insert_rowid())
}

/// Update an existing play and send external scrobbles once the track crosses
/// the usual threshold (half the track or four minutes).
pub async fn update_play(
    db: &SqlitePool,
    config: &Config,
    user_id: &str,
    play_id: i64,
    position_ms: i64,
    completed: bool,
) -> Result<()> {
    let row: Option<PlayRow> = sqlx::query_as(
        "SELECT user_id, track_id, started_at, scrobbled, duration_ms FROM plays WHERE play_id = ?",
    )
    .bind(play_id)
    .fetch_optional(db)
    .await?;

    let Some(play) = row else {
        return Ok(());
    };
    if play.user_id != user_id {
        return Ok(());
    }

    let position_ms = position_ms.max(0);
    sqlx::query("UPDATE plays SET position_ms = ?, completed = ?, ended_at = ? WHERE play_id = ?")
        .bind(position_ms)
        .bind(if completed { 1 } else { 0 })
        .bind(chrono::Utc::now().timestamp())
        .bind(play_id)
        .execute(db)
        .await?;

    let duration = play.duration_ms.max(1);
    let threshold = duration >= 30_000 && (position_ms >= duration / 2 || position_ms >= 240_000);
    if !completed && !threshold {
        return Ok(());
    }
    if play.scrobbled != 0 {
        return Ok(());
    }

    sqlx::query("UPDATE plays SET scrobbled = 1 WHERE play_id = ?")
        .bind(play_id)
        .execute(db)
        .await?;

    let Some(track) = track_info(db, user_id, &play.track_id).await else {
        return Ok(());
    };

    let row: Option<(Option<String>, Option<String>, Option<String>)> = sqlx::query_as(
        "SELECT lastfm_session_key, listenbrainz_token, lastfm_username FROM users WHERE user_id = ?",
    )
    .bind(user_id)
    .fetch_optional(db)
    .await?;

    if let Some((lastfm_key, listenbrainz_token, _lastfm_username)) = row {
        let config = config.clone();
        let started_at = play.started_at;
        let track = track.clone();
        if let Some(key) = lastfm_key {
            let config = config.clone();
            let track = track.clone();
            tokio::spawn(async move {
                if let Err(error) = scrobble_lastfm(&config, &key, &track, started_at).await {
                    tracing::warn!("Last.fm scrobble failed: {}", error);
                }
            });
        }
        if let Some(token) = listenbrainz_token {
            tokio::spawn(async move {
                if let Err(error) = scrobble_listenbrainz(&token, &track, started_at).await {
                    tracing::warn!("ListenBrainz scrobble failed: {}", error);
                }
            });
        }
    }

    Ok(())
}

fn lastfm_signature(params: &BTreeMap<String, String>, secret: &str) -> String {
    let mut payload = String::new();
    for (key, value) in params {
        // `format` and `callback` describe the response, not the request, and
        // Last.fm excludes them from the signed payload.
        if key == "format" || key == "callback" || key == "api_sig" {
            continue;
        }
        payload.push_str(key);
        payload.push_str(value);
    }
    payload.push_str(secret);
    let mut hasher = Md5::new();
    hasher.update(payload.as_bytes());
    hex::encode(hasher.finalize())
}

fn http_client() -> Result<reqwest::Client> {
    Ok(reqwest::Client::builder()
        .timeout(Duration::from_secs(12))
        .user_agent("rustream/0.1 (https://github.com/rustream)")
        .build()?)
}

async fn scrobble_lastfm(
    config: &Config,
    session_key: &str,
    track: &TrackInfo,
    played_at: i64,
) -> Result<()> {
    let Some(api_key) = config.lastfm_api_key.as_deref() else {
        return Ok(());
    };
    let Some(secret) = config.lastfm_api_secret.as_deref() else {
        return Ok(());
    };

    let mut params = BTreeMap::new();
    params.insert("method".into(), "track.scrobble".into());
    params.insert("api_key".into(), api_key.to_string());
    params.insert("sk".into(), session_key.to_string());
    params.insert("track".into(), track.title.clone());
    params.insert("artist".into(), track.artist.clone());
    params.insert("album".into(), track.album.clone());
    params.insert("timestamp".into(), played_at.to_string());
    params.insert("format".into(), "json".into());
    params.insert("api_sig".into(), lastfm_signature(&params, secret));

    let response = http_client()?
        .post("https://ws.audioscrobbler.com/2.0/")
        .form(&params)
        .send()
        .await?;
    if !response.status().is_success() {
        return Err(anyhow!("HTTP {}", response.status()));
    }
    Ok(())
}

async fn scrobble_listenbrainz(token: &str, track: &TrackInfo, played_at: i64) -> Result<()> {
    let body = json!({
        "listen_type": "single",
        "payload": [{
            "listened_at": played_at,
            "track_metadata": {
                "artist_name": track.artist,
                "track_name": track.title,
                "release_name": track.album,
                "additional_info": {
                    "duration_ms": track.duration_ms,
                    "submission_client": "rustream"
                }
            }
        }]
    });

    let response = http_client()?
        .post("https://api.listenbrainz.org/1/submit-listens")
        .bearer_auth(token)
        .json(&body)
        .send()
        .await?;
    if !response.status().is_success() {
        return Err(anyhow!("HTTP {}", response.status()));
    }
    Ok(())
}

#[derive(Deserialize)]
struct LastfmSessionResponse {
    session: Option<LastfmSession>,
}

#[derive(Deserialize)]
struct LastfmSession {
    name: Option<String>,
    key: String,
}

#[derive(Deserialize)]
struct LastfmTokenResponse {
    token: Option<String>,
}

pub async fn lastfm_get_token(config: &Config) -> Result<String> {
    let api_key = config
        .lastfm_api_key
        .as_deref()
        .ok_or_else(|| anyhow!("Last.fm API key is not configured on the server"))?;
    let secret = config
        .lastfm_api_secret
        .as_deref()
        .ok_or_else(|| anyhow!("Last.fm API secret is not configured on the server"))?;

    let mut params = BTreeMap::new();
    params.insert("method".into(), "auth.getToken".into());
    params.insert("api_key".into(), api_key.to_string());
    params.insert("format".into(), "json".into());
    params.insert("api_sig".into(), lastfm_signature(&params, secret));

    let response: LastfmTokenResponse = http_client()?
        .post("https://ws.audioscrobbler.com/2.0/")
        .form(&params)
        .send()
        .await?
        .error_for_status()?
        .json()
        .await?;

    response
        .token
        .ok_or_else(|| anyhow!("Last.fm did not return a token"))
}

pub fn lastfm_auth_url(config: &Config, token: &str) -> Option<String> {
    let api_key = config.lastfm_api_key.as_deref()?;
    Some(format!(
        "https://www.last.fm/api/auth/?api_key={}&token={}",
        urlencode(api_key),
        urlencode(token)
    ))
}

pub async fn lastfm_get_session(config: &Config, token: &str) -> Result<(String, Option<String>)> {
    let api_key = config
        .lastfm_api_key
        .as_deref()
        .ok_or_else(|| anyhow!("Last.fm API key is not configured on the server"))?;
    let secret = config
        .lastfm_api_secret
        .as_deref()
        .ok_or_else(|| anyhow!("Last.fm API secret is not configured on the server"))?;

    let mut params = BTreeMap::new();
    params.insert("method".into(), "auth.getSession".into());
    params.insert("api_key".into(), api_key.to_string());
    params.insert("token".into(), token.to_string());
    params.insert("format".into(), "json".into());
    params.insert("api_sig".into(), lastfm_signature(&params, secret));

    let response: LastfmSessionResponse = http_client()?
        .post("https://ws.audioscrobbler.com/2.0/")
        .form(&params)
        .send()
        .await?
        .error_for_status()?
        .json()
        .await?;

    let session = response
        .session
        .ok_or_else(|| anyhow!("Last.fm did not return a session"))?;
    Ok((session.key, session.name))
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

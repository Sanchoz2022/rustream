//! Library-wide reads: counts, lyrics, rescan and per-user listening stats.

use axum::{
    extract::{Path, Query, State},
    http::StatusCode,
    response::{IntoResponse, Response},
    Extension, Json,
};
use serde_json::{json, Value};
use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;

use super::fail;
use crate::auth::AuthUser;
use crate::{live, lyrics, scanner, AppState};

pub async fn api_stats(State(state): State<Arc<RwLock<AppState>>>) -> Json<Value> {
    let db = super::db(&state).await;
    let count = |sql: &'static str| {
        let db = db.clone();
        async move {
            sqlx::query_scalar::<_, i64>(sql)
                .fetch_one(&db)
                .await
                .unwrap_or(0)
        }
    };
    let (artists, albums, tracks, duration, size) = tokio::join!(
        count("SELECT COUNT(*) FROM artists"),
        count("SELECT COUNT(*) FROM albums"),
        count("SELECT COUNT(*) FROM tracks"),
        count("SELECT COALESCE(SUM(duration_ms), 0) FROM tracks"),
        count("SELECT COALESCE(SUM(file_size), 0) FROM tracks"),
    );
    Json(json!({
        "artists": artists,
        "albums": albums,
        "tracks": tracks,
        "durationMs": duration,
        "sizeBytes": size
    }))
}

pub async fn api_me_stats(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
) -> Response {
    let db = super::db(&state).await;
    match live::user_stats(&db, &user.user_id).await {
        Ok(stats) => Json(stats).into_response(),
        Err(error) => fail(StatusCode::INTERNAL_SERVER_ERROR, error.to_string()),
    }
}

pub async fn api_lyrics(
    State(state): State<Arc<RwLock<AppState>>>,
    Path(track_id): Path<String>,
    Query(params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let (db, config) = super::db_and_config(&state).await;
    let refresh = params
        .get("refresh")
        .is_some_and(|value| value == "1" || value == "true");
    if refresh {
        let _ = sqlx::query("DELETE FROM lyrics_cache WHERE track_id = ?")
            .bind(&track_id)
            .execute(&db)
            .await;
    }

    let row: Option<(String, String, String, i64)> = sqlx::query_as(
        "SELECT t.file_path, t.title, ar.name, t.duration_ms
         FROM tracks t JOIN artists ar ON ar.artist_id = t.artist_id
         WHERE t.track_id = ?",
    )
    .bind(&track_id)
    .fetch_optional(&db)
    .await
    .unwrap_or(None);

    // YouTube Music tracks are not in `tracks`: take title/artist from the
    // remembered listing so LRCLIB can be asked for the same lyrics. A cached
    // download (or a matching local file) still provides a neighbouring .lrc.
    let row = match row {
        Some(row) => Some(row),
        None => ytm_lyrics_row(&db, &track_id).await,
    };
    // A YouTube track has no file of its own: its text goes to the server
    // store, not next to an evicted cache file.
    let sidecar = row.is_some() && !crate::ytm::video_id(&track_id).is_some();

    let Some((file_path, title, artist, duration_ms)) = row else {
        return Json(json!({ "plain": null, "synced": [], "error": "track not found" }));
    };

    let store = lyrics::store_dir(&config.db_path);
    let found = lyrics::resolve(
        &db,
        &lyrics::Lookup {
            track_id: &track_id,
            path: std::path::Path::new(&file_path),
            artist: &artist,
            title: &title,
            duration_sec: duration_ms / 1000,
            online: config.online_lyrics,
            refresh,
            store: Some(&store),
            sidecar,
            proxy: config.lyrics_proxy.as_deref(),
        },
    )
    .await;

    match found {
        lyrics::Outcome::Found(lyrics) => Json(json!({
            "title": title,
            "artist": artist,
            "plain": lyrics.plain,
            "synced": lyrics.synced,
            "source": lyrics.source,
            "saved": lyrics.saved
        })),
        lyrics::Outcome::NotFound => Json(json!({
            "title": title,
            "artist": artist,
            "plain": null,
            "synced": [],
            "source": null,
            "error": "not_found"
        })),
        // The service answered with an error or a rate limit: the text may
        // well exist, so the panel says "try again" instead of "not found".
        lyrics::Outcome::Unavailable => Json(json!({
            "title": title,
            "artist": artist,
            "plain": null,
            "synced": [],
            "source": null,
            "error": "unavailable"
        })),
    }
}

/// Lyrics metadata for a YouTube Music id (`ytm-<video>`): title, artist and
/// duration come from the remembered listing, and the path points at a cached
/// download or an identical local file so a neighbouring `.lrc` still wins.
pub(crate) async fn ytm_lyrics_row(
    db: &sqlx::SqlitePool,
    track_id: &str,
) -> Option<(String, String, String, i64)> {
    let video_id = crate::ytm::video_id(track_id)?;
    let (title, artist, duration_ms, file_path): (String, String, i64, Option<String>) =
        sqlx::query_as(
            "SELECT title, artist, duration_ms, file_path FROM ytm_tracks
             WHERE video_id = ? ORDER BY last_used_at DESC LIMIT 1",
        )
        .bind(video_id)
        .fetch_optional(db)
        .await
        .ok()??;

    let path = match file_path {
        Some(path) => path,
        None => crate::ytm::local_match(db, &title, &artist, duration_ms)
            .await
            .map(|local| local.path)
            .unwrap_or_default(),
    };
    Some((path, title, artist, duration_ms))
}

pub async fn api_rescan(State(state): State<Arc<RwLock<AppState>>>) -> Json<Value> {
    let scan_state = state.clone();
    tokio::spawn(async move {
        if let Err(error) = scanner::scan_all(scan_state).await {
            tracing::error!("Manual scan failed: {error}");
        }
    });
    Json(json!({ "status": "started" }))
}

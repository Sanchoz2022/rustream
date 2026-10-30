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

    let Some((file_path, title, artist, duration_ms)) = row else {
        return Json(json!({ "plain": null, "synced": [], "error": "track not found" }));
    };

    let found = lyrics::resolve(
        &db,
        &track_id,
        std::path::Path::new(&file_path),
        &artist,
        &title,
        duration_ms / 1000,
        config.online_lyrics,
    )
    .await;

    match found {
        Some(lyrics) => Json(json!({
            "title": title,
            "artist": artist,
            "plain": lyrics.plain,
            "synced": lyrics.synced,
            "source": lyrics.source
        })),
        None => Json(json!({
            "title": title,
            "artist": artist,
            "plain": null,
            "synced": [],
            "source": null
        })),
    }
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

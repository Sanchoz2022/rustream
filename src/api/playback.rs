//! Playback bookkeeping, live queues, Last.fm sign-in and audio streaming.

use axum::{
    extract::{Path, Query, State},
    http::{HeaderMap, StatusCode},
    response::{IntoResponse, Response},
    Extension, Json,
};
use serde::Deserialize;
use serde_json::json;
use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;

use super::fail;
use crate::auth::{self, AuthUser};
use crate::{live, scrobble, streaming, ytm, AppState};

/// Local library or YouTube Music, depending on the id prefix. Both the web
/// player and Subsonic clients use this, with the same credentials.
pub async fn stream_route(
    State(state): State<Arc<RwLock<AppState>>>,
    Path(track_id): Path<String>,
    Query(params): Query<HashMap<String, String>>,
    headers: HeaderMap,
) -> Response {
    let (db, config, ytm_state) = {
        let state = state.read().await;
        (state.db.clone(), state.config.clone(), state.ytm.clone())
    };
    let Some(user) = auth::authenticate_subsonic(&db, &params, &headers).await else {
        return StatusCode::UNAUTHORIZED.into_response();
    };
    serve(&db, &config, &ytm_state, &user.user_id, &track_id, &headers).await
}

/// Shared by `/stream/:id` and the Subsonic `stream` endpoint.
pub async fn serve(
    db: &sqlx::SqlitePool,
    config: &crate::config::Config,
    ytm_state: &ytm::YtmState,
    user_id: &str,
    track_id: &str,
    headers: &HeaderMap,
) -> Response {
    if let Some(video_id) = ytm::video_id(track_id) {
        return match ytm::serve_stream(ytm_state, db, config, user_id, video_id, headers).await {
            Ok(response) => response,
            Err(status) => status.into_response(),
        };
    }
    match streaming::serve_track(db, track_id, headers).await {
        Ok(response) => response,
        Err(status) => status.into_response(),
    }
}

#[derive(Deserialize)]
pub struct StartPlayRequest {
    #[serde(alias = "trackId")]
    track_id: String,
    #[serde(default)]
    source: Option<String>,
}

pub async fn api_start_play(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Json(request): Json<StartPlayRequest>,
) -> Response {
    let db = super::db(&state).await;
    match scrobble::record_start(
        &db,
        &user.user_id,
        &request.track_id,
        request.source.as_deref().unwrap_or("web"),
    )
    .await
    {
        Ok(play_id) => Json(json!({ "playId": play_id })).into_response(),
        Err(error) => fail(StatusCode::NOT_FOUND, error.to_string()),
    }
}

#[derive(Deserialize)]
pub struct UpdatePlayRequest {
    #[serde(alias = "playId")]
    play_id: i64,
    #[serde(default, alias = "positionMs")]
    position_ms: i64,
    #[serde(default)]
    completed: bool,
}

pub async fn api_update_play(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Json(request): Json<UpdatePlayRequest>,
) -> Response {
    let (db, config) = super::db_and_config(&state).await;
    match scrobble::update_play(
        &db,
        &config,
        &user.user_id,
        request.play_id,
        request.position_ms,
        request.completed,
    )
    .await
    {
        Ok(()) => Json(json!({ "status": "ok" })).into_response(),
        Err(error) => fail(StatusCode::INTERNAL_SERVER_ERROR, error.to_string()),
    }
}

pub async fn api_live_queue(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Query(params): Query<HashMap<String, String>>,
) -> Response {
    let db = super::db(&state).await;
    let count = params
        .get("count")
        .and_then(|value| value.parse::<i64>().ok())
        .unwrap_or(40);
    match live::live_queue(&db, &user.user_id, count).await {
        Ok(tracks) => Json(json!({ "tracks": tracks })).into_response(),
        Err(error) => fail(StatusCode::INTERNAL_SERVER_ERROR, error.to_string()),
    }
}

pub async fn api_live_mixes(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
) -> Response {
    let db = super::db(&state).await;
    match live::mixes(&db, &user.user_id).await {
        Ok(mixes) => Json(mixes).into_response(),
        Err(error) => fail(StatusCode::INTERNAL_SERVER_ERROR, error.to_string()),
    }
}

pub async fn api_lastfm_connect(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
) -> Response {
    let (db, config) = super::db_and_config(&state).await;
    match scrobble::lastfm_get_token(&config).await {
        Ok(token) => {
            if let Err(error) = auth::set_lastfm_token(&db, &user.user_id, &token).await {
                return fail(StatusCode::INTERNAL_SERVER_ERROR, error.to_string());
            }
            match scrobble::lastfm_auth_url(&config, &token) {
                Some(url) => Json(json!({ "url": url })).into_response(),
                None => fail(StatusCode::BAD_REQUEST, "Last.fm не настроен"),
            }
        }
        Err(error) => fail(StatusCode::BAD_REQUEST, error.to_string()),
    }
}

#[derive(Deserialize, Default)]
pub struct LastfmCompleteRequest {
    #[serde(default)]
    token: Option<String>,
}

pub async fn api_lastfm_complete(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Json(request): Json<LastfmCompleteRequest>,
) -> Response {
    let (db, config) = super::db_and_config(&state).await;
    let token = match request.token.filter(|token| !token.trim().is_empty()) {
        Some(token) => token,
        None => match auth::get_user_by_id(&db, &user.user_id)
            .await
            .ok()
            .flatten()
        {
            Some(auth::UserRow {
                lastfm_token: Some(token),
                ..
            }) => token,
            _ => {
                return fail(
                    StatusCode::BAD_REQUEST,
                    "Сначала запустите подключение Last.fm",
                )
            }
        },
    };

    match scrobble::lastfm_get_session(&config, &token).await {
        Ok((key, username)) => {
            if let Err(error) =
                auth::set_lastfm_session(&db, &user.user_id, &key, username.as_deref()).await
            {
                return fail(StatusCode::INTERNAL_SERVER_ERROR, error.to_string());
            }
            Json(json!({ "status": "ok", "username": username })).into_response()
        }
        Err(error) => fail(StatusCode::BAD_REQUEST, error.to_string()),
    }
}

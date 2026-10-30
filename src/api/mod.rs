//! HTTP API: one module per area. Handlers are thin — they decode input,
//! call into `auth`/`scrobble`/`ytm` and turn the result into JSON.

pub mod admin;
pub mod auth;
pub mod library;
pub mod me;
pub mod playback;
pub mod ytm;

use axum::{
    http::StatusCode,
    response::{IntoResponse, Response},
    routing::{delete, get, post, put},
    Json, Router,
};
use serde_json::json;
use std::sync::Arc;
use tokio::sync::RwLock;

use crate::config::Config;
use crate::AppState;

/// The error shape every endpoint returns: `{"error": "...", "code": "..."}`.
pub fn fail(status: StatusCode, message: impl Into<String>) -> Response {
    (status, Json(json!({ "error": message.into() }))).into_response()
}

pub fn fail_code(status: StatusCode, code: &str, message: impl Into<String>) -> Response {
    (
        status,
        Json(json!({ "error": message.into(), "code": code })),
    )
        .into_response()
}

pub(crate) async fn db(state: &Arc<RwLock<AppState>>) -> sqlx::SqlitePool {
    state.read().await.db.clone()
}

pub(crate) async fn db_and_config(state: &Arc<RwLock<AppState>>) -> (sqlx::SqlitePool, Config) {
    let state = state.read().await;
    (state.db.clone(), state.config.clone())
}

/// Routes reachable without a session: login, health, session probe.
pub fn public_routes() -> Router<Arc<RwLock<AppState>>> {
    Router::new()
        .route("/api/health", get(health))
        .route("/api/session", get(auth::api_session))
        .route("/api/auth/config", get(auth::api_auth_config))
        .route("/api/auth/login", post(auth::api_login))
        .route("/api/auth/logout", post(auth::api_logout))
        .route("/api/auth/invite/:code", get(auth::api_invite_info))
        .route("/api/auth/register", post(auth::api_register))
}

/// Everything behind the session cookie.
pub fn protected_routes() -> Router<Arc<RwLock<AppState>>> {
    Router::new()
        .route("/api/stats", get(library::api_stats))
        .route("/api/lyrics/:track_id", get(library::api_lyrics))
        .route("/api/rescan", get(library::api_rescan))
        .route("/api/rescan", post(library::api_rescan))
        .route("/api/me", get(me::api_me).patch(me::api_update_me))
        .route("/api/me/stats", get(library::api_me_stats))
        .route("/api/me/password", post(me::api_change_password))
        .route("/api/me/scrobbling", put(me::api_update_scrobbling))
        .route(
            "/api/me/ratings",
            get(me::api_get_ratings).put(me::api_set_rating),
        )
        .route("/api/me/history", delete(me::api_clear_history))
        .route("/api/me/ytm", get(ytm::api_get_connection))
        .route("/api/me/ytm", put(ytm::api_connect))
        .route("/api/me/ytm", delete(ytm::api_disconnect))
        .route("/api/ytm/search", get(ytm::api_search))
        .route("/api/ytm/liked", get(ytm::api_liked))
        .route(
            "/api/admin/lastfm",
            get(admin::api_get_lastfm_config).put(admin::api_set_lastfm_config),
        )
        .route("/api/admin/invites", get(admin::api_list_invites))
        .route("/api/admin/invites", post(admin::api_create_invite))
        .route("/api/admin/invites/:code", delete(admin::api_revoke_invite))
        .route(
            "/api/users",
            get(admin::api_list_users).post(admin::api_create_user),
        )
        .route("/api/users/:user_id", delete(admin::api_delete_user))
        .route("/api/plays/start", post(playback::api_start_play))
        .route("/api/plays/update", post(playback::api_update_play))
        .route("/api/live/queue", get(playback::api_live_queue))
        .route("/api/live/mixes", get(playback::api_live_mixes))
        .route("/api/lastfm/connect", get(playback::api_lastfm_connect))
        .route("/api/lastfm/complete", post(playback::api_lastfm_complete))
}

pub async fn health() -> Json<serde_json::Value> {
    Json(json!({ "status": "ok", "version": env!("CARGO_PKG_VERSION") }))
}

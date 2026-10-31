//! YouTube Music bound to the signed-in profile.

use axum::{
    extract::{Query, State},
    http::StatusCode,
    response::{IntoResponse, Response},
    Extension, Json,
};
use serde::Deserialize;
use serde_json::json;
use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;

use super::{fail, fail_code};
use crate::auth::AuthUser;
use crate::ytm::{self, ConnectError, Listing};
use crate::AppState;

fn not_connected() -> Response {
    fail_code(
        StatusCode::FORBIDDEN,
        "ytm_not_connected",
        "YouTube Music не подключён к профилю",
    )
}

pub async fn api_get_connection(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
) -> Response {
    let db = super::db(&state).await;
    match ytm::status(&db, &user.user_id).await {
        Ok(status) => Json(status).into_response(),
        Err(error) => fail(StatusCode::INTERNAL_SERVER_ERROR, error.to_string()),
    }
}

#[derive(Deserialize)]
pub struct ConnectRequest {
    cookies: String,
}

/// `PUT` replaces the stored cookies, so a user can paste fresh ones when the
/// old session expires.
pub async fn api_connect(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Json(request): Json<ConnectRequest>,
) -> Response {
    let (db, ytm_state) = {
        let state = state.read().await;
        (state.db.clone(), state.ytm.clone())
    };
    match ytm::connect(&ytm_state, &db, &user.user_id, &request.cookies).await {
        Ok(account) => Json(json!({
            "connected": true,
            "account": account,
            "updatedAt": chrono::Utc::now().timestamp(),
        }))
        .into_response(),
        Err(ConnectError::Invalid(message)) => {
            fail_code(StatusCode::BAD_REQUEST, "invalid_cookies", message)
        }
        Err(ConnectError::NotLoggedIn) => fail_code(
            StatusCode::BAD_REQUEST,
            "not_logged_in",
            "YouTube не recognises these cookies as a sign-in. Export them while signed in at music.youtube.com.",
        ),
        Err(ConnectError::Upstream(error)) => {
            tracing::warn!("YouTube Music connection failed: {error}");
            fail(
                StatusCode::BAD_GATEWAY,
                "Не удалось проверить cookies в YouTube Music",
            )
        }
    }
}

pub async fn api_disconnect(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
) -> Response {
    let (db, config, ytm_state) = {
        let state = state.read().await;
        (state.db.clone(), state.config.clone(), state.ytm.clone())
    };
    match ytm::disconnect(&ytm_state, &db, &config, &user.user_id).await {
        Ok(()) => Json(json!({ "connected": false })).into_response(),
        Err(error) => fail(StatusCode::INTERNAL_SERVER_ERROR, error.to_string()),
    }
}

fn limit(params: &HashMap<String, String>) -> usize {
    params
        .get("limit")
        .and_then(|value| value.parse::<usize>().ok())
        .unwrap_or(30)
        .clamp(1, 100)
}

async fn listing(
    state: Arc<RwLock<AppState>>,
    user_id: String,
    listing: Listing,
    limit: usize,
) -> Response {
    let (db, config, ytm_state) = {
        let state = state.read().await;
        (state.db.clone(), state.config.clone(), state.ytm.clone())
    };
    if !config.ytm_enabled {
        return fail_code(
            StatusCode::NOT_FOUND,
            "ytm_disabled",
            "YouTube Music отключён на этом сервере",
        );
    }
    match ytm::list(&ytm_state, &db, &user_id, listing, limit).await {
        Ok(Some(tracks)) => Json(json!({ "tracks": tracks })).into_response(),
        Ok(None) => not_connected(),
        Err(error) => {
            tracing::warn!("YouTube Music listing failed: {error}");
            fail(StatusCode::BAD_GATEWAY, error.to_string())
        }
    }
}

pub async fn api_search(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Query(params): Query<HashMap<String, String>>,
) -> Response {
    let query = params.get("q").cloned().unwrap_or_default();
    if query.trim().is_empty() {
        return Json(json!({ "tracks": [] })).into_response();
    }
    let limit = limit(&params);
    listing(state, user.user_id, Listing::Search(query), limit).await
}

pub async fn api_liked(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Query(params): Query<HashMap<String, String>>,
) -> Response {
    let limit = limit(&params);
    listing(state, user.user_id, Listing::Liked, limit).await
}

/// Уже известные этому профилю треки YouTube (локальная БД, без сети).
pub async fn api_history(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Query(params): Query<HashMap<String, String>>,
) -> Response {
    let limit = limit(&params);
    let db = super::db(&state).await;
    match ytm::history(&db, &user.user_id, limit).await {
        Ok(tracks) => Json(json!({ "tracks": tracks })).into_response(),
        Err(error) => fail(StatusCode::INTERNAL_SERVER_ERROR, error.to_string()),
    }
}

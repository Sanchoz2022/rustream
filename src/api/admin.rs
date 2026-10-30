//! Admin-only endpoints: Last.fm keys, users and invite codes.

use axum::{
    extract::{Path, State},
    http::StatusCode,
    response::{IntoResponse, Response},
    Extension, Json,
};
use serde::Deserialize;
use serde_json::json;
use std::sync::Arc;
use tokio::sync::RwLock;

use super::{fail, fail_code};
use crate::auth::{self, AuthUser};
use crate::config;
use crate::invites::{self, NewInvite};
use crate::AppState;

fn forbidden() -> Response {
    fail(StatusCode::FORBIDDEN, "Требуются права администратора")
}

#[derive(Deserialize)]
pub struct LastfmConfigRequest {
    #[serde(default, alias = "apiKey")]
    api_key: Option<String>,
    #[serde(default, alias = "apiSecret")]
    api_secret: Option<String>,
    #[serde(default)]
    clear: bool,
}

pub async fn api_get_lastfm_config(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
) -> Response {
    if !user.is_admin {
        return forbidden();
    }
    let config = state.read().await.config.clone();
    Json(json!({
        "apiKey": config.lastfm_api_key.clone().unwrap_or_default(),
        "apiSecretSet": config.lastfm_api_secret.is_some(),
        "configured": config.lastfm_api_key.is_some() && config.lastfm_api_secret.is_some()
    }))
    .into_response()
}

pub async fn api_set_lastfm_config(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Json(request): Json<LastfmConfigRequest>,
) -> Response {
    if !user.is_admin {
        return forbidden();
    }
    let current = state.read().await.config.clone();
    // A blank secret means "keep the saved one": the UI never echoes it back,
    // so treating a blank field as "delete" would surprise the admin.
    let api_key = if request.clear {
        String::new()
    } else {
        request.api_key.unwrap_or_default().trim().to_string()
    };
    let api_secret = if request.clear {
        String::new()
    } else {
        let requested = request.api_secret.unwrap_or_default().trim().to_string();
        if requested.is_empty() {
            current.lastfm_api_secret.clone().unwrap_or_default()
        } else {
            requested
        }
    };

    if let Err(message) = config::write_values(
        &current,
        &[
            ("lastfm_api_key", &api_key),
            ("lastfm_api_secret", &api_secret),
        ],
    ) {
        return fail(
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Не удалось записать config.toml: {message}"),
        );
    }

    let mut state = state.write().await;
    state.config.lastfm_api_key = Some(api_key).filter(|key| !key.is_empty());
    state.config.lastfm_api_secret = Some(api_secret).filter(|secret| !secret.is_empty());
    Json(json!({ "status": "ok" })).into_response()
}

// ---------------------------------------------------------------------------
// Invites
// ---------------------------------------------------------------------------

#[derive(Deserialize)]
pub struct CreateInviteRequest {
    #[serde(default)]
    note: Option<String>,
    #[serde(default = "default_expiry", alias = "expiresInDays")]
    expires_in_days: i64,
    #[serde(default = "default_uses", alias = "maxUses")]
    max_uses: i64,
    #[serde(default, alias = "isAdmin")]
    is_admin: bool,
}

fn default_expiry() -> i64 {
    7
}

fn default_uses() -> i64 {
    1
}

pub async fn api_list_invites(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
) -> Response {
    if !user.is_admin {
        return forbidden();
    }
    let db = super::db(&state).await;
    match invites::list(&db).await {
        Ok(invites) => Json(json!({ "invites": invites })).into_response(),
        Err(error) => fail(StatusCode::INTERNAL_SERVER_ERROR, error.to_string()),
    }
}

pub async fn api_create_invite(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Json(request): Json<CreateInviteRequest>,
) -> Response {
    if !user.is_admin {
        return forbidden();
    }
    let db = super::db(&state).await;
    let new_invite = NewInvite {
        note: request.note,
        expires_in_days: request.expires_in_days,
        max_uses: request.max_uses,
        is_admin: request.is_admin,
    };
    match invites::create(&db, &user, new_invite).await {
        // Let the client build the full URL: it knows the public origin.
        Ok(invite) => Json(json!({ "invite": invite })).into_response(),
        Err(error) => fail(StatusCode::BAD_REQUEST, error.to_string()),
    }
}

pub async fn api_revoke_invite(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Path(code): Path<String>,
) -> Response {
    if !user.is_admin {
        return forbidden();
    }
    let db = super::db(&state).await;
    match invites::revoke(&db, &code).await {
        Ok(true) => Json(json!({ "status": "ok" })).into_response(),
        Ok(false) => fail_code(StatusCode::NOT_FOUND, "not_found", "Приглашение не найдено"),
        Err(error) => fail(StatusCode::INTERNAL_SERVER_ERROR, error.to_string()),
    }
}

// ---------------------------------------------------------------------------
// Users
// ---------------------------------------------------------------------------

pub async fn api_list_users(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
) -> Response {
    if !user.is_admin {
        return forbidden();
    }
    let db = super::db(&state).await;
    match auth::list_users(&db).await {
        Ok(users) => Json(json!({ "users": users })).into_response(),
        Err(error) => fail(StatusCode::INTERNAL_SERVER_ERROR, error.to_string()),
    }
}

#[derive(Deserialize)]
pub struct CreateUserRequest {
    username: String,
    password: String,
    #[serde(default, alias = "displayName")]
    display_name: Option<String>,
    #[serde(default, alias = "isAdmin")]
    is_admin: bool,
}

pub async fn api_create_user(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Json(request): Json<CreateUserRequest>,
) -> Response {
    if !user.is_admin {
        return forbidden();
    }
    let db = super::db(&state).await;
    match auth::create_user(
        &db,
        &request.username,
        &request.password,
        request.display_name.as_deref(),
        request.is_admin,
    )
    .await
    {
        Ok(created) => Json(json!({ "user": created })).into_response(),
        Err(error) => fail(StatusCode::BAD_REQUEST, error.to_string()),
    }
}

pub async fn api_delete_user(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Path(user_id): Path<String>,
) -> Response {
    if !user.is_admin {
        return forbidden();
    }
    if user.user_id == user_id {
        return fail(StatusCode::BAD_REQUEST, "Нельзя удалить самого себя");
    }
    let (db, config) = super::db_and_config(&state).await;

    let result = async {
        let mut tx = db.begin().await?;
        for statement in [
            "DELETE FROM playlist_tracks WHERE playlist_id IN (SELECT playlist_id FROM playlists WHERE user_id = ?)",
            "DELETE FROM playlists WHERE user_id = ?",
            "DELETE FROM stars WHERE user_id = ?",
            "DELETE FROM dislikes WHERE user_id = ?",
            "DELETE FROM plays WHERE user_id = ?",
            "DELETE FROM sessions WHERE user_id = ?",
            "DELETE FROM invites WHERE created_by = ? AND uses = 0",
            "DELETE FROM users WHERE user_id = ?",
        ] {
            sqlx::query(statement)
                .bind(&user_id)
                .execute(&mut *tx)
                .await?;
        }
        tx.commit().await
    }
    .await;

    if let Err(error) = result {
        return fail(StatusCode::INTERNAL_SERVER_ERROR, error.to_string());
    }
    // Cached YouTube Music audio and metadata belong to the user, too.
    if let Err(error) = crate::ytm::purge_user(&db, &config, &user_id).await {
        tracing::warn!("Cannot purge YouTube Music data of {user_id}: {error}");
    }
    Json(json!({ "status": "ok" })).into_response()
}

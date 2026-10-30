//! Sign-in, sign-out, session probe and invite-only registration.

use axum::{
    extract::{Path, State},
    http::{header, HeaderValue, StatusCode},
    response::{IntoResponse, Response},
    Json,
};
use serde::Deserialize;
use serde_json::{json, Value};
use std::sync::Arc;
use tokio::sync::RwLock;

use super::{fail, fail_code};
use crate::auth;
use crate::invites::{self, RegisterError};
use crate::AppState;

#[derive(Deserialize)]
pub struct LoginRequest {
    username: String,
    password: String,
}

pub async fn api_login(
    State(state): State<Arc<RwLock<AppState>>>,
    Json(request): Json<LoginRequest>,
) -> Response {
    let db = super::db(&state).await;
    match auth::verify_login(&db, &request.username, &request.password).await {
        Ok(Some(user)) => match auth::create_session(&db, &user.user_id).await {
            Ok(token) => {
                let mut response = Json(json!({ "user": user, "session": true })).into_response();
                if let Ok(value) = HeaderValue::from_str(&auth::session_cookie(&token)) {
                    response.headers_mut().insert(header::SET_COOKIE, value);
                }
                response
            }
            Err(error) => {
                tracing::error!("Cannot create session: {error}");
                fail(StatusCode::INTERNAL_SERVER_ERROR, "Ошибка сервера")
            }
        },
        Ok(None) => fail(
            StatusCode::UNAUTHORIZED,
            "Неверное имя пользователя или пароль",
        ),
        Err(error) => {
            tracing::error!("Login failed: {error}");
            fail(StatusCode::INTERNAL_SERVER_ERROR, "Ошибка базы данных")
        }
    }
}

pub async fn api_logout(
    State(state): State<Arc<RwLock<AppState>>>,
    headers: axum::http::HeaderMap,
) -> Response {
    let db = super::db(&state).await;
    if let Some(token) = auth::cookie_value(&headers, auth::SESSION_COOKIE) {
        let _ = auth::delete_session(&db, &token).await;
    }
    let mut response = Json(json!({ "status": "ok" })).into_response();
    if let Ok(value) = HeaderValue::from_str(&auth::clear_session_cookie()) {
        response.headers_mut().insert(header::SET_COOKIE, value);
    }
    response
}

pub async fn api_auth_config(State(state): State<Arc<RwLock<AppState>>>) -> Json<Value> {
    let config = state.read().await.config.clone();
    Json(json!({
        // Accounts are created with an invite code, so the form is always
        // available; whether a code works is checked when it is submitted.
        "registration": true,
        "lastfm": config.lastfm_api_key.is_some() && config.lastfm_api_secret.is_some(),
        "scanInterval": config.scan_interval_secs,
        "ytm": config.ytm_enabled,
    }))
}

pub async fn api_session(
    State(state): State<Arc<RwLock<AppState>>>,
    headers: axum::http::HeaderMap,
) -> Json<Value> {
    let db = super::db(&state).await;
    match auth::user_from_headers(&db, &headers).await {
        Some(user) => super::me::payload(&state, &user).await,
        None => Json(json!({ "user": null })),
    }
}

/// Public preview of an invite link, so the sign-up page can show who invited
/// the visitor before they pick a password.
pub async fn api_invite_info(
    State(state): State<Arc<RwLock<AppState>>>,
    Path(code): Path<String>,
) -> Response {
    let db = super::db(&state).await;
    match invites::get(&db, &code).await {
        Ok(Some(invite)) if invite.valid => Json(json!({
            "valid": true,
            "invitedBy": invite.created_by,
            "expiresAt": invite.expires_at,
            "isAdmin": invite.is_admin,
        }))
        .into_response(),
        Ok(_) => fail_code(
            StatusCode::NOT_FOUND,
            "invalid_invite",
            "Приглашение недействительно",
        ),
        Err(error) => {
            tracing::error!("Cannot read invite: {error}");
            fail(StatusCode::INTERNAL_SERVER_ERROR, "Ошибка базы данных")
        }
    }
}

#[derive(Deserialize)]
pub struct RegisterRequest {
    invite: String,
    username: String,
    password: String,
    #[serde(default, alias = "displayName")]
    display_name: Option<String>,
}

pub async fn api_register(
    State(state): State<Arc<RwLock<AppState>>>,
    Json(request): Json<RegisterRequest>,
) -> Response {
    let db = super::db(&state).await;
    let result = invites::register(
        &db,
        &request.invite,
        &request.username,
        &request.password,
        request.display_name.as_deref(),
    )
    .await;

    let user = match result {
        Ok(user) => user,
        Err(RegisterError::InvalidInvite) => {
            return fail_code(
                StatusCode::FORBIDDEN,
                "invalid_invite",
                "Приглашение недействительно",
            )
        }
        Err(RegisterError::Rejected(message)) => {
            return fail_code(StatusCode::BAD_REQUEST, "rejected", message)
        }
        Err(RegisterError::Internal(error)) => {
            tracing::error!("Registration failed: {error}");
            return fail(StatusCode::INTERNAL_SERVER_ERROR, "Ошибка базы данных");
        }
    };

    match auth::create_session(&db, &user.user_id).await {
        Ok(token) => {
            let mut response = Json(json!({ "user": user })).into_response();
            if let Ok(value) = HeaderValue::from_str(&auth::session_cookie(&token)) {
                response.headers_mut().insert(header::SET_COOKIE, value);
            }
            response
        }
        Err(error) => {
            tracing::error!("Cannot create session after registration: {error}");
            fail(StatusCode::INTERNAL_SERVER_ERROR, "Ошибка сервера")
        }
    }
}

//! The signed-in user's own profile: settings, ratings, password, history.

use axum::{
    extract::State,
    http::StatusCode,
    response::{IntoResponse, Response},
    Extension, Json,
};
use serde::Deserialize;
use serde_json::{json, Value};
use std::sync::Arc;
use tokio::sync::RwLock;

use super::fail;
use crate::auth::{self, AuthUser};
use crate::AppState;

/// The `{user, settings}` payload shared by `/api/me` and `/api/session`.
pub async fn payload(state: &Arc<RwLock<AppState>>, user: &AuthUser) -> Json<Value> {
    let db = super::db(state).await;
    let row = auth::get_user_by_id(&db, &user.user_id)
        .await
        .ok()
        .flatten();
    let (lastfm_username, lastfm_connected, listenbrainz_connected, api_key, theme) = match row {
        Some(row) => (
            row.lastfm_username.clone(),
            row.lastfm_session_key.is_some(),
            row.listenbrainz_token.is_some(),
            row.api_key.clone(),
            row.theme.clone(),
        ),
        None => (None, false, false, None, None),
    };

    Json(json!({
        "user": {
            "id": user.user_id,
            "username": user.username,
            "displayName": user.name(),
            "isAdmin": user.is_admin
        },
        "settings": {
            "lastfmUsername": lastfm_username,
            "lastfmConnected": lastfm_connected,
            "listenbrainzConnected": listenbrainz_connected,
            "subsonicApiKey": api_key,
            "theme": theme.unwrap_or_else(|| "violet".to_string())
        }
    }))
}

pub async fn api_me(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
) -> Json<Value> {
    payload(&state, &user).await
}

#[derive(Deserialize)]
pub struct UpdateMeRequest {
    #[serde(default, alias = "displayName")]
    display_name: Option<String>,
    #[serde(default)]
    theme: Option<String>,
}

pub async fn api_update_me(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Json(request): Json<UpdateMeRequest>,
) -> Response {
    let db = super::db(&state).await;
    if let Some(display_name) = request.display_name.as_deref() {
        if let Err(error) = auth::update_profile(&db, &user.user_id, Some(display_name)).await {
            return fail(StatusCode::BAD_REQUEST, error.to_string());
        }
    }
    if let Some(theme) = request.theme {
        if let Err(error) = auth::set_theme(&db, &user.user_id, &theme).await {
            return fail(StatusCode::BAD_REQUEST, error.to_string());
        }
    }
    Json(json!({ "status": "ok" })).into_response()
}

#[derive(Deserialize)]
pub struct RatingRequest {
    #[serde(alias = "trackId")]
    track_id: String,
    /// 1 = like, -1 = dislike, 0 = clear.
    rating: i64,
}

pub async fn api_get_ratings(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
) -> Response {
    let db = super::db(&state).await;
    let ids = |table: &str| {
        let db = db.clone();
        let user_id = user.user_id.clone();
        let sql = format!(
            "SELECT item_id FROM {table} WHERE user_id = ? AND item_type = 'track' ORDER BY created_at DESC"
        );
        async move {
            sqlx::query_scalar::<_, String>(&sql)
                .bind(user_id)
                .fetch_all(&db)
                .await
                .unwrap_or_default()
        }
    };
    let (liked, disliked) = tokio::join!(ids("stars"), ids("dislikes"));
    Json(json!({ "liked": liked, "disliked": disliked })).into_response()
}

pub async fn api_set_rating(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Json(request): Json<RatingRequest>,
) -> Response {
    let track_id = request.track_id.trim();
    if track_id.is_empty() {
        return fail(StatusCode::BAD_REQUEST, "Не указан трек");
    }
    let db = super::db(&state).await;
    let rating = request.rating.clamp(-1, 1);
    let now = chrono::Utc::now().timestamp();

    // A track is either liked, disliked, or neither — never both.
    let result = async {
        sqlx::query("DELETE FROM stars WHERE user_id = ? AND item_id = ? AND item_type = 'track'")
            .bind(&user.user_id)
            .bind(track_id)
            .execute(&db)
            .await?;
        sqlx::query(
            "DELETE FROM dislikes WHERE user_id = ? AND item_id = ? AND item_type = 'track'",
        )
        .bind(&user.user_id)
        .bind(track_id)
        .execute(&db)
        .await?;
        match rating {
            1 => sqlx::query(
                "INSERT INTO stars (user_id, item_id, item_type, created_at) VALUES (?, ?, 'track', ?)",
            )
            .bind(&user.user_id)
            .bind(track_id)
            .bind(now)
            .execute(&db)
            .await
            .map(|_| ()),
            -1 => sqlx::query(
                "INSERT INTO dislikes (user_id, item_id, item_type, created_at) VALUES (?, ?, 'track', ?)",
            )
            .bind(&user.user_id)
            .bind(track_id)
            .bind(now)
            .execute(&db)
            .await
            .map(|_| ()),
            _ => Ok(()),
        }
    }
    .await;

    match result {
        Ok(()) => Json(json!({ "status": "ok", "rating": rating })).into_response(),
        Err(error) => fail(StatusCode::INTERNAL_SERVER_ERROR, error.to_string()),
    }
}

#[derive(Deserialize)]
pub struct ChangePasswordRequest {
    #[serde(default, alias = "currentPassword")]
    current_password: String,
    #[serde(default, alias = "newPassword")]
    new_password: String,
}

pub async fn api_change_password(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Json(request): Json<ChangePasswordRequest>,
) -> Response {
    if let Err(message) = auth::validate_password(&request.new_password) {
        return fail(StatusCode::BAD_REQUEST, message);
    }
    let db = super::db(&state).await;
    let Some(row) = auth::get_user_by_id(&db, &user.user_id)
        .await
        .ok()
        .flatten()
    else {
        return fail(StatusCode::NOT_FOUND, "Пользователь не найден");
    };
    if !auth::verify_password(&row.password_hash, &request.current_password) {
        return fail(StatusCode::BAD_REQUEST, "Текущий пароль неверен");
    }
    match auth::set_password(&db, &user.user_id, &request.new_password).await {
        Ok(()) => Json(json!({ "status": "ok" })).into_response(),
        Err(error) => fail(StatusCode::INTERNAL_SERVER_ERROR, error.to_string()),
    }
}

#[derive(Deserialize, Default)]
pub struct ScrobblingRequest {
    #[serde(default, alias = "lastfmUsername")]
    lastfm_username: Option<String>,
    #[serde(default, alias = "lastfmSessionKey")]
    lastfm_session_key: Option<String>,
    #[serde(default, alias = "listenbrainzToken")]
    listenbrainz_token: Option<String>,
}

pub async fn api_update_scrobbling(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Json(request): Json<ScrobblingRequest>,
) -> Response {
    let db = super::db(&state).await;
    match auth::set_scrobbling(
        &db,
        &user.user_id,
        request.lastfm_username.as_deref(),
        request.lastfm_session_key.as_deref(),
        request.listenbrainz_token.as_deref(),
    )
    .await
    {
        Ok(()) => Json(json!({ "status": "ok" })).into_response(),
        Err(error) => fail(StatusCode::INTERNAL_SERVER_ERROR, error.to_string()),
    }
}

pub async fn api_clear_history(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
) -> Response {
    let db = super::db(&state).await;
    match sqlx::query("DELETE FROM plays WHERE user_id = ?")
        .bind(&user.user_id)
        .execute(&db)
        .await
    {
        Ok(_) => Json(json!({ "status": "ok" })).into_response(),
        Err(error) => fail(StatusCode::INTERNAL_SERVER_ERROR, error.to_string()),
    }
}

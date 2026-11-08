use anyhow::{anyhow, Result};
use argon2::{
    password_hash::{
        rand_core::OsRng as HashOsRng, PasswordHash, PasswordHasher, PasswordVerifier, SaltString,
    },
    Argon2,
};
use axum::http::{header, HeaderMap};
use base64::{engine::general_purpose::STANDARD, Engine};
use chacha20poly1305::{
    aead::{Aead, KeyInit},
    XChaCha20Poly1305, XNonce,
};
use md5::{Digest, Md5};
use rand::RngCore;
use serde::Serialize;
use sqlx::SqlitePool;
use std::collections::HashMap;

pub const SESSION_COOKIE: &str = "rustream_session";
const SESSION_TTL_SECS: i64 = 60 * 60 * 24 * 90;

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct AuthUser {
    #[serde(rename = "id")]
    pub user_id: String,
    pub username: String,
    pub display_name: Option<String>,
    pub is_admin: bool,
}

impl AuthUser {
    pub fn name(&self) -> &str {
        self.display_name.as_deref().unwrap_or(&self.username)
    }
}

#[derive(Debug, Clone, sqlx::FromRow)]
pub struct UserRow {
    pub user_id: String,
    pub username: String,
    pub password_hash: String,
    pub password_enc: String,
    pub display_name: Option<String>,
    pub is_admin: i64,
    pub api_key: Option<String>,
    pub lastfm_username: Option<String>,
    pub lastfm_session_key: Option<String>,
    pub lastfm_token: Option<String>,
    pub listenbrainz_token: Option<String>,
    pub theme: Option<String>,
    pub data_saver: i64,
}

impl UserRow {
    fn to_auth(&self) -> AuthUser {
        AuthUser {
            user_id: self.user_id.clone(),
            username: self.username.clone(),
            display_name: self.display_name.clone(),
            is_admin: self.is_admin != 0,
        }
    }
}

pub async fn ensure_admin(pool: &SqlitePool) -> Result<()> {
    let count: i64 = sqlx::query_scalar("SELECT COUNT(*) FROM users")
        .fetch_one(pool)
        .await?;

    let env_password = std::env::var("RUSTREAM_ADMIN_PASSWORD").ok();
    let password = env_password.clone().unwrap_or_else(|| "admin".to_string());
    if count == 0 {
        // Bootstrap account: bypasses the password policy on purpose, so the
        // well-known default works until the admin changes it.
        let key = secret_key(pool).await?;
        let user_id = uuid::Uuid::new_v4().simple().to_string();
        sqlx::query(
            "INSERT INTO users
             (user_id, username, subsonic_token, password_hash, password_enc, display_name, is_admin, api_key, created_at)
             VALUES (?, 'admin', ?, ?, ?, 'Администратор', 1, ?, ?)",
        )
        .bind(&user_id)
        .bind(random_hex(24))
        .bind(hash_password(&password)?)
        .bind(encrypt_with(&key, &password)?)
        .bind(random_hex(24))
        .bind(chrono::Utc::now().timestamp())
        .execute(pool)
        .await?;
        if env_password.is_some() {
            tracing::info!("Created admin user 'admin' (password from RUSTREAM_ADMIN_PASSWORD)");
        } else {
            tracing::warn!(
                "Created admin user 'admin' with the default password. Change it in the profile."
            );
        }
    } else if let Some(user) = get_user_by_username(pool, "admin").await? {
        // Upgrade a legacy admin row that predates password auth.
        if user.password_hash.is_empty() || user.password_enc.is_empty() {
            set_password(pool, &user.user_id, &password).await?;
            tracing::warn!(
                "Set a password for legacy admin user 'admin'. Change it in the profile."
            );
        }
    }

    if let Some(admin) = get_user_by_username(pool, "admin").await? {
        migrate_legacy_data(pool, &admin.user_id).await?;
    }

    Ok(())
}

async fn migrate_legacy_data(pool: &SqlitePool, admin_id: &str) -> Result<()> {
    // Favourites from the single-user era belong to the admin.
    let legacy_exists: Option<(String,)> = sqlx::query_as(
        "SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'stars_legacy'",
    )
    .fetch_optional(pool)
    .await?;

    if legacy_exists.is_some() {
        sqlx::query(
            "INSERT OR IGNORE INTO stars (user_id, item_id, item_type, created_at)
             SELECT ?, item_id, item_type, created_at FROM stars_legacy",
        )
        .bind(admin_id)
        .execute(pool)
        .await?;
        sqlx::query("DROP TABLE stars_legacy").execute(pool).await?;
    }

    sqlx::query("UPDATE playlists SET user_id = ? WHERE user_id IS NULL OR user_id = ''")
        .bind(admin_id)
        .execute(pool)
        .await?;

    Ok(())
}

pub const MIN_PASSWORD_LEN: usize = 6;

#[derive(Debug)]
pub enum CreateUserError {
    Invalid(String),
    Taken,
    Internal(anyhow::Error),
}

impl std::fmt::Display for CreateUserError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::Invalid(message) => f.write_str(message),
            Self::Taken => f.write_str("Это имя пользователя уже занято"),
            Self::Internal(error) => write!(f, "{error}"),
        }
    }
}

impl From<sqlx::Error> for CreateUserError {
    fn from(error: sqlx::Error) -> Self {
        match &error {
            sqlx::Error::Database(db) if db.is_unique_violation() => Self::Taken,
            _ => Self::Internal(error.into()),
        }
    }
}

pub fn validate_username(username: &str) -> Result<(), String> {
    let length = username.chars().count();
    if !(3..=32).contains(&length) {
        return Err("Имя пользователя должно быть от 3 до 32 символов".into());
    }
    if !username
        .chars()
        .all(|c| c.is_alphanumeric() || c == '_' || c == '-' || c == '.')
    {
        return Err(
            "В имени пользователя допустимы буквы, цифры, точка, дефис и подчёркивание".into(),
        );
    }
    Ok(())
}

pub fn validate_password(password: &str) -> Result<(), String> {
    if password.chars().count() < MIN_PASSWORD_LEN {
        return Err(format!(
            "Пароль должен быть не короче {MIN_PASSWORD_LEN} символов"
        ));
    }
    Ok(())
}

pub async fn create_user(
    pool: &SqlitePool,
    username: &str,
    password: &str,
    display_name: Option<&str>,
    is_admin: bool,
) -> Result<AuthUser, CreateUserError> {
    let key = secret_key(pool).await.map_err(CreateUserError::Internal)?;
    let mut tx = pool.begin().await?;
    let user = insert_user(&mut tx, &key, username, password, display_name, is_admin).await?;
    tx.commit().await?;
    Ok(user)
}

/// Create a user inside an existing transaction (used by invite sign-up).
/// The encryption key is read before the transaction, so this never needs a
/// second connection while the transaction holds the write lock.
pub async fn create_user_in(
    tx: &mut sqlx::Transaction<'_, sqlx::Sqlite>,
    key: &[u8; 32],
    username: &str,
    password: &str,
    display_name: Option<&str>,
    is_admin: bool,
) -> Result<AuthUser, CreateUserError> {
    insert_user(tx, key, username, password, display_name, is_admin).await
}

async fn insert_user(
    tx: &mut sqlx::Transaction<'_, sqlx::Sqlite>,
    key: &[u8; 32],
    username: &str,
    password: &str,
    display_name: Option<&str>,
    is_admin: bool,
) -> Result<AuthUser, CreateUserError> {
    let username = username.trim();
    validate_username(username).map_err(CreateUserError::Invalid)?;
    validate_password(password).map_err(CreateUserError::Invalid)?;

    let user_id = uuid::Uuid::new_v4().simple().to_string();
    let password_hash = hash_password(password).map_err(CreateUserError::Internal)?;
    let password_enc = encrypt_with(key, password).map_err(CreateUserError::Internal)?;
    let display_name = display_name
        .map(str::trim)
        .filter(|name| !name.is_empty())
        .map(|name| name.chars().take(64).collect::<String>());
    let now = chrono::Utc::now().timestamp();

    sqlx::query(
        "INSERT INTO users
         (user_id, username, subsonic_token, password_hash, password_enc, display_name, is_admin, api_key, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    )
    .bind(&user_id)
    .bind(username)
    .bind(random_hex(24))
    .bind(&password_hash)
    .bind(&password_enc)
    .bind(&display_name)
    .bind(is_admin as i64)
    .bind(random_hex(24))
    .bind(now)
    .execute(&mut **tx)
    .await?;

    Ok(AuthUser {
        user_id,
        username: username.to_string(),
        display_name,
        is_admin,
    })
}

pub async fn get_user_by_username(pool: &SqlitePool, username: &str) -> Result<Option<UserRow>> {
    Ok(sqlx::query_as::<_, UserRow>(
        "SELECT user_id, username, password_hash, password_enc, display_name, is_admin,
                api_key, lastfm_username, lastfm_session_key, lastfm_token, listenbrainz_token, theme,
                data_saver
         FROM users WHERE username = ? COLLATE NOCASE",
    )
    .bind(username.trim())
    .fetch_optional(pool)
    .await?)
}

pub async fn get_user_by_id(pool: &SqlitePool, user_id: &str) -> Result<Option<UserRow>> {
    Ok(sqlx::query_as::<_, UserRow>(
        "SELECT user_id, username, password_hash, password_enc, display_name, is_admin,
                api_key, lastfm_username, lastfm_session_key, lastfm_token, listenbrainz_token, theme,
                data_saver
         FROM users WHERE user_id = ?",
    )
    .bind(user_id)
    .fetch_optional(pool)
    .await?)
}

pub async fn list_users(pool: &SqlitePool) -> Result<Vec<AuthUser>> {
    let rows: Vec<(String, String, Option<String>, i64)> = sqlx::query_as(
        "SELECT user_id, username, display_name, is_admin FROM users ORDER BY username COLLATE NOCASE",
    )
    .fetch_all(pool)
    .await?;
    Ok(rows
        .into_iter()
        .map(|(user_id, username, display_name, is_admin)| AuthUser {
            user_id,
            username,
            display_name,
            is_admin: is_admin != 0,
        })
        .collect())
}

pub async fn verify_login(
    pool: &SqlitePool,
    username: &str,
    password: &str,
) -> Result<Option<AuthUser>> {
    let Some(user) = get_user_by_username(pool, username).await? else {
        return Ok(None);
    };
    if verify_password(&user.password_hash, password) {
        Ok(Some(user.to_auth()))
    } else {
        Ok(None)
    }
}

pub async fn set_password(pool: &SqlitePool, user_id: &str, password: &str) -> Result<()> {
    let hash = hash_password(password)?;
    let enc = encrypt_secret(pool, password).await?;
    sqlx::query("UPDATE users SET password_hash = ?, password_enc = ? WHERE user_id = ?")
        .bind(hash)
        .bind(enc)
        .bind(user_id)
        .execute(pool)
        .await?;
    Ok(())
}

pub async fn update_profile(
    pool: &SqlitePool,
    user_id: &str,
    display_name: Option<&str>,
) -> Result<()> {
    sqlx::query("UPDATE users SET display_name = ? WHERE user_id = ?")
        .bind(display_name.map(|s| s.trim()).filter(|s| !s.is_empty()))
        .bind(user_id)
        .execute(pool)
        .await?;
    Ok(())
}

/// A preset id, `#rrggbb`, or empty (default theme).
pub fn is_valid_theme(theme: &str) -> bool {
    if matches!(
        theme,
        "" | "violet" | "ocean" | "sunset" | "forest" | "mono"
    ) {
        return true;
    }
    theme
        .strip_prefix('#')
        .is_some_and(|hex| hex.len() == 6 && hex.bytes().all(|b| b.is_ascii_hexdigit()))
}

/// Traffic saver: YouTube audio is requested at the lowest usable bitrate.
pub async fn set_data_saver(pool: &SqlitePool, user_id: &str, enabled: bool) -> Result<()> {
    sqlx::query("UPDATE users SET data_saver = ? WHERE user_id = ?")
        .bind(i64::from(enabled))
        .bind(user_id)
        .execute(pool)
        .await?;
    Ok(())
}

pub async fn data_saver(pool: &SqlitePool, user_id: &str) -> bool {
    sqlx::query_scalar::<_, i64>("SELECT data_saver FROM users WHERE user_id = ?")
        .bind(user_id)
        .fetch_optional(pool)
        .await
        .ok()
        .flatten()
        .unwrap_or(0)
        != 0
}

pub async fn set_theme(pool: &SqlitePool, user_id: &str, theme: &str) -> Result<()> {
    let theme = theme.trim();
    if !is_valid_theme(theme) {
        return Err(anyhow!("Неизвестная тема"));
    }
    sqlx::query("UPDATE users SET theme = NULLIF(?, '') WHERE user_id = ?")
        .bind(theme)
        .bind(user_id)
        .execute(pool)
        .await?;
    Ok(())
}

pub async fn set_scrobbling(
    pool: &SqlitePool,
    user_id: &str,
    lastfm_username: Option<&str>,
    lastfm_session_key: Option<&str>,
    listenbrainz_token: Option<&str>,
) -> Result<()> {
    // Empty fields mean "keep the current value"; use the dedicated
    // disconnect endpoints to remove a credential.
    sqlx::query(
        "UPDATE users SET
            lastfm_username = COALESCE(NULLIF(?, ''), lastfm_username),
            lastfm_session_key = COALESCE(NULLIF(?, ''), lastfm_session_key),
            listenbrainz_token = COALESCE(NULLIF(?, ''), listenbrainz_token)
         WHERE user_id = ?",
    )
    .bind(lastfm_username.map(str::trim).unwrap_or(""))
    .bind(lastfm_session_key.map(str::trim).unwrap_or(""))
    .bind(listenbrainz_token.map(str::trim).unwrap_or(""))
    .bind(user_id)
    .execute(pool)
    .await?;
    Ok(())
}

pub async fn set_lastfm_token(pool: &SqlitePool, user_id: &str, token: &str) -> Result<()> {
    sqlx::query("UPDATE users SET lastfm_token = ? WHERE user_id = ?")
        .bind(token)
        .bind(user_id)
        .execute(pool)
        .await?;
    Ok(())
}

pub async fn set_lastfm_session(
    pool: &SqlitePool,
    user_id: &str,
    session_key: &str,
    username: Option<&str>,
) -> Result<()> {
    sqlx::query("UPDATE users SET lastfm_session_key = ?, lastfm_username = ?, lastfm_token = NULL WHERE user_id = ?")
        .bind(session_key)
        .bind(username.map(str::trim).filter(|s| !s.is_empty()))
        .bind(user_id)
        .execute(pool)
        .await?;
    Ok(())
}

pub async fn create_session(pool: &SqlitePool, user_id: &str) -> Result<String> {
    let token = random_hex(32);
    let now = chrono::Utc::now().timestamp();
    sqlx::query(
        "INSERT INTO sessions (token, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)",
    )
    .bind(&token)
    .bind(user_id)
    .bind(now)
    .bind(now + SESSION_TTL_SECS)
    .execute(pool)
    .await?;
    Ok(token)
}

pub async fn delete_session(pool: &SqlitePool, token: &str) -> Result<()> {
    sqlx::query("DELETE FROM sessions WHERE token = ?")
        .bind(token)
        .execute(pool)
        .await?;
    Ok(())
}

pub async fn user_from_session(pool: &SqlitePool, token: &str) -> Option<AuthUser> {
    let now = chrono::Utc::now().timestamp();
    let row: Option<(String, i64)> = sqlx::query_as(
        "SELECT user_id, expires_at FROM sessions WHERE token = ? AND expires_at > ?",
    )
    .bind(token)
    .bind(now)
    .fetch_optional(pool)
    .await
    .ok()?;
    let (user_id, expires_at) = row?;
    // Sliding session: a session used at least once in its lifetime is
    // extended, so an active listener never has to log in again.
    if expires_at - now < SESSION_TTL_SECS / 2 {
        sqlx::query("UPDATE sessions SET expires_at = ? WHERE token = ?")
            .bind(now + SESSION_TTL_SECS)
            .bind(token)
            .execute(pool)
            .await
            .ok();
    }
    get_user_by_id(pool, &user_id)
        .await
        .ok()
        .flatten()
        .map(|user| user.to_auth())
}

pub async fn user_from_headers(pool: &SqlitePool, headers: &HeaderMap) -> Option<AuthUser> {
    let token = cookie_value(headers, SESSION_COOKIE)?;
    user_from_session(pool, &token).await
}

pub fn cookie_value(headers: &HeaderMap, name: &str) -> Option<String> {
    let raw = headers.get(header::COOKIE)?.to_str().ok()?;
    for part in raw.split(';') {
        let part = part.trim();
        let Some((key, value)) = part.split_once('=') else {
            continue;
        };
        if key.trim() == name {
            return Some(value.trim().to_string());
        }
    }
    None
}

pub fn session_cookie(token: &str) -> String {
    format!(
        "{}={}; Path=/; HttpOnly; SameSite=Lax; Max-Age={}",
        SESSION_COOKIE, token, SESSION_TTL_SECS
    )
}

pub fn clear_session_cookie() -> String {
    format!(
        "{}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0",
        SESSION_COOKIE
    )
}

/// Authenticate a Subsonic request. Supports:
/// - the browser session cookie,
/// - HTTP Basic auth,
/// - `u` + `p` (plain or `enc:` hex),
/// - `u` + `t` + `s` (token),
/// - `u` + `apiKey`.
pub async fn authenticate_subsonic(
    pool: &SqlitePool,
    params: &HashMap<String, String>,
    headers: &HeaderMap,
) -> Option<AuthUser> {
    if let Some(user) = user_from_headers(pool, headers).await {
        return Some(user);
    }

    if let Some((username, password)) = basic_auth(headers) {
        if let Some(user) = get_user_by_username(pool, &username).await.ok().flatten() {
            if verify_password(&user.password_hash, &password) {
                return Some(user.to_auth());
            }
        }
    }

    let username = params.get("u").or_else(|| params.get("username"))?.trim();
    let user = get_user_by_username(pool, username).await.ok().flatten()?;

    if let Some(api_key) = params.get("apiKey").or_else(|| params.get("api_key")) {
        if user.api_key.as_deref() == Some(api_key.trim()) {
            return Some(user.to_auth());
        }
    }

    if let Some(token) = params.get("t") {
        let salt = params.get("s")?.trim();
        let password = decrypt_secret(pool, &user.password_enc).await.ok()?;
        let mut hasher = Md5::new();
        hasher.update(format!("{}{}", password, salt).as_bytes());
        let digest = hex::encode(hasher.finalize());
        if digest.eq_ignore_ascii_case(token.trim()) {
            return Some(user.to_auth());
        }
    }

    if let Some(password) = params.get("p") {
        let password = password.trim();
        let password = if let Some(encoded) = password.strip_prefix("enc:") {
            String::from_utf8(hex::decode(encoded).ok()?).ok()?
        } else {
            password.to_string()
        };
        if verify_password(&user.password_hash, &password) {
            return Some(user.to_auth());
        }
    }

    None
}

fn basic_auth(headers: &HeaderMap) -> Option<(String, String)> {
    let value = headers.get(header::AUTHORIZATION)?.to_str().ok()?;
    let encoded = value
        .strip_prefix("Basic ")
        .or_else(|| value.strip_prefix("basic "))?;
    let decoded = STANDARD.decode(encoded.trim()).ok()?;
    let decoded = String::from_utf8(decoded).ok()?;
    let (username, password) = decoded.split_once(':')?;
    Some((username.to_string(), password.to_string()))
}

pub fn hash_password(password: &str) -> Result<String> {
    let salt = SaltString::generate(&mut HashOsRng);
    Argon2::default()
        .hash_password(password.as_bytes(), &salt)
        .map(|hash| hash.to_string())
        .map_err(|e| anyhow!("password hash error: {e}"))
}

pub fn verify_password(hash: &str, password: &str) -> bool {
    let Ok(parsed) = PasswordHash::new(hash) else {
        return false;
    };
    Argon2::default()
        .verify_password(password.as_bytes(), &parsed)
        .is_ok()
}

pub async fn secret_key(pool: &SqlitePool) -> Result<[u8; 32]> {
    if let Some((value,)) =
        sqlx::query_as::<_, (String,)>("SELECT value FROM app_settings WHERE key = 'secret_key'")
            .fetch_optional(pool)
            .await?
    {
        let bytes = STANDARD.decode(value)?;
        if bytes.len() == 32 {
            let mut key = [0u8; 32];
            key.copy_from_slice(&bytes);
            return Ok(key);
        }
    }

    // INSERT OR IGNORE + re-read: two concurrent first calls must agree on
    // one key, otherwise secrets encrypted by the loser become unreadable.
    let mut key = [0u8; 32];
    rand::rngs::OsRng.fill_bytes(&mut key);
    sqlx::query("INSERT OR IGNORE INTO app_settings (key, value) VALUES ('secret_key', ?)")
        .bind(STANDARD.encode(key))
        .execute(pool)
        .await?;
    let (value,): (String,) =
        sqlx::query_as("SELECT value FROM app_settings WHERE key = 'secret_key'")
            .fetch_one(pool)
            .await?;
    let bytes = STANDARD.decode(value)?;
    bytes
        .try_into()
        .map_err(|_| anyhow!("app_settings.secret_key has an invalid length"))
}

fn encrypt_with(key: &[u8; 32], plaintext: &str) -> Result<String> {
    let cipher = XChaCha20Poly1305::new(key.into());
    let mut nonce = [0u8; 24];
    rand::rngs::OsRng.fill_bytes(&mut nonce);
    let encrypted = cipher
        .encrypt(XNonce::from_slice(&nonce), plaintext.as_bytes())
        .map_err(|_| anyhow!("encryption failed"))?;
    let mut output = nonce.to_vec();
    output.extend(encrypted);
    Ok(STANDARD.encode(output))
}

/// Encrypt a secret (Subsonic password copy, YouTube cookies) with the
/// server key stored in `app_settings`.
pub async fn encrypt_secret(pool: &SqlitePool, plaintext: &str) -> Result<String> {
    encrypt_with(&secret_key(pool).await?, plaintext)
}

pub async fn decrypt_secret(pool: &SqlitePool, encrypted: &str) -> Result<String> {
    let raw = STANDARD.decode(encrypted)?;
    if raw.len() <= 24 {
        return Err(anyhow!("stored secret is invalid"));
    }
    let key = secret_key(pool).await?;
    let cipher = XChaCha20Poly1305::new((&key).into());
    let (nonce, ciphertext) = raw.split_at(24);
    let plaintext = cipher
        .decrypt(XNonce::from_slice(nonce), ciphertext)
        .map_err(|_| anyhow!("decryption failed"))?;
    Ok(String::from_utf8(plaintext)?)
}

pub fn random_hex(bytes: usize) -> String {
    let mut buffer = vec![0u8; bytes];
    rand::rngs::OsRng.fill_bytes(&mut buffer);
    hex::encode(buffer)
}

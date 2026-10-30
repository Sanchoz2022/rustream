//! Invite codes: an admin issues a code, the invitee picks their own
//! username and password with it.

use anyhow::{anyhow, Result};
use serde::Serialize;
use sqlx::SqlitePool;

use crate::auth::{self, AuthUser};

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Invite {
    pub code: String,
    pub note: Option<String>,
    pub created_by: String,
    pub created_at: i64,
    pub expires_at: Option<i64>,
    pub max_uses: i64,
    pub uses: i64,
    pub is_admin: bool,
    pub valid: bool,
}

type InviteRow = (
    String,
    Option<String>,
    String,
    i64,
    Option<i64>,
    i64,
    i64,
    i64,
);

fn from_row(row: InviteRow, now: i64) -> Invite {
    let (code, note, created_by, created_at, expires_at, max_uses, uses, is_admin) = row;
    Invite {
        valid: expires_at.is_none_or(|at| at > now) && (max_uses == 0 || uses < max_uses),
        code,
        note,
        created_by,
        created_at,
        expires_at,
        max_uses,
        uses,
        is_admin: is_admin != 0,
    }
}

const SELECT: &str = "SELECT i.code, i.note, COALESCE(u.username, '?'), i.created_at, i.expires_at,
                             i.max_uses, i.uses, i.is_admin
                      FROM invites i LEFT JOIN users u ON u.user_id = i.created_by";

pub struct NewInvite {
    pub note: Option<String>,
    pub expires_in_days: i64,
    pub max_uses: i64,
    pub is_admin: bool,
}

pub async fn create(pool: &SqlitePool, admin: &AuthUser, request: NewInvite) -> Result<Invite> {
    if !(0..=365).contains(&request.expires_in_days) {
        return Err(anyhow!("Срок действия: от 0 до 365 дней"));
    }
    if !(0..=1000).contains(&request.max_uses) {
        return Err(anyhow!("Число использований: от 0 до 1000"));
    }
    let now = chrono::Utc::now().timestamp();
    // 16 random bytes: unguessable, still short enough to paste by hand.
    let code = auth::random_hex(16);
    let expires_at = (request.expires_in_days > 0).then(|| now + request.expires_in_days * 86_400);
    let note = request
        .note
        .map(|note| note.trim().chars().take(200).collect::<String>())
        .filter(|note| !note.is_empty());

    sqlx::query(
        "INSERT INTO invites (code, note, created_by, created_at, expires_at, max_uses, uses, is_admin)
         VALUES (?, ?, ?, ?, ?, ?, 0, ?)",
    )
    .bind(&code)
    .bind(&note)
    .bind(&admin.user_id)
    .bind(now)
    .bind(expires_at)
    .bind(request.max_uses)
    .bind(request.is_admin as i64)
    .execute(pool)
    .await?;

    get(pool, &code)
        .await?
        .ok_or_else(|| anyhow!("invite not stored"))
}

pub async fn list(pool: &SqlitePool) -> Result<Vec<Invite>> {
    let now = chrono::Utc::now().timestamp();
    let rows: Vec<InviteRow> = sqlx::query_as(&format!("{SELECT} ORDER BY i.created_at DESC"))
        .fetch_all(pool)
        .await?;
    Ok(rows.into_iter().map(|row| from_row(row, now)).collect())
}

pub async fn get(pool: &SqlitePool, code: &str) -> Result<Option<Invite>> {
    let now = chrono::Utc::now().timestamp();
    let row: Option<InviteRow> = sqlx::query_as(&format!("{SELECT} WHERE i.code = ?"))
        .bind(code.trim())
        .fetch_optional(pool)
        .await?;
    Ok(row.map(|row| from_row(row, now)))
}

pub async fn revoke(pool: &SqlitePool, code: &str) -> Result<bool> {
    let result = sqlx::query("DELETE FROM invites WHERE code = ?")
        .bind(code.trim())
        .execute(pool)
        .await?;
    Ok(result.rows_affected() > 0)
}

#[derive(Debug)]
pub enum RegisterError {
    InvalidInvite,
    Rejected(String),
    Internal(anyhow::Error),
}

/// Consume one use of the invite and create the account atomically, so a
/// single-use code cannot register two accounts in a race.
pub async fn register(
    pool: &SqlitePool,
    code: &str,
    username: &str,
    password: &str,
    display_name: Option<&str>,
) -> Result<AuthUser, RegisterError> {
    auth::validate_username(username.trim()).map_err(RegisterError::Rejected)?;
    auth::validate_password(password).map_err(RegisterError::Rejected)?;
    let key = auth::secret_key(pool)
        .await
        .map_err(RegisterError::Internal)?;
    let now = chrono::Utc::now().timestamp();
    let mut tx = pool
        .begin()
        .await
        .map_err(|error| RegisterError::Internal(error.into()))?;

    let claimed: Option<(i64,)> = sqlx::query_as(
        "UPDATE invites SET uses = uses + 1
         WHERE code = ? AND (expires_at IS NULL OR expires_at > ?) AND (max_uses = 0 OR uses < max_uses)
         RETURNING is_admin",
    )
    .bind(code.trim())
    .bind(now)
    .fetch_optional(&mut *tx)
    .await
    .map_err(|error| RegisterError::Internal(error.into()))?;
    let Some((is_admin,)) = claimed else {
        return Err(RegisterError::InvalidInvite);
    };

    let user = auth::create_user_in(
        &mut tx,
        &key,
        username,
        password,
        display_name,
        is_admin != 0,
    )
    .await
    .map_err(|error| match error {
        auth::CreateUserError::Invalid(message) => RegisterError::Rejected(message),
        auth::CreateUserError::Taken => {
            RegisterError::Rejected("Это имя пользователя уже занято".into())
        }
        auth::CreateUserError::Internal(error) => RegisterError::Internal(error),
    })?;

    tx.commit()
        .await
        .map_err(|error| RegisterError::Internal(error.into()))?;
    Ok(user)
}

#[cfg(test)]
mod tests {
    use super::*;

    async fn pool() -> SqlitePool {
        let pool = crate::db::test_pool().await;
        auth::ensure_admin(&pool).await.unwrap();
        pool
    }

    async fn admin(pool: &SqlitePool) -> AuthUser {
        auth::verify_login(pool, "admin", "admin")
            .await
            .unwrap()
            .unwrap()
    }

    #[tokio::test]
    async fn single_use_invite_registers_once() {
        let pool = pool().await;
        let admin = admin(&pool).await;
        let invite = create(
            &pool,
            &admin,
            NewInvite {
                note: Some("friend".into()),
                expires_in_days: 7,
                max_uses: 1,
                is_admin: false,
            },
        )
        .await
        .unwrap();
        assert!(invite.valid);
        assert_eq!(invite.created_by, "admin");

        let user = register(&pool, &invite.code, "alice", "secret1", Some("Alice"))
            .await
            .unwrap();
        assert_eq!(user.username, "alice");
        assert!(!user.is_admin);
        assert!(auth::verify_login(&pool, "alice", "secret1")
            .await
            .unwrap()
            .is_some());

        let again = register(&pool, &invite.code, "bob", "secret1", None).await;
        assert!(matches!(again, Err(RegisterError::InvalidInvite)));
        assert!(!get(&pool, &invite.code).await.unwrap().unwrap().valid);
    }

    #[tokio::test]
    async fn rejected_registration_does_not_consume_invite() {
        let pool = pool().await;
        let admin = admin(&pool).await;
        let invite = create(
            &pool,
            &admin,
            NewInvite {
                note: None,
                expires_in_days: 0,
                max_uses: 1,
                is_admin: true,
            },
        )
        .await
        .unwrap();
        assert_eq!(invite.expires_at, None);

        let taken = register(&pool, &invite.code, "ADMIN", "secret1", None).await;
        assert!(matches!(taken, Err(RegisterError::Rejected(_))));
        let short = register(&pool, &invite.code, "carol", "123", None).await;
        assert!(matches!(short, Err(RegisterError::Rejected(_))));

        let user = register(&pool, &invite.code, "carol", "secret1", None)
            .await
            .unwrap();
        assert!(user.is_admin);
    }

    #[tokio::test]
    async fn unknown_or_revoked_invite_is_rejected() {
        let pool = pool().await;
        let admin = admin(&pool).await;
        let missing = register(&pool, "nope", "dave", "secret1", None).await;
        assert!(matches!(missing, Err(RegisterError::InvalidInvite)));

        let invite = create(
            &pool,
            &admin,
            NewInvite {
                note: None,
                expires_in_days: 1,
                max_uses: 0,
                is_admin: false,
            },
        )
        .await
        .unwrap();
        assert!(revoke(&pool, &invite.code).await.unwrap());
        let revoked = register(&pool, &invite.code, "dave", "secret1", None).await;
        assert!(matches!(revoked, Err(RegisterError::InvalidInvite)));
    }
}

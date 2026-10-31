use anyhow::Result;
use sqlx::{sqlite::SqliteConnectOptions, SqlitePool};
use std::str::FromStr;

pub async fn init(db_path: &str) -> Result<SqlitePool> {
    let options = SqliteConnectOptions::from_str(db_path)?
        .create_if_missing(true)
        .journal_mode(sqlx::sqlite::SqliteJournalMode::Wal)
        .busy_timeout(std::time::Duration::from_secs(10));

    let pool = SqlitePool::connect_with(options).await?;
    Ok(pool)
}

/// Migrated in-memory database. One connection, because every SQLite
/// `:memory:` connection is a separate database.
#[cfg(test)]
pub async fn test_pool() -> SqlitePool {
    let pool = sqlx::sqlite::SqlitePoolOptions::new()
        .max_connections(1)
        .connect("sqlite::memory:")
        .await
        .expect("in-memory sqlite");
    run_migrations(&pool).await.expect("migrations");
    pool
}

pub async fn run_migrations(pool: &SqlitePool) -> Result<()> {
    sqlx::query(
        r#"
        CREATE TABLE IF NOT EXISTS users (
            user_id TEXT PRIMARY KEY,
            username TEXT NOT NULL UNIQUE,
            subsonic_token TEXT NOT NULL DEFAULT '',
            yt_cookies_json TEXT,
            password_hash TEXT NOT NULL DEFAULT '',
            password_enc TEXT NOT NULL DEFAULT '',
            display_name TEXT,
            is_admin INTEGER NOT NULL DEFAULT 0,
            api_key TEXT,
            lastfm_username TEXT,
            lastfm_session_key TEXT,
            lastfm_token TEXT,
            listenbrainz_token TEXT,
            created_at INTEGER NOT NULL
        );

        CREATE TABLE IF NOT EXISTS app_settings (
            key TEXT PRIMARY KEY,
            value TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS sessions (
            token TEXT PRIMARY KEY,
            user_id TEXT NOT NULL,
            created_at INTEGER NOT NULL,
            expires_at INTEGER NOT NULL
        );

        CREATE TABLE IF NOT EXISTS artists (
            artist_id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            album_count INTEGER DEFAULT 0,
            created_at INTEGER NOT NULL
        );

        CREATE TABLE IF NOT EXISTS albums (
            album_id TEXT PRIMARY KEY,
            artist_id TEXT NOT NULL,
            title TEXT NOT NULL,
            year INTEGER,
            genre TEXT,
            cover_path TEXT,
            track_count INTEGER DEFAULT 0,
            duration_ms INTEGER DEFAULT 0,
            created_at INTEGER NOT NULL,
            FOREIGN KEY (artist_id) REFERENCES artists(artist_id)
        );

        CREATE TABLE IF NOT EXISTS tracks (
            track_id TEXT PRIMARY KEY,
            album_id TEXT NOT NULL,
            artist_id TEXT NOT NULL,
            title TEXT NOT NULL,
            track_number INTEGER,
            duration_ms INTEGER NOT NULL,
            file_path TEXT NOT NULL,
            file_size INTEGER NOT NULL,
            is_cue_virtual INTEGER DEFAULT 0,
            cue_start_ms INTEGER,
            cue_end_ms INTEGER,
            bitrate INTEGER,
            sample_rate INTEGER,
            channels INTEGER,
            suffix TEXT NOT NULL DEFAULT 'flac',
            content_type TEXT NOT NULL DEFAULT 'audio/flac',
            created_at INTEGER NOT NULL,
            FOREIGN KEY (album_id) REFERENCES albums(album_id),
            FOREIGN KEY (artist_id) REFERENCES artists(artist_id)
        );

        CREATE TABLE IF NOT EXISTS playlists (
            playlist_id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            owner TEXT NOT NULL DEFAULT 'admin',
            user_id TEXT,
            comment TEXT,
            created_at INTEGER NOT NULL,
            changed_at INTEGER NOT NULL
        );

        CREATE TABLE IF NOT EXISTS playlist_tracks (
            playlist_id TEXT NOT NULL,
            track_id TEXT NOT NULL,
            position INTEGER NOT NULL,
            PRIMARY KEY (playlist_id, position),
            FOREIGN KEY (playlist_id) REFERENCES playlists(playlist_id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS stars (
            user_id TEXT NOT NULL,
            item_id TEXT NOT NULL,
            item_type TEXT NOT NULL,
            created_at INTEGER NOT NULL,
            PRIMARY KEY (user_id, item_id, item_type)
        );

        CREATE TABLE IF NOT EXISTS dislikes (
            user_id TEXT NOT NULL,
            item_id TEXT NOT NULL,
            item_type TEXT NOT NULL DEFAULT 'track',
            created_at INTEGER NOT NULL,
            PRIMARY KEY (user_id, item_id, item_type)
        );

        CREATE TABLE IF NOT EXISTS plays (
            play_id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id TEXT NOT NULL,
            track_id TEXT NOT NULL,
            started_at INTEGER NOT NULL,
            ended_at INTEGER,
            position_ms INTEGER NOT NULL DEFAULT 0,
            duration_ms INTEGER NOT NULL DEFAULT 0,
            completed INTEGER NOT NULL DEFAULT 0,
            scrobbled INTEGER NOT NULL DEFAULT 0,
            source TEXT NOT NULL DEFAULT 'web'
        );

        CREATE TABLE IF NOT EXISTS lyrics_cache (
            track_id TEXT PRIMARY KEY,
            plain TEXT,
            synced TEXT,
            source TEXT NOT NULL,
            fetched_at INTEGER NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ytm_cache (
            ytm_id TEXT PRIMARY KEY,
            user_id TEXT NOT NULL,
            title TEXT NOT NULL,
            artist TEXT NOT NULL,
            duration_ms INTEGER NOT NULL,
            stream_url TEXT NOT NULL,
            cached_file_path TEXT,
            expires_at INTEGER NOT NULL,
            created_at INTEGER NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users(user_id)
        );

        CREATE TABLE IF NOT EXISTS invites (
            code TEXT PRIMARY KEY,
            note TEXT,
            created_by TEXT NOT NULL,
            created_at INTEGER NOT NULL,
            expires_at INTEGER,
            max_uses INTEGER NOT NULL DEFAULT 1,
            uses INTEGER NOT NULL DEFAULT 0,
            is_admin INTEGER NOT NULL DEFAULT 0
        );

        CREATE TABLE IF NOT EXISTS ytm_tracks (
            user_id TEXT NOT NULL,
            video_id TEXT NOT NULL,
            title TEXT NOT NULL,
            artist TEXT NOT NULL,
            album TEXT NOT NULL DEFAULT '',
            duration_ms INTEGER NOT NULL DEFAULT 0,
            thumbnail TEXT NOT NULL DEFAULT '',
            file_path TEXT,
            file_size INTEGER,
            created_at INTEGER NOT NULL,
            last_used_at INTEGER NOT NULL,
            PRIMARY KEY (user_id, video_id)
        );

        CREATE INDEX IF NOT EXISTS idx_ytm_tracks_cached ON ytm_tracks(last_used_at) WHERE file_path IS NOT NULL;
        CREATE INDEX IF NOT EXISTS idx_albums_artist ON albums(artist_id);
        CREATE INDEX IF NOT EXISTS idx_tracks_album ON tracks(album_id);
        CREATE INDEX IF NOT EXISTS idx_tracks_artist ON tracks(artist_id);
        CREATE INDEX IF NOT EXISTS idx_ytm_user ON ytm_cache(user_id);
        CREATE INDEX IF NOT EXISTS idx_ytm_expires ON ytm_cache(expires_at);
        CREATE INDEX IF NOT EXISTS idx_sessions_user ON sessions(user_id);
        CREATE INDEX IF NOT EXISTS idx_sessions_expires ON sessions(expires_at);
        CREATE INDEX IF NOT EXISTS idx_plays_user_started ON plays(user_id, started_at DESC);
        CREATE INDEX IF NOT EXISTS idx_plays_track ON plays(track_id);
        CREATE INDEX IF NOT EXISTS idx_dislikes_user ON dislikes(user_id, item_type);

        CREATE TABLE IF NOT EXISTS player_state (
            user_id TEXT PRIMARY KEY,
            payload TEXT NOT NULL,
            updated_at INTEGER NOT NULL
        );
        "#,
    )
    .execute(pool)
    .await?;

    // Add columns introduced after the first release (SQLite has no
    // "ADD COLUMN IF NOT EXISTS", so check the schema first).
    for (table, column, definition) in [
        ("tracks", "suffix", "TEXT NOT NULL DEFAULT 'flac'"),
        (
            "tracks",
            "content_type",
            "TEXT NOT NULL DEFAULT 'audio/flac'",
        ),
        ("albums", "genre", "TEXT"),
        ("users", "password_hash", "TEXT NOT NULL DEFAULT ''"),
        ("users", "password_enc", "TEXT NOT NULL DEFAULT ''"),
        ("users", "display_name", "TEXT"),
        ("users", "is_admin", "INTEGER NOT NULL DEFAULT 0"),
        ("users", "api_key", "TEXT"),
        ("users", "lastfm_username", "TEXT"),
        ("users", "lastfm_session_key", "TEXT"),
        ("users", "lastfm_token", "TEXT"),
        ("users", "listenbrainz_token", "TEXT"),
        ("playlists", "user_id", "TEXT"),
        ("users", "theme", "TEXT"),
        ("users", "ytm_cookies_enc", "TEXT"),
        ("users", "ytm_account", "TEXT"),
        ("users", "ytm_updated_at", "INTEGER"),
        // Resolved YouTube audio URLs are cached so a restart or a second
        // device does not wait for a fresh yt-dlp run.
        ("ytm_tracks", "resolved_url", "TEXT"),
        ("ytm_tracks", "resolved_ext", "TEXT"),
        ("ytm_tracks", "resolved_size", "INTEGER"),
        ("ytm_tracks", "resolved_at", "INTEGER"),
    ] {
        if !column_exists(pool, table, column).await? {
            let sql = format!("ALTER TABLE {} ADD COLUMN {} {}", table, column, definition);
            sqlx::query(&sql).execute(pool).await?;
        }
    }

    // Old `stars` table had a primary key of (item_id, item_type), which
    // cannot represent one favourite per user. Rebuild it if necessary.
    if table_exists(pool, "stars").await? && !column_exists(pool, "stars", "user_id").await? {
        sqlx::query("ALTER TABLE stars RENAME TO stars_legacy")
            .execute(pool)
            .await?;
        sqlx::query(
            r#"
            CREATE TABLE stars (
                user_id TEXT NOT NULL,
                item_id TEXT NOT NULL,
                item_type TEXT NOT NULL,
                created_at INTEGER NOT NULL,
                PRIMARY KEY (user_id, item_id, item_type)
            );
            CREATE INDEX IF NOT EXISTS idx_stars_user ON stars(user_id, item_type);
            "#,
        )
        .execute(pool)
        .await?;
    }

    sqlx::query("CREATE UNIQUE INDEX IF NOT EXISTS idx_users_api_key ON users(api_key) WHERE api_key IS NOT NULL")
        .execute(pool)
        .await?;
    sqlx::query("CREATE UNIQUE INDEX IF NOT EXISTS idx_users_username_nocase ON users(username COLLATE NOCASE)")
        .execute(pool)
        .await?;
    sqlx::query("CREATE INDEX IF NOT EXISTS idx_stars_user ON stars(user_id, item_type)")
        .execute(pool)
        .await?;

    tracing::info!("Database migrations completed");
    Ok(())
}

async fn table_exists(pool: &SqlitePool, table: &str) -> Result<bool> {
    let row: Option<(String,)> =
        sqlx::query_as("SELECT name FROM sqlite_master WHERE type = 'table' AND name = ?")
            .bind(table)
            .fetch_optional(pool)
            .await?;
    Ok(row.is_some())
}

async fn column_exists(pool: &SqlitePool, table: &str, column: &str) -> Result<bool> {
    let rows: Vec<(i64, String)> = sqlx::query_as(&format!(
        "SELECT cid, name FROM pragma_table_info('{}')",
        table
    ))
    .fetch_all(pool)
    .await?;
    Ok(rows.iter().any(|(_, name)| name == column))
}

// A local library track row; only the fields streaming needs.
#[derive(Debug, Clone, sqlx::FromRow)]
pub struct Track {
    pub title: String,
    pub file_path: String,
    pub is_cue_virtual: bool,
    pub cue_start_ms: Option<i64>,
    pub cue_end_ms: Option<i64>,
    pub content_type: String,
}

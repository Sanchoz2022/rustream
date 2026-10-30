use anyhow::Result;
use serde_json::{json, Value};
use sqlx::SqlitePool;
use std::collections::{HashMap, HashSet};

use crate::subsonic::song_json;

type SongRow = (
    String,
    String,
    i64,
    i64,
    i64,
    Option<i64>,
    String,
    String,
    i64,
    String,
    String,
    String,
    Option<i64>,
    String,
);

const SONG_SELECT: &str = "SELECT t.track_id, t.title, COALESCE(t.track_number,0), t.duration_ms,
        t.file_size, t.bitrate, t.suffix, t.content_type, t.created_at,
        a.album_id, a.title, ar.name, a.year, ar.artist_id
 FROM tracks t
 JOIN albums a ON a.album_id = t.album_id
 JOIN artists ar ON ar.artist_id = t.artist_id";

fn row_to_json(row: SongRow, starred: bool) -> Value {
    let (
        track_id,
        title,
        track,
        duration,
        size,
        bitrate,
        suffix,
        ctype,
        created,
        album_id,
        album_title,
        artist,
        year,
        artist_id,
    ) = row;

    song_json(
        &track_id,
        &title,
        &album_title,
        &album_id,
        &artist,
        &artist_id,
        Some(track),
        year,
        duration / 1000,
        bitrate,
        size,
        &suffix,
        &ctype,
        "",
        created,
        starred,
    )
}

async fn starred_set(db: &SqlitePool, user_id: &str) -> HashSet<String> {
    let rows: Vec<(String,)> =
        sqlx::query_as("SELECT item_id FROM stars WHERE user_id = ? AND item_type = 'track'")
            .bind(user_id)
            .fetch_all(db)
            .await
            .unwrap_or_default();
    rows.into_iter().map(|(id,)| id).collect()
}

async fn disliked_set(db: &SqlitePool, user_id: &str) -> HashSet<String> {
    let rows: Vec<(String,)> =
        sqlx::query_as("SELECT item_id FROM dislikes WHERE user_id = ? AND item_type = 'track'")
            .bind(user_id)
            .fetch_all(db)
            .await
            .unwrap_or_default();
    rows.into_iter().map(|(id,)| id).collect()
}

async fn recent_tracks(db: &SqlitePool, user_id: &str, limit: i64) -> Vec<String> {
    let rows: Vec<(String,)> = sqlx::query_as(
        "SELECT track_id FROM plays WHERE user_id = ? ORDER BY started_at DESC LIMIT ?",
    )
    .bind(user_id)
    .bind(limit)
    .fetch_all(db)
    .await
    .unwrap_or_default();
    rows.into_iter().map(|(id,)| id).collect()
}

async fn top_artists(db: &SqlitePool, user_id: &str) -> HashMap<String, i64> {
    let since = chrono::Utc::now().timestamp() - 60 * 60 * 24 * 90;
    let rows: Vec<(String, i64)> = sqlx::query_as(
        "SELECT t.artist_id, COUNT(*) AS plays
         FROM plays p JOIN tracks t ON t.track_id = p.track_id
         WHERE p.user_id = ? AND p.started_at >= ? AND (p.position_ms > 0 OR p.completed = 1)
         GROUP BY t.artist_id ORDER BY plays DESC LIMIT 8",
    )
    .bind(user_id)
    .bind(since)
    .fetch_all(db)
    .await
    .unwrap_or_default();
    rows.into_iter().collect()
}

/// Personalised radio: favourites, favourite artists, then the rest of the
/// library, with recently played tracks pushed to the back.
pub async fn live_queue(db: &SqlitePool, user_id: &str, count: i64) -> Result<Vec<Value>> {
    let count = count.clamp(1, 100) as usize;
    let star_map = starred_set(db, user_id).await;
    let disliked = disliked_set(db, user_id).await;
    let recent = recent_tracks(db, user_id, 30).await;
    let top = top_artists(db, user_id).await;

    let recent_rank: HashMap<&str, usize> = recent
        .iter()
        .enumerate()
        .map(|(index, id)| (id.as_str(), index))
        .collect();

    let rows: Vec<SongRow> = sqlx::query_as(SONG_SELECT)
        .fetch_all(db)
        .await
        .unwrap_or_default();

    let total = rows.len().max(1) as f64;
    let mut scored: Vec<(f64, SongRow)> = Vec::with_capacity(rows.len());
    for row in rows {
        let track_id = row.0.as_str();
        let artist_id = row.13.as_str();
        if disliked.contains(track_id) {
            continue;
        }
        let mut score: f64 = rand::random::<f64>() * 2.0;

        if star_map.contains(track_id) {
            score += 5.0;
        }
        if let Some(plays) = top.get(artist_id) {
            score += (*plays as f64).min(20.0) * 0.35;
        }
        if let Some(index) = recent_rank.get(track_id) {
            // Very recent tracks are almost never repeated; older ones fade in.
            score -= 18.0 - ((*index).min(20) as f64) * 0.45;
        }
        // Slight preference for tracks the user has not played yet.
        if !recent_rank.contains_key(track_id) {
            score += 0.8;
        }
        // Keep the score stable-ish across very small libraries.
        score += (1.0 / total) * 0.0;
        scored.push((score, row));
    }

    scored.sort_by(|a, b| b.0.partial_cmp(&a.0).unwrap_or(std::cmp::Ordering::Equal));
    scored.truncate(count);

    Ok(scored
        .into_iter()
        .map(|(_, row)| {
            let starred = star_map.contains(&row.0);
            row_to_json(row, starred)
        })
        .collect())
}

pub async fn mixes(db: &SqlitePool, user_id: &str) -> Result<Value> {
    let star_map = starred_set(db, user_id).await;
    let disliked = disliked_set(db, user_id).await;

    let favorites: Vec<SongRow> = sqlx::query_as(&format!(
        "{} WHERE t.track_id IN (SELECT item_id FROM stars WHERE user_id = ? AND item_type = 'track')
         ORDER BY RANDOM() LIMIT 40",
        SONG_SELECT
    ))
    .bind(user_id)
    .fetch_all(db)
    .await
    .unwrap_or_default();

    let recent: Vec<SongRow> = sqlx::query_as(&format!(
        "{} WHERE t.album_id IN (
             SELECT t2.album_id FROM tracks t2
             JOIN albums a2 ON a2.album_id = t2.album_id
             WHERE a2.created_at >= ?
             GROUP BY t2.album_id
             ORDER BY a2.created_at DESC LIMIT 8
         )
         ORDER BY RANDOM() LIMIT 40",
        SONG_SELECT
    ))
    .bind(chrono::Utc::now().timestamp() - 60 * 60 * 24 * 180)
    .fetch_all(db)
    .await
    .unwrap_or_default();

    let top_rows: Vec<(String, i64)> = sqlx::query_as(
        "SELECT t.track_id, COUNT(*) AS plays
         FROM plays p JOIN tracks t ON t.track_id = p.track_id
         WHERE p.user_id = ? AND (p.position_ms > 0 OR p.completed = 1)
         GROUP BY t.track_id ORDER BY plays DESC LIMIT 40",
    )
    .bind(user_id)
    .fetch_all(db)
    .await
    .unwrap_or_default();

    let mut top = Vec::new();
    for (track_id, _) in top_rows {
        if let Ok(Some(row)) =
            sqlx::query_as::<_, SongRow>(&format!("{} WHERE t.track_id = ?", SONG_SELECT))
                .bind(&track_id)
                .fetch_optional(db)
                .await
        {
            top.push(row);
        }
    }

    let build = |rows: Vec<SongRow>| -> Vec<Value> {
        rows.into_iter()
            .filter(|row| !disliked.contains(&row.0))
            .map(|row| {
                let starred = star_map.contains(&row.0);
                row_to_json(row, starred)
            })
            .collect()
    };

    Ok(json!({
        "mixes": [
            {
                "id": "favorites",
                "title": "Избранное",
                "subtitle": "Треки, которые вы отметили сердечком",
                "tracks": build(favorites)
            },
            {
                "id": "recent",
                "title": "Новинки",
                "subtitle": "Свежие альбомы библиотеки",
                "tracks": build(recent)
            },
            {
                "id": "top",
                "title": "Часто играет",
                "subtitle": "Основано на вашей истории",
                "tracks": build(top)
            }
        ]
    }))
}

/// Basic listening statistics for the current user.
pub async fn user_stats(db: &SqlitePool, user_id: &str) -> Result<Value> {
    let total_plays: i64 = sqlx::query_scalar(
        "SELECT COUNT(*) FROM plays
         WHERE user_id = ? AND (position_ms > 0 OR completed = 1)",
    )
    .bind(user_id)
    .fetch_one(db)
    .await
    .unwrap_or(0);

    let listened_ms: i64 = sqlx::query_scalar(
        "SELECT COALESCE(SUM(
             CASE WHEN completed = 1 THEN duration_ms
                  WHEN position_ms > 0 THEN position_ms
                  ELSE 0 END
         ), 0)
         FROM plays WHERE user_id = ?",
    )
    .bind(user_id)
    .fetch_one(db)
    .await
    .unwrap_or(0);

    let top_artists: Vec<(String, i64)> = sqlx::query_as(
        "SELECT ar.name, COUNT(*) AS plays
         FROM plays p
         JOIN tracks t ON t.track_id = p.track_id
         JOIN artists ar ON ar.artist_id = t.artist_id
         WHERE p.user_id = ? AND (p.position_ms > 0 OR p.completed = 1)
         GROUP BY ar.artist_id ORDER BY plays DESC LIMIT 5",
    )
    .bind(user_id)
    .fetch_all(db)
    .await
    .unwrap_or_default();

    let top_tracks: Vec<(String, String, String, i64)> = sqlx::query_as(
        "SELECT t.track_id, t.title, ar.name, COUNT(*) AS plays
         FROM plays p
         JOIN tracks t ON t.track_id = p.track_id
         JOIN artists ar ON ar.artist_id = t.artist_id
         WHERE p.user_id = ? AND (p.position_ms > 0 OR p.completed = 1)
         GROUP BY t.track_id ORDER BY plays DESC LIMIT 10",
    )
    .bind(user_id)
    .fetch_all(db)
    .await
    .unwrap_or_default();

    let recent: Vec<SongRow> = sqlx::query_as(&format!(
        "{} JOIN (
             SELECT track_id, MAX(started_at) AS last_played
             FROM plays WHERE user_id = ? GROUP BY track_id
             ORDER BY last_played DESC LIMIT 12
         ) r ON r.track_id = t.track_id ORDER BY r.last_played DESC",
        SONG_SELECT
    ))
    .bind(user_id)
    .fetch_all(db)
    .await
    .unwrap_or_default();

    let star_map = starred_set(db, user_id).await;
    let likes: i64 =
        sqlx::query_scalar("SELECT COUNT(*) FROM stars WHERE user_id = ? AND item_type = 'track'")
            .bind(user_id)
            .fetch_one(db)
            .await
            .unwrap_or(0);
    let dislikes: i64 = sqlx::query_scalar(
        "SELECT COUNT(*) FROM dislikes WHERE user_id = ? AND item_type = 'track'",
    )
    .bind(user_id)
    .fetch_one(db)
    .await
    .unwrap_or(0);

    let by_day: Vec<(String, i64)> = sqlx::query_as(
        "SELECT date(started_at, 'unixepoch', 'localtime') AS day,
                COALESCE(SUM(CASE WHEN completed = 1 THEN duration_ms ELSE position_ms END), 0)
         FROM plays
         WHERE user_id = ? AND started_at >= ?
         GROUP BY day ORDER BY day",
    )
    .bind(user_id)
    .bind(chrono::Utc::now().timestamp() - 60 * 60 * 24 * 14)
    .fetch_all(db)
    .await
    .unwrap_or_default();

    let top_genres: Vec<(String, i64)> = sqlx::query_as(
        "SELECT COALESCE(NULLIF(a.genre, ''), 'Без жанра') AS genre, COUNT(*) AS plays
         FROM plays p
         JOIN tracks t ON t.track_id = p.track_id
         JOIN albums a ON a.album_id = t.album_id
         WHERE p.user_id = ? AND (p.position_ms > 0 OR p.completed = 1)
         GROUP BY genre ORDER BY plays DESC LIMIT 6",
    )
    .bind(user_id)
    .fetch_all(db)
    .await
    .unwrap_or_default();

    Ok(json!({
        "plays": total_plays,
        "listenedMs": listened_ms,
        "likes": likes,
        "dislikes": dislikes,
        "byDay": by_day
            .into_iter()
            .map(|(day, ms)| json!({ "day": day, "ms": ms }))
            .collect::<Vec<_>>(),
        "topGenres": top_genres
            .into_iter()
            .map(|(genre, plays)| json!({ "name": genre, "plays": plays }))
            .collect::<Vec<_>>(),
        "topArtists": top_artists
            .into_iter()
            .map(|(name, plays)| json!({ "name": name, "plays": plays }))
            .collect::<Vec<_>>(),
        "topTracks": top_tracks
            .into_iter()
            .map(|(id, title, artist, plays)| json!({
                "id": id, "title": title, "artist": artist, "plays": plays
            }))
            .collect::<Vec<_>>(),
        "recent": recent
            .into_iter()
            .map(|row| {
                let starred = star_map.contains(&row.0);
                row_to_json(row, starred)
            })
            .collect::<Vec<_>>()
    }))
}

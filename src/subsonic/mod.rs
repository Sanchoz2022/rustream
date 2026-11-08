//! Subsonic API compatibility layer.
//!
//! The handlers read many joined columns as tuples, so clippy's complexity
//! limits are not useful here.
#![allow(clippy::type_complexity, clippy::too_many_arguments)]

use axum::{
    body::{to_bytes, Body},
    extract::{Path, Query, RawQuery, Request, State},
    http::{header, HeaderMap, HeaderValue, Method, StatusCode, Uri},
    middleware::Next,
    response::{IntoResponse, Response},
    routing::{on, MethodFilter},
    Extension, Json, Router,
};
use serde_json::{json, Value};
use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;

use crate::auth::{self, AuthUser};
use crate::AppState;

const VERSION: &str = "1.16.1";

pub fn routes(state: Arc<RwLock<AppState>>) -> Router<Arc<RwLock<AppState>>> {
    let mut router: Router<Arc<RwLock<AppState>>> = Router::new();

    macro_rules! route {
        ($path:literal, $handler:expr) => {
            router = router
                .route(
                    concat!($path, ".view"),
                    on(
                        MethodFilter::GET
                            .or(MethodFilter::POST)
                            .or(MethodFilter::HEAD),
                        $handler,
                    ),
                )
                .route(
                    $path,
                    on(
                        MethodFilter::GET
                            .or(MethodFilter::POST)
                            .or(MethodFilter::HEAD),
                        $handler,
                    ),
                );
        };
    }

    route!("/ping", ping);
    route!("/getLicense", get_license);
    route!("/getUser", get_user);
    route!("/getMusicFolders", get_music_folders);
    route!("/getIndexes", get_indexes);
    route!("/getArtists", get_artists);
    route!("/getMusicDirectory", get_music_directory);
    route!("/getArtist", get_artist);
    route!("/getArtistInfo", get_artist_info);
    route!("/getArtistInfo2", get_artist_info);
    route!("/getAlbumInfo", get_album_info);
    route!("/getAlbumInfo2", get_album_info);
    route!("/getTopSongs", get_top_songs);
    route!("/getSimilarSongs", get_random_songs);
    route!("/getSimilarSongs2", get_random_songs);
    route!("/getAlbum", get_album);
    route!("/getSong", get_song);
    route!("/getAlbumList", get_album_list);
    route!("/getAlbumList2", get_album_list);
    route!("/getRandomSongs", get_random_songs);
    route!("/getStarred2", get_starred);
    route!("/getStarred", get_starred);
    route!("/search2", search3);
    route!("/search3", search3);
    route!("/getGenres", get_genres);
    route!("/getLyrics", get_lyrics);
    route!("/getLyricsBySongId", get_lyrics_by_song_id);
    route!("/getCoverArt", get_cover_art);
    route!("/stream", stream);
    route!("/download", stream);
    route!("/getPlaylists", get_playlists);
    route!("/getPlaylist", get_playlist);
    route!("/createPlaylist", create_playlist);
    route!("/updatePlaylist", update_playlist);
    route!("/deletePlaylist", delete_playlist);
    route!("/star", star);
    route!("/unstar", unstar);
    route!("/setRating", set_rating);
    route!("/scrobble", scrobble);
    route!("/getScanStatus", get_scan_status);
    route!("/startScan", start_scan);
    route!("/getOpenSubsonicExtensions", open_subsonic_extensions);

    // Common misconfiguration: the client base URL already ends in `/rest`,
    // so requests arrive as `/rest/rest/ping.view`. Strip the duplicate.
    router = router.route(
        "/rest/*path",
        on(
            MethodFilter::GET
                .or(MethodFilter::POST)
                .or(MethodFilter::HEAD),
            strip_rest_prefix,
        ),
    );

    router
        .layer(axum::middleware::from_fn_with_state(
            state.clone(),
            subsonic_middleware,
        ))
        .with_state(state)
}

/// One middleware for the whole REST surface:
/// 1. turn POST form bodies into query parameters (many clients use POST),
/// 2. authenticate Subsonic credentials or the browser session cookie,
/// 3. render XML for clients that did not ask for JSON.
async fn subsonic_middleware(
    State(state): State<Arc<RwLock<AppState>>>,
    mut request: Request,
    next: Next,
) -> Response {
    let (mut parts, body) = request.into_parts();
    let mut query = parts.uri.query().unwrap_or("").to_string();

    if parts.method == Method::POST {
        let bytes = to_bytes(body, 2 * 1024 * 1024).await.unwrap_or_default();
        let form = String::from_utf8_lossy(&bytes).to_string();
        if !form.trim().is_empty() {
            if !query.is_empty() {
                query.push('&');
            }
            query.push_str(form.trim());
        }
        parts.method = Method::GET;
        let merged = if query.is_empty() {
            parts.uri.path().to_string()
        } else {
            format!("{}?{}", parts.uri.path(), query)
        };
        if let Ok(uri) = merged.parse::<Uri>() {
            parts.uri = uri;
        }
        request = Request::from_parts(parts, Body::empty());
    } else {
        request = Request::from_parts(parts, body);
    }

    let wants_json = query_wants_json(request.uri().query().unwrap_or(""));
    let params: HashMap<String, String> = parse_raw_params(request.uri().query())
        .into_iter()
        .collect();
    let db = state.read().await.db.clone();

    let Some(user) = auth::authenticate_subsonic(&db, &params, request.headers()).await else {
        return auth_failure_response(wants_json);
    };
    request.extensions_mut().insert(user);

    let response = next.run(request).await;
    if wants_json {
        return response;
    }

    let is_json = response
        .headers()
        .get(header::CONTENT_TYPE)
        .and_then(|value| value.to_str().ok())
        .map(|value| value.starts_with("application/json"))
        .unwrap_or(false);

    if !is_json {
        return response;
    }

    let (mut parts, body) = response.into_parts();
    let Ok(bytes) = to_bytes(body, 8 * 1024 * 1024).await else {
        return StatusCode::INTERNAL_SERVER_ERROR.into_response();
    };
    let Ok(value) = serde_json::from_slice::<Value>(&bytes) else {
        return StatusCode::INTERNAL_SERVER_ERROR.into_response();
    };

    let root = value.get("subsonic-response").unwrap_or(&value);
    let mut xml = String::from("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
    write_xml_element(&mut xml, "subsonic-response", root, true);

    parts.headers.insert(
        header::CONTENT_TYPE,
        HeaderValue::from_static("application/xml; charset=utf-8"),
    );
    Response::from_parts(parts, Body::from(xml))
}

async fn strip_rest_prefix(Path(path): Path<String>, RawQuery(raw): RawQuery) -> Response {
    let suffix = raw.map(|query| format!("?{}", query)).unwrap_or_default();
    axum::response::Redirect::temporary(&format!("/rest/{}{}", path, suffix)).into_response()
}

fn query_wants_json(query: &str) -> bool {
    query.split('&').any(|pair| {
        let mut parts = pair.splitn(2, '=');
        let key = parts.next().unwrap_or("");
        let value = parts.next().unwrap_or("");
        (key.eq_ignore_ascii_case("f"))
            && (value.eq_ignore_ascii_case("json") || value.eq_ignore_ascii_case("jsonp"))
    })
}

fn auth_failure_response(json: bool) -> Response {
    if json {
        return Json(json!({
            "subsonic-response": {
                "status": "failed",
                "version": VERSION,
                "error": { "code": 40, "message": "Wrong username or password" }
            }
        }))
        .into_response();
    }

    let body = format!(
        "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\
         <subsonic-response xmlns=\"http://subsonic.org/restapi\" status=\"failed\" version=\"{}\">\
         <error code=\"40\" message=\"Wrong username or password\"/></subsonic-response>",
        VERSION
    );
    (
        [(header::CONTENT_TYPE, "application/xml; charset=utf-8")],
        body,
    )
        .into_response()
}

fn write_xml_element(out: &mut String, name: &str, value: &Value, is_root: bool) {
    match value {
        Value::Array(items) => {
            for item in items {
                write_xml_element(out, name, item, false);
            }
        }
        Value::Object(map) => {
            out.push('<');
            out.push_str(name);
            if is_root {
                out.push_str(" xmlns=\"http://subsonic.org/restapi\"");
            }

            let mut children: Vec<(&String, &Value)> = Vec::new();
            let mut text_content: Option<&str> = None;

            for (key, item) in map {
                match item {
                    Value::Null => {}
                    Value::Object(_) | Value::Array(_) => children.push((key, item)),
                    Value::String(text) if key == "value" && name == "lyrics" => {
                        text_content = Some(text)
                    }
                    Value::String(text) => write_xml_attr(out, key, text),
                    Value::Bool(flag) => {
                        write_xml_attr(out, key, if *flag { "true" } else { "false" })
                    }
                    Value::Number(number) => write_xml_attr(out, key, &number.to_string()),
                }
            }

            if let Some(text) = text_content {
                out.push('>');
                write_xml_text(out, text);
                out.push_str("</");
                out.push_str(name);
                out.push('>');
                return;
            }

            if children.is_empty() {
                out.push_str("/>");
                return;
            }

            out.push('>');
            for (key, item) in children {
                write_xml_element(out, key, item, false);
            }
            out.push_str("</");
            out.push_str(name);
            out.push('>');
        }
        Value::String(text) => {
            out.push('<');
            out.push_str(name);
            out.push('>');
            write_xml_text(out, text);
            out.push_str("</");
            out.push_str(name);
            out.push('>');
        }
        Value::Bool(flag) => {
            out.push('<');
            out.push_str(name);
            out.push('>');
            out.push_str(if *flag { "true" } else { "false" });
            out.push_str("</");
            out.push_str(name);
            out.push('>');
        }
        Value::Number(number) => {
            out.push('<');
            out.push_str(name);
            out.push('>');
            out.push_str(&number.to_string());
            out.push_str("</");
            out.push_str(name);
            out.push('>');
        }
        Value::Null => {}
    }
}

fn write_xml_attr(out: &mut String, key: &str, value: &str) {
    out.push(' ');
    out.push_str(key);
    out.push_str("=\"");
    for ch in value.chars() {
        match ch {
            '&' => out.push_str("&amp;"),
            '<' => out.push_str("&lt;"),
            '>' => out.push_str("&gt;"),
            '"' => out.push_str("&quot;"),
            '\'' => out.push_str("&apos;"),
            _ => out.push(ch),
        }
    }
    out.push('"');
}

fn write_xml_text(out: &mut String, value: &str) {
    for ch in value.chars() {
        match ch {
            '&' => out.push_str("&amp;"),
            '<' => out.push_str("&lt;"),
            '>' => out.push_str("&gt;"),
            _ => out.push(ch),
        }
    }
}

// ---------------------------------------------------------------------------
// Response helpers
// ---------------------------------------------------------------------------

fn ok(mut extra: Value) -> Json<Value> {
    if let Some(obj) = extra.as_object_mut() {
        obj.insert("status".to_string(), json!("ok"));
        obj.insert("version".to_string(), json!(VERSION));
    }
    Json(json!({ "subsonic-response": extra }))
}

fn fail(code: i32, message: &str) -> Json<Value> {
    Json(json!({
        "subsonic-response": {
            "status": "failed",
            "version": VERSION,
            "error": { "code": code, "message": message }
        }
    }))
}

async fn pool(state: &Arc<RwLock<AppState>>) -> sqlx::SqlitePool {
    state.read().await.db.clone()
}

fn str_param(params: &HashMap<String, String>, key: &str) -> Option<String> {
    params
        .get(key)
        .map(|v| v.trim().to_string())
        .filter(|v| !v.is_empty())
}

fn int_param(params: &HashMap<String, String>, key: &str, default: i64) -> i64 {
    params
        .get(key)
        .and_then(|v| v.parse().ok())
        .unwrap_or(default)
        .clamp(0, 10_000)
}

fn artist_json(id: &str, name: &str, album_count: i64) -> Value {
    json!({
        "id": id,
        "name": name,
        "albumCount": album_count,
        "coverArt": id
    })
}

fn album_json(
    id: &str,
    name: &str,
    artist: &str,
    artist_id: &str,
    song_count: i64,
    duration: i64,
    year: Option<i64>,
    created: i64,
) -> Value {
    json!({
        "id": id,
        "name": name,
        "artist": artist,
        "artistId": artist_id,
        "coverArt": id,
        "songCount": song_count,
        "duration": duration,
        "year": year,
        "created": chrono::DateTime::from_timestamp(created, 0)
            .map(|d| d.format("%Y-%m-%dT%H:%M:%SZ").to_string()),
        "playCount": 0,
        "album": name
    })
}

pub(crate) fn song_json(
    id: &str,
    title: &str,
    album: &str,
    album_id: &str,
    artist: &str,
    artist_id: &str,
    track: Option<i64>,
    year: Option<i64>,
    duration: i64,
    bitrate: Option<i64>,
    size: i64,
    suffix: &str,
    content_type: &str,
    path: &str,
    created: i64,
    starred: bool,
) -> Value {
    json!({
        "id": id,
        "parent": album_id,
        "isDir": false,
        "title": title,
        "album": album,
        "albumId": album_id,
        "artist": artist,
        "artistId": artist_id,
        "coverArt": album_id,
        "track": if track == Some(0) { Value::Null } else { json!(track) },
        "year": year,
        "duration": duration,
        "bitRate": bitrate,
        "size": size,
        "suffix": suffix,
        "contentType": content_type,
        "isVideo": false,
        "path": path,
        "type": "music",
        "created": chrono::DateTime::from_timestamp(created, 0)
            .map(|d| d.format("%Y-%m-%dT%H:%M:%SZ").to_string()),
        "starred": if starred { Some("") } else { None },
    })
}

// ---------------------------------------------------------------------------
// Basic endpoints
// ---------------------------------------------------------------------------

async fn ping(Query(_params): Query<HashMap<String, String>>) -> Json<Value> {
    ok(json!({}))
}

async fn get_license(Query(_params): Query<HashMap<String, String>>) -> Json<Value> {
    ok(json!({ "license": { "valid": true, "email": "", "licenseExpires": "" } }))
}

async fn get_user(
    Extension(user): Extension<AuthUser>,
    Query(_params): Query<HashMap<String, String>>,
) -> Json<Value> {
    ok(json!({
        "user": {
            "username": user.username,
            "email": "",
            "scrobblingEnabled": true,
            "adminRole": user.is_admin,
            "settingsRole": true,
            "downloadRole": true,
            "uploadRole": false,
            "playlistRole": true,
            "coverArtRole": true,
            "commentRole": false,
            "podcastRole": false,
            "streamRole": true,
            "jukeboxRole": false,
            "shareRole": false
        }
    }))
}

async fn get_music_folders(Query(_params): Query<HashMap<String, String>>) -> Json<Value> {
    ok(json!({
        "musicFolders": {
            "musicFolder": [{ "id": "1", "name": "Music" }]
        }
    }))
}

async fn open_subsonic_extensions(Query(_params): Query<HashMap<String, String>>) -> Json<Value> {
    ok(json!({
        "openSubsonicExtensions": [
            // Line-synced lyrics with timings, served by getLyricsBySongId.
            { "name": "songLyrics", "versions": [1] }
        ]
    }))
}

// ---------------------------------------------------------------------------
// Artists
// ---------------------------------------------------------------------------

async fn load_index(db: &sqlx::SqlitePool) -> Result<Vec<Value>, Json<Value>> {
    let rows: Vec<(String, String, i64)> = match sqlx::query_as(
        "SELECT artist_id, name, album_count FROM artists ORDER BY name COLLATE NOCASE",
    )
    .fetch_all(db)
    .await
    {
        Ok(rows) => rows,
        Err(e) => {
            tracing::error!("getIndexes: {}", e);
            return Err(fail(0, "Database error"));
        }
    };

    let mut groups: std::collections::BTreeMap<String, Vec<Value>> =
        std::collections::BTreeMap::new();

    for (id, name, album_count) in rows {
        let first = name
            .chars()
            .next()
            .unwrap_or('#')
            .to_uppercase()
            .next()
            .unwrap_or('#');
        let group = if first.is_alphabetic() {
            first.to_string()
        } else {
            "#".to_string()
        };
        groups
            .entry(group)
            .or_default()
            .push(artist_json(&id, &name, album_count));
    }

    Ok(groups
        .into_iter()
        .map(|(name, artists)| json!({ "name": name, "artist": artists }))
        .collect())
}

async fn get_indexes(
    State(state): State<Arc<RwLock<AppState>>>,
    Query(_params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let db = pool(&state).await;
    match load_index(&db).await {
        Ok(index) => ok(json!({
            "indexes": { "ignoredArticles": "", "index": index }
        })),
        Err(error) => error,
    }
}

async fn get_artists(
    State(state): State<Arc<RwLock<AppState>>>,
    Query(_params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let db = pool(&state).await;
    match load_index(&db).await {
        Ok(index) => ok(json!({
            "artists": { "ignoredArticles": "", "index": index }
        })),
        Err(error) => error,
    }
}

async fn get_artist(
    State(state): State<Arc<RwLock<AppState>>>,
    Query(params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let Some(id) = str_param(&params, "id") else {
        return fail(10, "Required parameter id is missing");
    };
    let db = pool(&state).await;

    let artist: Option<(String, String, i64)> =
        sqlx::query_as("SELECT artist_id, name, album_count FROM artists WHERE artist_id = ?")
            .bind(&id)
            .fetch_optional(&db)
            .await
            .unwrap_or(None);

    let Some((artist_id, name, album_count)) = artist else {
        return fail(70, "Artist not found");
    };

    let albums: Vec<(String, String, i64, i64, Option<i64>, i64)> = sqlx::query_as(
        "SELECT album_id, title, track_count, duration_ms, year, created_at
         FROM albums WHERE artist_id = ? ORDER BY COALESCE(year, 0), title COLLATE NOCASE",
    )
    .bind(&artist_id)
    .fetch_all(&db)
    .await
    .unwrap_or_default();

    let album_list: Vec<Value> = albums
        .into_iter()
        .map(|(album_id, title, count, duration_ms, year, created)| {
            album_json(
                &album_id,
                &title,
                &name,
                &artist_id,
                count,
                duration_ms / 1000,
                year,
                created,
            )
        })
        .collect();

    ok(json!({
        "artist": {
            "id": artist_id,
            "name": name,
            "albumCount": album_count,
            "coverArt": artist_id,
            "album": album_list
        }
    }))
}

async fn get_artist_info(
    State(state): State<Arc<RwLock<AppState>>>,
    Query(params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let Some(id) = str_param(&params, "id") else {
        return fail(10, "Required parameter id is missing");
    };
    let db = pool(&state).await;
    let artist: Option<(String, i64)> =
        sqlx::query_as("SELECT name, album_count FROM artists WHERE artist_id = ?")
            .bind(&id)
            .fetch_optional(&db)
            .await
            .unwrap_or(None);

    let Some((name, album_count)) = artist else {
        return fail(70, "Artist not found");
    };

    ok(json!({
        "artistInfo2": {
            "biography": format!("{} — {} альбом(ов) в локальной библиотеке.", name, album_count),
            "musicBrainzId": "",
            "lastFmUrl": "",
            "smallImageUrl": format!("/rest/getCoverArt.view?id={}", id),
            "mediumImageUrl": format!("/rest/getCoverArt.view?id={}", id),
            "largeImageUrl": format!("/rest/getCoverArt.view?id={}", id),
            "similarArtist": []
        }
    }))
}

async fn get_album_info(
    State(state): State<Arc<RwLock<AppState>>>,
    Query(params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let Some(id) = str_param(&params, "id") else {
        return fail(10, "Required parameter id is missing");
    };
    let db = pool(&state).await;
    let album: Option<(String, Option<String>, Option<i64>, String)> = sqlx::query_as(
        "SELECT a.title, a.genre, a.year, ar.name FROM albums a
         JOIN artists ar ON ar.artist_id = a.artist_id WHERE a.album_id = ?",
    )
    .bind(&id)
    .fetch_optional(&db)
    .await
    .unwrap_or(None);

    let Some((title, genre, year, artist)) = album else {
        return fail(70, "Album not found");
    };

    ok(json!({
        "albumInfo": {
            "notes": format!("{} — {} в локальной библиотеке Rustream.", title, artist),
            "musicBrainzId": "",
            "lastFmUrl": "",
            "smallImageUrl": format!("/rest/getCoverArt.view?id={}&size=300", id),
            "mediumImageUrl": format!("/rest/getCoverArt.view?id={}&size=600", id),
            "largeImageUrl": format!("/rest/getCoverArt.view?id={}", id),
            "genre": genre,
            "year": year
        }
    }))
}

/// Songs by artist, most relevant first (simple local heuristic).
async fn get_top_songs(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Query(params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let Some(artist) = str_param(&params, "artist") else {
        return fail(10, "Required parameter artist is missing");
    };
    let db = pool(&state).await;
    let count = int_param(&params, "count", 50).clamp(1, 500);
    let star_map = starred_ids(&db, &user.user_id, "track").await;

    let rows: Vec<(
        String,
        String,
        i64,
        i64,
        i64,
        Option<i64>,
        Option<i64>,
        String,
        String,
        i64,
        String,
        String,
        String,
        Option<i64>,
        Option<i64>,
        String,
    )> = sqlx::query_as(
        "SELECT t.track_id, t.title, COALESCE(t.track_number,0), t.duration_ms, t.file_size,
                    t.bitrate, t.sample_rate, t.suffix, t.content_type, t.created_at,
                    a.album_id, a.title, ar.name, a.year, a.created_at, ar.artist_id
             FROM tracks t JOIN albums a ON a.album_id = t.album_id
             JOIN artists ar ON ar.artist_id = t.artist_id
             WHERE ar.name = ? COLLATE NOCASE
             ORDER BY a.year DESC, COALESCE(t.track_number,0) LIMIT ?",
    )
    .bind(&artist)
    .bind(count)
    .fetch_all(&db)
    .await
    .unwrap_or_default();

    let songs: Vec<Value> = rows
        .into_iter()
        .map(
            |(
                track_id,
                title,
                track,
                duration,
                size,
                bitrate,
                _sample,
                suffix,
                ctype,
                created,
                album_id,
                album_title,
                artist_name,
                year,
                _ac,
                artist_id,
            )| {
                song_json(
                    &track_id,
                    &title,
                    &album_title,
                    &album_id,
                    &artist_name,
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
                    star_map.contains(&track_id),
                )
            },
        )
        .collect();

    ok(json!({ "topSongs": { "song": songs } }))
}

// ---------------------------------------------------------------------------
// Albums / songs
// ---------------------------------------------------------------------------

async fn get_album(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Query(params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let Some(id) = str_param(&params, "id") else {
        return fail(10, "Required parameter id is missing");
    };
    let db = pool(&state).await;

    let album: Option<(String, String, String, String, i64, i64, Option<i64>, i64)> =
        sqlx::query_as(
            "SELECT a.album_id, a.title, ar.name, a.artist_id, a.track_count, a.duration_ms, a.year, a.created_at
             FROM albums a JOIN artists ar ON ar.artist_id = a.artist_id
             WHERE a.album_id = ?",
        )
        .bind(&id)
        .fetch_optional(&db)
        .await
        .unwrap_or(None);

    let Some((album_id, title, artist, artist_id, count, duration_ms, year, created)) = album
    else {
        return fail(70, "Album not found");
    };

    let star_map = starred_ids(&db, &user.user_id, "track").await;
    let tracks: Vec<(String, String, i64, i64, i64, Option<i64>, Option<i64>, String, String, i64)> =
        sqlx::query_as(
            "SELECT track_id, title, COALESCE(track_number, 0), duration_ms, file_size, bitrate,
                    sample_rate, suffix, content_type, created_at
             FROM tracks WHERE album_id = ? ORDER BY COALESCE(track_number, 0), title COLLATE NOCASE",
        )
        .bind(&album_id)
        .fetch_all(&db)
        .await
        .unwrap_or_default();

    let songs: Vec<Value> = tracks
        .into_iter()
        .map(
            |(
                track_id,
                t_title,
                track,
                t_duration,
                size,
                bitrate,
                _sample,
                suffix,
                ctype,
                t_created,
            )| {
                song_json(
                    &track_id,
                    &t_title,
                    &title,
                    &album_id,
                    &artist,
                    &artist_id,
                    Some(track),
                    year,
                    t_duration / 1000,
                    bitrate,
                    size,
                    &suffix,
                    &ctype,
                    "",
                    t_created,
                    star_map.contains(&track_id),
                )
            },
        )
        .collect();

    ok(json!({
        "album": {
            "id": album_id,
            "name": title,
            "artist": artist,
            "artistId": artist_id,
            "coverArt": album_id,
            "songCount": count,
            "duration": duration_ms / 1000,
            "year": year,
            "created": chrono::DateTime::from_timestamp(created, 0)
                .map(|d| d.format("%Y-%m-%dT%H:%M:%SZ").to_string()),
            "playCount": 0,
            "song": songs
        }
    }))
}

async fn get_song(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Query(params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let Some(id) = str_param(&params, "id") else {
        return fail(10, "Required parameter id is missing");
    };
    let db = pool(&state).await;

    let row: Option<(
        String,
        String,
        i64,
        i64,
        i64,
        Option<i64>,
        Option<i64>,
        String,
        String,
        i64,
        String,
        String,
        String,
        Option<i64>,
        Option<i64>,
        String,
    )> = sqlx::query_as(
        "SELECT t.track_id, t.title, COALESCE(t.track_number,0), t.duration_ms, t.file_size,
                    t.bitrate, t.sample_rate, t.suffix, t.content_type, t.created_at,
                    a.album_id, a.title, ar.name, a.year, a.created_at, ar.artist_id
             FROM tracks t JOIN albums a ON a.album_id = t.album_id
             JOIN artists ar ON ar.artist_id = t.artist_id WHERE t.track_id = ?",
    )
    .bind(&id)
    .fetch_optional(&db)
    .await
    .unwrap_or(None);

    let Some((
        track_id,
        title,
        track,
        duration,
        size,
        bitrate,
        _sample,
        suffix,
        ctype,
        created,
        album_id,
        album_title,
        artist,
        year,
        _album_created,
        artist_id,
    )) = row
    else {
        return fail(70, "Song not found");
    };

    let star_map = starred_ids(&db, &user.user_id, "track").await;
    ok(json!({
        "song": song_json(
            &track_id, &title, &album_title, &album_id, &artist, &artist_id,
            Some(track), year, duration / 1000, bitrate, size, &suffix, &ctype, "",
            created, star_map.contains(&track_id)
        )
    }))
}

async fn get_music_directory(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Query(params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let Some(id) = str_param(&params, "id") else {
        return fail(10, "Required parameter id is missing");
    };
    let db = pool(&state).await;

    if id == "1" {
        let artists: Vec<(String, String, i64)> = sqlx::query_as(
            "SELECT artist_id, name, album_count FROM artists ORDER BY name COLLATE NOCASE",
        )
        .fetch_all(&db)
        .await
        .unwrap_or_default();
        let children: Vec<Value> = artists
            .into_iter()
            .map(|(aid, name, count)| {
                json!({
                    "id": aid, "parent": "1", "isDir": true, "title": name,
                    "album": "", "artist": "", "track": null, "year": null,
                    "duration": 0, "coverArt": aid, "albumCount": count, "userRating": 0
                })
            })
            .collect();
        return ok(json!({ "directory": { "id": "1", "name": "Music", "child": children } }));
    }

    let artist: Option<(String, String)> =
        sqlx::query_as("SELECT artist_id, name FROM artists WHERE artist_id = ?")
            .bind(&id)
            .fetch_optional(&db)
            .await
            .unwrap_or(None);
    if let Some((artist_id, name)) = artist {
        let albums: Vec<(String, String, i64, i64, Option<i64>, i64)> = sqlx::query_as(
            "SELECT album_id, title, track_count, duration_ms, year, created_at FROM albums
             WHERE artist_id = ? ORDER BY COALESCE(year,0), title COLLATE NOCASE",
        )
        .bind(&artist_id)
        .fetch_all(&db)
        .await
        .unwrap_or_default();
        let children: Vec<Value> = albums
            .into_iter()
            .map(|(album_id, title, count, duration_ms, year, created)| {
                album_json(
                    &album_id,
                    &title,
                    &name,
                    &artist_id,
                    count,
                    duration_ms / 1000,
                    year,
                    created,
                )
            })
            .collect();
        return ok(json!({
            "directory": { "id": artist_id, "parent": "1", "name": name, "child": children }
        }));
    }

    // Album id: return its songs as directory children.
    let album: Option<(String, String)> =
        sqlx::query_as("SELECT album_id, title FROM albums WHERE album_id = ?")
            .bind(&id)
            .fetch_optional(&db)
            .await
            .unwrap_or(None);

    if let Some((album_id, title)) = album {
        let rows: Vec<(
            String,
            String,
            i64,
            i64,
            i64,
            Option<i64>,
            Option<i64>,
            String,
            String,
            i64,
            String,
            String,
            String,
            Option<i64>,
            Option<i64>,
            String,
        )> = sqlx::query_as(
            "SELECT t.track_id, t.title, COALESCE(t.track_number,0), t.duration_ms, t.file_size,
                        t.bitrate, t.sample_rate, t.suffix, t.content_type, t.created_at,
                        a.album_id, a.title, ar.name, a.year, a.created_at, ar.artist_id
                 FROM tracks t JOIN albums a ON a.album_id = t.album_id
                 JOIN artists ar ON ar.artist_id = t.artist_id
                 WHERE t.album_id = ? ORDER BY COALESCE(t.track_number,0)",
        )
        .bind(&album_id)
        .fetch_all(&db)
        .await
        .unwrap_or_default();

        let star_map = starred_ids(&db, &user.user_id, "track").await;
        let children: Vec<Value> = rows
            .into_iter()
            .map(
                |(
                    track_id,
                    t_title,
                    track,
                    duration,
                    size,
                    bitrate,
                    _sample,
                    suffix,
                    ctype,
                    created,
                    album_id,
                    album_title,
                    artist,
                    year,
                    _ac,
                    artist_id,
                )| {
                    song_json(
                        &track_id,
                        &t_title,
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
                        star_map.contains(&track_id),
                    )
                },
            )
            .collect();

        return ok(json!({
            "directory": { "id": album_id, "parent": "1", "name": title, "child": children }
        }));
    }

    fail(70, "Directory not found")
}

async fn get_album_list(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Query(params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let db = pool(&state).await;
    let kind = str_param(&params, "type").unwrap_or_else(|| "alphabeticalByName".to_string());
    let size = int_param(&params, "size", 50).clamp(1, 500);
    let offset = int_param(&params, "offset", 0);
    let genre = str_param(&params, "genre");
    let from_year = params.get("fromYear").and_then(|v| v.parse::<i64>().ok());
    let to_year = params.get("toYear").and_then(|v| v.parse::<i64>().ok());

    let mut where_sql = String::from("1=1");
    if let Some(g) = &genre {
        where_sql.push_str(&format!(" AND a.genre = '{}'", g.replace('\'', "''")));
    }
    if let Some(from) = from_year {
        where_sql.push_str(&format!(" AND a.year >= {}", from));
    }
    if let Some(to) = to_year {
        where_sql.push_str(&format!(" AND a.year <= {}", to));
    }

    if kind == "starred" {
        where_sql.push_str(
            " AND a.album_id IN (SELECT item_id FROM stars WHERE item_type = 'album' AND user_id = ?)",
        );
    }

    let order = match kind.as_str() {
        "newest" => "a.created_at DESC",
        "recent" => "a.created_at DESC",
        "random" => "RANDOM()",
        "alphabeticalByArtist" => "ar.name COLLATE NOCASE, a.title COLLATE NOCASE",
        "byYear" => "a.year DESC, a.title COLLATE NOCASE",
        "starred" => "a.created_at DESC",
        _ => "a.title COLLATE NOCASE",
    };

    let sql = format!(
        "SELECT a.album_id, a.title, ar.name, a.artist_id, a.track_count, a.duration_ms,
                a.year, a.created_at
         FROM albums a JOIN artists ar ON ar.artist_id = a.artist_id
         WHERE {} ORDER BY {} LIMIT ? OFFSET ?",
        where_sql, order
    );

    let mut query = sqlx::query_as(&sql);
    if kind == "starred" {
        query = query.bind(&user.user_id);
    }
    let rows: Vec<(String, String, String, String, i64, i64, Option<i64>, i64)> = query
        .bind(size)
        .bind(offset)
        .fetch_all(&db)
        .await
        .unwrap_or_default();

    let albums: Vec<Value> = rows
        .into_iter()
        .map(
            |(album_id, title, artist, artist_id, count, duration_ms, year, created)| {
                album_json(
                    &album_id,
                    &title,
                    &artist,
                    &artist_id,
                    count,
                    duration_ms / 1000,
                    year,
                    created,
                )
            },
        )
        .collect();

    ok(json!({ "albumList2": { "album": albums }, "albumList": { "album": albums } }))
}

async fn get_random_songs(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Query(params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let db = pool(&state).await;
    let size = int_param(&params, "size", 50).clamp(1, 500);
    let star_map = starred_ids(&db, &user.user_id, "track").await;

    let offset = int_param(&params, "offset", 0);

    let rows: Vec<(
        String,
        String,
        i64,
        i64,
        i64,
        Option<i64>,
        Option<i64>,
        String,
        String,
        i64,
        String,
        String,
        String,
        Option<i64>,
        Option<i64>,
        String,
    )> = sqlx::query_as(
        "SELECT t.track_id, t.title, COALESCE(t.track_number,0), t.duration_ms, t.file_size,
                    t.bitrate, t.sample_rate, t.suffix, t.content_type, t.created_at,
                    a.album_id, a.title, ar.name, a.year, a.created_at, ar.artist_id
             FROM tracks t JOIN albums a ON a.album_id = t.album_id
             JOIN artists ar ON ar.artist_id = t.artist_id
             ORDER BY RANDOM() LIMIT ? OFFSET ?",
    )
    .bind(size)
    .bind(offset)
    .fetch_all(&db)
    .await
    .unwrap_or_default();

    let songs: Vec<Value> = rows
        .into_iter()
        .map(
            |(
                track_id,
                title,
                track,
                duration,
                size,
                bitrate,
                _sample,
                suffix,
                ctype,
                created,
                album_id,
                album_title,
                artist,
                year,
                _ac,
                artist_id,
            )| {
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
                    star_map.contains(&track_id),
                )
            },
        )
        .collect();

    ok(json!({ "randomSongs": { "song": songs } }))
}

// ---------------------------------------------------------------------------
// Search
// ---------------------------------------------------------------------------

async fn search3(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Query(params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let query = params.get("query").cloned().unwrap_or_default();
    if query.trim().is_empty() {
        return ok(json!({
            "searchResult3": { "artist": [], "album": [], "song": [] },
            "searchResult2": { "artist": [], "album": [], "song": [] }
        }));
    }

    let db = pool(&state).await;
    let pattern = format!("%{}%", query.replace('%', "\\%").replace('_', "\\_"));
    let artist_count = int_param(&params, "artistCount", 20).clamp(1, 100);
    let album_count = int_param(&params, "albumCount", 20).clamp(1, 100);
    let song_count = int_param(&params, "songCount", 40).clamp(1, 200);
    let star_map = starred_ids(&db, &user.user_id, "track").await;

    let artists: Vec<(String, String, i64)> = sqlx::query_as(
        "SELECT artist_id, name, album_count FROM artists WHERE name LIKE ? ESCAPE '\\'
         ORDER BY name COLLATE NOCASE LIMIT ?",
    )
    .bind(&pattern)
    .bind(artist_count)
    .fetch_all(&db)
    .await
    .unwrap_or_default();

    let albums: Vec<(String, String, String, String, i64, i64, Option<i64>, i64)> = sqlx::query_as(
        "SELECT a.album_id, a.title, ar.name, a.artist_id, a.track_count, a.duration_ms,
                a.year, a.created_at
         FROM albums a JOIN artists ar ON ar.artist_id = a.artist_id
         WHERE a.title LIKE ? ESCAPE '\\' OR ar.name LIKE ? ESCAPE '\\'
         ORDER BY a.title COLLATE NOCASE LIMIT ?",
    )
    .bind(&pattern)
    .bind(&pattern)
    .bind(album_count)
    .fetch_all(&db)
    .await
    .unwrap_or_default();

    let tracks: Vec<(String, String, i64, i64, i64, Option<i64>, Option<i64>, String, String, i64, String, String, String, Option<i64>, Option<i64>, String)> =
        sqlx::query_as(
            "SELECT t.track_id, t.title, COALESCE(t.track_number,0), t.duration_ms, t.file_size,
                    t.bitrate, t.sample_rate, t.suffix, t.content_type, t.created_at,
                    a.album_id, a.title, ar.name, a.year, a.created_at, ar.artist_id
             FROM tracks t JOIN albums a ON a.album_id = t.album_id
             JOIN artists ar ON ar.artist_id = t.artist_id
             WHERE t.title LIKE ? ESCAPE '\\' OR a.title LIKE ? ESCAPE '\\' OR ar.name LIKE ? ESCAPE '\\'
             ORDER BY t.title COLLATE NOCASE LIMIT ?",
        )
        .bind(&pattern)
        .bind(&pattern)
        .bind(&pattern)
        .bind(song_count)
        .fetch_all(&db)
        .await
        .unwrap_or_default();

    let song_list: Vec<Value> = tracks
        .into_iter()
        .map(
            |(
                track_id,
                title,
                track,
                duration,
                size,
                bitrate,
                _sample,
                suffix,
                ctype,
                created,
                album_id,
                album_title,
                artist,
                year,
                _ac,
                artist_id,
            )| {
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
                    star_map.contains(&track_id),
                )
            },
        )
        .collect();

    // YouTube Music results are appended for the signed-in profile, so mobile
    // clients find them through the same search box. A slow or broken YouTube
    // must never delay the local results.
    let mut song_list = song_list;
    let (config, ytm) = {
        let state = state.read().await;
        (state.config.clone(), state.ytm.clone())
    };
    if config.ytm_enabled {
        let request = crate::ytm::list(
            &ytm,
            &db,
            &user.user_id,
            crate::ytm::Listing::Search(query.clone()),
            song_count as usize,
        );
        if let Ok(Ok(Some(tracks))) =
            tokio::time::timeout(std::time::Duration::from_secs(4), request).await
        {
            song_list.extend(tracks);
        }
    }

    let result = json!({
        "artist": artists
            .into_iter()
            .map(|(id, name, count)| artist_json(&id, &name, count))
            .collect::<Vec<_>>(),
        "album": albums
            .into_iter()
            .map(|(id, title, artist, artist_id, count, duration_ms, year, created)| {
                album_json(&id, &title, &artist, &artist_id, count, duration_ms / 1000, year, created)
            })
            .collect::<Vec<_>>(),
        "song": song_list
    });

    ok(json!({ "searchResult3": result, "searchResult2": result }))
}

// ---------------------------------------------------------------------------
// Cover art / streaming
// ---------------------------------------------------------------------------

async fn get_cover_art(
    State(state): State<Arc<RwLock<AppState>>>,
    Query(params): Query<HashMap<String, String>>,
    Extension(user): Extension<AuthUser>,
) -> Response {
    let Some(id) = str_param(&params, "id") else {
        return StatusCode::BAD_REQUEST.into_response();
    };
    if let Some(video_id) = crate::ytm::video_id(&id) {
        let (db, ytm) = {
            let state = state.read().await;
            (state.db.clone(), state.ytm.clone())
        };
        return crate::ytm::serve_cover(&ytm, &db, &user.user_id, video_id).await;
    }
    let db = pool(&state).await;

    let mut cover: Option<String> = None;

    // Album id?
    if let Ok(Some((Some(path),))) =
        sqlx::query_as::<_, (Option<String>,)>("SELECT cover_path FROM albums WHERE album_id = ?")
            .bind(&id)
            .fetch_optional(&db)
            .await
    {
        cover = Some(path);
    }

    // Track id?
    if cover.is_none() {
        if let Ok(Some((album_id,))) =
            sqlx::query_as::<_, (String,)>("SELECT album_id FROM tracks WHERE track_id = ?")
                .bind(&id)
                .fetch_optional(&db)
                .await
        {
            if let Ok(Some((Some(path),))) = sqlx::query_as::<_, (Option<String>,)>(
                "SELECT cover_path FROM albums WHERE album_id = ?",
            )
            .bind(album_id)
            .fetch_optional(&db)
            .await
            {
                cover = Some(path);
            }
        }
    }

    // Playlist id? Use the first track's cover.
    if cover.is_none() {
        if let Ok(Some((Some(path),))) = sqlx::query_as::<_, (Option<String>,)>(
            "SELECT a.cover_path FROM playlist_tracks pt
             JOIN tracks t ON t.track_id = pt.track_id
             JOIN albums a ON a.album_id = t.album_id
             WHERE pt.playlist_id = ? AND a.cover_path IS NOT NULL
             ORDER BY pt.position LIMIT 1",
        )
        .bind(&id)
        .fetch_optional(&db)
        .await
        {
            cover = Some(path);
        }
    }

    // Artist id?
    if cover.is_none() {
        if let Ok(Some((Some(path),))) = sqlx::query_as::<_, (Option<String>,)>(
            "SELECT cover_path FROM albums
             WHERE artist_id = ? AND cover_path IS NOT NULL
             ORDER BY COALESCE(year, 0) DESC LIMIT 1",
        )
        .bind(&id)
        .fetch_optional(&db)
        .await
        {
            cover = Some(path);
        }
    }

    let Some(path) = cover else {
        return StatusCode::NOT_FOUND.into_response();
    };

    let requested_size = int_param(&params, "size", 600).clamp(64, 1600) as u32;

    let (data, mime) = if let Some(embedded_path) = path.strip_prefix("embed:") {
        match crate::scanner::tags::embedded_cover(std::path::Path::new(embedded_path)) {
            Some(pair) => pair,
            None => return StatusCode::NOT_FOUND.into_response(),
        }
    } else {
        match tokio::fs::read(&path).await {
            Ok(data) => (data, mime_for_path(&path).to_string()),
            Err(_) => return StatusCode::NOT_FOUND.into_response(),
        }
    };

    let (data, mime) = match resize_cover(data.clone(), &mime, requested_size) {
        Some(resized) => resized,
        None => (data, mime),
    };

    Response::builder()
        .status(StatusCode::OK)
        .header(header::CONTENT_TYPE, mime)
        .header(header::CACHE_CONTROL, "public, max-age=86400")
        .body(Body::from(data))
        .unwrap()
}

/// Downscale cover art so a library grid does not download full-size scans.
fn resize_cover(data: Vec<u8>, mime: &str, size: u32) -> Option<(Vec<u8>, String)> {
    let image = image::load_from_memory(&data).ok()?;
    if image.width() <= size && image.height() <= size {
        return None;
    }

    let thumb = image.thumbnail(size, size);
    let mut output = Vec::new();
    let mut cursor = std::io::Cursor::new(&mut output);
    let mut encoder = image::codecs::jpeg::JpegEncoder::new_with_quality(&mut cursor, 84);
    encoder.encode_image(&thumb).ok()?;

    let _ = mime;
    Some((output, "image/jpeg".to_string()))
}

fn mime_for_path(path: &str) -> &'static str {
    match std::path::Path::new(path)
        .extension()
        .map(|e| e.to_string_lossy().to_lowercase())
        .unwrap_or_default()
        .as_str()
    {
        "png" => "image/png",
        "webp" => "image/webp",
        "gif" => "image/gif",
        "bmp" => "image/bmp",
        _ => "image/jpeg",
    }
}

async fn stream(
    State(state): State<Arc<RwLock<AppState>>>,
    Query(params): Query<HashMap<String, String>>,
    Extension(user): Extension<AuthUser>,
    headers: HeaderMap,
) -> Response {
    let Some(id) = str_param(&params, "id") else {
        return StatusCode::BAD_REQUEST.into_response();
    };
    let (db, config, ytm) = {
        let state = state.read().await;
        (state.db.clone(), state.config.clone(), state.ytm.clone())
    };
    // Local library or YouTube Music, depending on the id prefix.
    crate::api::playback::serve(&db, &config, &ytm, &user.user_id, &id, &headers).await
}

// ---------------------------------------------------------------------------
// Lyrics
// ---------------------------------------------------------------------------

async fn get_lyrics(
    State(state): State<Arc<RwLock<AppState>>>,
    Query(params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let db = pool(&state).await;
    let artist = params.get("artist").cloned().unwrap_or_default();
    let title = params.get("title").cloned().unwrap_or_default();

    let row: Option<(String, String, String, String, i64)> = sqlx::query_as(
        "SELECT t.track_id, t.file_path, t.title, ar.name, t.duration_ms
         FROM tracks t JOIN artists ar ON ar.artist_id = t.artist_id
         WHERE t.title = ? COLLATE NOCASE
           AND (? = '' OR ar.name = ? COLLATE NOCASE)
         LIMIT 1",
    )
    .bind(&title)
    .bind(&artist)
    .bind(&artist)
    .fetch_optional(&db)
    .await
    .unwrap_or(None);

    let Some((track_id, file_path, track_title, track_artist, duration_ms)) = row else {
        return fail(70, "Lyrics not found");
    };

    let online = state.read().await.config.online_lyrics;
    let store = crate::lyrics::store_dir(&state.read().await.config.db_path);
    match crate::lyrics::resolve(
        &db,
        &crate::lyrics::Lookup {
            track_id: &track_id,
            path: std::path::Path::new(&file_path),
            artist: &track_artist,
            title: &track_title,
            duration_sec: duration_ms / 1000,
            online,
            refresh: false,
            store: Some(&store),
            sidecar: true,
            proxy: state.read().await.config.lyrics_proxy.as_deref(),
        },
    )
    .await
    {
        crate::lyrics::Outcome::Found(lyrics) => ok(json!({
            "lyrics": { "artist": track_artist, "title": track_title, "value": lyrics.plain }
        })),
        crate::lyrics::Outcome::NotFound => fail(70, "Lyrics not found"),
        crate::lyrics::Outcome::Unavailable => fail(70, "Lyrics service unavailable"),
    }
}

/// OpenSubsonic `getLyricsBySongId`: the same text as `getLyrics`, but with
/// line timings, so modern clients (Feishin and friends) can highlight the
/// line that is playing.
async fn get_lyrics_by_song_id(
    State(state): State<Arc<RwLock<AppState>>>,
    Query(params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let Some(id) = params
        .get("id")
        .or_else(|| params.get("songId"))
        .map(|value| value.trim().to_string())
    else {
        return fail(10, "Missing song id");
    };

    let db = pool(&state).await;
    let row: Option<(String, String, String, String, i64)> = sqlx::query_as(
        "SELECT t.track_id, t.file_path, t.title, ar.name, t.duration_ms
         FROM tracks t JOIN artists ar ON ar.artist_id = t.artist_id
         WHERE t.track_id = ?",
    )
    .bind(&id)
    .fetch_optional(&db)
    .await
    .unwrap_or(None);

    // A YouTube track has no row in `tracks`: its metadata comes from the
    // remembered listing, exactly like the web API does it.
    let row = match row {
        Some(row) => Some(row),
        None => crate::api::library::ytm_lyrics_row(&db, &id).await.map(
            |(file_path, title, artist, duration_ms)| {
                (id.clone(), file_path, title, artist, duration_ms)
            },
        ),
    };

    let Some((track_id, file_path, title, artist, duration_ms)) = row else {
        return fail(70, "Lyrics not found");
    };

    let (online, store, proxy) = {
        let state = state.read().await;
        (
            state.config.online_lyrics,
            crate::lyrics::store_dir(&state.config.db_path),
            state.config.lyrics_proxy.clone(),
        )
    };
    let sidecar = crate::ytm::video_id(&track_id).is_none();

    let found = crate::lyrics::resolve(
        &db,
        &crate::lyrics::Lookup {
            track_id: &track_id,
            path: std::path::Path::new(&file_path),
            artist: &artist,
            title: &title,
            duration_sec: duration_ms / 1000,
            online,
            refresh: false,
            store: Some(&store),
            sidecar,
            proxy: proxy.as_deref(),
        },
    )
    .await;

    match found {
        crate::lyrics::Outcome::Found(lyrics) => {
            let synced = !lyrics.synced.is_empty();
            let lines: Vec<Value> = if synced {
                lyrics
                    .synced
                    .iter()
                    .map(|line| json!({ "start": line.time_ms, "value": line.text }))
                    .collect()
            } else {
                lyrics
                    .plain
                    .lines()
                    .map(|line| json!({ "value": line }))
                    .collect()
            };
            ok(json!({
                "lyricsList": {
                    "structuredLyrics": [{
                        "displayArtist": artist,
                        "displayTitle": title,
                        "synced": synced,
                        "offset": 0,
                        "line": lines
                    }]
                }
            }))
        }
        crate::lyrics::Outcome::NotFound => fail(70, "Lyrics not found"),
        crate::lyrics::Outcome::Unavailable => fail(70, "Lyrics service unavailable"),
    }
}

async fn get_genres(
    State(state): State<Arc<RwLock<AppState>>>,
    Query(_params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let db = pool(&state).await;
    let rows: Vec<(String, i64, i64)> = sqlx::query_as(
        "SELECT COALESCE(NULLIF(genre, ''), 'Unknown') AS g, COUNT(*), SUM(track_count)
         FROM albums GROUP BY g ORDER BY g COLLATE NOCASE",
    )
    .fetch_all(&db)
    .await
    .unwrap_or_default();

    let genres: Vec<Value> = rows
        .into_iter()
        .map(|(name, album_count, song_count)| {
            json!({ "value": name, "songCount": song_count, "albumCount": album_count })
        })
        .collect();

    ok(json!({ "genres": { "genre": genres } }))
}

// ---------------------------------------------------------------------------
// Playlists
// ---------------------------------------------------------------------------

async fn get_playlists(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Query(_params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let db = pool(&state).await;
    let rows: Vec<(String, String, String, Option<String>, i64, i64, i64, i64)> = sqlx::query_as(
        "SELECT p.playlist_id, p.name, p.owner, p.comment, p.created_at, p.changed_at,
                COUNT(pt.track_id),
                COALESCE(SUM(t.duration_ms), 0)
         FROM playlists p
         LEFT JOIN playlist_tracks pt ON pt.playlist_id = p.playlist_id
         LEFT JOIN tracks t ON t.track_id = pt.track_id
         WHERE p.user_id = ?
         GROUP BY p.playlist_id ORDER BY p.created_at DESC",
    )
    .bind(&user.user_id)
    .fetch_all(&db)
    .await
    .unwrap_or_default();

    let playlists: Vec<Value> = rows
        .into_iter()
        .map(
            |(id, name, owner, comment, created, changed, count, duration_ms)| {
                json!({
                    "id": id,
                    "name": name,
                    "owner": owner,
                    "comment": comment,
                    "public": true,
                    "songCount": count,
                    "duration": duration_ms / 1000,
                    "created": iso(created),
                    "changed": iso(changed),
                    "coverArt": id
                })
            },
        )
        .collect();

    ok(json!({ "playlists": { "playlist": playlists } }))
}

async fn get_playlist(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Query(params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let Some(id) = str_param(&params, "id").or_else(|| str_param(&params, "playlistId")) else {
        return fail(10, "Required parameter id is missing");
    };
    let db = pool(&state).await;

    let playlist: Option<(String, String, String, Option<String>, Option<String>, i64, i64)> = sqlx::query_as(
        "SELECT playlist_id, name, owner, comment, user_id, created_at, changed_at FROM playlists WHERE playlist_id = ?",
    )
    .bind(&id)
    .fetch_optional(&db)
    .await
    .unwrap_or(None);

    let Some((playlist_id, name, owner, comment, playlist_user_id, created, changed)) = playlist
    else {
        return fail(70, "Playlist not found");
    };
    if playlist_user_id.as_deref() != Some(user.user_id.as_str()) && !user.is_admin {
        return fail(50, "Playlist belongs to another user");
    }

    let rows: Vec<(
        String,
        String,
        i64,
        i64,
        i64,
        Option<i64>,
        Option<i64>,
        String,
        String,
        i64,
        String,
        String,
        String,
        Option<i64>,
        Option<i64>,
        String,
    )> = sqlx::query_as(
        "SELECT t.track_id, t.title, COALESCE(t.track_number,0), t.duration_ms, t.file_size,
                    t.bitrate, t.sample_rate, t.suffix, t.content_type, t.created_at,
                    a.album_id, a.title, ar.name, a.year, a.created_at, ar.artist_id
             FROM playlist_tracks pt
             JOIN tracks t ON t.track_id = pt.track_id
             JOIN albums a ON a.album_id = t.album_id
             JOIN artists ar ON ar.artist_id = t.artist_id
             WHERE pt.playlist_id = ? ORDER BY pt.position",
    )
    .bind(&playlist_id)
    .fetch_all(&db)
    .await
    .unwrap_or_default();

    let star_map = starred_ids(&db, &user.user_id, "track").await;
    let duration: i64 = rows.iter().map(|row| row.3).sum::<i64>() / 1000;
    let entries: Vec<Value> = rows
        .into_iter()
        .map(
            |(
                track_id,
                title,
                track,
                duration,
                size,
                bitrate,
                _sample,
                suffix,
                ctype,
                t_created,
                album_id,
                album_title,
                artist,
                year,
                _ac,
                artist_id,
            )| {
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
                    t_created,
                    star_map.contains(&track_id),
                )
            },
        )
        .collect();

    ok(json!({
        "playlist": {
            "id": playlist_id,
            "name": name,
            "owner": owner,
            "comment": comment,
            "public": true,
            "songCount": entries.len(),
            "duration": duration,
            "created": iso(created),
            "changed": iso(changed),
            "coverArt": playlist_id,
            "entry": entries
        }
    }))
}

async fn create_playlist(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    RawQuery(raw): RawQuery,
) -> Json<Value> {
    let params = parse_raw_params(raw.as_deref());
    let db = pool(&state).await;
    let now = chrono::Utc::now().timestamp();

    let name = params
        .iter()
        .find(|(k, _)| k == "name")
        .map(|(_, v)| v.clone())
        .unwrap_or_else(|| "Плейлист".to_string());

    let existing_id = params
        .iter()
        .find(|(k, _)| k == "playlistId")
        .map(|(_, v)| v.clone());

    let playlist_id = existing_id.unwrap_or_else(|| uuid::Uuid::new_v4().simple().to_string());

    if let Some(old) = params
        .iter()
        .find(|(k, _)| k == "playlistId")
        .map(|(_, v)| v.clone())
    {
        let owner: Option<(Option<String>,)> =
            sqlx::query_as("SELECT user_id FROM playlists WHERE playlist_id = ?")
                .bind(&old)
                .fetch_optional(&db)
                .await
                .unwrap_or(None);
        match owner {
            Some((owner,)) if owner.as_deref() == Some(user.user_id.as_str()) || user.is_admin => {}
            Some(_) => return fail(50, "Playlist belongs to another user"),
            None => return fail(70, "Playlist not found"),
        }
        sqlx::query("UPDATE playlists SET name = ?, changed_at = ? WHERE playlist_id = ?")
            .bind(&name)
            .bind(now)
            .bind(&old)
            .execute(&db)
            .await
            .ok();
        sqlx::query("DELETE FROM playlist_tracks WHERE playlist_id = ?")
            .bind(&old)
            .execute(&db)
            .await
            .ok();
    } else {
        sqlx::query(
            "INSERT INTO playlists (playlist_id, name, owner, user_id, created_at, changed_at)
             VALUES (?, ?, ?, ?, ?, ?)",
        )
        .bind(&playlist_id)
        .bind(&name)
        .bind(&user.username)
        .bind(&user.user_id)
        .bind(now)
        .bind(now)
        .execute(&db)
        .await
        .ok();
    }

    let ids: Vec<String> = params
        .iter()
        .filter(|(k, _)| k == "songId" || k == "songIdToAdd")
        .map(|(_, v)| v.clone())
        .collect();

    for (idx, track_id) in ids.iter().enumerate() {
        sqlx::query(
            "INSERT OR REPLACE INTO playlist_tracks (playlist_id, track_id, position) VALUES (?, ?, ?)",
        )
        .bind(&playlist_id)
        .bind(track_id)
        .bind(idx as i64)
        .execute(&db)
        .await
        .ok();
    }

    ok(json!({ "playlist": { "id": playlist_id, "name": name } }))
}

async fn update_playlist(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    RawQuery(raw): RawQuery,
) -> Json<Value> {
    let params = parse_raw_params(raw.as_deref());
    let db = pool(&state).await;
    let Some(playlist_id) = params
        .iter()
        .find(|(k, _)| k == "playlistId")
        .map(|(_, v)| v.clone())
    else {
        return fail(10, "Required parameter playlistId is missing");
    };

    let owner: Option<(Option<String>,)> =
        sqlx::query_as("SELECT user_id FROM playlists WHERE playlist_id = ?")
            .bind(&playlist_id)
            .fetch_optional(&db)
            .await
            .unwrap_or(None);
    match owner {
        Some((owner,)) if owner.as_deref() == Some(user.user_id.as_str()) || user.is_admin => {}
        Some(_) => return fail(50, "Playlist belongs to another user"),
        None => return fail(70, "Playlist not found"),
    }

    let add_ids: Vec<String> = params
        .iter()
        .filter(|(k, _)| k == "songIdToAdd")
        .map(|(_, v)| v.clone())
        .collect();

    let remove_indexes: Vec<i64> = params
        .iter()
        .filter(|(k, _)| k == "songIndexToRemove")
        .filter_map(|(_, v)| v.parse().ok())
        .collect();

    let mut position: i64 = sqlx::query_scalar::<_, i64>(
        "SELECT COALESCE(MAX(position), -1) + 1 FROM playlist_tracks WHERE playlist_id = ?",
    )
    .bind(&playlist_id)
    .fetch_one(&db)
    .await
    .unwrap_or(0);

    for track_id in &add_ids {
        sqlx::query(
            "INSERT OR REPLACE INTO playlist_tracks (playlist_id, track_id, position) VALUES (?, ?, ?)",
        )
        .bind(&playlist_id)
        .bind(track_id)
        .bind(position)
        .execute(&db)
        .await
        .ok();
        position += 1;
    }

    for index in remove_indexes {
        // `songIndexToRemove` is the ordinal in the playlist, not the stored
        // position: positions are renumbered below, so both stay in sync.
        sqlx::query(
            "DELETE FROM playlist_tracks WHERE rowid = (
                 SELECT rowid FROM playlist_tracks
                 WHERE playlist_id = ? ORDER BY position LIMIT 1 OFFSET ?
             )",
        )
        .bind(&playlist_id)
        .bind(index.max(0))
        .execute(&db)
        .await
        .ok();
    }

    // Close the gaps so the next removal by index still means the same thing.
    sqlx::query(
        "WITH ordered AS (
             SELECT rowid AS rid, ROW_NUMBER() OVER (ORDER BY position) - 1 AS pos
             FROM playlist_tracks WHERE playlist_id = ?
         )
         UPDATE playlist_tracks
         SET position = (SELECT pos FROM ordered WHERE ordered.rid = playlist_tracks.rowid)
         WHERE playlist_id = ?",
    )
    .bind(&playlist_id)
    .bind(&playlist_id)
    .execute(&db)
    .await
    .ok();

    sqlx::query("UPDATE playlists SET changed_at = ? WHERE playlist_id = ?")
        .bind(chrono::Utc::now().timestamp())
        .bind(&playlist_id)
        .execute(&db)
        .await
        .ok();

    ok(json!({}))
}

async fn delete_playlist(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Query(params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let Some(id) = str_param(&params, "id") else {
        return fail(10, "Required parameter id is missing");
    };
    let db = pool(&state).await;
    let owner: Option<(Option<String>,)> =
        sqlx::query_as("SELECT user_id FROM playlists WHERE playlist_id = ?")
            .bind(&id)
            .fetch_optional(&db)
            .await
            .unwrap_or(None);
    match owner {
        Some((owner,)) if owner.as_deref() == Some(user.user_id.as_str()) || user.is_admin => {}
        Some(_) => return fail(50, "Playlist belongs to another user"),
        None => return fail(70, "Playlist not found"),
    }
    sqlx::query("DELETE FROM playlist_tracks WHERE playlist_id = ?")
        .bind(&id)
        .execute(&db)
        .await
        .ok();
    sqlx::query("DELETE FROM playlists WHERE playlist_id = ?")
        .bind(&id)
        .execute(&db)
        .await
        .ok();
    ok(json!({}))
}

// ---------------------------------------------------------------------------
// Stars / scrobble
// ---------------------------------------------------------------------------

async fn starred_ids(
    db: &sqlx::SqlitePool,
    user_id: &str,
    item_type: &str,
) -> std::collections::HashSet<String> {
    let rows: Vec<(String,)> =
        sqlx::query_as("SELECT item_id FROM stars WHERE user_id = ? AND item_type = ?")
            .bind(user_id)
            .bind(item_type)
            .fetch_all(db)
            .await
            .unwrap_or_default();
    rows.into_iter().map(|(id,)| id).collect()
}

async fn set_star(
    state: Arc<RwLock<AppState>>,
    user_id: &str,
    items: &[(String, String)],
    star: bool,
) -> Json<Value> {
    let db = pool(&state).await;
    for (id, item_type) in items {
        if star {
            sqlx::query("DELETE FROM dislikes WHERE user_id = ? AND item_id = ? AND item_type = ?")
                .bind(user_id)
                .bind(id)
                .bind(item_type)
                .execute(&db)
                .await
                .ok();
            sqlx::query(
                "INSERT OR REPLACE INTO stars (user_id, item_id, item_type, created_at) VALUES (?, ?, ?, ?)",
            )
            .bind(user_id)
            .bind(id)
            .bind(item_type)
            .bind(chrono::Utc::now().timestamp())
            .execute(&db)
            .await
            .ok();
        } else {
            sqlx::query("DELETE FROM stars WHERE user_id = ? AND item_id = ? AND item_type = ?")
                .bind(user_id)
                .bind(id)
                .bind(item_type)
                .execute(&db)
                .await
                .ok();
        }
    }
    ok(json!({}))
}

fn star_items(raw: Option<&str>) -> Vec<(String, String)> {
    parse_raw_params(raw)
        .into_iter()
        .filter_map(|(key, value)| match key.as_str() {
            "id" => Some((value, "track".to_string())),
            "albumId" => Some((value, "album".to_string())),
            "artistId" => Some((value, "artist".to_string())),
            _ => None,
        })
        .collect()
}

async fn star(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    RawQuery(raw): RawQuery,
) -> Json<Value> {
    set_star(state, &user.user_id, &star_items(raw.as_deref()), true).await
}

async fn unstar(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    RawQuery(raw): RawQuery,
) -> Json<Value> {
    set_star(state, &user.user_id, &star_items(raw.as_deref()), false).await
}

async fn set_rating(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    RawQuery(raw): RawQuery,
) -> Json<Value> {
    let params: HashMap<String, String> = parse_raw_params(raw.as_deref()).into_iter().collect();
    let Some(id) = str_param(&params, "id") else {
        return fail(10, "Required parameter id is missing");
    };
    let rating = params
        .get("rating")
        .and_then(|value| value.parse::<i64>().ok())
        .unwrap_or(0);
    let db = pool(&state).await;
    if rating <= 0 {
        sqlx::query("DELETE FROM stars WHERE user_id = ? AND item_id = ? AND item_type = 'track'")
            .bind(&user.user_id)
            .bind(&id)
            .execute(&db)
            .await
            .ok();
        sqlx::query(
            "DELETE FROM dislikes WHERE user_id = ? AND item_id = ? AND item_type = 'track'",
        )
        .bind(&user.user_id)
        .bind(&id)
        .execute(&db)
        .await
        .ok();
    } else {
        sqlx::query(
            "DELETE FROM dislikes WHERE user_id = ? AND item_id = ? AND item_type = 'track'",
        )
        .bind(&user.user_id)
        .bind(&id)
        .execute(&db)
        .await
        .ok();
        sqlx::query(
            "INSERT OR REPLACE INTO stars (user_id, item_id, item_type, created_at) VALUES (?, ?, 'track', ?)",
        )
        .bind(&user.user_id)
        .bind(&id)
        .bind(chrono::Utc::now().timestamp())
        .execute(&db)
        .await
        .ok();
    }
    ok(json!({}))
}

async fn scrobble(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Query(params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let Some(id) = str_param(&params, "id") else {
        return fail(10, "Required parameter id is missing");
    };
    let time_ms = params
        .get("time")
        .and_then(|value| value.parse::<i64>().ok())
        .unwrap_or(0);
    let submission = params
        .get("submission")
        .map(|value| value == "true" || value == "1")
        .unwrap_or(false);

    let (db, config) = {
        let state = state.read().await;
        (state.db.clone(), state.config.clone())
    };

    match crate::scrobble::record_start(&db, &user.user_id, &id, "subsonic").await {
        Ok(play_id) => {
            if time_ms > 0 || submission {
                let _ = crate::scrobble::update_play(
                    &db,
                    &config,
                    &user.user_id,
                    play_id,
                    time_ms,
                    submission,
                )
                .await;
            }
            ok(json!({}))
        }
        Err(_) => fail(70, "Song not found"),
    }
}

async fn get_starred(
    State(state): State<Arc<RwLock<AppState>>>,
    Extension(user): Extension<AuthUser>,
    Query(_params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let db = pool(&state).await;
    let song_ids = starred_ids(&db, &user.user_id, "track").await;
    let album_ids = starred_ids(&db, &user.user_id, "album").await;

    let mut songs = Vec::new();
    for id in &song_ids {
        let row: Option<(
            String,
            String,
            i64,
            i64,
            i64,
            Option<i64>,
            Option<i64>,
            String,
            String,
            i64,
            String,
            String,
            String,
            Option<i64>,
            Option<i64>,
            String,
        )> = sqlx::query_as(
            "SELECT t.track_id, t.title, COALESCE(t.track_number,0), t.duration_ms, t.file_size,
                        t.bitrate, t.sample_rate, t.suffix, t.content_type, t.created_at,
                        a.album_id, a.title, ar.name, a.year, a.created_at, ar.artist_id
                 FROM tracks t JOIN albums a ON a.album_id = t.album_id
                 JOIN artists ar ON ar.artist_id = t.artist_id WHERE t.track_id = ?",
        )
        .bind(id)
        .fetch_optional(&db)
        .await
        .unwrap_or(None);
        if let Some((
            track_id,
            title,
            track,
            duration,
            size,
            bitrate,
            _sample,
            suffix,
            ctype,
            created,
            album_id,
            album_title,
            artist,
            year,
            _ac,
            artist_id,
        )) = row
        {
            songs.push(song_json(
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
                true,
            ));
        }
    }

    let mut albums = Vec::new();
    for id in &album_ids {
        let row: Option<(String, String, String, String, i64, i64, Option<i64>, i64)> =
            sqlx::query_as(
                "SELECT a.album_id, a.title, ar.name, a.artist_id, a.track_count, a.duration_ms,
                        a.year, a.created_at
                 FROM albums a JOIN artists ar ON ar.artist_id = a.artist_id WHERE a.album_id = ?",
            )
            .bind(id)
            .fetch_optional(&db)
            .await
            .unwrap_or(None);
        if let Some((album_id, title, artist, artist_id, count, duration_ms, year, created)) = row {
            albums.push(album_json(
                &album_id,
                &title,
                &artist,
                &artist_id,
                count,
                duration_ms / 1000,
                year,
                created,
            ));
        }
    }

    ok(json!({
        "starred2": { "artist": [], "album": albums, "song": songs },
        "starred": { "artist": [], "album": albums, "song": songs }
    }))
}

// ---------------------------------------------------------------------------
// Scan status
// ---------------------------------------------------------------------------

async fn get_scan_status(
    State(state): State<Arc<RwLock<AppState>>>,
    Query(_params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let db = pool(&state).await;
    let count: i64 = sqlx::query_scalar("SELECT COUNT(*) FROM tracks")
        .fetch_one(&db)
        .await
        .unwrap_or(0);
    ok(json!({
        "scanStatus": {
            "scanning": false,
            "count": count,
            "folderCount": 1,
            "lastScan": iso(chrono::Utc::now().timestamp())
        }
    }))
}

async fn start_scan(
    State(state): State<Arc<RwLock<AppState>>>,
    Query(_params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let scan_state = state.clone();
    tokio::spawn(async move {
        if let Err(e) = crate::scanner::scan_all(scan_state).await {
            tracing::error!("Manual scan failed: {}", e);
        }
    });
    ok(json!({ "scanStatus": { "scanning": true, "count": 0 } }))
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

fn iso(timestamp: i64) -> String {
    chrono::DateTime::from_timestamp(timestamp, 0)
        .map(|d| d.format("%Y-%m-%dT%H:%M:%SZ").to_string())
        .unwrap_or_default()
}

fn parse_raw_params(raw: Option<&str>) -> Vec<(String, String)> {
    let Some(raw) = raw else {
        return Vec::new();
    };
    raw.split('&')
        .filter(|pair| !pair.is_empty())
        .map(|pair| {
            let (key, value) = pair.split_once('=').unwrap_or((pair, ""));
            (percent_decode(key), percent_decode(value))
        })
        .collect()
}

fn percent_decode(value: &str) -> String {
    let bytes = value.as_bytes();
    let mut out = Vec::with_capacity(bytes.len());
    let mut i = 0;
    while i < bytes.len() {
        match bytes[i] {
            b'+' => out.push(b' '),
            b'%' if i + 2 < bytes.len() => {
                let hex = &value[i + 1..i + 3];
                if let Ok(byte) = u8::from_str_radix(hex, 16) {
                    out.push(byte);
                    i += 2;
                } else {
                    out.push(bytes[i]);
                }
            }
            b => out.push(b),
        }
        i += 1;
    }
    String::from_utf8_lossy(&out).to_string()
}

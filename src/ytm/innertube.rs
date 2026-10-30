//! Minimal YouTube Music InnerTube client (the JSON API used by
//! music.youtube.com): search, liked songs and the signed-in account.

use anyhow::{anyhow, Result};
use serde_json::{json, Value};
use sha1::{Digest, Sha1};

use super::cookies::{self, Cookie};

const ORIGIN: &str = "https://music.youtube.com";
const CLIENT_NAME: &str = "WEB_REMIX";
const CLIENT_VERSION: &str = "1.20250101.01.00";
pub const USER_AGENT: &str =
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36";
/// `params` value that restricts search results to songs.
const SONGS_FILTER: &str = "EgWKAQIIAWoKEAkQBRAKEAMQBA%3D%3D";

#[derive(Debug, Clone, PartialEq)]
pub struct Song {
    pub video_id: String,
    pub title: String,
    pub artist: String,
    pub album: String,
    pub duration_secs: i64,
    pub thumbnail: String,
}

#[derive(Debug, Clone, serde::Serialize, serde::Deserialize, PartialEq)]
pub struct Account {
    pub name: String,
    pub handle: Option<String>,
    pub photo: Option<String>,
}

fn sapisid_hash(sapisid: &str, timestamp: i64) -> String {
    let mut hasher = Sha1::new();
    hasher.update(format!("{timestamp} {sapisid} {ORIGIN}").as_bytes());
    format!("SAPISIDHASH {timestamp}_{}", hex::encode(hasher.finalize()))
}

async fn call(
    client: &reqwest::Client,
    endpoint: &str,
    cookies: &[Cookie],
    mut body: Value,
) -> Result<Value> {
    body["context"] = json!({
        "client": { "clientName": CLIENT_NAME, "clientVersion": CLIENT_VERSION, "hl": "ru", "gl": "RU" },
        "user": {}
    });

    let mut request = client
        .post(format!("{ORIGIN}/youtubei/v1/{endpoint}?prettyPrint=false"))
        .header("Origin", ORIGIN)
        .header("X-Origin", ORIGIN)
        .header("Referer", format!("{ORIGIN}/"))
        .header("User-Agent", USER_AGENT)
        .json(&body);

    if let Some(sapisid) = cookies::sapisid(cookies) {
        request = request
            .header("Cookie", cookies::to_header(cookies))
            .header(
                "Authorization",
                sapisid_hash(sapisid, chrono::Utc::now().timestamp()),
            )
            .header("X-Goog-AuthUser", "0");
    }

    let response = request.send().await?;
    let status = response.status();
    if !status.is_success() {
        return Err(anyhow!("YouTube Music ответил {status}"));
    }
    Ok(response.json().await?)
}

pub async fn search(
    client: &reqwest::Client,
    cookies: &[Cookie],
    query: &str,
    limit: usize,
) -> Result<Vec<Song>> {
    let data = call(
        client,
        "search",
        cookies,
        json!({ "query": query, "params": SONGS_FILTER }),
    )
    .await?;
    Ok(parse_songs(&data, limit))
}

/// The "Liked music" auto playlist (first page).
pub async fn liked(
    client: &reqwest::Client,
    cookies: &[Cookie],
    limit: usize,
) -> Result<Vec<Song>> {
    let data = call(client, "browse", cookies, json!({ "browseId": "VLLM" })).await?;
    Ok(parse_songs(&data, limit))
}

/// Returns `None` when YouTube treats the cookies as a signed-out visitor.
pub async fn account(client: &reqwest::Client, cookies: &[Cookie]) -> Result<Option<Account>> {
    let data = call(client, "account/account_menu", cookies, json!({})).await?;
    Ok(parse_account(&data))
}

fn parse_account(data: &Value) -> Option<Account> {
    let header = find_key(data, "activeAccountHeaderRenderer")?;
    let name = runs_text(header.get("accountName")?);
    if name.is_empty() {
        return None;
    }
    Some(Account {
        name,
        handle: header
            .get("channelHandle")
            .map(runs_text)
            .filter(|text| !text.is_empty()),
        photo: header
            .pointer("/accountPhoto/thumbnails")
            .and_then(Value::as_array)
            .and_then(|thumbs| thumbs.last())
            .and_then(|thumb| thumb.get("url"))
            .and_then(Value::as_str)
            .map(str::to_string),
    })
}

fn parse_songs(data: &Value, limit: usize) -> Vec<Song> {
    let mut items = Vec::new();
    collect_key(data, "musicResponsiveListItemRenderer", &mut items);

    let mut songs: Vec<Song> = Vec::new();
    for item in items {
        let Some(song) = parse_item(item) else {
            continue;
        };
        if !songs
            .iter()
            .any(|existing| existing.video_id == song.video_id)
        {
            songs.push(song);
        }
        if songs.len() >= limit {
            break;
        }
    }
    songs
}

fn parse_item(item: &Value) -> Option<Song> {
    let video_id = item
        .pointer("/playlistItemData/videoId")
        .or_else(|| {
            item.pointer(
                "/overlay/musicItemThumbnailOverlayRenderer/content/musicPlayButtonRenderer/playNavigationEndpoint/watchEndpoint/videoId",
            )
        })
        .and_then(Value::as_str)?
        .to_string();

    let columns = item.get("flexColumns")?.as_array()?;
    let column_runs = |index: usize| -> Vec<&Value> {
        columns
            .get(index)
            .and_then(|column| {
                column.pointer("/musicResponsiveListItemFlexColumnRenderer/text/runs")
            })
            .and_then(Value::as_array)
            .map(|runs| runs.iter().collect())
            .unwrap_or_default()
    };

    let title: String = column_runs(0)
        .iter()
        .filter_map(|run| run.get("text").and_then(Value::as_str))
        .collect();
    if title.is_empty() {
        return None;
    }

    // Search results put "Artist • Album • 3:59" in the second column;
    // playlists put the album in the third and the duration in fixedColumns.
    let mut details = column_runs(1);
    details.extend(column_runs(2));

    let mut artists: Vec<String> = Vec::new();
    let mut album = String::new();
    let mut duration_secs = 0;
    for run in &details {
        let text = run.get("text").and_then(Value::as_str).unwrap_or("").trim();
        match page_type(run) {
            Some("MUSIC_PAGE_TYPE_ARTIST") | Some("MUSIC_PAGE_TYPE_USER_CHANNEL") => {
                artists.push(text.to_string())
            }
            Some("MUSIC_PAGE_TYPE_ALBUM") => album = text.to_string(),
            _ => {
                if let Some(seconds) = parse_duration(text) {
                    duration_secs = seconds;
                }
            }
        }
    }
    if artists.is_empty() {
        // Uploaded videos have a plain channel name without a link.
        if let Some(first) = details
            .first()
            .and_then(|run| run.get("text"))
            .and_then(Value::as_str)
        {
            let first = first.trim();
            if !first.is_empty() && parse_duration(first).is_none() && first != "•" {
                artists.push(first.to_string());
            }
        }
    }
    if duration_secs == 0 {
        if let Some(text) = item
            .pointer("/fixedColumns/0/musicResponsiveListItemFixedColumnRenderer/text")
            .map(runs_text)
        {
            duration_secs = parse_duration(&text).unwrap_or(0);
        }
    }

    let thumbnail = item
        .pointer("/thumbnail/musicThumbnailRenderer/thumbnail/thumbnails")
        .and_then(Value::as_array)
        .and_then(|thumbs| thumbs.last())
        .and_then(|thumb| thumb.get("url"))
        .and_then(Value::as_str)
        .map(upscale_thumbnail)
        .unwrap_or_default();

    Some(Song {
        video_id,
        title,
        artist: if artists.is_empty() {
            "YouTube Music".to_string()
        } else {
            artists.join(", ")
        },
        album,
        duration_secs,
        thumbnail,
    })
}

fn page_type(run: &Value) -> Option<&str> {
    run.pointer(
        "/navigationEndpoint/browseEndpoint/browseEndpointContextSupportedConfigs/browseEndpointContextMusicConfig/pageType",
    )
    .and_then(Value::as_str)
}

fn runs_text(value: &Value) -> String {
    if let Some(text) = value.get("simpleText").and_then(Value::as_str) {
        return text.to_string();
    }
    value
        .get("runs")
        .and_then(Value::as_array)
        .map(|runs| {
            runs.iter()
                .filter_map(|run| run.get("text").and_then(Value::as_str))
                .collect()
        })
        .unwrap_or_default()
}

/// "3:59" or "1:02:03" -> seconds.
fn parse_duration(text: &str) -> Option<i64> {
    if text.is_empty() || !text.contains(':') {
        return None;
    }
    text.split(':').try_fold(0i64, |total, part| {
        let value: i64 = part.parse().ok()?;
        Some(total * 60 + value)
    })
}

/// `lh3.googleusercontent.com/...=w60-h60-l90-rj` -> 544px square.
fn upscale_thumbnail(url: &str) -> String {
    match url.rsplit_once('=') {
        Some((base, size)) if size.starts_with('w') && url.contains("googleusercontent.com") => {
            format!("{base}=w544-h544-l90-rj")
        }
        _ => url.to_string(),
    }
}

fn find_key<'a>(value: &'a Value, key: &str) -> Option<&'a Value> {
    match value {
        Value::Object(map) => map
            .get(key)
            .or_else(|| map.values().find_map(|child| find_key(child, key))),
        Value::Array(items) => items.iter().find_map(|child| find_key(child, key)),
        _ => None,
    }
}

fn collect_key<'a>(value: &'a Value, key: &str, out: &mut Vec<&'a Value>) {
    match value {
        Value::Object(map) => {
            for (name, child) in map {
                if name == key {
                    out.push(child);
                } else {
                    collect_key(child, key, out);
                }
            }
        }
        Value::Array(items) => {
            for child in items {
                collect_key(child, key, out);
            }
        }
        _ => {}
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn run(text: &str, page: Option<&str>) -> Value {
        match page {
            Some(page) => json!({
                "text": text,
                "navigationEndpoint": { "browseEndpoint": { "browseEndpointContextSupportedConfigs": {
                    "browseEndpointContextMusicConfig": { "pageType": page } } } }
            }),
            None => json!({ "text": text }),
        }
    }

    fn column(runs: Vec<Value>) -> Value {
        json!({ "musicResponsiveListItemFlexColumnRenderer": { "text": { "runs": runs } } })
    }

    #[test]
    fn parses_search_result_item() {
        let data = json!({ "contents": [{ "musicResponsiveListItemRenderer": {
            "playlistItemData": { "videoId": "abc" },
            "thumbnail": { "musicThumbnailRenderer": { "thumbnail": { "thumbnails": [
                { "url": "https://lh3.googleusercontent.com/x=w60-h60-l90-rj" } ] } } },
            "flexColumns": [
                column(vec![run("Creep", None)]),
                column(vec![
                    run("Radiohead", Some("MUSIC_PAGE_TYPE_ARTIST")),
                    run(" • ", None),
                    run("Pablo Honey", Some("MUSIC_PAGE_TYPE_ALBUM")),
                    run(" • ", None),
                    run("3:59", None)
                ])
            ]
        }}]});
        let songs = parse_songs(&data, 10);
        assert_eq!(
            songs,
            vec![Song {
                video_id: "abc".into(),
                title: "Creep".into(),
                artist: "Radiohead".into(),
                album: "Pablo Honey".into(),
                duration_secs: 239,
                thumbnail: "https://lh3.googleusercontent.com/x=w544-h544-l90-rj".into(),
            }]
        );
    }

    #[test]
    fn parses_playlist_item_with_fixed_duration_and_skips_non_songs() {
        let data = json!([
            { "musicResponsiveListItemRenderer": { "flexColumns": [ column(vec![run("Artist page", None)]) ] } },
            { "musicResponsiveListItemRenderer": {
                "playlistItemData": { "videoId": "v2" },
                "flexColumns": [
                    column(vec![run("Song", None)]),
                    column(vec![run("A", Some("MUSIC_PAGE_TYPE_ARTIST")), run(" & ", None), run("B", Some("MUSIC_PAGE_TYPE_ARTIST"))]),
                    column(vec![run("Album", Some("MUSIC_PAGE_TYPE_ALBUM"))])
                ],
                "fixedColumns": [{ "musicResponsiveListItemFixedColumnRenderer": { "text": { "runs": [{ "text": "1:02:03" }] } } }]
            }}
        ]);
        let songs = parse_songs(&data, 10);
        assert_eq!(songs.len(), 1);
        assert_eq!(songs[0].artist, "A, B");
        assert_eq!(songs[0].album, "Album");
        assert_eq!(songs[0].duration_secs, 3723);
    }

    #[test]
    fn parses_account_menu() {
        let data = json!({ "actions": [{ "openPopupAction": { "popup": { "multiPageMenuRenderer": { "header": {
            "activeAccountHeaderRenderer": {
                "accountName": { "runs": [{ "text": "Sanchoz" }] },
                "channelHandle": { "runs": [{ "text": "@sanchoz" }] },
                "accountPhoto": { "thumbnails": [{ "url": "small" }, { "url": "big" }] }
            } } } } } }] });
        assert_eq!(
            parse_account(&data),
            Some(Account {
                name: "Sanchoz".into(),
                handle: Some("@sanchoz".into()),
                photo: Some("big".into())
            })
        );
        assert_eq!(parse_account(&json!({ "actions": [] })), None);
    }

    #[test]
    fn sapisid_hash_matches_reference() {
        // python3 -c "import hashlib;print(hashlib.sha1(b'1700000000 abc https://music.youtube.com').hexdigest())"
        assert_eq!(
            sapisid_hash("abc", 1_700_000_000),
            "SAPISIDHASH 1700000000_2f3ec011e870f3fbd0238c090c2062c208cead32"
        );
    }

    #[test]
    fn duration_parsing() {
        assert_eq!(parse_duration("3:59"), Some(239));
        assert_eq!(parse_duration("2.3B plays"), None);
        assert_eq!(parse_duration(""), None);
    }
}

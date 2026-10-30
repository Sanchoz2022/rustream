use serde::{Deserialize, Serialize};
use std::path::Path;
use std::time::Duration;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct SyncedLine {
    pub time_ms: i64,
    pub text: String,
}

#[derive(Debug, Serialize, Clone)]
pub struct Lyrics {
    pub plain: String,
    pub synced: Vec<SyncedLine>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub source: Option<String>,
}

/// Look for a sidecar `.lrc` or `.txt` file next to the audio file.
pub fn load(path: &Path) -> Option<Lyrics> {
    let stem = path.file_stem()?.to_string_lossy().to_string();
    let dir = path.parent()?;

    for ext in ["lrc", "LRC", "txt", "TXT"] {
        let candidate = dir.join(format!("{}.{}", stem, ext));
        if let Ok(content) = std::fs::read_to_string(&candidate) {
            if content.trim().is_empty() {
                continue;
            }
            let mut parsed = parse(&content);
            parsed.source = Some("local".to_string());
            return Some(parsed);
        }
    }

    None
}

/// Resolve lyrics for a track: local sidecar, cache, then LRCLIB (open API).
pub async fn resolve(
    db: &sqlx::SqlitePool,
    track_id: &str,
    path: &Path,
    artist: &str,
    title: &str,
    duration_sec: i64,
    online: bool,
) -> Option<Lyrics> {
    if let Some(mut lyrics) = load(path) {
        if lyrics.source.is_none() {
            lyrics.source = Some("local".to_string());
        }
        return Some(lyrics);
    }

    if let Ok(Some((plain, synced, source))) =
        sqlx::query_as::<_, (Option<String>, Option<String>, String)>(
            "SELECT plain, synced, source FROM lyrics_cache WHERE track_id = ?",
        )
        .bind(track_id)
        .fetch_optional(db)
        .await
    {
        let synced_lines: Vec<SyncedLine> = synced
            .and_then(|json| serde_json::from_str(&json).ok())
            .unwrap_or_default();
        if plain.is_some() || !synced_lines.is_empty() {
            return Some(Lyrics {
                plain: plain.unwrap_or_default(),
                synced: synced_lines,
                source: Some(source),
            });
        }
    }

    if !online {
        return None;
    }

    let lyrics = match fetch_lrclib(artist, title, duration_sec).await {
        Some(lyrics) => lyrics,
        None => fetch_lyrics_ovh(artist, title).await?,
    };
    let synced_json = serde_json::to_string(&lyrics.synced).ok();

    let _ = sqlx::query(
        "INSERT OR REPLACE INTO lyrics_cache (track_id, plain, synced, source, fetched_at)
         VALUES (?, ?, ?, ?, ?)",
    )
    .bind(track_id)
    .bind(if lyrics.plain.is_empty() {
        None
    } else {
        Some(lyrics.plain.clone())
    })
    .bind(synced_json)
    .bind(
        lyrics
            .source
            .clone()
            .unwrap_or_else(|| "lrclib".to_string()),
    )
    .bind(chrono::Utc::now().timestamp())
    .execute(db)
    .await;

    Some(lyrics)
}

#[derive(Deserialize)]
struct LrclibItem {
    #[serde(rename = "plainLyrics")]
    plain_lyrics: Option<String>,
    #[serde(rename = "syncedLyrics")]
    synced_lyrics: Option<String>,
    #[serde(default)]
    duration: Option<f64>,
}

async fn fetch_lrclib(artist: &str, title: &str, duration_sec: i64) -> Option<Lyrics> {
    if artist.trim().is_empty() || title.trim().is_empty() {
        return None;
    }

    let url = reqwest::Url::parse_with_params(
        "https://lrclib.net/api/search",
        &[("artist_name", artist), ("track_name", title)],
    )
    .ok()?;

    // The Alpine container has BusyBox wget, which reliably uses IPv4 and the
    // system CA store. Using it avoids IPv6 connect stalls seen with some
    // static reqwest/OpenSSL builds. Fall back to reqwest if wget is absent.
    let body = match tokio::process::Command::new("wget")
        .args(["-qO-", "--timeout=8", "--tries=1", url.as_str()])
        .output()
        .await
    {
        Ok(output) if output.status.success() && !output.stdout.is_empty() => output.stdout,
        Ok(output) => {
            tracing::debug!(
                "wget lyrics lookup failed ({}): {}",
                output.status,
                String::from_utf8_lossy(&output.stderr)
                    .lines()
                    .next()
                    .unwrap_or("")
            );
            fetch_lrclib_http(&url).await?
        }
        Err(_) => fetch_lrclib_http(&url).await?,
    };

    let items: Vec<LrclibItem> = serde_json::from_slice(&body).ok()?;
    if items.is_empty() {
        return None;
    }

    let best = items.iter().min_by_key(|item| {
        let diff = item
            .duration
            .map(|d| (d - duration_sec as f64).abs() as i64)
            .unwrap_or(999);
        (diff, item.synced_lyrics.is_none()) // prefer synced on equal distance
    })?;

    let synced = best
        .synced_lyrics
        .as_deref()
        .map(parse)
        .map(|parsed| parsed.synced)
        .unwrap_or_default();
    let plain = best
        .plain_lyrics
        .clone()
        .or_else(|| best.synced_lyrics.as_deref().map(|_| String::new()))
        .unwrap_or_default();

    if plain.trim().is_empty() && synced.is_empty() {
        return None;
    }

    Some(Lyrics {
        plain,
        synced,
        source: Some("lrclib".to_string()),
    })
}

async fn fetch_lrclib_http(url: &reqwest::Url) -> Option<Vec<u8>> {
    let mut builder = reqwest::Client::builder()
        .timeout(Duration::from_secs(10))
        .connect_timeout(Duration::from_secs(5))
        .user_agent("rustream/0.1 (https://github.com/rustream)");

    if let Ok(mut addrs) = tokio::net::lookup_host(("lrclib.net", 443)).await {
        if let Some(ipv4) = addrs.find(|addr| addr.is_ipv4()) {
            builder = builder.resolve("lrclib.net", ipv4);
        }
    }

    let client = builder.build().ok()?;
    let response = match client.get(url.clone()).send().await {
        Ok(response) => response,
        Err(error) => {
            tracing::debug!("LRCLIB HTTP request failed: {}", error);
            return None;
        }
    };

    if !response.status().is_success() {
        return None;
    }

    response.bytes().await.ok().map(|bytes| bytes.to_vec())
}

#[derive(Deserialize)]
struct LyricsOvhResponse {
    lyrics: Option<String>,
}

async fn fetch_lyrics_ovh(artist: &str, title: &str) -> Option<Lyrics> {
    if artist.trim().is_empty() || title.trim().is_empty() {
        return None;
    }

    let url = format!(
        "https://api.lyrics.ovh/v1/{}/{}",
        urlencode(artist),
        urlencode(title)
    );

    let body = match tokio::process::Command::new("wget")
        .args(["-qO-", "--timeout=8", "--tries=1", &url])
        .output()
        .await
    {
        Ok(output) if output.status.success() && !output.stdout.is_empty() => output.stdout,
        _ => return None,
    };

    let response: LyricsOvhResponse = serde_json::from_slice(&body).ok()?;
    let plain = response.lyrics?.trim().to_string();
    if plain.is_empty() {
        return None;
    }

    Some(Lyrics {
        plain,
        synced: Vec::new(),
        source: Some("lyrics.ovh".to_string()),
    })
}

fn urlencode(value: &str) -> String {
    let mut out = String::new();
    for byte in value.bytes() {
        match byte {
            b'A'..=b'Z' | b'a'..=b'z' | b'0'..=b'9' | b'-' | b'_' | b'.' | b'~' => {
                out.push(byte as char)
            }
            b' ' => out.push_str("%20"),
            _ => out.push_str(&format!("%{:02X}", byte)),
        }
    }
    out
}

fn parse(content: &str) -> Lyrics {
    let mut synced = Vec::new();
    let mut plain_lines = Vec::new();

    for line in content.lines() {
        let line = line.trim_end();
        if line.trim().is_empty() {
            continue;
        }

        let mut rest = line;
        let mut timestamps = Vec::new();

        // LRC may put several timestamps on one line: [00:12.00][00:44.00] text
        while rest.starts_with('[') {
            let Some(close) = rest.find(']') else { break };
            let tag = &rest[1..close];
            if let Some(ms) = parse_timestamp(tag) {
                timestamps.push(ms);
            }
            rest = &rest[close + 1..];
        }

        let text = rest.trim().to_string();
        if text.is_empty() {
            continue;
        }

        if timestamps.is_empty() {
            plain_lines.push(text);
        } else {
            for ms in timestamps {
                synced.push(SyncedLine {
                    time_ms: ms,
                    text: text.clone(),
                });
            }
            plain_lines.push(text);
        }
    }

    synced.sort_by_key(|l| l.time_ms);

    Lyrics {
        plain: plain_lines.join("\n"),
        synced,
        source: None,
    }
}

fn parse_timestamp(tag: &str) -> Option<i64> {
    // mm:ss, mm:ss.xx, mm:ss:xx
    let (minutes, rest) = tag.split_once(':')?;
    let minutes: i64 = minutes.trim().parse().ok()?;

    let (seconds, fraction) = if let Some((s, f)) = rest.split_once('.') {
        (s, Some(f))
    } else if let Some((s, f)) = rest.split_once(':') {
        (s, Some(f))
    } else {
        (rest, None)
    };

    let seconds: i64 = seconds.trim().parse().ok()?;
    let millis: i64 = fraction
        .map(|f| {
            let digits: String = f.chars().filter(|c| c.is_ascii_digit()).collect();
            match digits.len() {
                0 => 0,
                1 => digits.parse::<i64>().unwrap_or(0) * 100,
                2 => digits.parse::<i64>().unwrap_or(0) * 10,
                _ => digits[..3].parse::<i64>().unwrap_or(0),
            }
        })
        .unwrap_or(0);

    Some(minutes * 60_000 + seconds * 1_000 + millis)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn parses_synced_lyrics() {
        let lrc = "[00:12.50]Hello\n[00:20.00]World\n[ar:Artist]\n";
        let lyrics = parse(lrc);
        assert_eq!(lyrics.synced.len(), 2);
        assert_eq!(lyrics.synced[0].time_ms, 12_500);
        assert_eq!(lyrics.plain, "Hello\nWorld");
    }
}

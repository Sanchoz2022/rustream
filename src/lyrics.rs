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
    let content = content.strip_prefix('\u{feff}').unwrap_or(content);
    let offset_ms = parse_offset(content);
    let mut synced: Vec<SyncedLine> = Vec::new();
    let mut plain_lines: Vec<String> = Vec::new();

    for raw_line in content.lines() {
        let line = raw_line.trim_end_matches('\r').trim_end();
        if line.trim().is_empty() {
            continue;
        }

        let mut rest = line.trim_start();
        let mut timestamps = Vec::new();

        // LRC may put several timestamps on one line: [00:12.00][00:44.00] text.
        // Tags without a timestamp ([ar:...], [offset:...]) are metadata.
        while let Some(stripped) = rest.strip_prefix('[') {
            let Some(close) = stripped.find(']') else {
                break;
            };
            let tag = &stripped[..close];
            if let Some(ms) = parse_timestamp(tag) {
                timestamps.push((ms + offset_ms).max(0));
            }
            rest = &stripped[close + 1..];
        }

        // Enhanced LRC: word-level timestamps in angle brackets are part of the
        // timing data, not the visible text.
        let text = strip_enhanced_tags(rest).trim().to_string();
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

    // Stable sort keeps the order of duplicated timestamps (e.g. translations).
    synced.sort_by_key(|line| line.time_ms);
    synced.dedup_by(|a, b| a.time_ms == b.time_ms && a.text == b.text);

    Lyrics {
        plain: plain_lines.join("\n"),
        synced,
        source: None,
    }
}

/// `[offset:+500]` shifts every timestamp by milliseconds. Some files use
/// seconds instead of milliseconds, but the LRC convention is ms.
fn parse_offset(content: &str) -> i64 {
    for line in content.lines().take(32) {
        let trimmed = line.trim();
        let Some(value) = trimmed
            .strip_prefix("[offset:")
            .and_then(|rest| rest.strip_suffix(']'))
        else {
            continue;
        };
        if let Ok(offset) = value.trim().parse::<i64>() {
            return offset;
        }
    }
    0
}

fn strip_enhanced_tags(text: &str) -> String {
    let mut out = String::with_capacity(text.len());
    let mut in_tag = false;
    for ch in text.chars() {
        match ch {
            '<' => in_tag = true,
            '>' if in_tag => in_tag = false,
            _ if !in_tag => out.push(ch),
            _ => {}
        }
    }
    out
}

fn parse_timestamp(tag: &str) -> Option<i64> {
    let parts: Vec<&str> = tag.trim().split(':').collect();
    if parts.len() < 2 || parts.len() > 3 {
        return None;
    }

    // hh:mm:ss.xx (3 parts) or mm:ss.xx (2 parts). Fractional seconds can be
    // separated by '.' or ',' and tolerate 1-3 digits.
    let (hours, minutes, seconds_part) = if parts.len() == 3 {
        (
            parts[0].trim().parse::<i64>().ok()?,
            parts[1].trim().parse::<i64>().ok()?,
            parts[2].trim(),
        )
    } else {
        (0, parts[0].trim().parse::<i64>().ok()?, parts[1].trim())
    };

    if hours < 0 || !(0..=59).contains(&minutes) {
        return None;
    }

    let (seconds_text, fraction) = seconds_part
        .split_once('.')
        .or_else(|| seconds_part.split_once(','))
        .map_or((seconds_part, None), |(s, f)| (s, Some(f)));
    let seconds: i64 = seconds_text.trim().parse().ok()?;
    if !(0..=59).contains(&seconds) {
        return None;
    }

    let millis = fraction
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

    Some(((hours * 60 + minutes) * 60 + seconds) * 1_000 + millis)
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

    #[test]
    fn parses_hours_comma_and_enhanced_tags() {
        let lrc = "\u{feff}[01:02:03,5]<00:01.00>Привет <00:02.00>мир\n";
        let lyrics = parse(lrc);
        assert_eq!(lyrics.synced.len(), 1);
        assert_eq!(lyrics.synced[0].time_ms, 3_723_500);
        assert_eq!(lyrics.synced[0].text, "Привет мир");
        assert_eq!(lyrics.plain, "Привет мир");
    }

    #[test]
    fn applies_offset_and_multiple_timestamps() {
        let lrc = "[offset:-500]\n[00:01.00][00:02.00]One\n[00:03.00]Two\n";
        let lyrics = parse(lrc);
        assert_eq!(lyrics.synced[0].time_ms, 500);
        assert_eq!(lyrics.synced[1].time_ms, 1_500);
        assert_eq!(lyrics.synced[2].time_ms, 2_500);
    }

    #[test]
    fn ignores_invalid_timecodes_instead_of_misreading_them() {
        let lrc = "[length:03:45]\n[00:99.00]bad\n[00:01.00]good\n";
        let lyrics = parse(lrc);
        assert_eq!(lyrics.synced.len(), 1);
        assert_eq!(lyrics.synced[0].text, "good");
        assert_eq!(lyrics.plain, "bad\ngood");
    }
}

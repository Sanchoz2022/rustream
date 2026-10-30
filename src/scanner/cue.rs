use anyhow::Result;
use encoding_rs::WINDOWS_1251;
use std::path::Path;

#[derive(Debug, Clone)]
pub struct CueSheet {
    pub title: Option<String>,
    pub performer: Option<String>,
    /// Audio files referenced by `FILE "..." WAVE` entries. A sheet with more
    /// than one file is just a tracklist and must not be treated as an image.
    pub files: Vec<String>,
    pub tracks: Vec<CueTrack>,
}

#[derive(Debug, Clone)]
pub struct CueTrack {
    pub number: u32,
    pub title: Option<String>,
    pub performer: Option<String>,
    pub start_ms: i64,
    pub end_ms: Option<i64>,
    pub duration_ms: i64,
}

pub fn parse_cue_sheet(path: &Path) -> Result<CueSheet> {
    let raw_bytes = std::fs::read(path)?;

    // UTF-8 (with optional BOM), then Windows-1251, then UTF-16.
    let content = if raw_bytes.starts_with(&[0xFF, 0xFE]) {
        let (decoded, _, _) = encoding_rs::UTF_16LE.decode(&raw_bytes[2..]);
        decoded.to_string()
    } else if raw_bytes.starts_with(&[0xFE, 0xFF]) {
        let (decoded, _, _) = encoding_rs::UTF_16BE.decode(&raw_bytes[2..]);
        decoded.to_string()
    } else {
        let bytes = raw_bytes
            .strip_prefix(&[0xEF, 0xBB, 0xBF])
            .unwrap_or(&raw_bytes);
        match std::str::from_utf8(bytes) {
            Ok(s) => s.to_string(),
            Err(_) => {
                let (decoded, _, _) = WINDOWS_1251.decode(bytes);
                decoded.to_string()
            }
        }
    };

    let mut cue_sheet = CueSheet {
        title: None,
        performer: None,
        files: Vec::new(),
        tracks: Vec::new(),
    };

    let mut current_track: Option<CueTrack> = None;

    for line in content.lines() {
        let trimmed = line.trim();

        if let Some(rest) = trimmed.strip_prefix("FILE ") {
            // FILE "01 - Track.flac" WAVE — take only the quoted part, not
            // the trailing format token.
            let rest = rest.trim();
            let name = if let Some(stripped) = rest.strip_prefix('"') {
                stripped.split('"').next().unwrap_or(stripped)
            } else {
                rest.split_whitespace().next().unwrap_or(rest)
            };
            cue_sheet.files.push(name.trim().to_string());
        } else if let Some(rest) = trimmed.strip_prefix("TRACK ") {
            if let Some(track) = current_track.take() {
                cue_sheet.tracks.push(track);
            }
            let number = rest
                .split_whitespace()
                .next()
                .and_then(|n| n.parse::<u32>().ok())
                .unwrap_or(0);
            current_track = Some(CueTrack {
                number,
                title: None,
                performer: None,
                start_ms: 0,
                end_ms: None,
                duration_ms: 0,
            });
        } else if let Some(rest) = trimmed.strip_prefix("TITLE ") {
            let title = extract_quoted(rest);
            if let Some(ref mut track) = current_track {
                track.title = Some(title);
            } else {
                cue_sheet.title = Some(title);
            }
        } else if let Some(rest) = trimmed.strip_prefix("PERFORMER ") {
            let performer = extract_quoted(rest);
            if let Some(ref mut track) = current_track {
                track.performer = Some(performer);
            } else {
                cue_sheet.performer = Some(performer);
            }
        } else if trimmed.starts_with("INDEX 01 ") {
            if let Some(ref mut track) = current_track {
                let time_str = trimmed.trim_start_matches("INDEX 01 ");
                track.start_ms = parse_cue_timestamp(time_str);
            }
        }
    }

    if let Some(track) = current_track {
        cue_sheet.tracks.push(track);
    }

    // Durations and end times; the last track is clamped to the file duration
    // by the scanner, which knows how long the audio file actually is.
    for i in 0..cue_sheet.tracks.len() {
        if i + 1 < cue_sheet.tracks.len() {
            let next_start = cue_sheet.tracks[i + 1].start_ms;
            cue_sheet.tracks[i].end_ms = Some(next_start);
            cue_sheet.tracks[i].duration_ms = (next_start - cue_sheet.tracks[i].start_ms).max(0);
        }
    }

    Ok(cue_sheet)
}

fn extract_quoted(value: &str) -> String {
    value.trim().trim_matches('"').trim().to_string()
}

fn parse_cue_timestamp(timestamp: &str) -> i64 {
    // Format: MM:SS:FF (minutes:seconds:frames, 75 frames per second)
    let parts: Vec<&str> = timestamp.trim().split(':').collect();
    if parts.len() != 3 {
        return 0;
    }

    let minutes: i64 = parts[0].parse().unwrap_or(0);
    let seconds: i64 = parts[1].parse().unwrap_or(0);
    let frames: i64 = parts[2].parse().unwrap_or(0);

    (minutes * 60 * 1000) + (seconds * 1000) + (frames * 1000 / 75)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parse_timestamp() {
        assert_eq!(parse_cue_timestamp("00:00:00"), 0);
        assert_eq!(parse_cue_timestamp("01:00:00"), 60000);
        assert_eq!(parse_cue_timestamp("00:01:00"), 1000);
        assert_eq!(parse_cue_timestamp("00:00:75"), 1000);
    }
}

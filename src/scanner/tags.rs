use anyhow::Result;
use lofty::prelude::*;
use lofty::tag::ItemKey;
use std::path::Path;

#[derive(Debug, Clone, Default)]
pub struct TrackTags {
    pub artist: Option<String>,
    pub album_artist: Option<String>,
    pub album: Option<String>,
    pub title: Option<String>,
    pub track_number: Option<i32>,
    pub disc_number: Option<i32>,
    pub year: Option<i32>,
    pub genre: Option<String>,
    pub duration_ms: i64,
    pub bitrate: Option<i32>,
    pub sample_rate: Option<i32>,
    pub channels: Option<i32>,
}

/// Read everything we can get from the file's tags. Missing fields stay `None`.
pub fn read_tags(path: &Path) -> TrackTags {
    match try_read_tags(path) {
        Ok(tags) => tags,
        Err(e) => {
            tracing::debug!("No usable tags for {}: {}", path.display(), e);
            TrackTags::default()
        }
    }
}

fn try_read_tags(path: &Path) -> Result<TrackTags> {
    let tagged_file = lofty::read_from_path(path)?;
    let properties = tagged_file.properties();

    let mut tags = TrackTags {
        duration_ms: properties.duration().as_millis() as i64,
        bitrate: properties.audio_bitrate().map(|b| b as i32),
        sample_rate: properties.sample_rate().map(|s| s as i32),
        channels: properties.channels().map(|c| c as i32),
        ..Default::default()
    };

    let tag = tagged_file
        .primary_tag()
        .or_else(|| tagged_file.first_tag());

    let Some(tag) = tag else {
        return Ok(tags);
    };

    let clean = |s: Option<&str>| {
        s.map(|v| v.trim().to_string())
            .filter(|v| !v.is_empty() && !v.eq_ignore_ascii_case("unknown"))
    };

    tags.artist = clean(tag.artist().as_deref());
    tags.album = clean(tag.album().as_deref());
    tags.title = clean(tag.title().as_deref());
    tags.album_artist = tag
        .get_string(&ItemKey::AlbumArtist)
        .map(|s| s.trim().to_string())
        .filter(|s| !s.is_empty());
    tags.genre = tag
        .genre()
        .as_deref()
        .map(|s| s.trim().to_string())
        .filter(|s| !s.is_empty());
    tags.track_number = tag.track().map(|n| n as i32).filter(|n| *n > 0);
    tags.disc_number = tag.disk().map(|n| n as i32).filter(|n| *n > 0);
    tags.year = tag
        .year()
        .map(|y| y as i32)
        .or_else(|| tag.get_string(&ItemKey::RecordingDate).and_then(parse_year))
        .or_else(|| {
            tag.get_string(&ItemKey::OriginalReleaseDate)
                .and_then(parse_year)
        });

    Ok(tags)
}

/// Pick the first 4-digit year from strings such as "15-03-2024" or "2024-01-01".
pub fn parse_year(value: &str) -> Option<i32> {
    let bytes: Vec<char> = value.chars().collect();
    for window in bytes.windows(4) {
        if window.iter().all(|c| c.is_ascii_digit()) {
            if let Ok(year) = window.iter().collect::<String>().parse::<i32>() {
                if (1900..=2100).contains(&year) {
                    return Some(year);
                }
            }
        }
    }
    None
}

/// Embedded cover art, if present.
pub fn embedded_cover(path: &Path) -> Option<(Vec<u8>, String)> {
    let tagged_file = lofty::read_from_path(path).ok()?;
    let tag = tagged_file
        .primary_tag()
        .or_else(|| tagged_file.first_tag())?;
    let picture = tag.pictures().first()?;
    let mime = picture
        .mime_type()
        .map(|m| m.as_str().to_string())
        .unwrap_or_else(|| "image/jpeg".to_string());
    Some((picture.data().to_vec(), mime))
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parse_year() {
        assert_eq!(parse_year("15-03-2024"), Some(2024));
        assert_eq!(parse_year("2024-01-01"), Some(2024));
        assert_eq!(parse_year("no digits"), None);
    }
}

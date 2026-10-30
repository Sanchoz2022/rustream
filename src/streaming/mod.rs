use axum::{
    body::Body,
    http::{header, HeaderMap, StatusCode},
    response::Response,
};
use std::path::Path;
use tokio_util::io::ReaderStream;

/// Serve a local library track by id. Used by both `/stream/:id` and the
/// Subsonic `/rest/stream.view` endpoint (which must not redirect, or clients
/// lose their credentials).
pub async fn serve_track(
    db: &sqlx::SqlitePool,
    track_id: &str,
    headers: &HeaderMap,
) -> Result<Response, StatusCode> {
    let track: crate::db::Track = sqlx::query_as("SELECT * FROM tracks WHERE track_id = ?")
        .bind(track_id)
        .fetch_optional(db)
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?
        .ok_or(StatusCode::NOT_FOUND)?;

    if track.is_cue_virtual {
        return stream_cue_segment(track).await;
    }

    let content_type = if track.content_type.is_empty() {
        "audio/flac"
    } else {
        track.content_type.as_str()
    };
    serve_file(Path::new(&track.file_path), content_type, headers).await
}

/// Stream a file from disk with HTTP Range support.
pub async fn serve_file(
    file_path: &Path,
    content_type: &str,
    headers: &HeaderMap,
) -> Result<Response, StatusCode> {
    let file = match tokio::fs::File::open(file_path).await {
        Ok(file) => file,
        Err(error) if error.kind() == std::io::ErrorKind::NotFound => {
            return Err(StatusCode::NOT_FOUND)
        }
        Err(_) => return Err(StatusCode::INTERNAL_SERVER_ERROR),
    };
    let file_size = file
        .metadata()
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?
        .len();

    // Range requests: seek and stream only the requested slice.
    if let Some(range) = headers.get(header::RANGE) {
        if let Ok(range_str) = range.to_str() {
            if let Some((start, end)) = parse_range(range_str, file_size) {
                return stream_range(file, start, end, file_size, content_type).await;
            }
        }
    }

    let stream = ReaderStream::new(file);
    let body = Body::from_stream(stream);

    Response::builder()
        .status(StatusCode::OK)
        .header(header::CONTENT_TYPE, content_type)
        .header(header::CONTENT_LENGTH, file_size)
        .header(header::ACCEPT_RANGES, "bytes")
        .header(header::CACHE_CONTROL, "no-cache")
        .body(body)
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)
}

async fn stream_cue_segment(track: crate::db::Track) -> Result<Response, StatusCode> {
    use tokio::io::AsyncReadExt;
    use tokio::process::Command;

    let file_path = std::path::Path::new(&track.file_path);
    if !file_path.exists() {
        return Err(StatusCode::NOT_FOUND);
    }

    let start_sec = track.cue_start_ms.unwrap_or(0) as f64 / 1000.0;

    let mut args: Vec<String> = vec![
        "-hide_banner".into(),
        "-loglevel".into(),
        "error".into(),
        "-ss".into(),
        format!("{:.3}", start_sec),
        "-i".into(),
        file_path.to_string_lossy().to_string(),
    ];
    if let Some(end_ms) = track.cue_end_ms {
        args.push("-to".into());
        args.push(format!("{:.3}", end_ms as f64 / 1000.0));
    }
    args.extend([
        "-map".into(),
        "a:0".into(),
        "-c:a".into(),
        "flac".into(),
        "-f".into(),
        "flac".into(),
        "pipe:1".into(),
    ]);

    let mut child = Command::new("ffmpeg")
        .args(&args)
        .stdout(std::process::Stdio::piped())
        .stderr(std::process::Stdio::null())
        .spawn()
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;

    let mut stdout = child
        .stdout
        .take()
        .ok_or(StatusCode::INTERNAL_SERVER_ERROR)?;

    // The first bytes are important: fail early if ffmpeg couldn't decode.
    let mut first_chunk = vec![0u8; 8192];
    let n = stdout
        .read(&mut first_chunk)
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;
    if n == 0 {
        tracing::error!(
            "FFmpeg produced no output for CUE track {} ({})",
            track.title,
            file_path.display()
        );
        return Err(StatusCode::INTERNAL_SERVER_ERROR);
    }

    tokio::spawn(async move {
        let _ = child.wait().await;
    });

    use futures_util::StreamExt;

    let first = bytes::Bytes::copy_from_slice(&first_chunk[..n]);
    let rest = ReaderStream::new(stdout);
    let stream =
        futures_util::stream::once(async move { Ok::<_, std::io::Error>(first) }).chain(rest);
    let body = Body::from_stream(stream);

    Response::builder()
        .status(StatusCode::OK)
        .header(header::CONTENT_TYPE, "audio/flac")
        .body(body)
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)
}

async fn stream_range(
    mut file: tokio::fs::File,
    start: u64,
    end: u64,
    file_size: u64,
    content_type: &str,
) -> Result<Response, StatusCode> {
    use tokio::io::{AsyncReadExt, AsyncSeekExt};

    let length = end.saturating_sub(start) + 1;

    file.seek(std::io::SeekFrom::Start(start))
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;

    let limited = file.take(length);
    let stream = ReaderStream::new(limited);
    let body = Body::from_stream(stream);

    Response::builder()
        .status(StatusCode::PARTIAL_CONTENT)
        .header(header::CONTENT_TYPE, content_type)
        .header(header::CONTENT_LENGTH, length)
        .header(
            header::CONTENT_RANGE,
            format!("bytes {}-{}/{}", start, end, file_size),
        )
        .header(header::ACCEPT_RANGES, "bytes")
        .body(body)
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)
}

pub fn parse_range(range: &str, file_size: u64) -> Option<(u64, u64)> {
    let range = range.strip_prefix("bytes=")?;
    let (start_part, end_part) = range.split_once('-')?;

    let (start, end) = if start_part.is_empty() {
        // Suffix range: bytes=-500 means the last 500 bytes.
        let suffix: u64 = end_part.parse().ok()?;
        if suffix == 0 || file_size == 0 {
            return None;
        }
        (file_size.saturating_sub(suffix), file_size - 1)
    } else {
        let start: u64 = start_part.parse().ok()?;
        let end: u64 = if end_part.is_empty() {
            file_size.saturating_sub(1)
        } else {
            end_part.parse().ok()?
        };
        (start, end)
    };

    if file_size == 0 || start > end || start >= file_size {
        return None;
    }

    Some((start, end.min(file_size - 1)))
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parse_range() {
        assert_eq!(parse_range("bytes=0-999", 1000), Some((0, 999)));
        assert_eq!(parse_range("bytes=0-", 1000), Some((0, 999)));
        assert_eq!(parse_range("bytes=500-999", 1000), Some((500, 999)));
        assert_eq!(parse_range("bytes=1000-", 1000), None);
        assert_eq!(parse_range("bytes=-100", 1000), Some((900, 999)));
        assert_eq!(parse_range("bytes=0-5000", 1000), Some((0, 999)));
    }
}

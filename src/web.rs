//! Отдача веб-интерфейса.
//!
//! UI собирается Vite в `../static` и **встраивается в бинарник на этапе
//! компиляции**. В рантайме ни папка `static/`, ни Node.js не нужны — деплой
//! это один исполняемый файл.
//!
//! Для разработки оставлен оверрайд: если `RUSTREAM_STATIC_DIR` указывает на
//! существующую папку, файлы читаются с диска (удобно править CSS без
//! пересборки). Порядок поиска: диск (если задан) → встроенные ассеты.

use axum::http::{header, StatusCode, Uri};
use axum::response::{IntoResponse, Response};
use include_dir::{include_dir, Dir};
use std::path::{Path, PathBuf};

static WEB: Dir<'_> = include_dir!("$CARGO_MANIFEST_DIR/static");

fn mime_for(path: &Path) -> &'static str {
    match path
        .extension()
        .and_then(|ext| ext.to_str())
        .map(str::to_ascii_lowercase)
        .as_deref()
    {
        Some("html") => "text/html; charset=utf-8",
        Some("js") | Some("mjs") => "text/javascript; charset=utf-8",
        Some("css") => "text/css; charset=utf-8",
        Some("json") => "application/json",
        Some("svg") => "image/svg+xml",
        Some("png") => "image/png",
        Some("jpg") | Some("jpeg") => "image/jpeg",
        Some("webp") => "image/webp",
        Some("gif") => "image/gif",
        Some("ico") => "image/x-icon",
        Some("woff2") => "font/woff2",
        Some("woff") => "font/woff",
        Some("txt") => "text/plain; charset=utf-8",
        _ => "application/octet-stream",
    }
}

/// Хэшированные ассеты Vite (`index-<hash>.js`) можно кэшировать навсегда,
/// сам `index.html` — нельзя, иначе браузер залипнет на старой сборке.
fn cache_control(path: &Path) -> &'static str {
    let name = path.file_name().and_then(|n| n.to_str()).unwrap_or_default();
    if name == "index.html" {
        "no-cache"
    } else if path
        .components()
        .any(|component| component.as_os_str() == "assets")
    {
        "public, max-age=31536000, immutable"
    } else {
        "public, max-age=3600"
    }
}

fn resolve(uri_path: &str) -> PathBuf {
    let trimmed = uri_path.trim_start_matches('/');
    let rel = trimmed.strip_prefix("static/").unwrap_or(trimmed);
    let rel = if rel.is_empty() { "index.html" } else { rel };
    // Защита от выхода за пределы каталога.
    let rel = rel
        .split('/')
        .filter(|part| !part.is_empty() && *part != "." && *part != "..")
        .collect::<Vec<_>>()
        .join("/");
    PathBuf::from(if rel.is_empty() {
        "index.html".to_string()
    } else {
        rel
    })
}

fn not_found() -> Response {
    (StatusCode::NOT_FOUND, "not found").into_response()
}

fn build_response(bytes: Vec<u8>, rel: &Path) -> Response {
    (
        StatusCode::OK,
        [
            (header::CONTENT_TYPE, mime_for(rel)),
            (header::CACHE_CONTROL, cache_control(rel)),
        ],
        bytes,
    )
        .into_response()
}

pub async fn serve_static(uri: Uri) -> Response {
    let rel = resolve(uri.path());

    // Dev-оверрайд: папка на диске важнее встроенной копии.
    if let Ok(dir) = std::env::var("RUSTREAM_STATIC_DIR") {
        if !dir.trim().is_empty() {
            let on_disk = Path::new(&dir).join(&rel);
            if let Ok(bytes) = std::fs::read(&on_disk) {
                return build_response(bytes, &rel);
            }
        }
    }

    match WEB.get_file(&rel) {
        Some(file) => build_response(file.contents().to_vec(), &rel),
        None => not_found(),
    }
}

/// `/` → собранный `index.html` без редиректа (SPA не теряет hash-роут).
pub async fn serve_index() -> Response {
    serve_static(Uri::from_static("/static/index.html")).await
}

/// `/favicon.ico`: у нас только SVG — отдаём его.
pub async fn serve_favicon() -> Response {
    serve_static(Uri::from_static("/static/favicon.svg")).await
}

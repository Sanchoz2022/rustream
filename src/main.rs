//! rustream — a small self-hosted music server with a Subsonic API and
//! per-profile YouTube Music.

use anyhow::Result;
use axum::{
    extract::{Request, State},
    http::StatusCode,
    middleware::{self, Next},
    response::{IntoResponse, Response},
    routing::get,
    Json, Router,
};
use serde_json::json;
use std::net::SocketAddr;
use std::sync::Arc;
use tokio::sync::RwLock;
use tower_http::cors::CorsLayer;
use tower_http::trace::TraceLayer;
use tracing::info;

mod api;
mod auth;
mod config;
mod db;
mod invites;
mod live;
mod lyrics;
mod scanner;
mod scrobble;
mod streaming;
mod subsonic;
mod web;
mod ytm;

use config::Config;

pub struct AppState {
    pub db: sqlx::SqlitePool,
    pub config: Config,
    pub ytm: Arc<ytm::YtmState>,
}

#[tokio::main]
async fn main() -> Result<()> {
    tracing_subscriber::fmt()
        .with_env_filter(
            tracing_subscriber::EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| "rustream=info,tower_http=warn".into()),
        )
        .init();

    info!("Starting rustream music server");

    let config = config::load()?;
    info!("Loaded config: {config:?}");

    // UI встроен в бинарник. Если рядом лежит реальная папка `static`
    // (dev-режим, `npm run build` + `cargo run`), отдаём файлы с диска,
    // чтобы правки CSS/JS не требовали перекомпиляции.
    if std::path::Path::new(&config.static_dir).is_dir() {
        std::env::set_var("RUSTREAM_STATIC_DIR", &config.static_dir);
    }

    let db = db::init(&config.db_path).await?;
    db::run_migrations(&db).await?;
    auth::ensure_admin(&db).await?;

    if let Some(proxy) = config
        .ytm_proxy
        .as_deref()
        .filter(|proxy| !proxy.is_empty())
    {
        info!("YouTube Music traffic goes through {proxy}");
    }
    let ytm = ytm::YtmState::new(config.ytm_proxy.as_deref())?;
    if config.ytm_enabled {
        if let Err(error) = tokio::fs::create_dir_all(&config.ytm_cache_dir).await {
            tracing::warn!(
                "Cannot create YouTube Music cache directory {}: {error}",
                config.ytm_cache_dir
            );
        }
    }

    let state = Arc::new(RwLock::new(AppState {
        db: db.clone(),
        config: config.clone(),
        ytm: Arc::new(ytm),
    }));

    // Start the periodic scanner and the filesystem watcher in background.
    let scanner_state = state.clone();
    tokio::spawn(async move {
        if let Err(error) = scanner::run_scanner(scanner_state).await {
            tracing::error!("Scanner error: {error}");
        }
    });
    let watcher_state = state.clone();
    tokio::spawn(async move {
        if let Err(error) = scanner::run_watcher(watcher_state).await {
            tracing::error!("Watcher error: {error}");
        }
    });

    let protected = api::protected_routes()
        .route_layer(middleware::from_fn_with_state(state.clone(), require_auth));

    let app = Router::new()
        .route("/", get(web::serve_index))
        .route("/favicon.ico", get(web::serve_favicon))
        .route("/static", get(web::serve_static))
        .route("/static/*path", get(web::serve_static))
        .route("/stream/:track_id", get(api::playback::stream_route))
        .nest("/rest", subsonic::routes(state.clone()))
        .merge(api::public_routes())
        .merge(protected)
        .layer(CorsLayer::permissive())
        .with_state(state)
        .layer(TraceLayer::new_for_http());

    let addr: SocketAddr = config.bind_addr.parse()?;
    info!("Listening on {addr}");
    let listener = tokio::net::TcpListener::bind(addr).await?;
    axum::serve(listener, app).await?;
    Ok(())
}

async fn require_auth(
    State(state): State<Arc<RwLock<AppState>>>,
    mut request: Request,
    next: Next,
) -> Response {
    let db = state.read().await.db.clone();
    match auth::user_from_headers(&db, request.headers()).await {
        Some(user) => {
            request.extensions_mut().insert(user);
            next.run(request).await
        }
        None => (
            StatusCode::UNAUTHORIZED,
            Json(json!({ "error": "Требуется вход в аккаунт" })),
        )
            .into_response(),
    }
}

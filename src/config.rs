use anyhow::Result;
use serde::{Deserialize, Serialize};
use std::path::PathBuf;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Config {
    pub music_dirs: Vec<String>,
    pub bind_addr: String,
    pub db_path: String,
    #[serde(default = "default_static_dir")]
    pub static_dir: String,
    #[serde(default = "default_true")]
    pub online_lyrics: bool,
    #[serde(default = "default_scan_interval")]
    pub scan_interval_secs: u64,
    #[serde(default)]
    pub lastfm_api_key: Option<String>,
    #[serde(default)]
    pub lastfm_api_secret: Option<String>,
    #[serde(default = "default_true")]
    pub ytm_enabled: bool,
    #[serde(default = "default_ytdlp_path")]
    pub ytdlp_path: String,
    #[serde(default = "default_ytm_cache_dir")]
    pub ytm_cache_dir: String,
    /// Upper bound for the YouTube Music audio cache; the oldest files are
    /// evicted first. 0 disables caching (streams are only proxied).
    #[serde(default = "default_ytm_cache_max_mb")]
    pub ytm_cache_max_mb: u64,
    /// Optional proxy for YouTube Music (e.g. `socks5h://host:1080` or
    /// `http://host:3128`), used by both InnerTube requests and yt-dlp.
    #[serde(default)]
    pub ytm_proxy: Option<String>,
}

fn default_true() -> bool {
    true
}

fn default_scan_interval() -> u64 {
    300
}

fn default_static_dir() -> String {
    "static".to_string()
}

fn default_ytdlp_path() -> String {
    "yt-dlp".to_string()
}

fn default_ytm_cache_dir() -> String {
    "cache/ytm".to_string()
}

fn default_ytm_cache_max_mb() -> u64 {
    1024
}

impl Default for Config {
    fn default() -> Self {
        Self {
            music_dirs: vec!["/music".to_string()],
            bind_addr: "0.0.0.0:4533".to_string(),
            db_path: "./rustream.db".to_string(),
            static_dir: default_static_dir(),
            online_lyrics: true,
            scan_interval_secs: default_scan_interval(),
            lastfm_api_key: None,
            lastfm_api_secret: None,
            ytm_enabled: true,
            ytdlp_path: default_ytdlp_path(),
            ytm_cache_dir: default_ytm_cache_dir(),
            ytm_cache_max_mb: default_ytm_cache_max_mb(),
            ytm_proxy: None,
        }
    }
}

/// `RUSTREAM_CONFIG` overrides the config location (default `./config.toml`).
pub fn config_path() -> PathBuf {
    std::env::var_os("RUSTREAM_CONFIG")
        .map(PathBuf::from)
        .unwrap_or_else(|| PathBuf::from("config.toml"))
}

pub fn load() -> Result<Config> {
    let path = config_path();
    let mut config = match std::fs::read_to_string(&path) {
        Ok(content) => toml::from_str(&content)?,
        Err(error) if error.kind() == std::io::ErrorKind::NotFound => {
            tracing::info!("{} not found, using defaults", path.display());
            Config::default()
        }
        Err(error) => return Err(error.into()),
    };

    for (var, field) in [
        ("RUSTREAM_BIND", &mut config.bind_addr),
        ("RUSTREAM_DB_PATH", &mut config.db_path),
        ("RUSTREAM_STATIC_DIR", &mut config.static_dir),
        ("RUSTREAM_YTDLP", &mut config.ytdlp_path),
    ] {
        if let Ok(value) = std::env::var(var) {
            if !value.trim().is_empty() {
                *field = value;
            }
        }
    }
    if let Ok(value) = std::env::var("RUSTREAM_YTM_PROXY") {
        config.ytm_proxy = Some(value).filter(|value| !value.trim().is_empty());
    }
    Ok(config)
}

/// Rewrite selected top-level keys in the config file without touching
/// comments or the rest of the file. Empty values remove the line entirely.
pub fn write_values(fallback: &Config, values: &[(&str, &str)]) -> Result<(), String> {
    let path = config_path();
    let mut original = std::fs::read_to_string(&path).unwrap_or_default();
    if original.trim().is_empty() {
        original = toml::to_string(fallback).map_err(|error| error.to_string())?;
    }
    let text = replace_values(&original, values);
    std::fs::write(&path, text).map_err(|error| error.to_string())
}

fn replace_values(original: &str, values: &[(&str, &str)]) -> String {
    let mut lines: Vec<String> = original.lines().map(str::to_string).collect();

    for (key, value) in values {
        let escaped = value.replace('\\', "\\\\").replace('"', "\\\"");
        let position = lines.iter().position(|line| {
            line.trim_start()
                .strip_prefix(key)
                .is_some_and(|rest| rest.trim_start().starts_with('='))
        });
        match (position, value.is_empty()) {
            (Some(index), true) => {
                lines.remove(index);
            }
            (Some(index), false) => lines[index] = format!("{key} = \"{escaped}\""),
            (None, false) => lines.push(format!("{key} = \"{escaped}\"")),
            (None, true) => {}
        }
    }

    let mut text = lines.join("\n");
    text.push('\n');
    text
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn replace_values_keeps_comments_and_updates_keys() {
        let original = "# comment\nlastfm_api_key = \"old\"\nbind_addr = \"0.0.0.0:4533\"\n";
        let text = replace_values(
            original,
            &[("lastfm_api_key", "new\"key"), ("lastfm_api_secret", "s")],
        );
        assert_eq!(
            text,
            "# comment\nlastfm_api_key = \"new\\\"key\"\nbind_addr = \"0.0.0.0:4533\"\nlastfm_api_secret = \"s\"\n"
        );
    }

    #[test]
    fn replace_values_removes_empty_and_ignores_prefix_collisions() {
        let original = "lastfm_api_key_extra = 1\nlastfm_api_key=\"x\"\n";
        let text = replace_values(original, &[("lastfm_api_key", "")]);
        assert_eq!(text, "lastfm_api_key_extra = 1\n");
    }
}

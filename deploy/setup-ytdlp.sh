#!/bin/sh
# Runs inside the LXC: keeps config.toml pointing at the bundled yt-dlp.
set -e
DIR="${1:-/opt/rustream}"
mkdir -p "$DIR/bin"
if [ ! -x "$DIR/bin/yt-dlp" ]; then
  command -v python3 >/dev/null 2>&1 || apt-get install -y -qq python3 >/dev/null 2>&1 || true
  curl -fsSL -o "$DIR/bin/yt-dlp" https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp
  chmod +x "$DIR/bin/yt-dlp"
fi
if ! grep -q '^ytdlp_path' "$DIR/config.toml" 2>/dev/null; then
  printf 'ytdlp_path = "%s/bin/yt-dlp"\n' "$DIR" >> "$DIR/config.toml"
fi
"$DIR/bin/yt-dlp" --version

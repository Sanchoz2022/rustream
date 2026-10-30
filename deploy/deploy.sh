#!/usr/bin/env bash
# Build rustream (binary + web UI) in Docker and install it into the LXC.
#
# Settings come from deploy/.env (see deploy/.env.example):
#   DEPLOY_SSH   ssh host that runs `pct` (Proxmox node)
#   LXC_ID       container id that hosts rustream
#   HOST_URL     public base URL, used for the checks at the end
#   RUSTREAM_DIR install directory inside the container (default /opt/rustream)
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

if [ -f deploy/.env ]; then
  # shellcheck disable=SC1091
  . deploy/.env
fi
: "${DEPLOY_SSH:=pve}"
: "${LXC_ID:?set LXC_ID in deploy/.env}"
: "${RUSTREAM_DIR:=/opt/rustream}"
HOST_URL="${HOST_URL:-}"

SSH=(ssh -o BatchMode=yes -o ConnectTimeout=10 -o ServerAliveInterval=15 "$DEPLOY_SSH")
SCP=(scp -q -o BatchMode=yes -o ConnectTimeout=10)
remote() { "${SSH[@]}" "pct exec $LXC_ID -- sh -c '$*'"; }

echo "==> 1/8 Сборка образа (Dockerfile: UI + musl-бинарник)"
timeout 1800 docker build -f Dockerfile -t rustream:latest .

echo "==> 2/8 Извлечение бинарника и веб-интерфейса"
container=$(docker create rustream:latest)
trap 'docker rm -f "$container" >/dev/null 2>&1 || true' EXIT
docker cp "$container:/usr/local/bin/rustream" ./rustream-binary
rm -rf /tmp/rustream-static && mkdir -p /tmp/rustream-static
docker cp "$container:/opt/rustream/static/." /tmp/rustream-static/
size=$(stat -c%s rustream-binary)
if [ "$size" -lt 5000000 ]; then
  echo "ОШИБКА: бинарник подозрительно мал ($size байт)." >&2
  exit 1
fi
tar -czf /tmp/rustream-static.tgz -C /tmp/rustream-static .

echo "==> 3/8 Доставка файлов"
"${SCP[@]}" rustream-binary "$DEPLOY_SSH:/tmp/rustream-binary"
"${SCP[@]}" /tmp/rustream-static.tgz "$DEPLOY_SSH:/tmp/rustream-static.tgz"

echo "==> 4/8 Резервная копия базы и остановка сервиса"
"${SSH[@]}" "pct exec $LXC_ID -- systemctl stop rustream" 2>/dev/null || true
backup="$RUSTREAM_DIR/backups/rustream-$(date +%Y%m%d-%H%M%S).db"
remote "mkdir -p $RUSTREAM_DIR/backups && cp -f $RUSTREAM_DIR/rustream.db '$backup' && gzip -f '$backup'"
echo "    база сохранена: $backup.gz"

echo "==> 5/8 Установка бинарника и статики"
"${SSH[@]}" "pct push $LXC_ID /tmp/rustream-binary $RUSTREAM_DIR/rustream.new"
remote "mv $RUSTREAM_DIR/rustream.new $RUSTREAM_DIR/rustream && chmod +x $RUSTREAM_DIR/rustream"
"${SSH[@]}" "pct push $LXC_ID /tmp/rustream-static.tgz /tmp/rustream-static.tgz"
remote "rm -rf $RUSTREAM_DIR/static && mkdir -p $RUSTREAM_DIR/static && tar -xzf /tmp/rustream-static.tgz -C $RUSTREAM_DIR/static && rm -f /tmp/rustream-static.tgz"

echo "==> 6/8 yt-dlp для YouTube Music"
# Debian ships no yt-dlp; the standalone build needs only python3.
remote "mkdir -p $RUSTREAM_DIR/bin && test -x $RUSTREAM_DIR/bin/yt-dlp || { apt-get install -y -qq python3 >/dev/null 2>&1 || true; curl -fsSL -o $RUSTREAM_DIR/bin/yt-dlp https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp && chmod +x $RUSTREAM_DIR/bin/yt-dlp; }"
# Point the config at it, but never overwrite a line the admin edited.
remote "grep -q '^ytdlp_path' $RUSTREAM_DIR/config.toml 2>/dev/null || echo 'ytdlp_path = \"$RUSTREAM_DIR/bin/yt-dlp\"' >> $RUSTREAM_DIR/config.toml"
remote "$RUSTREAM_DIR/bin/yt-dlp --version"

echo "==> 7/8 Запуск"
"${SSH[@]}" "pct exec $LXC_ID -- systemctl start rustream"
sleep 4
"${SSH[@]}" "pct exec $LXC_ID -- systemctl --no-pager --lines=8 status rustream" || true

echo "==> 8/8 Проверка"
sleep 2
if [ -n "$HOST_URL" ]; then
  curl -fsS "$HOST_URL/api/health"; echo
  curl -fsS "$HOST_URL/rest/ping.view?u=admin&p=admin&v=1.16.1&c=web&f=json" | head -c 200; echo
fi
remote "systemctl is-active rustream"

rm -f rustream-binary /tmp/rustream-static.tgz
rm -rf /tmp/rustream-static
"${SSH[@]}" "rm -f /tmp/rustream-binary /tmp/rustream-static.tgz"

echo "Готово${HOST_URL:+: $HOST_URL}"

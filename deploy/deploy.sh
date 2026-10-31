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

echo "==> 1/8 Сборка образа (Dockerfile: UI + musl-бинарник)"
timeout 1800 docker build -f Dockerfile -t rustream:latest .

echo "==> 2/8 Извлечение бинарника (UI встроен через include_dir!)"
container=$(docker create rustream:latest)
trap 'docker rm -f "$container" >/dev/null 2>&1 || true' EXIT
docker cp "$container:/usr/local/bin/rustream" ./rustream-binary
size=$(stat -c%s rustream-binary)
if [ "$size" -lt 5000000 ]; then
  echo "ОШИБКА: бинарник подозрительно мал ($size байт)." >&2
  exit 1
fi

echo "==> 3/8 Доставка файлов"
"${SCP[@]}" rustream-binary "$DEPLOY_SSH:/tmp/rustream-binary"

echo "==> 4/8 Резервная копия базы и остановка сервиса"
# The scripts run inside the container; stdin is the file, so no quoting hell.
"${SSH[@]}" "pct exec $LXC_ID -- sh -s $RUSTREAM_DIR --keep-stopped" < deploy/backup-db.sh

echo "==> 5/8 Установка бинарника (UI встроен, static не нужен)"
"${SSH[@]}" "pct push $LXC_ID /tmp/rustream-binary $RUSTREAM_DIR/rustream.new"
"${SSH[@]}" "pct exec $LXC_ID -- sh -c 'mv $RUSTREAM_DIR/rustream.new $RUSTREAM_DIR/rustream && chmod +x $RUSTREAM_DIR/rustream && rm -rf $RUSTREAM_DIR/static'"

echo "==> 6/8 yt-dlp для YouTube Music"
"${SSH[@]}" "pct exec $LXC_ID -- sh -s $RUSTREAM_DIR" < deploy/setup-ytdlp.sh

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
"${SSH[@]}" "pct exec $LXC_ID -- systemctl is-active rustream"

rm -f rustream-binary
"${SSH[@]}" "rm -f /tmp/rustream-binary"

echo "Готово${HOST_URL:+: $HOST_URL}"

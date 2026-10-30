#!/bin/sh
# Consistent SQLite backup: the service is stopped, so the db + wal + shm are
# copied as one set. Pass --keep-stopped when a deploy restarts it later.
set -e
DIR="${1:-/opt/rustream}"
DB=$(sed -n 's/^db_path[[:space:]]*=[[:space:]]*"\(.*\)".*/\1/p' "$DIR/config.toml" 2>/dev/null | head -1)
[ -n "$DB" ] || DB="$DIR/rustream.db"
DIRNAME=$(dirname "$DB")
BASE=$(basename "$DB")
mkdir -p "$DIR/backups"
STAMP=$(date +%Y%m%d-%H%M%S)
OUT="$DIR/backups/rustream-$STAMP.db.tgz"
systemctl stop rustream 2>/dev/null || true
FILES="$BASE"
[ -f "$DB-wal" ] && FILES="$FILES $BASE-wal"
[ -f "$DB-shm" ] && FILES="$FILES $BASE-shm"
tar -czf "$OUT" -C "$DIRNAME" $FILES
if [ "$2" != "--keep-stopped" ]; then
  systemctl start rustream 2>/dev/null || true
fi
echo "$OUT"

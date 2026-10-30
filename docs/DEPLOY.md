# Развёртывание

## Что где лежит

| Что | Где |
| --- | --- |
| Бинарник | `/opt/rustream/rustream` |
| Веб-интерфейс | `/opt/rustream/static` |
| Конфиг | `/opt/rustream/config.toml` |
| База | `/opt/rustream/rustream.db` (+ `-wal`, `-shm`) |
| Резервные копии базы | `/opt/rustream/backups/*.db.gz` |
| `yt-dlp` | `/opt/rustream/bin/yt-dlp` |
| Юнит systemd | `/etc/systemd/system/rustream.service` (копия в `deploy/`) |

Рабочая директория сервиса — `/opt/rustream`, поэтому `static_dir = "static"` и
`db_path = "rustream.db"` можно оставлять относительными.

## Автоматическая выкладка

```bash
cp deploy/.env.example deploy/.env
# DEPLOY_SSH  — хост, где работает pct (обычно pve)
# LXC_ID      — контейнер с rustream
# RUSTREAM_DIR, HOST_URL
./deploy/deploy.sh
```

Шаги скрипта:

1. `docker build -f Dockerfile` — Vite собирает UI, затем musl-бинарник.
2. Из финального образа достаются бинарник и `static/`.
3. Останавливается `rustream.service`.
4. Делается сжатая копия базы в `/opt/rustream/backups`.
5. Ставятся бинарник и статика, `yt-dlp` (GitHub zipapp, нужен только `python3`).
6. `ytdlp_path` дописывается в `config.toml`, если строки ещё нет.
7. Сервис запускается, проверяются `/api/health` и `/rest/ping.view`.

Музыкальная папка и база не перезаписываются. Если `docker` на машине нет —
соберите на другой машине и передайте `rustream-binary` + `static.tgz` вручную.

## Ручная проверка после выкладки

```bash
curl "$HOST_URL/api/health"
curl "$HOST_URL/rest/ping.view?u=admin&p=admin&v=1.16.1&c=test&f=json"
ssh pve 'pct exec 104 -- systemctl --no-pager --lines=30 status rustream'
ssh pve 'pct exec 104 -- journalctl -u rustream -f'
```

В логах при старте видно содержимое конфига — удобно проверить `db_path`,
`static_dir`, `ytdlp_path` и `ytm_cache_dir`.

## YouTube Music на сервере

`yt-dlp` нужен только серверу: он разрешает ссылку на аудио и скачивает кэш.
В образе Docker он уже установлен; в LXC его ставит `deploy.sh`.

Проверка:

```bash
ssh pve 'pct exec 104 -- /opt/rustream/bin/yt-dlp --version'
```

Кэш аудио лежит в `ytm_cache_dir` (по умолчанию `cache/ytm`), сгруппирован по
пользователям и ограничен `ytm_cache_max_mb`. Удалять его можно целиком —
он пересоберётся.

## Конфиг

```toml
music_dirs = ["/music"]
bind_addr = "0.0.0.0:4533"
db_path = "rustream.db"
static_dir = "static"
online_lyrics = true
scan_interval_secs = 300

ytm_enabled = true
ytdlp_path = "/opt/rustream/bin/yt-dlp"
ytm_cache_dir = "cache/ytm"
ytm_cache_max_mb = 1024
```

Переменные окружения перекрывают файл: `RUSTREAM_CONFIG` (путь к конфигу),
`RUSTREAM_BIND`, `RUSTREAM_DB_PATH`, `RUSTREAM_STATIC_DIR`, `RUSTREAM_YTDLP`.

## Обновление yt-dlp

YouTube часто ломает старые версии, поэтому обновляйте `yt-dlp` вслед за релизами:

```bash
ssh pve "pct exec 104 -- sh -c 'curl -fsSL -o /opt/rustream/bin/yt-dlp https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp && chmod +x /opt/rustream/bin/yt-dlp'"
ssh pve 'pct exec 104 -- systemctl restart rustream'
```

## Восстановление базы

```bash
ssh pve "pct exec 104 -- sh -c 'systemctl stop rustream; cd /opt/rustream; \
  rm -f rustream.db-wal rustream.db-shm; \
  gunzip -c backups/rustream-XXXX.db.gz > rustream.db; systemctl start rustream'"
```

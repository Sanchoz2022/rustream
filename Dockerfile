# Сборка: статический musl-бинарник с ВСТРОЕННЫМ веб-интерфейсом.
#
# Node.js в сборке не участвует: собранный UI лежит в `static/` и попадает
# в бинарник через `include_dir!`. Обновили UI — `npm run build` в
# `rustream-ui/`, закоммитили `static/` — дальше только cargo.
#
# Зависимости собираются отдельным слоем от пустой заглушки: правка `src/`
# или `static/` больше не пересобирает reqwest/sqlx/symphonia с нуля.

FROM rust:1-alpine AS builder
# musl-dev/build-base: the TLS stack; perl: some crates' build scripts.
RUN apk add --no-cache musl-dev build-base perl
WORKDIR /build

COPY Cargo.toml Cargo.lock ./
RUN mkdir -p src \
    && echo 'fn main() {}' > src/main.rs \
    && cargo build --release --locked --target x86_64-unknown-linux-musl \
    && rm -rf src

COPY src ./src
COPY static ./static
# Docker сохраняет mtime файлов из контекста, а они старше артефактов
# заглушки — cargo решает «ничего не изменилось» и отдаёт пустой бинарник.
# Поэтому явно обновляем mtime и проверяем, что на выходе настоящий бинарник.
RUN find src static -type f -exec touch {} + \
    && cargo build --release --locked --target x86_64-unknown-linux-musl \
    && test "$(stat -c%s target/x86_64-unknown-linux-musl/release/rustream)" -gt 5000000 \
    && cp target/x86_64-unknown-linux-musl/release/rustream /rustream

FROM alpine:3.20
# ffmpeg: CUE segments; python3 + yt-dlp: YouTube Music streams.
RUN apk add --no-cache ffmpeg ca-certificates python3 \
    && wget -qO /usr/local/bin/yt-dlp https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp \
    && chmod +x /usr/local/bin/yt-dlp
COPY --from=builder /rustream /usr/local/bin/rustream
RUN mkdir -p /data /music
WORKDIR /data
EXPOSE 4533
CMD ["/usr/local/bin/rustream"]

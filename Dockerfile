# Сборка: статический musl-бинарник с ВСТРОЕННЫМ веб-интерфейсом.
#
# Node.js в сборке больше не участвует: собранный UI лежит в `static/` и
# попадает в бинарник через `include_dir!`. Обновили UI — `npm run build`
# в `rustream-ui/`, закоммитили `static/` — дальше только cargo.

FROM rust:1-alpine AS builder
# musl-dev/build-base: the TLS stack; perl: some crates' build scripts.
RUN apk add --no-cache musl-dev build-base perl
WORKDIR /build
COPY Cargo.toml Cargo.lock ./
COPY src ./src
COPY static ./static
RUN cargo build --release --locked --target x86_64-unknown-linux-musl \
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

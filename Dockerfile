# Multi-stage build: web UI (Vite) + static musl binary + small runtime image.
# Works with both the classic builder and BuildKit.

FROM node:22-alpine AS ui
WORKDIR /ui
COPY rustream-ui/package.json rustream-ui/package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY rustream-ui/ ./
# vite.config.js writes to ../static, i.e. /static
RUN npm run build

FROM rust:1-alpine AS builder
# musl-dev/build-base: the TLS stack; perl: some crates' build scripts.
RUN apk add --no-cache musl-dev build-base perl
WORKDIR /build
COPY Cargo.toml Cargo.lock ./
COPY src ./src
RUN cargo build --release --locked --target x86_64-unknown-linux-musl \
    && cp target/x86_64-unknown-linux-musl/release/rustream /rustream

FROM alpine:3.20
# ffmpeg: CUE segments; python3 + yt-dlp: YouTube Music streams.
RUN apk add --no-cache ffmpeg ca-certificates python3 \
    && wget -qO /usr/local/bin/yt-dlp https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp \
    && chmod +x /usr/local/bin/yt-dlp
COPY --from=builder /rustream /usr/local/bin/rustream
COPY --from=ui /static /opt/rustream/static
RUN mkdir -p /data /music
WORKDIR /data
ENV RUSTREAM_STATIC_DIR=/opt/rustream/static
EXPOSE 4533
CMD ["/usr/local/bin/rustream"]

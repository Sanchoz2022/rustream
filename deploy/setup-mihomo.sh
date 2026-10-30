#!/bin/sh
# Install mihomo (Clash Meta) inside the container as a loopback-only proxy for
# YouTube Music. Runs on the server: `ssh pve "pct exec 104 -- sh -s" < deploy/setup-mihomo.sh`
# Expected config file: /opt/mihomo/config.yaml (see deploy/mihomo.yaml.example).
set -e
VER="${MIHOMO_VERSION:-v1.19.33}"
DIR=/opt/mihomo

mkdir -p "$DIR"
if [ ! -x "$DIR/mihomo" ]; then
  cd /tmp
  curl -fsSL -o mihomo.gz \
    "https://github.com/MetaCubeX/mihomo/releases/download/$VER/mihomo-linux-amd64-compatible-$VER.gz"
  gunzip -f mihomo.gz
  install -m 0755 mihomo "$DIR/mihomo"
  rm -f mihomo
fi
id -u nobody >/dev/null 2>&1 && chown -R nobody:nogroup "$DIR" || true
chmod 750 "$DIR"
[ -f "$DIR/config.yaml" ] && chmod 600 "$DIR/config.yaml"

cat > /etc/systemd/system/mihomo.service <<'UNIT'
[Unit]
Description=mihomo (Clash Meta) proxy for YouTube Music
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
ExecStart=/opt/mihomo/mihomo -d /opt/mihomo -f /opt/mihomo/config.yaml
Restart=always
RestartSec=5
LimitNOFILE=65536
User=nobody
NoNewPrivileges=true
ProtectSystem=strict
ProtectHome=true
PrivateTmp=true
ReadWritePaths=/opt/mihomo

[Install]
WantedBy=multi-user.target
UNIT

systemctl daemon-reload
systemctl enable mihomo
systemctl restart mihomo
sleep 2
systemctl is-active mihomo
"$DIR/mihomo" -v

#!/bin/bash

# 設置錯誤處理
set -e

# 環境變量
APP_NAME="tarot-app"
DOCKER_IMAGE="ghcr.io/your-username/tarot-app:latest"
SSH_HOST="your-server-ip"
SSH_USER="your-ssh-user"
SSH_PORT="22"

echo "🚀 開始部署流程..."

# 連接到服務器並執行部署命令
ssh -p $SSH_PORT $SSH_USER@$SSH_HOST << EOF
  echo "📦 拉取最新鏡像..."
  docker pull $DOCKER_IMAGE

  echo "🔄 停止並移除舊容器..."
  docker stop $APP_NAME || true
  docker rm $APP_NAME || true

  echo "🚀 啟動新容器..."
  docker run -d \
    --name $APP_NAME \
    --restart unless-stopped \
    -p 3000:3000 \
    -e NODE_ENV=production \
    $DOCKER_IMAGE

  echo "✅ 部署完成！"
EOF

echo "🎉 部署流程完成！" 
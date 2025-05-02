# 構建階段
FROM node:18-alpine AS builder

WORKDIR /app

# 複製依賴文件
COPY package*.json ./
COPY yarn.lock ./

# 安裝依賴
RUN yarn install --frozen-lockfile

# 複製源代碼
COPY . .

# 構建應用
RUN yarn build

# 運行階段
FROM node:18-alpine AS runner

WORKDIR /app

# 設置環境變量
ENV NODE_ENV=production

# 複製必要的文件
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# 暴露端口
EXPOSE 3000

# 啟動命令
CMD ["node", "server.js"] 
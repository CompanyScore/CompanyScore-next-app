# Сборка проекта
FROM node:alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Продакшен-контейнер
FROM node:alpine AS runner
WORKDIR /app

# Копируем standalone билд
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Если используешь .env.local на runtime — скопируй его
COPY --from=builder /app/.env.local ./.env.local

EXPOSE 3000
CMD ["node", "server.js"]

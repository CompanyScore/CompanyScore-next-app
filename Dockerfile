# Сборка проекта
FROM node:alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Этап запуска

FROM node:alpine AS runner

WORKDIR /app

COPY --from=builder /app ./


EXPOSE 3000

CMD ["npm", "start"]

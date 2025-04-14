# 1. Используем Node.js в качестве базового образа
FROM node:alpine AS builder

# 2. Устанавливаем рабочую директорию
WORKDIR /app

# 3. Указываем build-time переменные
ARG NEXT_PUBLIC_R2_IMAGES
ARG NEXT_PUBLIC_BACK

# 4. Экспортируем переменные в ENV (для next.config.js / build)
ENV NEXT_PUBLIC_R2_IMAGES=$NEXT_PUBLIC_R2_IMAGES
ENV NEXT_PUBLIC_BACK=$NEXT_PUBLIC_BACK

# 5. Копируем package.json и package-lock.json для установки зависимостей
COPY package.json package-lock.json ./

# 6. Устанавливаем зависимости
RUN npm ci

# 7. Копируем весь проект
COPY . .

# 8. Собираем Next.js-приложение (переменные будут доступны)
RUN npm run build

# 9. Оставляем только нужные файлы для продакшена
FROM node:alpine AS runner
WORKDIR /app

# 10. Копируем переменные (если нужно использовать на runtime — опционально)
ARG NEXT_PUBLIC_R2_IMAGES
ARG NEXT_PUBLIC_BACK

ENV NEXT_PUBLIC_R2_IMAGES=$NEXT_PUBLIC_R2_IMAGES
ENV NEXT_PUBLIC_BACK=$NEXT_PUBLIC_BACK

# 11. Копируем файлы из builder-контейнера
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

# 12. Открываем порт
EXPOSE 3000

# 13. Запускаем Next.js в продакшен-режиме
CMD ["npm", "start"]

# 1. Используем Node.js в качестве базового образа
FROM node:alpine AS builder

# 2. Устанавливаем рабочую директорию
WORKDIR /app

# 3. Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# 4. Устанавливаем зависимости
RUN npm ci

# 5. Копируем весь проект, включая .env.local
COPY . .

# 6. Собираем Next.js-приложение (Next сам подгрузит .env.local)
RUN npm run build

# 7. Оставляем только нужные файлы для продакшена
FROM node:alpine AS runner
WORKDIR /app

# 8. Копируем из builder только нужное
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

# 9. Открываем порт
EXPOSE 3000

# 10. Запускаем Next.js в продакшен-режиме
CMD ["npm", "start"]

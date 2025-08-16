# CompanyScore 🏆

![Build](https://github.com/CompanyScore/companyscore-next-app/actions/workflows/build.yml/badge.svg)
![Lint](https://github.com/CompanyScore/companyscore-next-app/actions/workflows/lint.yml/badge.svg)
![Test](https://github.com/CompanyScore/companyscore-next-app/actions/workflows/test.yml/badge.svg)
![Type Check](https://github.com/CompanyScore/companyscore-next-app/actions/workflows/typecheck.yml/badge.svg)

## Настройка проекта

### 1. Установка зависимостей
```bash
npm install
```

### 2. Настройка переменных окружения
Скопируйте `env.example` в `.env.local` и заполните необходимые переменные:

```bash
cp env.example .env.local
```

### 3. Настройка Keycloak

#### Установка Keycloak
```bash
# Скачайте Keycloak с официального сайта
# Или используйте Docker
docker run -p 8081:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:latest start-dev
```

#### Настройка Realm и клиентов
1. Откройте Keycloak Admin Console: http://localhost:8081
2. Войдите как admin/admin
3. Создайте новый realm: `companyScore`
4. Создайте два клиента:

**Frontend Client (Public):**
- Client ID: `companyscore-frontend`
- Client Protocol: `openid-connect`
- Access Type: `public`
- Valid Redirect URIs: `http://localhost:3000/api/auth/callback`
- Web Origins: `http://localhost:3000`

**Backend Client (Confidential):**
- Client ID: `companyscore-backend`
- Client Protocol: `openid-connect`
- Access Type: `confidential`
- Service Accounts Enabled: `ON`

### 4. Запуск проекта
```bash
npm run dev
```

## Архитектура

- **Next.js 15** - React фреймворк
- **Keycloak** - аутентификация и авторизация
- **TypeScript** - типизация
- **Tailwind CSS + DaisyUI** - стилизация

## Основные компоненты

- `lib/keycloak.ts` - утилиты для работы с Keycloak
- `middleware.ts` - проверка авторизации
- `app/api/auth/callback/route.ts` - обработка callback от Keycloak
- `app/api/auth/logout/route.ts` - выход из системы
- `components/logout-button.tsx` - кнопка выхода

## Процесс авторизации

1. Пользователь нажимает "Войти через Keycloak"
2. Происходит перенаправление на Keycloak
3. После успешной авторизации Keycloak перенаправляет на `/api/auth/callback`
4. Callback обменивает код на токен и устанавливает cookies
5. Пользователь перенаправляется на главную страницу

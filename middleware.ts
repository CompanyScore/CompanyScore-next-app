// middleware нужен для проверки авторизации пользователя
// Если пользователь не авторизован, то перенаправляем его на страницу авторизации
// Если пользователь авторизован, то пропускаем запрос дальше

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Доступ к httpOnly cookie возможен на сервере
  const accessToken = request.cookies.get("accessToken")?.value;
  if (!accessToken) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/users/:path*",
    "/profile/:path*",
    "/analytic/:path*",
    "/blog/:path*",
  ],
};

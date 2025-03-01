import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;
  const pathname = request.nextUrl.pathname;

  // Если пользователь уже на /login, не выполняем редирект
  if (pathname === "/login") {
    return NextResponse.next();
  }

  // Если нет токена и пользователь НЕ на /login, перенаправляем на /login
  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|icons|imgs).*)",
};

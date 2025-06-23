import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;
  const pathname = request.nextUrl.pathname;

  // Если пользователь уже на /login, не выполняем редирект
  const publicPaths = ['/login', '/', '/about', '/blog'];

  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // Если есть refreshToken, пропускаем запрос, чтобы сервер обновил токен
  if (refreshToken) {
    return NextResponse.next();
  }

  // Если нет токена и пользователь НЕ на /login, перенаправляем на /login
  if (!accessToken && !refreshToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico|imgs|icons).*)',
};

import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken');

  const isPublic = ['/login', '/', '/about', '/blog'].includes(
    request.nextUrl.pathname,
  );

  // Если нет accessToken и не на публичной странице → редирект на /login
  if (!accessToken && !isPublic) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|icons|imgs|api|public).*)'],
};

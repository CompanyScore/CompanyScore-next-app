import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('keycloak-token')?.value;

  const isAuthPage =
    request.nextUrl.pathname.startsWith('/login') ||
    request.nextUrl.pathname.startsWith('/register');
  const isPublicPage =
    request.nextUrl.pathname === '/' ||
    request.nextUrl.pathname.startsWith('/about') ||
    request.nextUrl.pathname.startsWith('/blog') ||
    request.nextUrl.pathname.startsWith('/api/auth');
  const isProtectedPage =
    request.nextUrl.pathname.startsWith('/test/user_data');

  // Public pages are accessible to everyone
  if (isPublicPage) {
    return NextResponse.next();
  }

  // Protected pages require authentication
  if (isProtectedPage && !token) {
    const keycloakUrl = process.env.KEYCLOAK_URL || 'http://localhost:8081';
    const realm = process.env.KEYCLOAK_REALM || 'companyScore';
    const clientId =
      process.env.KEYCLOAK_FRONTEND_CLIENT_ID || 'companyscore-frontend';
    const redirectUri = encodeURIComponent(
      `${request.nextUrl.origin}/api/auth/callback`,
    );

    const loginUrl = `${keycloakUrl}/realms/${realm}/protocol/openid-connect/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid`;

    return NextResponse.redirect(loginUrl);
  }

  // If no token and not auth page, redirect to Keycloak
  if (!token && !isAuthPage) {
    const keycloakUrl = process.env.KEYCLOAK_URL || 'http://localhost:8081';
    const realm = process.env.KEYCLOAK_REALM || 'companyScore';
    const clientId =
      process.env.KEYCLOAK_FRONTEND_CLIENT_ID || 'companyscore-frontend';
    const redirectUri = encodeURIComponent(
      `${request.nextUrl.origin}/api/auth/callback`,
    );

    const loginUrl = `${keycloakUrl}/realms/${realm}/protocol/openid-connect/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid`;

    return NextResponse.redirect(loginUrl);
  }

  // If token exists and user is on auth page, redirect to home
  if (token && isAuthPage) {
    const homeUrl = new URL('/', request.url);
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};

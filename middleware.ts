import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './app/i18n/routing';

const intlMiddleware = createMiddleware({
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  localePrefix: 'as-needed',
});

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Handle internationalization first
  const intlResponse = intlMiddleware(request);
  if (intlResponse) return intlResponse;

  // Get the locale from the pathname
  const pathnameIsMissingLocale = routing.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = routing.defaultLocale;
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  // Extract locale from pathname
  const pathnameHasLocale = routing.locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    const locale = pathname.split('/')[1];

    // Public paths that don't require authentication
    const publicPaths = [
      `/${locale}`,
      `/${locale}/about`,
      `/${locale}/blog`,
      `/${locale}/api/auth/callback`,
      `/${locale}/api/auth/logout`,
    ];

    // Check if current path is public
    const isPublicPath = publicPaths.some(
      path => pathname === path || pathname.startsWith(path + '/'),
    );

    if (isPublicPath) {
      return NextResponse.next();
    }

    // Check for authentication token
    const token = request.cookies.get('keycloak-token')?.value;

    // If no token and not on login page, redirect to login
    if (!token && !pathname.includes('/login')) {
      const loginUrl = `${request.nextUrl.origin}/${locale}/login`;
      return NextResponse.redirect(new URL(loginUrl));
    }

    // If has token and on login page, redirect to home
    if (token && pathname.includes('/login')) {
      const homeUrl = `${request.nextUrl.origin}/${locale}`;
      return NextResponse.redirect(new URL(homeUrl));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|.*\\..*).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
};

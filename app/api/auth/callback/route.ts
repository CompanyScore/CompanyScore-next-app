import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  if (error) {
    return NextResponse.redirect(new URL('/login?error=' + error, request.url));
  }

  if (!code) {
    return NextResponse.redirect(new URL('/login?error=no_code', request.url));
  }

  try {
    // Exchange code for token
    const tokenResponse = await fetch(
      `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/token`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          client_id: process.env.KEYCLOAK_FRONTEND_CLIENT_ID!,
          client_secret: process.env.KEYCLOAK_FRONTEND_CLIENT_SECRET!,
          code: code,
          redirect_uri: `${request.nextUrl.origin}/api/auth/callback`,
        }),
      },
    );

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error('Token exchange failed:', tokenData);
      return NextResponse.redirect(
        new URL('/login?error=token_exchange_failed', request.url),
      );
    }

    // Create response with cookies
    const response = NextResponse.redirect(new URL('/', request.url));

    // Set token in cookie
    response.cookies.set('keycloak-token', tokenData.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: tokenData.expires_in,
    });

    // Set refresh token
    if (tokenData.refresh_token) {
      response.cookies.set('keycloak-refresh-token', tokenData.refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60, // 30 days
      });
    }

    return response;
  } catch (error) {
    console.error('Auth callback error:', error);
    return NextResponse.redirect(
      new URL('/login?error=callback_failed', request.url),
    );
  }
}

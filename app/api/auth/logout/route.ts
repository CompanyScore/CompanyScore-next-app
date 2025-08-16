import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const refreshToken = request.cookies.get('keycloak-refresh-token')?.value;

  if (refreshToken) {
    try {
      // Revoke refresh token in Keycloak
      await fetch(
        `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/logout`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            client_id: process.env.KEYCLOAK_FRONTEND_CLIENT_ID!,
            client_secret: process.env.KEYCLOAK_FRONTEND_CLIENT_SECRET!,
            refresh_token: refreshToken,
          }),
        },
      );
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  // Create response with cookie deletion
  const response = NextResponse.json({ success: true });

  // Remove tokens from cookies
  response.cookies.delete('keycloak-token');
  response.cookies.delete('keycloak-refresh-token');

  return response;
}

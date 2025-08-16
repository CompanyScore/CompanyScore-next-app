import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const token = request.cookies.get('keycloak-token')?.value;

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Get user information from Keycloak
    const userResponse = await fetch(
      `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/userinfo`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!userResponse.ok) {
      return NextResponse.json(
        { error: 'Failed to get user info' },
        { status: 401 },
      );
    }

    const userData = await userResponse.json();

    // Get user roles
    const rolesResponse = await fetch(
      `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/userinfo`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const rolesData = await rolesResponse.json();

    return NextResponse.json({
      id: userData.sub,
      email: userData.email,
      name: userData.name,
      given_name: userData.given_name,
      family_name: userData.family_name,
      preferred_username: userData.preferred_username,
      roles: rolesData.realm_access?.roles || [],
      email_verified: userData.email_verified,
      locale: userData.locale,
      updated_at: userData.updated_at,
    });
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

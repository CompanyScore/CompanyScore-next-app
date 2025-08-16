export const getKeycloakLoginUrl = (redirectUri: string): string => {
  const keycloakUrl =
    process.env.NEXT_PUBLIC_KEYCLOAK_URL || 'http://localhost:8081';
  const realm = process.env.NEXT_PUBLIC_KEYCLOAK_REALM || 'companyScore';
  const clientId =
    process.env.NEXT_PUBLIC_KEYCLOAK_FRONTEND_CLIENT_ID ||
    'companyscore-frontend';

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: 'openid email profile',
  });

  return `${keycloakUrl}/realms/${realm}/protocol/openid-connect/auth?${params.toString()}`;
};

export const getKeycloakLogoutUrl = (): string => {
  const keycloakUrl =
    process.env.NEXT_PUBLIC_KEYCLOAK_URL || 'http://localhost:8081';
  const realm = process.env.NEXT_PUBLIC_KEYCLOAK_REALM || 'companyScore';
  const clientId =
    process.env.NEXT_PUBLIC_KEYCLOAK_FRONTEND_CLIENT_ID ||
    'companyscore-frontend';

  return `${keycloakUrl}/realms/${realm}/protocol/openid-connect/logout?client_id=${clientId}`;
};

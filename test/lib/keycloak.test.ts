import { expect } from 'chai';
import { getKeycloakLoginUrl, getKeycloakLogoutUrl } from '../../lib/keycloak';

describe('Keycloak Utils', () => {
  describe('getKeycloakLoginUrl', () => {
    it('should generate correct login URL with default values', () => {
      const redirectUri = 'http://localhost:3000/api/auth/callback';
      const loginUrl = getKeycloakLoginUrl(redirectUri);

      expect(loginUrl).to.include('http://localhost:8081');
      expect(loginUrl).to.include('/realms/companyScore');
      expect(loginUrl).to.include('/protocol/openid-connect/auth');
      expect(loginUrl).to.include('client_id=companyscore-frontend');
      expect(loginUrl).to.include(
        'redirect_uri=' + encodeURIComponent(redirectUri),
      );
      expect(loginUrl).to.include('response_type=code');
      expect(loginUrl).to.include('scope=openid%20email%20profile');
    });

    it('should generate login URL with custom redirect URI', () => {
      const customRedirectUri = 'https://example.com/callback';
      const loginUrl = getKeycloakLoginUrl(customRedirectUri);

      expect(loginUrl).to.include(
        'redirect_uri=' + encodeURIComponent(customRedirectUri),
      );
    });
  });

  describe('getKeycloakLogoutUrl', () => {
    it('should generate correct logout URL', () => {
      const logoutUrl = getKeycloakLogoutUrl();

      expect(logoutUrl).to.include('http://localhost:8081');
      expect(logoutUrl).to.include('/realms/companyScore');
      expect(logoutUrl).to.include('/protocol/openid-connect/logout');
      expect(logoutUrl).to.include('client_id=companyscore-frontend');
    });
  });
});

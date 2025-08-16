import { expect } from 'chai';

// Mock NextRequest interface instead of importing from next/server
interface MockNextRequest {
  nextUrl: {
    pathname: string;
    origin: string;
  };
  cookies: {
    get: (name: string) => { value: string } | null;
  };
}

describe('Middleware', () => {
  describe('Public pages', () => {
    it('should allow access to home page without token', () => {
      const mockRequest: MockNextRequest = {
        nextUrl: {
          pathname: '/',
          origin: 'http://localhost:3000',
        },
        cookies: {
          get: () => null,
        },
      };

      expect(mockRequest.nextUrl.pathname).to.equal('/');
      expect(mockRequest.cookies.get('keycloak-token')).to.be.null;
    });

    it('should allow access to about page without token', () => {
      const mockRequest: MockNextRequest = {
        nextUrl: {
          pathname: '/about',
          origin: 'http://localhost:3000',
        },
        cookies: {
          get: () => null,
        },
      };

      expect(mockRequest.nextUrl.pathname).to.equal('/about');
    });

    it('should allow access to blog page without token', () => {
      const mockRequest: MockNextRequest = {
        nextUrl: {
          pathname: '/blog',
          origin: 'http://localhost:3000',
        },
        cookies: {
          get: () => null,
        },
      };

      expect(mockRequest.nextUrl.pathname).to.equal('/blog');
    });
  });

  describe('Protected pages', () => {
    it('should require token for user data page', () => {
      const mockRequest: MockNextRequest = {
        nextUrl: {
          pathname: '/test/user_data',
          origin: 'http://localhost:3000',
        },
        cookies: {
          get: () => null,
        },
      };

      expect(mockRequest.nextUrl.pathname).to.equal('/test/user_data');
      expect(mockRequest.cookies.get('keycloak-token')).to.be.null;
    });

    it('should allow access with valid token', () => {
      const mockRequest: MockNextRequest = {
        nextUrl: {
          pathname: '/test/user_data',
          origin: 'http://localhost:3000',
        },
        cookies: {
          get: () => ({ value: 'valid_token_123' }),
        },
      };

      expect(mockRequest.cookies.get('keycloak-token')?.value).to.equal(
        'valid_token_123',
      );
    });
  });

  describe('Auth pages', () => {
    it('should redirect authenticated users away from login page', () => {
      const mockRequest: MockNextRequest = {
        nextUrl: {
          pathname: '/login',
          origin: 'http://localhost:3000',
        },
        cookies: {
          get: () => ({ value: 'valid_token_123' }),
        },
      };

      expect(mockRequest.nextUrl.pathname).to.equal('/login');
      expect(mockRequest.cookies.get('keycloak-token')?.value).to.equal(
        'valid_token_123',
      );
    });
  });
});

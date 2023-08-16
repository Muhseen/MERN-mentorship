import { AuthMiddlewareMiddleware } from './auth-middleware.middleware';

describe('AuthMiddlewareMiddleware', () => {
  it('should be defined', () => {
    expect(new AuthMiddlewareMiddleware()).toBeDefined();
  });
});

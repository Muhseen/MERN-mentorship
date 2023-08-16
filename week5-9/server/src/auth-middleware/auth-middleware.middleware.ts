import { Injectable, NestMiddleware } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { JWT_KEY } from 'src/config';
@Injectable()
export class AuthMiddlewareMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const token = req.headers.authorization;
    if (!token) {
      console.log('No User Found');
      next();
      return;
    }

    try {
      const user = jwt.verify(token, JWT_KEY);
      if (user) {
        req['user'] = user;
      }
    } catch (err) {
      console.log('here' + err.message);
    }
    next();
  }
}

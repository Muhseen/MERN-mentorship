import { Controller, Post } from '@nestjs/common';

@Controller('auth-controller')
export class AuthControllerController {
  @Post('login')
  login() {
    return 'Login Successful';
  }
}

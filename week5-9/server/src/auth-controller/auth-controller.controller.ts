import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { UserService } from 'src/user/user.service';
// import * as password from 'password-salt-and-hash';
import * as jwt from 'jsonwebtoken';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import { JWT_KEY } from 'src/config';
import * as bcrypt from 'bcrypt';
@Controller('auth')
export class AuthControllerController {
  constructor(private user_service: UserService) {}

  @Post('login')
  async login(
    @Body('username')
    username: string,
    @Body('password') pword: string,
  ) {
    const user = await this.user_service.findByUsername(username);
    if (!user) {
      throw new NotFoundException('Invalid User!');
    }
    bcrypt.compare(pword, user.passwordHash);
    const token = jwt.sign({ username: username, type: user.type }, JWT_KEY);
    return token;
  }
}

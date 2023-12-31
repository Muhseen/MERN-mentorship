import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as password from 'password-salt-and-hash';
import * as bcrypt from 'bcrypt';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    bcrypt.genSalt(10);
    createUserDto.passwordHash = await bcrypt.hash(
      createUserDto.passwordHash,
      10,
    );
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    password('Sample').hash((error, hash) => {
      if (error) {
        console.log(error);
      }
      if (hash) {
        console.log(hash);
      }
    });
    // password('Samlpe').verifyAgainst('UserHash', (err, status) => {
    //   console.log({ err, status });
    // });
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}

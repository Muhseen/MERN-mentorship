import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser, User } from './entities/user.entity';
@Injectable()
export class UserService {
  constructor(@InjectModel('User') private user_model: Model<IUser>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.user_model.create(createUserDto);
    //('This action adds a new user');
  }

  async findAll() {
    return await this.user_model.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
  async findByUsername(username: string): Promise<IUser> {
    return await this.user_model.findOne({ username });
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

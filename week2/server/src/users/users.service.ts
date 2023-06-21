import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './entities/user.entity';
import { NotFoundException } from '@nestjs/common/exceptions';
@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  // create(createUserDto: CreateUserDto) {
  //   const newUser = new this.userModel({
  //     username: CreateUserDto.username,
  //     password: CreateUserDto.password,
  //     user_type: CreateUserDto.user_type,
  //   });
  // }
  public async create(username, password, user_type) {
    const newUser = new this.userModel({
      username,
      password,
      user_type,
    });
    console.log({ newUser });
    const res = await newUser.save();
    console.log({ res });
    return res;
  }

  async findAll() {
    const users = await this.userModel.find();
    return users;
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  async update(
    id: string,
    username: string,
    password: string,
    user_type: number,
    email: string,
  ) {
    const user = await this.userModel.findById(id);

    if (username) user.username = username;
    if (email) user.email = email;
    if (password) user.password = password;
    if (user_type) user.user_type = user_type;
    user.save();

    return user;
  }

  async remove(id: string) {
    const user = await this.userModel.deleteOne({ _id: id });

    if (user.deletedCount) {
      return 'User Deleted';
    }
    throw new NotFoundException('Resouce does not exsit');
  }
}

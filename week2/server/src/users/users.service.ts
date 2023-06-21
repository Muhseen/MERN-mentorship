import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './entities/user.entity';
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

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    const user = this.userModel.findOneAndDelete({ id });
    return user;
    return `This action removes a #${id} user`;
  }
}

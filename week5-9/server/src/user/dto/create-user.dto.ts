import mongoose from 'mongoose';

export class CreateUserDto {
  username: string;
  passwordHash: string;
  name: string;
  type: string;
}

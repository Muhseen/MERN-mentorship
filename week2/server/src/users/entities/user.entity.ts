import mongoose from 'mongoose';

export class User {
  username: string;
  password: string;
  user_type: number;
  email: string;
}

export const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  user_type: Number,
  email: String,
});

export interface IUser {
  username: string;
  email: string;
  password: string;
  user_type: number;
}

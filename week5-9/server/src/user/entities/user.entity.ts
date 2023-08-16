import mongoose from 'mongoose';

export class User {
  username: string;
  passwordHash: string;
  name: string;
  type: string;
}
export const UserSchema = new mongoose.Schema({
  username: String,
  passwordHash: String,
  name: String,
  type: String,
});
export interface IUser extends mongoose.Document {
  username: string;
  passwordHash: string;
  name: string;
  type: string;
}

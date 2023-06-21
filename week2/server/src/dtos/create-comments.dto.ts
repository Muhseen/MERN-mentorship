import { IsNotEmpty, IsAlpha, IsNumber, IsDate } from 'class-validator';
import { NumericType } from 'mongodb';
import { Date } from 'mongoose';
import { isNumberObject } from 'util/types';

export class CreateCommentDto {
  @IsNotEmpty()
  @IsNumber()
  post_id: number;

  @IsNotEmpty()
  title: string;

  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  @IsNumber()
  user_id: number;
}

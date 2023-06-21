import {
  IsAlpha,
  IsNotEmpty,
  IsAlphanumeric,
  isNotEmpty,
  IsNumber,
  IsEmail,
} from 'class-validator';

export class CreateUserDto {
  @IsAlpha()
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  password: string;

  @IsNumber()
  @IsNotEmpty()
  user_type: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}

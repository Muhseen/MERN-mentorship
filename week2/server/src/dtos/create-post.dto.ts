import { IsNotEmpty, IsAlpha, IsString } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsAlpha()
  @IsNotEmpty()
  description: string;
}

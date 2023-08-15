import { Transform } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateProductDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  cost_price: number;

  @IsNumber()
  @IsNotEmpty()
  selling_price: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @Transform(({ value }) => new Date(value))
  @IsDate()
  created_at: Date;
  ratings: number;
}

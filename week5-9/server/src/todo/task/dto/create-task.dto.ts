import { IsNotEmpty, IsString } from 'class-validator';
export class CreateTaskDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsString()
  task: string;

  isCompleted: boolean;
}

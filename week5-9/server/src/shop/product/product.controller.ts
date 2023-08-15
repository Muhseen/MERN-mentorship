import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { BadRequestException, HttpException } from '@nestjs/common/exceptions';
interface CustomError {
  message: string;
  status: number;
}
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createProductDto: CreateProductDto) {
    try {
      const exists = await this.productService.findOneByCustomId(
        createProductDto.id.toString(),
      );
      if (exists?.id) {
        throw new BadRequestException('Error! Duplicate ID', {
          cause: new Error(),
          description: 'Error! Duplicate ID',
        });
      }
      return await this.productService.create(createProductDto);
    } catch (err) {
      console.log(err.message);
      return { message: err.message, status: 400 };
    }
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    //return id;
    return await this.productService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    //return updateProductDto;
    try {
      if ('_id' in updateProductDto) {
        throw new HttpException(
          'Inavlid Parameters. please conform to the api patch structure',
          400,
        );
      }
      return this.productService.update(id, updateProductDto);
    } catch (err) {
      console.log(err);
      throw new HttpException(
        `${err.message} Something went wrong, unable to complete`,
        400,
      );
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}

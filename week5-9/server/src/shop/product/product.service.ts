import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { IProduct, Product } from './entities/product.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose/dist/common';
// import BadRequestException from '@nestjs/common/exceptions';
@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private product_model: Model<IProduct>) {}
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const created_product = new this.product_model(createProductDto);
    return await created_product.save();
  }

  async findAll() {
    return await this.product_model.find();
    //return `This action returns all product`;
  }

  async findOne(id: string) {
    return await this.product_model.findById(id);
  }
  async findOneByCustomId(id: string) {
    return await this.product_model.findOne({ id });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    console.log({ UpdateProductDto, id });
    return await this.product_model.updateOne(
      {
        _id: id,
      },
      UpdateProductDto,
      { new: true },
    );
  }

  async remove(id: string) {
    return await this.product_model.deleteOne({ _id: id });
  }
}

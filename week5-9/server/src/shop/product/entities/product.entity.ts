// import { mongoose, Document } from 'mongoose';
import mongoose from 'mongoose';
export class Product {
  id: number;
  name: string;
  cost_price: number;
  selling_price: number;
  quantity: number;
  created_at: Date;
  ratings: number;
}

export const ProductSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: String,
  cost_price: Number,
  selling_price: Number,
  quantity: Number,
  created_at: Date,
  ratings: Number,
});
export interface IProduct extends mongoose.Document {
  id: number;
  name: string;
  cost_price: number;
  selling_price: number;
  quantity: number;
  created_at: Date;
  ratings: number;
}

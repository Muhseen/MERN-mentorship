import { Product } from 'src/shop/product/entities/product.entity';

export enum Status {
  ordered = 1,
  shipped = 2,
  cancelled = 3,
  returned = 4,
  failed = 5,
  completed = 6,
}
export enum PaymentMethod {
  card = 1,
  cash,
  wire_transfer,
}
export class Transaction {
  amount: number;
  txn_date: number;
  status: Status;
  order_items: Product[];
  address?: string;
  name: string;
  payment_method: PaymentMethod;
}

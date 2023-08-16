export default interface Todo{
    id: number; 
    task: string;
    isCompleted: boolean ;
}
export interface Product
{
  id: number;
  name: string;
  cost_price: number;
  selling_price: number;
  quantity: number;
}
export const my_products:Product[] = [
  {
    id: 10023,
    name: "Sample Product 23 ",
    cost_price: 2500,
    selling_price: 25000,
    quantity: 10,
  },
  {
    id: 1003,
    name: "Sample Product 23 ",
    cost_price: 2500,
    selling_price: 25000,
    quantity: 10,
  }];

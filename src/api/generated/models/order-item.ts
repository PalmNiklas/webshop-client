/* tslint:disable */
import { Timestamp } from './timestamp';
import { Order } from './order';
import { Product } from './product';
export interface OrderItem {
  createdAt?: Timestamp;
  id?: number;
  order?: Order;
  product?: Product;
  quantity?: number;
  updatedAt?: Timestamp;
}

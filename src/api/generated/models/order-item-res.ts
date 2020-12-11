/* tslint:disable */
import { TimestampRes } from './timestamp-res';
import { OrderRes } from './order-res';
import { Product } from './product';
export interface OrderItemRes {
  createdAt?: TimestampRes;
  id?: number;
  order?: OrderRes;
  product?: Product;
  quantity?: number;
  updatedAt?: TimestampRes;
}

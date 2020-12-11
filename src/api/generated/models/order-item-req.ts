/* tslint:disable */
import { TimestampReq } from './timestamp-req';
import { OrderReq } from './order-req';
import { Product } from './product';
export interface OrderItemReq {
  createdAt?: TimestampReq;
  id?: number;
  order?: OrderReq;
  product?: Product;
  quantity?: number;
  updatedAt?: TimestampReq;
}

/* tslint:disable */
import { OrderRes } from './order-res';
export interface OrderStatusRes {
  id?: number;
  name?: string;
  order?: Array<OrderRes>;
}

/* tslint:disable */
import { OrderReq } from './order-req';
export interface OrderStatusReq {
  id?: number;
  name?: string;
  order?: Array<OrderReq>;
}

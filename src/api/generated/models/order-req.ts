/* tslint:disable */
import { OrderItemReq } from './order-item-req';
import { OrderStatusReq } from './order-status-req';
import { User } from './user';
export interface OrderReq {
  id?: number;
  items?: Array<OrderItemReq>;
  orderDate?: string;
  status?: OrderStatusReq;
  total?: number;
  user?: User;
}

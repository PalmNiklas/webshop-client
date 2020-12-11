/* tslint:disable */
import { OrderItemRes } from './order-item-res';
import { OrderStatusRes } from './order-status-res';
import { User } from './user';
export interface OrderRes {
  id?: number;
  items?: Array<OrderItemRes>;
  orderDate?: string;
  status?: OrderStatusRes;
  total?: number;
  user?: User;
}

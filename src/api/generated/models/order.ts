/* tslint:disable */
import { OrderItem } from './order-item';
import { OrderStatus } from './order-status';
import { User } from './user';
export interface Order {
  id?: number;
  items?: Array<OrderItem>;
  orderDate?: string;
  status?: OrderStatus;
  total?: number;
  user?: User;
}

/* tslint:disable */
import { OrderRes } from './order-res';
export interface User {
  active?: boolean;
  email?: string;
  id?: number;
  orders?: Array<OrderRes>;
  password?: string;
  role?: number;
  username?: string;
}

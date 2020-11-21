/* tslint:disable */
import { Product } from './product';
export interface Category {
  id?: number;
  name?: string;
  parentId?: number;
  products?: Array<Product>;
}

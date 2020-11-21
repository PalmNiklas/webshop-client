/* tslint:disable */
import { Category } from './category';
export interface Product {
  categories?: Array<Category>;
  description?: string;
  id?: number;
  image?: ArrayBuffer;
  name?: string;
  quantity?: number;
  regularPrice?: number;
}

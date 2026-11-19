import { Product } from './product.entity.js';

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  detailTitle: string;
  detailImage: string;
  detailText: string;
  products?: Product[];
}

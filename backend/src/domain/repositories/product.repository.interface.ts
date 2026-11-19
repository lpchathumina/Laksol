import { Product } from '../entities/product.entity.js';

export interface IProductRepository {
  findAll(): Promise<Product[]>;
  findById(id: number): Promise<Product | null>;
  findByCategory(category: string): Promise<Product[]>;
  search(query: string): Promise<Product[]>;
  create(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product>;
  update(id: number, product: Partial<Product>): Promise<Product | null>;
  delete(id: number): Promise<boolean>;
}

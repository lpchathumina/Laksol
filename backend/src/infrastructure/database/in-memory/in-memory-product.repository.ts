import { Product } from '../../../domain/entities/product.entity.js';
import { IProductRepository } from '../../../domain/repositories/product.repository.interface.js';
import { initialProducts } from '../initial-data.js';

export class InMemoryProductRepository implements IProductRepository {
  private products: Product[] = [...initialProducts];

  async findAll(): Promise<Product[]> {
    return [...this.products];
  }

  async findById(id: number): Promise<Product | null> {
    const product = this.products.find(p => p.id === id);
    return product ? { ...product } : null;
  }

  async findByCategory(category: string): Promise<Product[]> {
    return this.products
      .filter(p => p.category.toLowerCase() === category.toLowerCase())
      .map(p => ({ ...p }));
  }

  async search(query: string): Promise<Product[]> {
    const q = query.toLowerCase().trim();
    if (!q) return this.findAll();

    return this.products
      .filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      )
      .map(p => ({ ...p }));
  }

  async create(data: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> {
    const nextId = this.products.length > 0 ? Math.max(...this.products.map(p => p.id)) + 1 : 1;
    const now = new Date();
    const newProduct: Product = {
      ...data,
      id: nextId,
      createdAt: now,
      updatedAt: now,
    };
    this.products.push(newProduct);
    return { ...newProduct };
  }

  async update(id: number, data: Partial<Product>): Promise<Product | null> {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return null;

    this.products[index] = {
      ...this.products[index],
      ...data,
      id,
      updatedAt: new Date(),
    };
    return { ...this.products[index] };
  }

  async delete(id: number): Promise<boolean> {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return false;
    this.products.splice(index, 1);
    return true;
  }
}

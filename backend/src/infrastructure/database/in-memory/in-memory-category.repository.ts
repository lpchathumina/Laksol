import { Category } from '../../../domain/entities/category.entity.js';
import { ICategoryRepository } from '../../../domain/repositories/category.repository.interface.js';
import { initialCategories } from '../initial-data.js';

export class InMemoryCategoryRepository implements ICategoryRepository {
  private categories: Category[] = [...initialCategories];

  async findAll(): Promise<Category[]> {
    return [...this.categories];
  }

  async findById(id: string): Promise<Category | null> {
    const category = this.categories.find(c => c.id.toLowerCase() === id.toLowerCase());
    return category ? { ...category } : null;
  }

  async create(category: Category): Promise<Category> {
    this.categories.push({ ...category });
    return { ...category };
  }

  async update(id: string, data: Partial<Category>): Promise<Category | null> {
    const index = this.categories.findIndex(c => c.id.toLowerCase() === id.toLowerCase());
    if (index === -1) return null;

    this.categories[index] = {
      ...this.categories[index],
      ...data,
      id,
    };
    return { ...this.categories[index] };
  }

  async delete(id: string): Promise<boolean> {
    const index = this.categories.findIndex(c => c.id.toLowerCase() === id.toLowerCase());
    if (index === -1) return false;
    this.categories.splice(index, 1);
    return true;
  }
}

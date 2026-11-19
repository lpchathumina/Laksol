import { Category } from '../../domain/entities/category.entity.js';
import { ICategoryRepository } from '../../domain/repositories/category.repository.interface.js';
import { IProductRepository } from '../../domain/repositories/product.repository.interface.js';

export class GetAllCategoriesUseCase {
  constructor(
    private categoryRepository: ICategoryRepository,
    private productRepository?: IProductRepository
  ) {}

  async execute(includeProducts: boolean = false): Promise<Category[]> {
    const categories = await this.categoryRepository.findAll();

    if (includeProducts && this.productRepository) {
      const allProducts = await this.productRepository.findAll();
      return categories.map(cat => ({
        ...cat,
        products: allProducts.filter(p => p.category.toLowerCase() === cat.id.toLowerCase()),
      }));
    }

    return categories;
  }
}

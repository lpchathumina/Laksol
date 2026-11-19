import { Category } from '../../domain/entities/category.entity.js';
import { ICategoryRepository } from '../../domain/repositories/category.repository.interface.js';
import { IProductRepository } from '../../domain/repositories/product.repository.interface.js';
import { AppError } from '../../shared/errors/app-error.js';

export class GetCategoryByIdUseCase {
  constructor(
    private categoryRepository: ICategoryRepository,
    private productRepository?: IProductRepository
  ) {}

  async execute(id: string, includeProducts: boolean = true): Promise<Category> {
    const category = await this.categoryRepository.findById(id);
    if (!category) {
      throw AppError.notFound(`Category with ID '${id}' not found`);
    }

    if (includeProducts && this.productRepository) {
      const products = await this.productRepository.findByCategory(id);
      return {
        ...category,
        products,
      };
    }

    return category;
  }
}

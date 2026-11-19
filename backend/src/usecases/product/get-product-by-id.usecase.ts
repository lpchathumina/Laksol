import { Product } from '../../domain/entities/product.entity.js';
import { IProductRepository } from '../../domain/repositories/product.repository.interface.js';
import { AppError } from '../../shared/errors/app-error.js';

export class GetProductByIdUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(id: number): Promise<Product> {
    if (isNaN(id) || id <= 0) {
      throw AppError.badRequest('Invalid product ID');
    }

    const product = await this.productRepository.findById(id);
    if (!product) {
      throw AppError.notFound(`Product with ID ${id} not found`);
    }

    return product;
  }
}

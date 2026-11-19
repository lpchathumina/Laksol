import { Product } from '../../domain/entities/product.entity.js';
import { IProductRepository } from '../../domain/repositories/product.repository.interface.js';

export class GetAllProductsUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(params?: { category?: string; search?: string; random?: boolean }): Promise<Product[]> {
    let products: Product[];

    if (params?.search) {
      products = await this.productRepository.search(params.search);
    } else if (params?.category) {
      products = await this.productRepository.findByCategory(params.category);
    } else {
      products = await this.productRepository.findAll();
    }

    if (params?.random) {
      return [...products].sort(() => Math.random() - 0.5);
    }

    return products;
  }
}

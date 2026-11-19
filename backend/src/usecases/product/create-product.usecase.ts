import { Product } from '../../domain/entities/product.entity.js';
import { IProductRepository } from '../../domain/repositories/product.repository.interface.js';
import { AppError } from '../../shared/errors/app-error.js';

export interface CreateProductDTO {
  name: string;
  size: string;
  image: string;
  price: number;
  description: string;
  category: string;
  inStock?: boolean;
}

export class CreateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(dto: CreateProductDTO): Promise<Product> {
    if (!dto.name || !dto.category || dto.price <= 0) {
      throw AppError.badRequest('Name, category and valid price are required');
    }

    return this.productRepository.create({
      name: dto.name.trim(),
      size: dto.size || '800mL',
      image: dto.image || '/k.png',
      price: dto.price,
      description: dto.description || '',
      category: dto.category.toLowerCase().trim(),
      inStock: dto.inStock ?? true,
    });
  }
}

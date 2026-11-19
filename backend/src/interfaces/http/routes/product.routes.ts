import { Router } from 'express';
import { ProductController } from '../controllers/product.controller.js';
import { IProductRepository } from '../../../domain/repositories/product.repository.interface.js';
import { GetAllProductsUseCase } from '../../../usecases/product/get-all-products.usecase.js';
import { GetProductByIdUseCase } from '../../../usecases/product/get-product-by-id.usecase.js';
import { CreateProductUseCase } from '../../../usecases/product/create-product.usecase.js';

export const createProductRouter = (productRepository: IProductRepository): Router => {
  const router = Router();

  const getAllProductsUseCase = new GetAllProductsUseCase(productRepository);
  const getProductByIdUseCase = new GetProductByIdUseCase(productRepository);
  const createProductUseCase = new CreateProductUseCase(productRepository);

  const controller = new ProductController(
    getAllProductsUseCase,
    getProductByIdUseCase,
    createProductUseCase
  );

  router.get('/products', controller.getAll);
  router.get('/products/:id', controller.getById);
  router.post('/products', controller.create);

  return router;
};

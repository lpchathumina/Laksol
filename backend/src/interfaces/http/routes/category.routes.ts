import { Router } from 'express';
import { CategoryController } from '../controllers/category.controller.js';
import { ICategoryRepository } from '../../../domain/repositories/category.repository.interface.js';
import { IProductRepository } from '../../../domain/repositories/product.repository.interface.js';
import { GetAllCategoriesUseCase } from '../../../usecases/category/get-all-categories.usecase.js';
import { GetCategoryByIdUseCase } from '../../../usecases/category/get-category-by-id.usecase.js';

export const createCategoryRouter = (
  categoryRepository: ICategoryRepository,
  productRepository: IProductRepository
): Router => {
  const router = Router();

  const getAllCategoriesUseCase = new GetAllCategoriesUseCase(categoryRepository, productRepository);
  const getCategoryByIdUseCase = new GetCategoryByIdUseCase(categoryRepository, productRepository);

  const controller = new CategoryController(
    getAllCategoriesUseCase,
    getCategoryByIdUseCase
  );

  router.get('/categories', controller.getAll);
  router.get('/categories/:id', controller.getById);

  return router;
};

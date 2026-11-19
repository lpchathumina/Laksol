import { Router } from 'express';
import { IProductRepository } from '../../../domain/repositories/product.repository.interface.js';
import { ICategoryRepository } from '../../../domain/repositories/category.repository.interface.js';
import { IContactRepository } from '../../../domain/repositories/contact.repository.interface.js';
import { IOrderRepository } from '../../../domain/repositories/order.repository.interface.js';
import { createHealthRouter } from './health.routes.js';
import { createProductRouter } from './product.routes.js';
import { createCategoryRouter } from './category.routes.js';
import { createContactRouter } from './contact.routes.js';
import { createOrderRouter } from './order.routes.js';

export interface RouteDependencies {
  productRepository: IProductRepository;
  categoryRepository: ICategoryRepository;
  contactRepository: IContactRepository;
  orderRepository: IOrderRepository;
}

export const createApiRouter = (deps: RouteDependencies): Router => {
  const apiRouter = Router();

  apiRouter.use(createHealthRouter());
  apiRouter.use(createProductRouter(deps.productRepository));
  apiRouter.use(createCategoryRouter(deps.categoryRepository, deps.productRepository));
  apiRouter.use(createContactRouter(deps.contactRepository));
  apiRouter.use(createOrderRouter(deps.orderRepository, deps.productRepository));

  return apiRouter;
};

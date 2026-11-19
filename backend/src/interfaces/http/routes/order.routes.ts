import { Router } from 'express';
import { OrderController } from '../controllers/order.controller.js';
import { IOrderRepository } from '../../../domain/repositories/order.repository.interface.js';
import { IProductRepository } from '../../../domain/repositories/product.repository.interface.js';
import { CreateOrderUseCase } from '../../../usecases/order/create-order.usecase.js';
import { GetAllOrdersUseCase, GetOrderByIdUseCase } from '../../../usecases/order/get-all-orders.usecase.js';

export const createOrderRouter = (
  orderRepository: IOrderRepository,
  productRepository: IProductRepository
): Router => {
  const router = Router();

  const createOrderUseCase = new CreateOrderUseCase(orderRepository, productRepository);
  const getAllOrdersUseCase = new GetAllOrdersUseCase(orderRepository);
  const getOrderByIdUseCase = new GetOrderByIdUseCase(orderRepository);

  const controller = new OrderController(
    createOrderUseCase,
    getAllOrdersUseCase,
    getOrderByIdUseCase
  );

  router.post('/orders', controller.create);
  router.get('/orders', controller.getAll);
  router.get('/orders/:id', controller.getById);

  return router;
};

import { Request, Response, NextFunction } from 'express';
import { CreateOrderUseCase } from '../../../usecases/order/create-order.usecase.js';
import { GetAllOrdersUseCase, GetOrderByIdUseCase } from '../../../usecases/order/get-all-orders.usecase.js';
import { ResponseBuilder } from '../../../shared/utils/api-response.js';

export class OrderController {
  constructor(
    private createOrderUseCase: CreateOrderUseCase,
    private getAllOrdersUseCase: GetAllOrdersUseCase,
    private getOrderByIdUseCase: GetOrderByIdUseCase
  ) {}

  public create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const order = await this.createOrderUseCase.execute(req.body);
      res.status(201).json(
        ResponseBuilder.success(order, 'Order placed successfully')
      );
    } catch (error) {
      next(error);
    }
  };

  public getAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const orders = await this.getAllOrdersUseCase.execute();
      res.status(200).json(
        ResponseBuilder.success(orders, 'Orders retrieved successfully', { total: orders.length })
      );
    } catch (error) {
      next(error);
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = String(req.params.id);
      const order = await this.getOrderByIdUseCase.execute(id);
      res.status(200).json(ResponseBuilder.success(order, 'Order details retrieved successfully'));
    } catch (error) {
      next(error);
    }
  };
}

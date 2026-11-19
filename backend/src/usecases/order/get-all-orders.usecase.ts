import { Order } from '../../domain/entities/order.entity.js';
import { IOrderRepository } from '../../domain/repositories/order.repository.interface.js';
import { AppError } from '../../shared/errors/app-error.js';

export class GetAllOrdersUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute(): Promise<Order[]> {
    return this.orderRepository.findAll();
  }
}

export class GetOrderByIdUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute(id: string): Promise<Order> {
    const order = await this.orderRepository.findById(id);
    if (!order) {
      throw AppError.notFound(`Order with ID '${id}' not found`);
    }
    return order;
  }
}

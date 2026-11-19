import { Order } from '../entities/order.entity.js';

export interface IOrderRepository {
  create(order: Omit<Order, 'id' | 'status' | 'createdAt' | 'updatedAt'>): Promise<Order>;
  findAll(): Promise<Order[]>;
  findById(id: string): Promise<Order | null>;
  updateStatus(id: string, status: Order['status']): Promise<Order | null>;
}

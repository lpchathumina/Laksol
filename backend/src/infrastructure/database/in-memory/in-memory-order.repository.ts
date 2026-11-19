import { Order } from '../../../domain/entities/order.entity.js';
import { IOrderRepository } from '../../../domain/repositories/order.repository.interface.js';

export class InMemoryOrderRepository implements IOrderRepository {
  private orders: Order[] = [];

  async create(data: Omit<Order, 'id' | 'status' | 'createdAt' | 'updatedAt'>): Promise<Order> {
    const now = new Date();
    const newOrder: Order = {
      ...data,
      id: `ord_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      status: 'pending',
      createdAt: now,
      updatedAt: now,
    };
    this.orders.unshift(newOrder);
    return { ...newOrder };
  }

  async findAll(): Promise<Order[]> {
    return [...this.orders];
  }

  async findById(id: string): Promise<Order | null> {
    const order = this.orders.find(o => o.id === id);
    return order ? { ...order } : null;
  }

  async updateStatus(id: string, status: Order['status']): Promise<Order | null> {
    const index = this.orders.findIndex(o => o.id === id);
    if (index === -1) return null;
    this.orders[index].status = status;
    this.orders[index].updatedAt = new Date();
    return { ...this.orders[index] };
  }
}

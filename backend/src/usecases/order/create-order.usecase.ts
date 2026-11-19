import { Order, OrderItem, CustomerDetails } from '../../domain/entities/order.entity.js';
import { IOrderRepository } from '../../domain/repositories/order.repository.interface.js';
import { IProductRepository } from '../../domain/repositories/product.repository.interface.js';
import { AppError } from '../../shared/errors/app-error.js';

export interface CreateOrderDTO {
  customer: CustomerDetails;
  items: Array<{
    productId: number;
    quantity: number;
    size?: string;
  }>;
  paymentMethod?: string;
}

export class CreateOrderUseCase {
  constructor(
    private orderRepository: IOrderRepository,
    private productRepository: IProductRepository
  ) {}

  async execute(dto: CreateOrderDTO): Promise<Order> {
    if (!dto.customer?.fullName || !dto.customer?.phone) {
      throw AppError.badRequest('Customer name and contact phone number are required');
    }

    if (!dto.items || dto.items.length === 0) {
      throw AppError.badRequest('Order must contain at least one item');
    }

    const orderItems: OrderItem[] = [];
    let totalAmount = 0;

    for (const item of dto.items) {
      if (item.quantity <= 0) {
        throw AppError.badRequest(`Invalid quantity for product ${item.productId}`);
      }

      const product = await this.productRepository.findById(item.productId);
      if (!product) {
        throw AppError.notFound(`Product with ID ${item.productId} not found`);
      }

      const unitPrice = product.price;
      const itemTotal = unitPrice * item.quantity;
      totalAmount += itemTotal;

      orderItems.push({
        productId: product.id,
        productName: product.name,
        size: item.size || product.size,
        unitPrice,
        quantity: item.quantity,
        totalPrice: itemTotal,
      });
    }

    return this.orderRepository.create({
      customer: dto.customer,
      items: orderItems,
      totalAmount,
      paymentMethod: dto.paymentMethod || 'cash_on_delivery',
    });
  }
}

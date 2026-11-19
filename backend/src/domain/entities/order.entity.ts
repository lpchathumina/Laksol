export interface OrderItem {
  productId: number;
  productName: string;
  size: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
}

export interface CustomerDetails {
  fullName: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  notes?: string;
}

export interface Order {
  id: string;
  customer: CustomerDetails;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'processing' | 'delivered' | 'cancelled';
  paymentMethod?: string;
  createdAt: Date;
  updatedAt: Date;
}

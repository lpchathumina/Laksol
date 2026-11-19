/**
 * API Client for Laksol Frontend
 * All endpoints are dynamically driven by NEXT_PUBLIC_API_URL environment variable.
 * No hardcoded localhost addresses.
 */

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/$/, '');

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  meta?: Record<string, unknown>;
  error?: {
    code?: string;
    details?: unknown;
  };
  timestamp: string;
}

export interface ApiProduct {
  id: number;
  name: string;
  size: string;
  image: string;
  price: number;
  description: string;
  category: string;
  inStock?: boolean;
}

export interface ApiCategory {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  detailTitle: string;
  detailImage: string;
  detailText: string;
  products?: ApiProduct[];
}

export interface ContactInput {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface OrderInput {
  customer: {
    fullName: string;
    email: string;
    phone: string;
    address?: string;
    city?: string;
    notes?: string;
  };
  items: Array<{
    productId: number;
    quantity: number;
    size?: string;
  }>;
  paymentMethod?: string;
}

class ApiClient {
  private get baseUrl(): string {
    return API_BASE_URL;
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    if (!this.baseUrl) {
      throw new Error('NEXT_PUBLIC_API_URL is not configured in environment variables');
    }

    const url = `${this.baseUrl}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...((options.headers as Record<string, string>) || {}),
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `Request failed with status ${response.status}`);
    }

    return data;
  }

  // Health
  public async getHealth() {
    return this.request<{ status: string; uptime: number; environment: string }>('/health');
  }

  // Products
  public async getProducts(params?: { category?: string; search?: string; random?: boolean }) {
    const query = new URLSearchParams();
    if (params?.category) query.append('category', params.category);
    if (params?.search) query.append('search', params.search);
    if (params?.random) query.append('random', 'true');

    const qs = query.toString();
    return this.request<ApiProduct[]>(`/products${qs ? `?${qs}` : ''}`);
  }

  public async getProductById(id: number) {
    return this.request<ApiProduct>(`/products/${id}`);
  }

  // Categories
  public async getCategories(includeProducts: boolean = true) {
    return this.request<ApiCategory[]>(`/categories?includeProducts=${includeProducts}`);
  }

  public async getCategoryById(id: string) {
    return this.request<ApiCategory>(`/categories/${id}`);
  }

  // Contact Form Submission
  public async submitContact(data: ContactInput) {
    return this.request<{ id: string }>('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Order Placement
  public async createOrder(data: OrderInput) {
    return this.request<{ id: string; totalAmount: number }>('/orders', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

export const api = new ApiClient();

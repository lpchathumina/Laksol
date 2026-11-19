import { ContactMessage } from '../entities/contact.entity.js';

export interface IContactRepository {
  create(message: Omit<ContactMessage, 'id' | 'status' | 'createdAt'>): Promise<ContactMessage>;
  findAll(): Promise<ContactMessage[]>;
  findById(id: string): Promise<ContactMessage | null>;
  updateStatus(id: string, status: ContactMessage['status']): Promise<ContactMessage | null>;
}

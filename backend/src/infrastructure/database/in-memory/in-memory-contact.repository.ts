import { ContactMessage } from '../../../domain/entities/contact.entity.js';
import { IContactRepository } from '../../../domain/repositories/contact.repository.interface.js';

export class InMemoryContactRepository implements IContactRepository {
  private messages: ContactMessage[] = [];

  async create(data: Omit<ContactMessage, 'id' | 'status' | 'createdAt'>): Promise<ContactMessage> {
    const newMessage: ContactMessage = {
      ...data,
      id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      status: 'unread',
      createdAt: new Date(),
    };
    this.messages.unshift(newMessage);
    return { ...newMessage };
  }

  async findAll(): Promise<ContactMessage[]> {
    return [...this.messages];
  }

  async findById(id: string): Promise<ContactMessage | null> {
    const msg = this.messages.find(m => m.id === id);
    return msg ? { ...msg } : null;
  }

  async updateStatus(id: string, status: ContactMessage['status']): Promise<ContactMessage | null> {
    const index = this.messages.findIndex(m => m.id === id);
    if (index === -1) return null;
    this.messages[index].status = status;
    return { ...this.messages[index] };
  }
}

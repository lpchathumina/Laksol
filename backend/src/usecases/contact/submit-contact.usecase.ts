import { ContactMessage } from '../../domain/entities/contact.entity.js';
import { IContactRepository } from '../../domain/repositories/contact.repository.interface.js';
import { AppError } from '../../shared/errors/app-error.js';

export interface SubmitContactDTO {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export class SubmitContactUseCase {
  constructor(private contactRepository: IContactRepository) {}

  async execute(dto: SubmitContactDTO): Promise<ContactMessage> {
    if (!dto.name || !dto.name.trim()) {
      throw AppError.badRequest('Name is required');
    }

    if (!dto.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dto.email)) {
      throw AppError.badRequest('A valid email address is required');
    }

    if (!dto.message || !dto.message.trim()) {
      throw AppError.badRequest('Message content is required');
    }

    return this.contactRepository.create({
      name: dto.name.trim(),
      email: dto.email.trim().toLowerCase(),
      phone: dto.phone?.trim(),
      subject: dto.subject?.trim() || 'General Inquiry',
      message: dto.message.trim(),
    });
  }
}

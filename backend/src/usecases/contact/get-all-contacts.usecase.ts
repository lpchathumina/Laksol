import { ContactMessage } from '../../domain/entities/contact.entity.js';
import { IContactRepository } from '../../domain/repositories/contact.repository.interface.js';

export class GetAllContactsUseCase {
  constructor(private contactRepository: IContactRepository) {}

  async execute(): Promise<ContactMessage[]> {
    return this.contactRepository.findAll();
  }
}

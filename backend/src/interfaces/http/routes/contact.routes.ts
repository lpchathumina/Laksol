import { Router } from 'express';
import { ContactController } from '../controllers/contact.controller.js';
import { IContactRepository } from '../../../domain/repositories/contact.repository.interface.js';
import { SubmitContactUseCase } from '../../../usecases/contact/submit-contact.usecase.js';
import { GetAllContactsUseCase } from '../../../usecases/contact/get-all-contacts.usecase.js';

export const createContactRouter = (contactRepository: IContactRepository): Router => {
  const router = Router();

  const submitContactUseCase = new SubmitContactUseCase(contactRepository);
  const getAllContactsUseCase = new GetAllContactsUseCase(contactRepository);

  const controller = new ContactController(submitContactUseCase, getAllContactsUseCase);

  router.post('/contact', controller.submit);
  router.get('/contact', controller.getAll);

  return router;
};

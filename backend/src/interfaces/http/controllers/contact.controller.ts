import { Request, Response, NextFunction } from 'express';
import { SubmitContactUseCase } from '../../../usecases/contact/submit-contact.usecase.js';
import { GetAllContactsUseCase } from '../../../usecases/contact/get-all-contacts.usecase.js';
import { ResponseBuilder } from '../../../shared/utils/api-response.js';

export class ContactController {
  constructor(
    private submitContactUseCase: SubmitContactUseCase,
    private getAllContactsUseCase: GetAllContactsUseCase
  ) {}

  public submit = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const message = await this.submitContactUseCase.execute(req.body);
      res.status(201).json(
        ResponseBuilder.success(
          message,
          'Your message has been sent successfully. Our team will get back to you shortly.'
        )
      );
    } catch (error) {
      next(error);
    }
  };

  public getAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const messages = await this.getAllContactsUseCase.execute();
      res.status(200).json(
        ResponseBuilder.success(messages, 'Contact inquiries retrieved successfully', { total: messages.length })
      );
    } catch (error) {
      next(error);
    }
  };
}

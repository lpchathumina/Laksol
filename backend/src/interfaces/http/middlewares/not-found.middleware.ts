import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../../shared/errors/app-error.js';

export const notFoundHandler = (req: Request, res: Response, next: NextFunction): void => {
  next(AppError.notFound(`Route '${req.method} ${req.originalUrl}' does not exist`));
};

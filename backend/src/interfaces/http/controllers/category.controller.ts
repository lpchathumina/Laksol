import { Request, Response, NextFunction } from 'express';
import { GetAllCategoriesUseCase } from '../../../usecases/category/get-all-categories.usecase.js';
import { GetCategoryByIdUseCase } from '../../../usecases/category/get-category-by-id.usecase.js';
import { ResponseBuilder } from '../../../shared/utils/api-response.js';

export class CategoryController {
  constructor(
    private getAllCategoriesUseCase: GetAllCategoriesUseCase,
    private getCategoryByIdUseCase: GetCategoryByIdUseCase
  ) {}

  public getAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const includeProducts = req.query.includeProducts === 'true';
      const categories = await this.getAllCategoriesUseCase.execute(includeProducts);
      res.status(200).json(
        ResponseBuilder.success(categories, 'Categories retrieved successfully', { total: categories.length })
      );
    } catch (error) {
      next(error);
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = String(req.params.id);
      const includeProducts = req.query.includeProducts !== 'false';
      const category = await this.getCategoryByIdUseCase.execute(id, includeProducts);
      res.status(200).json(ResponseBuilder.success(category, 'Category details retrieved successfully'));
    } catch (error) {
      next(error);
    }
  };
}

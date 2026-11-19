import { Request, Response, NextFunction } from 'express';
import { GetAllProductsUseCase } from '../../../usecases/product/get-all-products.usecase.js';
import { GetProductByIdUseCase } from '../../../usecases/product/get-product-by-id.usecase.js';
import { CreateProductUseCase } from '../../../usecases/product/create-product.usecase.js';
import { ResponseBuilder } from '../../../shared/utils/api-response.js';

export class ProductController {
  constructor(
    private getAllProductsUseCase: GetAllProductsUseCase,
    private getProductByIdUseCase: GetProductByIdUseCase,
    private createProductUseCase: CreateProductUseCase
  ) {}

  public getAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const category = req.query.category as string | undefined;
      const search = req.query.search as string | undefined;
      const random = req.query.random === 'true';

      const products = await this.getAllProductsUseCase.execute({ category, search, random });
      res.status(200).json(
        ResponseBuilder.success(products, 'Products retrieved successfully', { total: products.length })
      );
    } catch (error) {
      next(error);
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = parseInt(String(req.params.id), 10);
      const product = await this.getProductByIdUseCase.execute(id);
      res.status(200).json(ResponseBuilder.success(product, 'Product details retrieved successfully'));
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const product = await this.createProductUseCase.execute(req.body);
      res.status(201).json(ResponseBuilder.success(product, 'Product created successfully'));
    } catch (error) {
      next(error);
    }
  };
}

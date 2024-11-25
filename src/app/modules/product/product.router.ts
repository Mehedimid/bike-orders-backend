import { Router } from 'express';
import { productControllers } from './product.controller';

const productRouter = Router();

productRouter.post('/', productControllers.createProductController);

productRouter.get('/:id', productControllers.getSingleProductControoler);

productRouter.get('/', productControllers.getAllProductController);

productRouter.put('/:id', productControllers.updateProductController);

productRouter.delete('/:id', productControllers.deleteProductController);

export default productRouter;

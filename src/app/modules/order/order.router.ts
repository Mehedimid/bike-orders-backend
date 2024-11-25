import { Router } from 'express';
import { orderControllers } from './order.controller';

const orderRouter = Router();

orderRouter.post('/', orderControllers.createOrderController);

orderRouter.get('/revenue', orderControllers.revenueController);

export default orderRouter;

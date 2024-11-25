import { Request, Response } from 'express';
import { orderValidationSchema } from './order.validation';
import { orderServices } from './order.service';

const createOrderController = async (req: Request, res: Response) => {
  try {
    const { error, value } = orderValidationSchema.validate(req.body);
    const productId = req.body.product;
    const orderQty = req.body.quantity;

    if (error) {
      res.status(500).json({
        message: 'validation failed',
        success: false,
        error: error.details,
        stack: error.stack,
      });
    }
    if (!error) {
      const result = await orderServices.createOrderIntoDB(
        productId,
        value,
        orderQty,
      );

      res.status(200).json({
        message: 'order created successfully',
        success: true,
        data: result,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message || 'Something went wrong.',
      success: false,
      error: error,
    });
  }
};

const revenueController = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.calculateRevenue();

    res.status(200).json({
      message: 'Revenue calculated successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message || 'Something went wrong.',
      success: false,
      error: error,
    });
  }
};

export const orderControllers = {
  createOrderController,
  revenueController,
};

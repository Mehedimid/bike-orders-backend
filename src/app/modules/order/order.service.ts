import { Product } from '../product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrderIntoDB = async (
  productId: string,
  productData: TOrder,
  orderQty: number,
) => {
  const product = await Product.findById(productId);

  if (product) {
    // here , we reduce product quantity from "Product" collection ===
    if (product.quantity < orderQty) {
      throw new Error('Insufficient stock to fulfill the order.');
    }

    product.quantity = product.quantity - orderQty;

    if (product.quantity === 0) {
      product.inStock = false;
    }

    await product.save();

    // create a order after reduce qty and validate ===
    const result = await Order.create(productData);
    return result;
  } else {
    throw new Error(
      'could not find product from user request, try valid product id',
    );
  }
};

const calculateRevenue = async () => {
  const result = await Order.aggregate([
    // stage - 1
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ]);
  return result;
};

export const orderServices = {
  createOrderIntoDB,
  calculateRevenue,
};

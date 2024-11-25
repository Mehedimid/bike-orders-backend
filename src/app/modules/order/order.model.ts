import { Schema, model } from 'mongoose';
import { TOrder } from './order.interface';

const OrderSchema = new Schema<TOrder>(
  {
    email: String,
    product: String,
    quantity: Number,
    totalPrice: Number,
  },
  {
    timestamps: true,
  },
);

export const Order = model<TOrder>('Order', OrderSchema);

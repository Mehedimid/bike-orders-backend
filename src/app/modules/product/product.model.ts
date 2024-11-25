import { model, Schema } from 'mongoose';
import { TProduct } from './product.interface';

const productSchema = new Schema<TProduct>(
  {
    name: String,
    brand: String,
    price: Number,
    category: {
      type: String,
      enum: ['Mountain', 'Road', 'Hybrid', 'Electric'],
    },
    description: String,
    quantity: { type: Number, required: true, message: 'invalid number' },
    inStock: Boolean,
  },
  {
    timestamps: true,
  },
);

export const Product = model<TProduct>('Product', productSchema);

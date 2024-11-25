import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getAllProductFromDB = async (searchTerm: any) => {
  const result = await Product.find(searchTerm);
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateProductFromDB = async (id: string, product: TProduct) => {
  const result = await Product.findByIdAndUpdate(id, product, { new: true });
  return result;
};

const deleteeProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const productServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProductFromDB,
  deleteeProductFromDB,
};

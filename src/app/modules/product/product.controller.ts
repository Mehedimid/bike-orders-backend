import { Request, Response } from 'express';
import { productServices } from './product.service';
import productValidationSchema from './product.validation';

const createProductController = async (req: Request, res: Response) => {
  try {
    const { error, value } = productValidationSchema.validate(req.body);

    if (error) {
      res.status(500).json({
        message: 'validation failed',
        success: false,
        error: error.details,
        stack: error.stack,
      });
    }

    if (!error) {
      const result = await productServices.createProductIntoDB(value);
      res.status(200).json({
        message: 'Bike created successfully',
        success: true,
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'something went wrong.',
      success: false,
      error: error,
    });
  }
};

const getAllProductController = async (req: Request, res: Response) => {
  try {
    const { category, brand, name } = req.query;
    const searchTerm: { [key: string]: any } = {};
    if (category) {
      searchTerm.category = { $regex: category, $options: 'i' };
    }
    if (brand) {
      searchTerm.brand = { $regex: brand, $options: 'i' };
    }
    if (name) {
      searchTerm.name = { $regex: name, $options: 'i' };
    }

    const result = await productServices.getAllProductFromDB(searchTerm);
    res.status(200).json({
      message: 'Bike get successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'something went wrong.',
      success: false,
      error: error,
    });
  }
};

const getSingleProductControoler = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getSingleProductFromDB(req.params.id);
    res.status(200).json({
      message: 'get bike successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'something went wrong.',
      success: false,
      error: error,
    });
  }
};

const updateProductController = async (req: Request, res: Response) => {
  try {
    const result = await productServices.updateProductFromDB(
      req.params.id,
      req.body,
    );

    if (!result) {
      res.status(404).json({
        message: 'Bike not found',
        status: false,
        data: {},
      });
    }
    res.status(200).json({
      message: 'update bike successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'something went wrong.',
      success: false,
      error: error,
    });
  }
};

const deleteProductController = async (req: Request, res: Response) => {
  try {
    const result = await productServices.deleteeProductFromDB(req.params.id);

    if (!result) {
      res.status(404).json({
        message: 'Bike not found',
        status: false,
        data: {},
      });
    }
    res.status(200).send({
      message: 'deleted bike successfully',
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      message: 'something went wrong.',
      success: false,
      error: error,
    });
  }
};

export const productControllers = {
  createProductController,
  getSingleProductControoler,
  getAllProductController,
  updateProductController,
  deleteProductController,
};

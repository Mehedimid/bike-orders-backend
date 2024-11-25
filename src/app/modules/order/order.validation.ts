import Joi from 'joi';

export const orderValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  product: Joi.string().required(),
  quantity: Joi.number().integer().required(),
  totalPrice: Joi.number().positive().required(),
});

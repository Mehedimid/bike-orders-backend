import Joi from 'joi';

const productValidationSchema = Joi.object({
  name: Joi.string().required(),
  brand: Joi.string().required(),
  price: Joi.number().integer().positive().required(),
  category: Joi.string()
    .valid('Mountain', 'Road', 'Hybrid', 'Electric')
    .required(),
  description: Joi.string().required(),
  quantity: Joi.number().integer().positive().required(),
  inStock: Joi.boolean().required(),
});

export default productValidationSchema;

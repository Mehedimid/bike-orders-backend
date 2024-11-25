import express, { Request, Response } from 'express';
import productRouter from './app/modules/product/product.router';
import orderRouter from './app/modules/order/order.router';

const app = express();

// middleware
app.use(express.json());

// all api ===
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from setup file');
});

export default app;

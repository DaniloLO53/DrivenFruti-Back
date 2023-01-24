import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products.router.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', productsRouter);

export default app;

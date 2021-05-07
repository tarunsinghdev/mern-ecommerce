import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

import connectDB from './config/database.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

dotenv.config();

const app = express();
app.use(express.json()); //json() is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.

app.get('/', (req, res) => {
  res.send('Api is running...');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.use('/api/config/paypal',(req,res)=> res.send(process.env.PAYPAL_CLIENT_ID));

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

connectDB(() => {
  app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
        .bold
    )
  );
});

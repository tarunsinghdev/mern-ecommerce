import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

import connectDB from './config/database.js';
import productRoutes from './routes/productRoutes.js';
import { errorHandler, notFound } from './error/errorMiddleware.js';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('Api is running...');
});

app.use('/api/products', productRoutes);

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

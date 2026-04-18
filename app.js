const express = require('express');
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();

app.use(express.json());

app.use(async (req, res, next) => {
  await connectDB();
  next();
});

app.use('/api/transactions', transactionRoutes);
app.use(errorHandler);

module.exports = app;

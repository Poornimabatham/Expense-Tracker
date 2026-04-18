const express = require('express');
const { errorHandler } = require('./middleware/errorMiddleware');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();

app.use(express.json());
app.use('/api/transactions', transactionRoutes);
app.use(errorHandler);

module.exports = app;

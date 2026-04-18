const mongoose = require('mongoose');
const { TRANSACTION_TYPES, CATEGORIES } = require('../constants/enums');

const transactionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    amount: { type: Number, required: true },
    type: { type: String, enum: TRANSACTION_TYPES, required: true },
    category: { type: String, enum: CATEGORIES, required: true },
    date: { type: Date, default: Date.now },
    note: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Transaction', transactionSchema);

const Transaction = require('../models/Transaction');
const { formatTransaction } = require('../utils/helpers');

const getTransactions = async (req, res) => {
  console.log("enter")
  const transactions = await Transaction.find().sort({ date: -1 });
  res.json(transactions.map(formatTransaction));
};

const getTransaction = async (req, res) => {
  const transaction = await Transaction.findById(req.params.id);
  if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
  res.json(formatTransaction(transaction));
};

const createTransaction = async (req, res) => {
  const transaction = await Transaction.create(req.body);
  res.status(201).json(formatTransaction(transaction));
};

const updateTransaction = async (req, res) => {
  const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
  res.json(formatTransaction(transaction));
};

const deleteTransaction = async (req, res) => {
  const transaction = await Transaction.findByIdAndDelete(req.params.id);
  if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
  res.json({ message: 'Transaction deleted' });
};

module.exports = {
  getTransactions,
  getTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction,
};

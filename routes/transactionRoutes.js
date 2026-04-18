const express = require('express');
const router = express.Router();
const {
  getTransactions,
  getTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} = require('../controllers/transactionController');
const { transactionRules, validate } = require('../validations/transactionValidation');

router.route('/').get(getTransactions).post(transactionRules, validate, createTransaction);
router
  .route('/:id')
  .get(getTransaction)
  .put(transactionRules, validate, updateTransaction)
  .delete(deleteTransaction);

module.exports = router;

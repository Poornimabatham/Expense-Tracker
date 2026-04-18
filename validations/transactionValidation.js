const { body, validationResult } = require('express-validator');
const { TRANSACTION_TYPES, CATEGORIES } = require('../constants/enums');

const transactionRules = [
  body('title').notEmpty().withMessage('Title is required'),
  body('amount').isNumeric().withMessage('Amount must be a number'),
  body('type').isIn(TRANSACTION_TYPES).withMessage('Invalid transaction type'),
  body('category').isIn(CATEGORIES).withMessage('Invalid category'),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { transactionRules, validate };

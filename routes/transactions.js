const express = require('express');
const router = express.Router();

const transactionsController = require('../controllers/transactions');
const auth = require('../middleware/auth');

router
    .get('/user/:id', transactionsController.getUserTransactions)
    .get('/month/:month', transactionsController.getTransactionsByMonth)
    .post('/:id', transactionsController.newTransaction)

module.exports = router;
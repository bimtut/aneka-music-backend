const express = require('express');
const router = express.Router();

const controller = require('../controllers/transactions');
const auth = require('../middleware/auth');

router
    .get('/user/:id', controller.getUserTransactions)
    .get('/month/:month', controller.getTransactionsByMonth)
    .post('/:id', controller.newTransaction)

module.exports = router;
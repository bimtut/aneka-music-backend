const express = require('express');
const router = express.Router();

const itemRequestController = require('../controllers/itemRequest');
const auth = require('../middleware/auth');

router
    .get('/', auth.verifyToken, itemRequestController.getAllRequests)
    .post('/', itemRequestController.newRequest)
    .put('/:id', itemRequestController.requestFulfilled)

module.exports = router;
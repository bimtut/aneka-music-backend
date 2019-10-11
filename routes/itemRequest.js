const express = require('express');
const router = express.Router();

const controller = require('../controllers/itemRequest');
const auth = require('../middleware/auth');

router
    .get('/', controller.getAllRequests)
    .post('/', controller.newRequest)
    .put('/:id', controller.requestFulfilled)

module.exports = router;
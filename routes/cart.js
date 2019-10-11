const express = require('express');
const router = express.Router();

const controller = require('../controllers/cart');
const auth = require('../middleware/auth');

router
    .get('/:id', controller.getCart)
    .post('/:id', controller.addCart)
    .put('/:id', controller.editCart)
    .delete('/:id/:item/:branch', controller.deleteCart)
    .delete('/clear/:id', controller.clearCart)

module.exports = router;
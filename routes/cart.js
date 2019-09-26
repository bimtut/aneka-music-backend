const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cart');
const auth = require('../middleware/auth');

router
    .get('/:id', auth.verifyToken, cartController.getCart)
    .post('/:id',auth.verifyToken, cartController.addCart)
    .put('/:id',auth.verifyToken, cartController.editCart)
    .delete('/:id/:item/:branch',auth.verifyToken, cartController.deleteCart)
    .delete('/clear/:id',auth.verifyToken, cartController.clearCart)

module.exports = router;
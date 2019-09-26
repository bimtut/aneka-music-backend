const express = require('express');
const router = express.Router();

const wishlistController = require('../controllers/wishlist');
const auth = require('../middleware/auth');

router
    .get('/:id',auth.verifyToken, wishlistController.getWishlist)
    .post('/:id/:item',auth.verifyToken, wishlistController.addWishlist)
    .delete('/:id/:item',auth.verifyToken, wishlistController.deleteWishlist)

module.exports = router;
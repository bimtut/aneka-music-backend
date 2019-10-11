const express = require('express');
const router = express.Router();

const controller = require('../controllers/wishlist');
const auth = require('../middleware/auth');

router
    .get('/:id', controller.getWishlist)
    .post('/:id/:item', controller.addWishlist)
    .delete('/:id/:item', controller.deleteWishlist)

module.exports = router;
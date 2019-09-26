const wishlistModel = require('../models/wishlist');
const formResponse = require('../helpers/formResponse');

const wishlistController = {
    getWishlist: (req, res) => {
        const user = req.params.id;

        wishlistModel.getWishlist(user)
        .then(result => {
            formResponse.success(res, 200, result);
        })
        .catch(error => {
            res.json(error);
        })
    },

    addWishlist: (req, res) => {
        const user = req.params.id;
        const item = req.params.item;

        wishlistModel.addWishlist(user, item)
        .then(result => {
            const data = {
                user,
                item
            }
            formResponse.success(res, 200, result, data);
        })
        .catch(error => {
            res.json(error);
        })
    },

    deleteWishlist: (req, res) => {
        const user = req.params.id;
        const item = req.params.item;

        wishlistModel.deleteWishlist(user, item)
        .then(result => {
            const data = {
                user,
                item
            }
            formResponse.success(res, 200, result, data);
        })
        .catch(error => {
            res.json(error);
        })
    }
}

module.exports = wishlistController;
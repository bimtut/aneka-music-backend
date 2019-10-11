const model = require('../models/wishlist');
const formResponse = require('../helpers/formResponse');

const wishlistController = {
    getWishlist: (req, res) => {
        const user = req.params.id;

        model.getWishlist(user)
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

        model.addWishlist(user, item)
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

        model.deleteWishlist(user, item)
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
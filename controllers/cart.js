const model = require('../models/cart');
const formResponse = require('../helpers/formResponse');

const cartController = {
    getCart: (req, res) => {
        const user = req.params.id;

        model.getCart(user)
        .then(result => {
         
            formResponse.success(res, 200, result);
        })
        .catch(error => {
            res.json(error);
        })
    },

    addCart: (req, res) => {
        const user = req.params.id;
        const body = {
             item: req.body.itemID,
             branch: req.body.branchID,
             quantity: req.body.quantity
        }

        model.addCart(user, body)
        .then(result => {
            model.getOneCart(user, body.item, body.branch)
            .then(rslt => {
                const data = {
                    ...rslt[0]
                }
                formResponse.success(res, 200, result, data);
            })
            .catch(error => {
                res.json(error);
            })
        })
        .catch(error => {
            res.json(error);
        })
    },

    //edit quantity only, user, item and branch are indicators
    editCart: (req, res) => {
        const user = req.params.id;
        const body = {
             item: req.body.item,
             branch: req.body.branch,
             quantity: req.body.quantity
        }

        model.editCart(user, body)
        .then(result => {
            const data = {
                user,
                ...body
            }
       
            formResponse.success(res, 200, result, data);
        })
        .catch(error => {
            res.json(error);
        })
    },

    deleteCart: (req, res) => {
        const user = req.params.id;
        const item = req.params.item;
        const branch = req.params.branch;
        
        model.deleteCart(user, item, branch)
        .then(result => {
            const data = {
                user,
                item,
                branch
            }
            
            formResponse.success(res, 200, result, data);
        })
        .catch(error => {
            res.json(error);
        })
    },

    clearCart: (req, res) => {
        const user = req.params.id;

        model.clearCart(user)
        .then(result => {
            formResponse.success(res, 200, result)
        })
        .catch(error => {
            res.json(error);
        })
    }
}

module.exports = cartController;
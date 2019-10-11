const model = require('../models/itemRequest');
const formResponse = require('../helpers/formResponse');

const itemRequestController = {
    getAllRequests : (req, res) => {
        model.getAllRequests()
        .then(result => {
            formResponse.success(res, 200, result);
        })
        .catch(error => {
            res.json(error);
        })
    },

    newRequest: (req, res) => {
        const body = {
            name: req.body.name,
            item: req.body.item,
            email: req.body.email,
        }

        model.newRequest(body)
        .then(result => {
            model.getLastID()
            .then(id => {
                const data = {
                    id: id[0]['MAX (id)'],
                    ...body
                }
                formResponse.success(res,200, result, data);
            })
            .catch(error => {
                res.json(error);
            });
        })
        .catch(error => {
            res.json(error);
        })
    },

    requestFulfilled: (req, res) => {
        const id = req.params.id;

        model.requestFulfilled(id)
        .then(result => {
            const data = {
                id
            };
            formResponse.success(res, 200, result, data);
        })
        .catch(error => {
            res.json(error);
        });
    }
}

module.exports = itemRequestController;
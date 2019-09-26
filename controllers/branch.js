const branchModel = require('../models/branch');
const formResponse = require('../helpers/formResponse');

const branchController = {
    getBranch: (req, res) => {
        branchModel.getBranch()
        .then(result => {
            formResponse.success(res, 200, result)
        })
        .catch(error => {
            res.json(error)
        })
    },

    addBranch: (req, res) => {
        const location = req.body.location;

        branchModel.addBranch(location)
        .then(result => {
                branchModel.getLastID()
                .then(id => {
                    const data = {
                        id: id[0]['MAX (id)'],
                        location: location
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

    editBranch: (req, res) => {
        const id = req.params.id;
        const location = req.body.location;

        branchModel.editBranch(id, location)
        .then(result => {
            const data = {
                id,
                location
            };
            formResponse.success(res,200, result, data);
        })
        .catch(error => {
            res.json(error);
        })
    },

    deleteBranch: (req, res) => {
        const id = req.params.id;

        branchModel.deleteBranch(id)
        .then(result => {
            const data = {
                id
            };
            formResponse.success(res, 200, result, data);
        })
        .catch(error => {
            res.json(error);
        })
    }
}

module.exports = branchController;
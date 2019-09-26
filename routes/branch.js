const express = require('express');
const router = express.Router();

const branchController = require('../controllers/branch');
const auth = require('../middleware/auth');

router
    .get('/', branchController.getBranch)
    .post('/', auth.verifyToken, branchController.addBranch)
    .put('/:id', auth.verifyToken, branchController.editBranch)
    .delete('/:id', auth.verifyToken, branchController.deleteBranch)

module.exports = router;
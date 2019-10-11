const express = require('express');
const router = express.Router();

const controller = require('../controllers/branch');
const auth = require('../middleware/auth');

router
    .get('/', controller.getBranch)
    .post('/', controller.addBranch)
    .put('/:id', controller.editBranch)
    .delete('/:id', controller.deleteBranch)

module.exports = router;
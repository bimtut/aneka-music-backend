const express = require('express');
const router = express.Router();

const controller = require('../controllers/categories');
const auth = require('../middleware/auth');

router
    .get('/', controller.getCategories)
    .post('/', controller.addCategory)
    .put('/:id', controller.editCategory)
    .delete('/:id', controller.deleteCategory)

module.exports = router;
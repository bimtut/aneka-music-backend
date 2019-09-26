const express = require('express');
const router = express.Router();

const categoriesController = require('../controllers/categories');
const auth = require('../middleware/auth');

router 
    .get('/', categoriesController.getCategories)
    .post('/', auth.verifyToken ,categoriesController.addCategory)
    .put('/:id', auth.verifyToken, categoriesController.editCategory)
    .delete('/:id', auth.verifyToken, categoriesController.deleteCategory)

module.exports = router;
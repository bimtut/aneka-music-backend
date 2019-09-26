const express = require('express');
const router = express.Router();

const itemsController = require('../controllers/items');
const auth = require('../middleware/auth');

router
    .get('/category/:id', itemsController.getItemsByCategory)
    .get('/branch/:id', itemsController.getItemsByBranch)
    .get('/name/:name', itemsController.getItemsByName)
    
    .get('/details/:id', itemsController.getItemDetails)
   
    .post('/', auth.verifyToken, itemsController.addItem)
    .put('/:id', auth.verifyToken, itemsController.editItem)
    .delete('/:id', auth.verifyToken, itemsController.deleteItem)

module.exports = router;
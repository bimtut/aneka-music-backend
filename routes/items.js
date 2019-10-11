const express = require('express');
const router = express.Router();

const controller = require('../controllers/items');
const auth = require('../middleware/auth');

router
    .get('/category/:id', controller.getItemsByCategory)
    .get('/branch/:id', controller.getItemsByBranch)
    .get('/name/:name', controller.getItemsByName)
    
    .get('/details/:id', controller.getItemDetails)
   
    .post('/', controller.addItem)
    .put('/:id', controller.editItem)
    .delete('/:id', controller.deleteItem)

module.exports = router;
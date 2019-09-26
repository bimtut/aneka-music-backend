const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const userController = require('../controllers/user');

router
    .post('/register/admin', auth.verifyToken, auth.verifyAdmin, userController.registerAdmin)
    .post('/register', userController.register)
    .post('/login', userController.login)

module.exports = router;
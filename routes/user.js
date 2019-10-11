const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const controller = require('../controllers/user');

router
    .post('/register/admin', controller.registerAdmin)
    .post('/register', controller.register)
    .post('/login', controller.login)

module.exports = router;
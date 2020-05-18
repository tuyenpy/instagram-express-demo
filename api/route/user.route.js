const express = require('express');
const router = express.Router();
const controller = require('../controller/user.controller');

//create user
router.post('/signup', controller.signUp);

//login
router.post('/login', controller.login);


module.exports = router;
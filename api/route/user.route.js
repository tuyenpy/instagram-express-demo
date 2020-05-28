const express = require('express');
const router = express.Router();
const controller = require('../controller/user.controller');
const validate = require('../validate/user.validate');

//create user
router.post('/signup', validate.create, controller.signUp);

//login
router.post('/login', validate.login, controller.login);


module.exports = router;
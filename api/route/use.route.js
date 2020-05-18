const express = require('express');
const router = express.Router();
const controller = require('../controller/use.controller');

//create user
router.post('/signup', controller.signUp);


module.exports = router;
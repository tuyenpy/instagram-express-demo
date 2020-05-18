const express = require('express');
const router = express.Router();
const controller = require('../controller/post.controller');

// create post
router.post('/create', controller.create);

//like post
router.post('/like', controller.like);

//comment post
router.post('/comment', controller.comment);

module.exports = router;
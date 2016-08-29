//router
var router = require('express').Router();
var dbui = require('../db/dbui.js');

router.get('/posts', dbui.Posts.get);

router.post('/posts', dbui.Posts.post);

router.get('/comments', dbui.Comments.get);

router.post('/comments', dbui.Comments.post);

module.exports = router;
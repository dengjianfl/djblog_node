var express = require('express');
var router = express.Router();

// 登录接口
router.post('/login', require('../controller/login.js'));

// 添加一篇博客接口 (后台添加)
router.post('/addOneBlog', require('../controller/addBlog.js'));

// 获取全部博客 (前端获取)
router.post('/getAllBlog', require('../controller/getAllBlog.js'));


module.exports = router;
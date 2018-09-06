var express = require('express');
var router = express.Router();
var checkLogin = require('../middlewares/checkLogin').checkLogin;
var oneBolg = require('../controller/oneBlog.js');

// 登录接口
// router.post('/login', function(req, res, next) {
//     req._routeWhitelists.body = ['username','password'];
//     next();
// },require('../controller/login.js').login);

// 登录接口
router.post('/login', require('../controller/login.js').login);

// 登出接口
router.post('/loginOut', require('../controller/login.js').loginOut);

// 获取全部博客 (前端获取,不需要登录的)
router.post('/getAllBlog', require('../controller/getAllBlog.js'));

// adimn管理平台获取博客
router.post('/getAllBlogByAdmin', checkLogin, require('../controller/getAllBlogByAdmin.js'));

// 获取当前登录人的信息
router.post('/getUserInfo', checkLogin, require('../controller/getUserInfo.js'));

// 删除一条博客
router.post('/delete', checkLogin, oneBolg.deleteOneBlog);

// 获取一条博客详情
router.post('/getOneBlog', checkLogin, oneBolg.getOneBlog);

// 添加一篇博客接口 (后台添加)
router.post('/addOneBlog', checkLogin, oneBolg.saveOneBlog);

// 更新一篇博客接口 (后台添加)
router.post('/updateOneBlog', checkLogin, oneBolg.updateOneBlog);

module.exports = router;
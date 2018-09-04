var express = require('express');
var app = express();
var router = require('./routes/index');
var bodyParser=require('body-parser');
var config = require('config-lite')(__dirname);
var cookieParser = require('cookie-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
app.use(cookieParser());
app.use(session({
    name: config.session.name, // 设置 cookie 中保存 session id 的字段名称
    secret: config.session.secret, // 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
    resave: true, // 强制更新 session
    saveUninitialized: false, // 设置为 false，强制创建一个 session，即使用户未登录
    cookie: {
        maxAge: config.session.maxAge // 过期时间，过期后 cookie 中的 session id 自动删除
    },
    store: new MongoStore({// 将 session 存储到 mongodb
        url: config.mongodb// mongodb 地址
    })
}))
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', router)

app.listen(config.port, function () {
    console.log(`项目启动了，端口是${config.port}`);
})
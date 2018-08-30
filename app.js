var express = require('express');
var app = express();
var router = require('./routes/index');
var bodyParser=require('body-parser');
var config = require('./config/default.js');

app.use(bodyParser.urlencoded({extended:true}));
app.use('/', router)

app.listen(config.port, function () {
    console.log(`项目启动了，端口是${config.port}`);
})
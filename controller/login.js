
var user = require('../models/user').user;
var response = require('../utils/utils').handlerResponse;
// 登录的逻辑处理
module.exports = function (req, res) {
    var query = {
        name: req.body.username,
        password: req.body.password
    }
    user.find(query, function(err, userInfo){
        if (err) {
            res.end('服务器错误')
        }
        if (userInfo.length > 0) {
            res.json(
                response({
                    message: '登录成功'
                })
            )
        } else {
            res.json(
                response({
                    isSuccess: false,
                    message: '用户名或密码错误'
                })
            )
        }
    });
}
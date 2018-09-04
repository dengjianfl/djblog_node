
var response = require('../utils/utils').handlerResponse;

// 登录的逻辑处理
module.exports = function (req, res) {
    res.json(
        response({
            data:{
                username: req.session.user
            },
            message: '获取成功'
        })
    )
}
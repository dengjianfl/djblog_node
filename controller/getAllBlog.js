
var article = require('../models/article').article;
var response = require('../utils/utils').handlerResponse;
// 登录的逻辑处理
module.exports = function (req, res) {
    
    article.find(function(err, allBlogs){
        if (err) {
            res.end('服务器错误')
        }
        if (allBlogs.length > 0) {
            res.json(
                response({
                    data:allBlogs,
                    message: '获取成功'
                })
            )
        } else {
            res.json(
                response({
                    isSuccess: true,
                    message: '暂无内容'
                })
            )
        }
    });
}
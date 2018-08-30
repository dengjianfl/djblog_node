
var article = require('../models/article').article;
var response = require('../utils/utils').handlerResponse;
var moment = require('moment');
// 登录的逻辑处理
module.exports = function (req, res) {
    var oneBlog = new article({
        author: 'dengjian',
        title: req.body.title,
        tag: req.body.tag.split(','),
        summary: req.body.summary,
        content: req.body.content,
        pve: 1,
        createTime: new Date(),
        updateTime: new Date()
    })
    
    oneBlog.save(function(err) {
        if (err) {
            res.json(
                response({
                    message: '保存失败'
                })
            )
        } else {
            res.json(
                response({
                    message: '保存成功'
                })
            )
        }
    })  
}
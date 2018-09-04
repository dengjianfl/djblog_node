
var article = require('../models/article').article;
var response = require('../utils/utils').handlerResponse;

module.exports= {
    // 保存一篇博客
    saveOneBlog: function (req, res) {
        var oneBlog = new article({
            author: req.session.user,
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
    },
    // 删除一篇博客
    deleteOneBlog: function (req, res) {
        var id = req.body.id;
        article.deleteOne({
            _id: id
        }, function (err) {
            if (err) {
                res.end('服务器繁忙')
            }
            res.json(
                response({
                    message: '删除成功'
                })
            )
        })
    },
    // 获取一篇博客
    getOneBlog: function (req, res) {
        var id = req.body.id;
        article.findOne({
            _id: id
        }, function (err, details) {
            if (err) {
                res.end('服务器繁忙')
            }
            res.json(
                response({
                    data: details,
                    message: '获取成功'
                })
            )
        })
    },
    // 更新一篇博客
    updateOneBlog: function (req, res) {
        var id = req.body.id;
        article.updateOne({
            _id: id
        }, {
            title: req.body.title,
            tag: req.body.tag.split(','),
            summary: req.body.summary,
            content: req.body.content,
            updateTime: new Date()
        }, function (err) {
            if (err) {
                res.json(
                    response({
                        isSuccess: false,
                        message: '获取成功'
                    })
                )
            }
            res.json(
                response({
                    message: '更新成功'
                })
            )
        })
    }
}
 


var article = require('../models/article').article;
var response = require('../utils/utils').handlerResponse;
var getBlog = require('../models/getBlog');
module.exports = function (req, res) {
    
    // getBlog.getBlogsNum().then(res => {
    //     console.log(res)
    // })
    var pageNo = req.body.pageNo*1;
    var pageSize = req.body.pageSize*1;
    
    article.find({} ,function(err, allBlogs) {
        if (err) {
            res.end('服务器错误') 
        }
        if (allBlogs.length > 0) {
            
            var total = allBlogs.length;
            article.find().skip((pageNo-1)*pageSize).limit(pageSize).exec(function(err, blogs){
                if (err) {
                    res.end('服务器错误')
                }
                if (blogs.length > 0) {
                    var returnBlog = blogs.map(function(item){
                        return {
                            id: item._id,
                            createTime: item.createTime,
                            author: item.author,
                            title: item.title,
                            tag: item.tag
                        }
                    })
                    res.json(
                        response({
                            data:{
                                blogList: returnBlog,
                                total: total
                            },
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

        } else {
            res.json(
                response({
                    isSuccess: true,
                    message: '暂无内容'
                })
            ) 
        }
    })
}
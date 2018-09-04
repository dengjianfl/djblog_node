var article = require('../models/article').article;

// 按需获取博客的内容
module.exports = {
    getBlogsNum: function () {
        return article.find().exec()
    },
    // 按条件查询
    getBlogsNumByCondition: function(pageNo, limit) {
        return article.find().skip((pageNo-1)*limit).limit(limit).exec()
    }
}
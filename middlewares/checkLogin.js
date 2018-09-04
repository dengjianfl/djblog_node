module.exports = {
    checkLogin: function checkLogin (req, res, next) {
        if (!req.session.user) {
           // 没有登录或者登录失效
           res.json({
                isSuccess: false,
                error: '200',
                message: '请重新登录'
            })
        } else {
            // 在登录有效期内
            next()
        }
      
    }
}
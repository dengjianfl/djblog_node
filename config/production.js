module.exports = {
    port: 8088, //端口号
    session: {
        name: 'djblog',
        secret: 'djblog',
        maxAge: 120*60*1000 // 登录失效时间2小时
    },
    mongodb: 'mongodb://djblog:djblog123456@ds151631.mlab.com:51631/djblog' // 数据库连接地址
}

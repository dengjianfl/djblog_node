module.exports = {
    port: 8088, //端口号
    session: {
        name: 'djblog',
        secret: 'djblog',
        maxAge: 60*60*1000 // 登录失效时间
    },
    mongodb: 'mongodb://127.0.0.1:27017/djblog'
}
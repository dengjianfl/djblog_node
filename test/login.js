
const assert = require('assert')
const request = require('supertest')
const app = require('../app')

describe('login', function () {
    describe('POST /login', function () {
        var agent = request(app)
        // 用户名错误的情况
        it('wrong username or password', function (done) {
            agent
            .post('/login')
            .send({username:'test',password:'a123456'})
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err)
                assert(res.text.match(/用户名或密码错误/))
                done()
            })
        })
        // 登录成功的情况
        it('login success', function (done) {
            agent
            .post('/login')
            .send({username:'dengjian',password:'a1234567@'})
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err)
                assert(res.text.match(/登录成功/))
                done()
            })
        })
    })
})
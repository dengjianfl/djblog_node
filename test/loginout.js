const assert = require('assert')
const request = require('supertest')
const app = require('../app')

describe('loginout', function () {
    describe('POST /loginout', function () {
        var agent = request(app)
        after(function (done) {
            process.exit()
        })
        // 用户名错误的情况
        it('success', function (done) {
            agent
            .post('/loginOut')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err)
                assert(res.text.match(/登出成功/))
                done()
            })
        })
    })
})
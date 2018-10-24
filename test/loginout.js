const assert = require('assert')
const request = require('supertest')
const app = require('../app')
const untis = require('../utils/utils')


describe('loginout', function () {
    describe('POST /loginout', function () {
        var agent = request(app)
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


describe('同步函数功能测试', function () {
    after(function () {
        process.exit()
    })
    it('funciton/handlerResponse', function () {
        assert.deepEqual({
            isSuccess: true,
            message: '你好吗'
        }, untis.handlerResponse({
            message: '你好吗'
        }));

        assert.deepEqual({
            isSuccess: true,
            message: '你好吗',
            data: {
                name: 'dj'
            }
        }, untis.handlerResponse({
            message: '你好吗',
            data: {
                name: 'dj'
            }
        }));
    })
})




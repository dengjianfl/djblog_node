var mongoose = require('mongoose');
var moment = require('moment');
var config = require('config-lite')(__dirname);
mongoose.connect(config.mongodb, { useNewUrlParser: true }); // 连接数据库
var Schema = mongoose.Schema;// 创建模型
var articleScheMa = new Schema({
    author: { 
        type: String, 
        required: true 
    },
    tag: { 
        type: Array, 
        required: true 
    },
    summary: { 
        type: String, 
        required: true 
    },
    title: { 
        type: String, 
        required: true 
    },
    content: { 
        type: String, 
        required: true 
    },
    pv: { 
        type: Number, 
        default: 1 
    },
    createTime: {
		type: 'String',
		default: new Date()
	},
	updateTime: {
		type: 'String',
		default: new Date()
    }
}); // 定义了一个新的模型，但是此模式还未和article集合有关联
exports.article = mongoose.model('article', articleScheMa); // 与article集合关联

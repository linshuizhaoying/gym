var mongoose = require("mongoose");

// 连接字符串格式为mongodb://主机/数据库名
mongoose.connect('mongodb://localhost/gym');

// 数据库连接后，可以对open和error事件指定监听函数。
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
	console.log('连接成功')
		//在这里创建你的模式和模型
});

var Schema1 = mongoose.Schema;
var gymuserSchema = new Schema1({
	name : String,
	pass : String,
	email : String,
	avatar : String,
	mytrain:[]
});


var User = mongoose.model('User', gymuserSchema);
//倒出模型
module.exports = User
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


/*
 * 训练单项包括：
 * 1、名称 2、具体描述 3、初级量标准 4 中级量标准 5、进阶量标准 6、演示图片
 * 
 */
var Schema2 = mongoose.Schema;
var trainSchema = new Schema2({
	name : String,
	content : String,
	junior_num : Number,
	junior_rate : Number,
	middle_num :Number,
	middle_rate : Number,
	advanced_num : Number,
	advanced_rate: Number,
	pic_array :[]
})

var Train = mongoose.model('Train', trainSchema);
//倒出模型
module.exports = Train

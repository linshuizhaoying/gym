var express = require('express');
var router = express.Router();
var Train = require('../database/train');
/* GET home page. */
router.get('/', function(req, res, next) {
	var user = "";
	if(req.session.user){
		user = req.session.user;
	}
	console.log("User:" + user);
  res.render('index', { title: '个人健身管理系统',user:user });
});
router.get('/linshui', function(req, res, next) {
	if(req.session.user == "admin"){
		Train.find(function(err,trains) {  
			res.render('linshui',{ trains:trains});
    });  
		
	}else{
		res.redirect('/');
	}
});
router.get('/deletetrain/:id', function(req, res, next) {
	if(req.session.user == "admin"){
	  var id = req.params.id;
    Train.remove({_id: id
		}, function(err) {
			if (err) {
				console.log(err)
				return
			}
			console.log('删除成功');
			res.redirect('/linshui');
		});
		
	}else{
		res.redirect('/');
	}
});
router.get('/show/:id', function(req, res, next) {

	  var id = req.params.id;
    Train.find({_id: id
		}, function(err,contents) {
			if (err) {
				console.log(err)
				return
			}
			console.log('查找成功');
			console.log(contents);
			res.render('show',{ contents:contents});
		});
		

});
router.post('/addnewtrain', function(req, res, next) {
	if(req.session.user == "admin"){
		console.log(req.body.title +"\n");
		console.log(req.body.desc +"\n");
		console.log(req.body.junior_num +"\n");
		console.log(req.body.junior_rate +"\n");
		console.log(req.body.middle_num +"\n");
		console.log(req.body.middle_rate +"\n");
		console.log(req.body.advanced_num +"\n");
		console.log(req.body.advanced_rate +"\n");

	Train.findOne({ name: req.body.title }, function(err, content) {
		console.log(content);
		if(content!=null){
			res.end("用户名已存在！");
    }else{
			var newtrain = new Train(Train);
			newtrain.name = req.body.title;
			newtrain.content = req.body.desc;
			newtrain.junior_num = req.body.junior_num;
			newtrain.junior_rate = req.body.junior_rate;
			newtrain.middle_num = req.body.middle_num;
			newtrain.middle_rate = req.body.middle_rate;
			newtrain.advanced_num = req.body.advanced_num;
			newtrain.advanced_rate= req.body.advanced_rate;
			if(req.body.img1){
				newtrain.pic_array.push(req.body.img1);
			}
			if(req.body.img2){
				newtrain.pic_array.push(req.body.img2);
			}
			if(req.body.img3){
				newtrain.pic_array.push(req.body.img3);
			}
			newtrain.save(function(err) {
				if (err) {
					console.log('保存失败');
				}
				  console.log('数据保存成功');
				  res.write("done");
					res.end();
				});
    }
	});
		
		
		
		
		
	}else{
		res.redirect('/');
	}
});

router.get('/logout', function(req, res, next) {
  delete req.session.user;
  return res.redirect('/');
});
router.get('/index', function(req, res, next) {
	var user = "";
	if(req.session.user){
		user = req.session.user;
	}
	console.log("User:" + user);
  res.render('index', { title: '个人健身管理系统',user:user });
});
router.get('/index.html', function(req, res, next) {
	var user = "";
	if(req.session.user){
		user = req.session.user;
	}
	console.log("User:" + user);
  res.render('index', { title: '个人健身管理系统',user:user });
});

module.exports = router;

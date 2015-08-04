var express = require('express');
var router = express.Router();
//数据操作对象
var User = require('../database/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup');
});
router.get('/signup', function(req, res, next) {
  res.render('signup');
});
router.get('/signup/:regname/:regpass/:regemail', function(req, res,next) {
	var regname = req.params.regname;
	var regpass = req.params.regpass;
	var regemail = req.params.regemail;
	console.log(regname + regpass + "email:" + regemail);
	
	User.findOne({ name: regname }, function(err, content) {
		console.log(content);
		if(content!=null){
			res.end("用户名已存在！");
    }else{
			var newuser = new User(User);
			newuser.name = regname;
			newuser.pass = regpass;
			newuser.email = regemail;
			console.log(newuser.name + newuser.pass + "email:" + newuser.email);
			newuser.save(function(err) {
				if (err) {
					console.log('保存失败');
				}
				  req.session.user = regname;
				  console.log(regname);
				  console.log('数据保存成功');
					
					res.write("done");
					res.end();
				});
    }
	});
	

	
});

router.get('/signup.html', function(req, res, next) {
  res.render('signup');
});


module.exports = router;
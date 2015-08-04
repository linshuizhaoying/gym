var express = require('express');
var router = express.Router();
var User = require('../database/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signin');
});
router.get('/signin/:name/:pass', function(req, res,next) {
	var name = req.params.name;
	var pass = req.params.pass;
	console.log("Finding");
	User.findOne({ name: name }, function(err, content) {
		console.log(content);
		if(content!=null){
			if(content.pass == pass){
				req.session.user = req.params.name;
				console.log("Login Success!");
				res.write("done");
				res.end();
			}else{
				res.end("用户名或者密码错误，请重新输入!");
			}
    }else{
    	  res.end("用户名不存在");
    }
	});

});
router.get('/signin', function(req, res, next) {
  res.render('signin');
});
router.get('/signin.html', function(req, res, next) {
  res.render('signin');
});
module.exports = router;
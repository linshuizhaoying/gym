var express = require('express');
var router = express.Router();
var Train = require('../database/train');
var User = require('../database/user');
var Moment = require('moment');
/* GET users listing. */
function getToday(){
	var today = Moment().format('d');
	var day = "";
  if(today == 0){
  	  day = "周日";
  }
  if(today == 1){
  	  day = "周一";
  }
  if(today == 2){
  	  day = "周二";
  }
  if(today == 3){
  	  day = "周三";
  }
  if(today == 4){
  	  day = "周四";
  }
  if(today == 5){
  	  day = "周五";
  }
  if(today == 6){
  	  day = "周六";
  }
	return day;
}
router.get('/', function(req, res, next) {
	if(!req.session.user){
		return res.redirect('/index');
	}else{
		//今日任务列表
	 var todaytrains = new Array();
	 User.find({name: req.session.user
				}, function(err,contents) {
					if (err) {
						console.log(err)
						return
					}
			var todayarray = contents[0].mytrain;
			var now = getToday();
			for(var i=0;i<todayarray.length;i++){
				if(todayarray[i].week == now){
					todaytrains.push(todayarray[i]);
				}
			}
			console.log("todaytrains:" + todaytrains);
		});
		//我的所有训练计划
	 var myalltrains = new Array();
	 var chongfu = new Array();
	 var flag = false;//表示没有重复
	 User.find({name: req.session.user
				},function(err,contents) {
					if (err) {
						console.log(err)
						return
					}
			var myallarray = contents[0].mytrain;
			console.log("myallarray:"+ myallarray.length);
			for(var i=0;i<myallarray.length;i++){
				for(var j = 0 ;j <chongfu.length ;j++){
				  if(chongfu[j] == myallarray[i].name){
				  	  flag = true;
				  }
				}
				if(!flag){
				  myalltrains.push(myallarray[i]);
				  chongfu.push(myallarray[i].name);
				}
				flag = false;
			}
			console.log("myalltrains:" + myalltrains);
		});
		
		
		//总
		Train.find(function(err,trains) {  
		  User.find({name: req.session.user
				}, function(err,contents) {
					if (err) {
						console.log(err)
						return
					}
			var mytrains = contents[0].mytrain;
		  res.render('user',{user:req.session.user,trains:trains,mytrains:mytrains,todaytrains:todaytrains,myalltrains:myalltrains});
		});
			
    });  
		
	}
  
});

//删除数据
router.get('/deletemytrain/:week/:train', function(req, res, next) {
	if(req.session.user){
	  var week = req.params.week;
	  var train = req.params.train;
	  User.find({name: req.session.user
			}, function(err,contents) {
				if (err) {
					console.log(err)
					return
				}
		var mytrains = contents[0].mytrain;
		var findtrain;
		for(var i=0;i<mytrains.length;i++){
			if(mytrains[i].week == week && mytrains[i].name == train){
				findtrain = mytrains[i];
			}
		}
		//找到后删除
		User.update({name: req.session.user}, {
			$pull: {'mytrain':findtrain} 
		}, function(err) {
			if(err){
				console.log(err)
				return
			}
		return res.redirect('/user');
		});
		
		
	  });
		
	}else{
		res.redirect('/');
	}
});


router.post('/addusertrain', function(req, res, next) {
	if(req.session.user){
		console.log(req.body.title +"\n");
		console.log(req.body.week +"\n");
		console.log(req.body.level +"\n");
		var usertrain =  new Object();
    usertrain.name = req.body.title;
		usertrain.week = req.body.week;
    Train.find({name: req.body.title
			}, function(err,contents) {
				if (err) {
					console.log(err)
					return
				}
				usertrain.jinjie =  contents[0].advanced_num + "组,各组" + contents[0].advanced_rate+"次";
				if(req.body.level=="chuji"){
					usertrain.level = contents[0].junior_num + "组,各组" + contents[0].junior_rate+"次";
				}
				if(req.body.level=="zhongji"){
					usertrain.level = contents[0].middle_num + "组,各组" + contents[0].middle_rate+"次";
				}
				if(req.body.level=="gaoji"){
					usertrain.level = contents[0].advanced_num + "组,各组" + contents[0].advanced_rate+"次";
				}
			  console.log(usertrain);
			  res.write(usertrain.week+ ","   + usertrain.name + ","  + usertrain.jinjie + ","  +   usertrain.level);
			  
			  Train.find({name: usertrain.name
					}, function(err,contents) {
						if (err) {
							console.log(err)
							return
						}
					usertrain.findid = contents[0]._id;
					usertrain.desc = contents[0].content;
					console.log(contents[0]._id);
					User.update({name: req.session.user}, {
						$addToSet: {'mytrain':usertrain} 
					}, function(err) {
						if(err){
							console.log(err)
							return
						}
					res.end();
					});
						
			 });

			  
			});

	}else{
		res.redirect('/');
	}
});


module.exports = router;

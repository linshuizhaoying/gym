var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var connect = require('connect');
var multiparty = require('multiparty');
var http = require('http');
var util = require('util');
var fs = require('fs');
var SessionStore = require("session-mongoose")(connect);
var store = new SessionStore({
url:"mongodb://localhost/session",
  interval: 120000
});

var routes = require('./routes/index');
var users = require('./routes/users');
var sign_in = require('./routes/sign_in');
var sign_up = require('./routes/sign_up');
var app = express();

app.use(session({
  secret: 'linshuizhaoying',
  store: store,
  cookie:{maxAge:2160000} //expire session in 10 seconds
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.get('/logout', routes);
app.get('/linshui', routes);
app.post('/addnewtrain', routes);
app.get('/deletetrain/:id', routes);
app.get('/show/:id',routes);
app.use('/user', users);
app.post('/addusertrain', users);
app.get('/deletemytrain/:week/:train', users);
app.use('/signin', sign_in);
app.get('/signin/:name/:pass',sign_in);
app.use('/signup', sign_up);
app.get('/signup/:regname/:regpass/:regemail',sign_up);

app.use(function(req, res, next) {
  res.locals.user = req.session.user || null;
    next();
});


app.post('/upload', function(req, res, next){  
 var form = new multiparty.Form({uploadDir: './public/images/'});
  //下载后处理
    form.parse(req, function(err, fields, files) {
      var filesTmp = JSON.stringify(files,null,2);
  
      if(err){
      console.log('parse error: ' + err);
      } else {
        console.log('parse files: ' + filesTmp);
        var inputFile = files.inputFile[0];
        var uploadedPath = inputFile.path;
        var dstPath = './public/files/' + inputFile.originalFilename;
        //重命名为真实文件名
				console.log("上传成功:" + uploadedPath);
	      res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
	      res.end(uploadedPath);
      }
     });

});




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

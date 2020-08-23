var express = require('express');
var bodyParser = require('body-parser');
var router = require("./routes/router");

var app = express();

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({
	extended: false
})

app.use('/public', express.static('public'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + "/" + "index.html");
})

app.get('/getclass', async function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
	var data = await router.getclass(req.query.id);
	res.end(JSON.stringify(data));
})

app.get('/getlist', async function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'}); 
	console.log('req.query.wd=%s',req.query.wd);
	var data = await router.getlist(req.query.id,req.query.pg,req.query.t,req.query.wd);
	res.end(JSON.stringify(data));
})

var server = app.listen(122, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
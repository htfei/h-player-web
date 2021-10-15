var express = require('express');
var axios = require('axios');

var app = express();

app.use('/public', express.static('public'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + "/" + "index.html");
})

app.get('/req_json_api', async function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
	requrl = req.url.slice(18);
	console.log('requrl=%s',requrl);

	let jsondata = await axios({
		methods: 'get',
		url: requrl
		})
		.then(function (response) {
		  return response.data;
		})
		.catch(function (error) {
		  if(error.response){
				console.log("sth.error!status=%s,statusText=%s",error.response.status,error.response.statusText);
			}
		});

	res.end(JSON.stringify(jsondata));
})

var server = app.listen(2021, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

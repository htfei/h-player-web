const hostlist = require("./host.json");
const axios = require('axios');


//根据id查找host，默认返回id=0
function gethostbyid(id) {
	for (var i = 0; i < hostlist.length; i++) {
		if (hostlist[i].id == id) {
			return hostlist[i];
		}
	}
	return hostlist[0];
}

async function getclass(id) {
	let host = gethostbyid(id);
	let url = host.classapi;
	let jsondata = await axios({
		methods: 'get',
		url: url
		})
		.then(function (response) {
		//   console.log(response);
		  return response.data;
		})
		.catch(function (error) {
		  console.log(error);
		});
	//console.log("route", jsondata);
	return jsondata;
}

async function getlist(id,pg,t,wd) {
	let host = gethostbyid(id);
	let url = host.listapi+"&pg="+pg+"&t="+t+"&wd="+wd;
	let jsondata = await axios({
		methods: 'get',
		url: url
		})
		.then(function (response) {
		//   console.log(response);
		  return response.data;
		})
		.catch(function (error) {
		  console.log(error);
		});
	//console.log("route", jsondata);
	return jsondata;
}

exports.getclass = getclass;
exports.getlist = getlist;
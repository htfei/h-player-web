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
	//console.log("getclass.req.url=%s", url);
	let jsondata = await axios({
		methods: 'get',
		url: url
		})
		.then(function (response) {
		//   console.log(response);
		//console.log("getclass.rspdata.data.length=%s", response.data.data.length);
		  return response.data;
		})
		.catch(function (error) {
		  if(error.response){
				console.log("sth.error!status=%s,statusText=%s",error.response.status,error.response.statusText);
			}
		  //console.log(error);
		});
	//console.log("route", jsondata);
	return jsondata;
}

async function getlist(id,pg,t,wd) {
	let host = gethostbyid(id);
	let url = host.listapi+"&pg="+pg+"&t="+t+"&wd="+encodeURI(wd);
	console.log("getlist.req.url=%s", url);
	let jsondata = await axios({
		methods: 'get',
		url: url
		})
		.then(function (response) {
			//console.log(response);
			console.log("getlist.rspdata.data.length=%s", response.data.data.length);
			return response.data;
		})
		.catch(function (error) {
			if(error.response){
				console.log("sth.error!status=%s,statusText=%s",error.response.status,error.response.statusText);
			}
		    //console.log(error);
		});
	//console.log("route", jsondata);
	
	return jsondata;
}

exports.getclass = getclass;
exports.getlist = getlist;
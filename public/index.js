var hostlist = 
[
  {
      "id": 1,
      "name": "色色资源站"
  },
  {
      "id": 2,
      "name": "玖玖资源站"
  },
  {
      "id": 3,
      "name": "撸死你资源站"
  },
  {
      "id": 4,
      "name": "富二代资源站"
  },
  {
      "id": 5,
      "name": "字幕网资源站"
  },
  {
      "id": 6,
      "name": "久草资源站"
  },
  {
      "id": 7,
      "name": "女优资源站"
  },
  {
      "id": 8,
      "name": "利来资源站"
  },
  {
      "id": 9,
      "name": "博天堂资源站"
  }
]


var mylikestr = localStorage.getItem("mylike");
console.log(mylikestr);
var mylike = mylikestr?JSON.parse(mylikestr):[];
console.log(mylike);
		
		
var vm = new Vue({
  el: '#app',
  data: {
    "hostlist":hostlist,
    "getlist_rsp":{},
    "getclass_rsp":{},
    //查询参数
    "classid":"",
    "querywd":"",
    "hostid":1,
    "pg":1,
    //输出提示
    "tips":"",
	//本地收藏
	"mylike":mylike,
	"oldpage":""
  },
  created: function (){
    this.getclass();
    this.getlist();
  },
  methods: {
    //向nodejs后端发送get请求,由后端调用外部引擎,解决跨域问题;
    search: async function (url) {
      console.log(url);
      var list = await fetch(url).then(function (response) {
        return response.json();
      }).catch(e => console.log("Oops, error", e));
      console.log(list);
      return list;
    },
    // 播放
    playvideo: function(url){
      this.tips = "正在播放:" + url;
      console.log("url:" + url);
      fix = url.split('$');
      if(fix.length >1 ){
        url = fix[1];
      }
      console.log("urlfix:" + url);
      window.open('http://www.guangguluntan.com:81/webplayer/player.html?url=' + url);
    },
    // 翻页
    getnextpage:function(page){
      this.tips = "正在加载第" + page + "页...";
      this.pg = page;
      this.getlist();
    },
    // 查看分类
    getclasspage:function(classid){
      this.tips = "正在加载分类" + classid ;
      this.classid = classid;
      this.querywd = "";//api bug：wd+t同时存在时，将无法查询t，即无法在某个具体分类下进行搜索;所以这里把他清空，避免翻页时优先进行wd查询；
      this.getlist();
    },
    // 搜索关键字
    querypage:function(){
      this.tips = "正在搜索:"+this.querywd;
      this.getlist();
    },
	  // 获取分类标题
    getclass:async function(){
        this.tips = "正在获取分类标题...";
        this.getclass_rsp = await this.search('/getclass?id=' + this.hostid);
    },
    // 获取项目列表
    getlist:async function(){
     //this.tips = "正在努力加载，请等待...";
     this.getlist_rsp = await this.search('/getlist?id=' + this.hostid + '&pg=' + this.pg + "&t="+this.classid+"&wd="+this.querywd);
     this.tips = "搜索完毕，have fun !";
    },
    // 切换host时清空查询条件
    changehost:function(index){
      this.hostid = index;
      this.pg = 1;
      this.classid ="";
      this.querywd = "";
      this.getclass();
      this.getlist();
    },
	// 收藏
    likeit:function(item){
		this.mylike.push(item);
		console.log(this.mylike);
		//查询完成之后，存入本地缓存
        var jsonstr = JSON.stringify(this.mylike);
        localStorage.setItem("mylike",jsonstr);
    },
	// 取消收藏
    unlikeit:function(item){
		for (var i=0;i<this.mylike.length;i++){
			if(this.mylike[i] == item){
				this.mylike.splice(i,1);
				break;
			}
		}
		//this.mylike.pop(item);//pop没有参数，只能删除最后一个
		console.log(this.mylike);
		
		//查询完成之后，存入本地缓存
        var jsonstr = JSON.stringify(this.mylike);
        localStorage.setItem("mylike",jsonstr);
    },
	// 查看收藏
    showmylike:function(){
		this.getlist_rsp.data = this.mylike;
		this.tips = "加载本地收藏完毕，have fun !";
    },
  }
});

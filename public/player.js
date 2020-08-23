

var vm = new Vue({
  el: '#app',
  data: {
    "getlist_rsp":{},
    "getclass_rsp":{},
    //查询参数
    "classid":"",
    "querywd":"",
    "hostid":1,
    "pg":1,
    //输出提示
    "tips":""
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
      PlayVideo(url);
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
    }
  }
});



function PlayVideo(url){
    var Hls = window.Hls
    if (Hls.isSupported()) {
      var hls = new Hls()
      hls.loadSource(url)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play()
      })
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = url
      video.addEventListener('canplay', function () {
        video.play()
      })
    }
}


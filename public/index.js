/*
参数：（pg） 分页,默认 1
参数：（ps） 每页采集数量,默认 30
参数：（wd） 关键字,默认 空
参数：（cid） 分类ID
参数：（h） 采集时长，例如：24(采集当天)，168(最近七天)
参数：（ids） ID，可多个，用英文逗号分隔，如：1,2,3
参数：（suffix）资源后缀 [参数仅影片资源可用，可用值：1]
*/
var apis = [{
    "id": 1,
    "name": "🐞富二代资源",
    "host": "https://sb8.app/rb8.png",
    "list_api": "http://f2dcj6.com/sapi/json?ac=list",
    "detail_api": "http://f2dcj6.com/sapi/json?ac=videolist", //&pg=&t=&wd=  &ids=106536,106535
  },
  {
    "id": 3,
    "name": "👯利来资源",
    "host": "https://sao-lang-jian.com",
    "list_api": "http://llzxcj.com/inc/json.php?ac=list",
    "detail_api": "http://llzxcj.com/inc/json.php?ac=videolist",
  },

  //以下api返回的json格式与上面不同，通过id区分(id>100)
  {
    "id": 100,
    "name": "💋辣椒资源",
    "host": "https://apilj.com/",
    "list_api": "https://apilj.com/api.php/provide/vod/at/json/?ac=list",
    "detail_api": "https://apilj.com/api.php/provide/vod/at/json/?ac=detail",
  },
  {
    "id": 101,
    "name": "🦆老鸭资源",
    "host": "http://www.laoyazy5.com/",
    "list_api": "https://api.apilyzy.com/api.php/provide/vod/?ac=list",
    "detail_api": "https://api.apilyzy.com/api.php/provide/vod/?ac=detail",
  },
  {
    "id": 102,
    "name": "🦊探探资源",
    "host": "http://help.apittzy.com/",
    "list_api": "https://apittzy.com/api.php/provide/vod/?ac=list",
    "detail_api": "https://apittzy.com/api.php/provide/vod/?ac=detail",
    "art": "https://apittzy.com/api.php/provide/art/?ac=", //ac=list  ac=detail
  },
  {
    "id": 103,
    "name": "💃秀色资源",
    "host": "https://api.xiuseapi.com/",
    "list_api": "https://api.xiuseapi.com/api.php/provide/vod/?ac=list",
    "detail_api": "https://api.xiuseapi.com/api.php/provide/vod/?ac=detail",
    "art": "https://api.xiuseapi.com/api.php/provide/art/?ac=", //ac=list  ac=detail
  },
  {
    "id": 104,
    "name": "⛅乐云资源",
    "host": "https://help.leyuzy.pro/",
    "list_api": "https://www.leyuzyapi.com/inc/apijson_vod.php?ac=list",
    "detail_api": "https://www.leyuzyapi.com/inc/apijson_vod.php?ac=detail",
    "jx": "https://player.leyuzy.net/?url=",
  },
  {
    "id": 105,
    "name": "🧦丝袜资源",
    "host": "https://siwazyw.tv/index.php/label/help.html",
    "list_api": "https://siwazyw.tv/api.php/provide/vod/?ac=list",
    "detail_api": "https://siwazyw.tv/api.php/provide/vod/?ac=detail",
    "art": "https://siwazyw.tv/api.php/provide/art/?ac=", //ac=list  ac=detail
    "jx": "http://jx.siwapay.com/m3u8.php?url=",
  },
  {
    "id": 106,
    "name": "🉑酷豆资源",
    "host": "https://www.kudouzy.com/index.php/label/help.html",
    "list_api": "http://api.kdapi.info/api.php/provide/vod/?ac=list",
    "detail_api": "http://api.kdapi.info/api.php/provide/vod/?ac=detail",
    "art": "http://api.kdapi.info/api.php/provide/art/?ac=", //ac=list  ac=detail
    "jx": "https://jx.kubohk.com/jx/?url=",
  },
  {
    "id": 108,
    "name": "🥑芒果资源",
    "host": "https://mgm3u8-player.com/",
    "list_api": "https://mgzyz1.com/api.php/provide/vod/?ac=list",
    "detail_api": "https://mgzyz1.com/api.php/provide/vod/?ac=detail",
    "art": "https://mgzyz1.com/api.php/provide/art/?ac=", //ac=list  ac=detail
    "jx": "https://mgm3u8-player.com/player/DPm3u8.php?url=",
  },

  //正经资源站
  {
    "id": 200,
    "name": "⭐北斗星资源[影视]",
    "host": "http://help.bdxzyapi.com/#JSONAPI",
    "list_api": "https://api.bdxzyapi.com/api.php/provide/vod/?ac=list",
    "detail_api": "https://api.bdxzyapi.com/api.php/provide/vod/?ac=detail",
  },
  {
    "id": 201,
    "name": "🅱百度云资源",
    "host": "http://bdyunzy.com/",
    "list_api": "https://api.apibdzy.com/api.php/provide/vod/?ac=list",
    "detail_api": "https://api.apibdzy.com/api.php/provide/vod/?ac=detail",
  },
  {
    "id": 202,
    "name": "💿人人迷蓝光资源",
    "host": "https://kuu.renrenmi.cc/",
    "list_api": "https://kuu.renrenmi.cc/api.php/provide/vod/?ac=list",
    "detail_api": "https://kuu.renrenmi.cc/api.php/provide/vod/?ac=detail",
  },
  {
    "id": 203,
    "name": "🈚无尽资源",
    "host": "https://help.wujinapi.com/#More",
    "list_api": "https://api.wujinapi.com/api.php/provide/vod/?ac=list",
    "detail_api": "https://api.wujinapi.com/api.php/provide/vod/?ac=detail",
  },
  {
    "id": 204,
    "name": "🤔想看资源",
    "host": "http://xiangkanzy.com/",
    "list_api": "https://m3u8.xiangkanapi.com/provide/vod/?ac=list",
    "detail_api": "https://m3u8.xiangkanapi.com/provide/vod/?ac=detail",
    "jx": "https://lyw28.com/m3u8/?url=",
  },
  {
    "id": 205,
    "name": "🐂红牛资源",
    "host": "http://xiangkanzy.com/",
    "list_api": "https://www.hongniuzy1.com/inc/apijson_vod.php?ac=list",
    "detail_api": "https://www.hongniuzy1.com/inc/apijson_vod.php?ac=detail",
    "jx": "https://www.tutukiki.com/m3u8/?url=",
  },
  {
    "id": 206,
    "name": "🍅番茄资源",
    "host": "http://fqzy.cc/help/",
    "list_api": "http://api.fqzy.cc/seacmsapi.php/provide/vod/?ac=list",
    "detail_api": "http://api.fqzy.cc/seacmsapi.php/provide/vod/?ac=detail",
    "jx": "https://jiexi.8b5q.cn/player/jx.php?url=",
  },
  {
    "id": 207,
    "name": "😇天堂资源",
    "host": "http://fqzy.cc/help/",
    "list_api": "http://vipmv.cc/api.php/provide/vod/?ac=list",
    "detail_api": "http://vipmv.cc/api.php/provide/vod/?ac=detail",
    "jx": "https://jiexi.8b5q.cn/player/jx.php?url=",
    "actor": "http://vipmv.cc/api.php/provide/actor/?ac=list",
  },
  {
    "id": 208,
    "name": "🐼竹嘎资源",
    "host": "http://m.ycccyk.cn/",
    "list_api": "http://m.ycccyk.cn/api.php/provide/vod/?ac=list",
    "detail_api": "http://m.ycccyk.cn/api.php/provide/vod/?ac=detail",
  },
  {
    "id": 209,
    "name": "🐉麒麟资源",
    "host": "http://www.qilinzyz.com/",
    "list_api": "http://www.qilinzyz.com/api.php/provide/vod/?ac=list",
    "detail_api": "http://www.qilinzyz.com/api.php/provide/vod/?ac=detail",
  },
  {
    "id": 210,
    "name": "😐融兴资源",
    "host": "https://video.rongxingvr.cn/",
    "list_api": "https://www.rongxingvr.cc/api.php/provide/vod/?ac=list",
    "detail_api": "https://www.rongxingvr.cc/api.php/provide/vod/?ac=detail",
  },
  {
    "id": 211,
    "name": "8️⃣8090资源",
    "host": "http://zy.yilans.net:8090/help/",
    "list_api": "http://zy.yilans.net:8090/api.php/provide/vod/?ac=list",
    "detail_api": "http://zy.yilans.net:8090/api.php/provide/vod/?ac=detail",
  },
  {
    "id": 212,
    "name": "🍄蘑菇资源",
    "host": "https://www.moguzj.com/news/?1.html",
    "list_api": "http://www.moguzyw.com:520/moguzy.php/provide/vod/?ac=list",
    "detail_api": "http://www.moguzyw.com:520/moguzy.php/provide/vod/?ac=detail",
  },
  {
    "id": 213,
    "name": "6️⃣6U资源",
    "host": "http://zy.ataoju.com/",
    "list_api": "http://zy.ataoju.com/inc/apijson_vod.php?ac=list",
    "detail_api": "http://zy.ataoju.com/inc/apijson_vod.php?ac=detail",
  },
  {
    "id": 214,
    "name": "🍋萌果资源",
    "host": "http://api.appearoo.top/",
    "list_api": "http://api.appearoo.top/api.php/provide/vod/?ac=list",
    "detail_api": "http://api.appearoo.top/api.php/provide/vod/?ac=detail",
  },
  {
    "id": 215,
    "name": "⛔酷点资源",
    "host": "https://www.kudian8.com/index.php/label/help.html",
    "list_api": "https://api.kuapi.cc/api.php/provide/vod/?ac=list",
    "detail_api": "https://api.kuapi.cc/api.php/provide/vod/?ac=detail",
    "art": "https://api.kuapi.cc/api.php/provide/art/?ac=", //ac=list  ac=detail
    "jx": "https://jx.kujiexi.net/m3u8.php?url=",
  },
]



var mylikestr = localStorage.getItem("mylike");
//console.log(mylikestr);
var mylike = mylikestr ? JSON.parse(mylikestr) : [];
console.log(mylike);


var vm = new Vue({
  el: '#app',
  data: {
    "hostlist": apis,

    "current_host_index": 0,

    "detail": {},
    "detail_items":[],
    "lists": {},

    //查询参数
    "t": "",
    "wd": "",
    "pg": 1,

    //输出提示
    "tips": "",

    //本地收藏
    "mylike": mylike,
    "showlike":0
  },
  created: function () {
    this.req_list();
    this.req_detail();
  },
  methods: {
    // 获取分类标题
    req_list:async function(){
        this.lists = await this.req_json_api(this.hostlist[this.current_host_index].list_api);
    },
    // 获取项目列表
    req_detail:async function(){
      this.detail = await this.req_json_api(this.hostlist[this.current_host_index].detail_api);
      this.tips = "请求成功，相关条目总数量 = " + this.detail.total;
      this.detail_items = this.detail.list || this.detail.data;
    },
    //向nodejs后端发送get请求,由后端调用外部引擎,解决跨域问题;
    req_json_api: async function (api) {
      req_url = '/req_json_api?url=' + api + '&pg=' + this.pg + "&t=" + this.t + "&wd=" + this.wd;
      this.tips = "请求url = " + req_url;

      var rsp = await fetch(req_url).then(function (response) {
        return response.json();
      }).catch(e => {this.tips = "请求发生错误,请稍后重试！";console.log("Oops, error", e)});
      rsp && console.log(rsp);
      return rsp;
    },
    playvideo: function (item) {
      fixurl = item.vpath || item.vod_play_url;
      if(fixurl.indexOf('$') != -1)
        fixurl = fixurl.split('$')[1].split('#')[0] ;
      this.tips ="播放视频，fixurl=" + fixurl;

      var Hls = window.Hls;
      if (Hls.isSupported()) {
        var hls = new Hls()
        hls.loadSource(fixurl)
        hls.attachMedia(video)
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
          video.play()
        })
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = fixurl
        video.addEventListener('canplay', function () {
          video.play()
        })
      }
    },
    // 翻页
    getnextpage: function (page) {
      this.showlike = 0;
      this.tips = "正在加载第" + page + "页...";
      this.pg = page;
      this.req_detail();
    },
    // 查看分类
    getclasspage: function (t) {
      this.showlike = 0;
      this.tips = "正在加载分类" + t;
      this.t = t;
      this.wd = ""; //api bug：wd+t同时存在时，将无法查询t，即无法在某个具体分类下进行搜索;所以这里把他清空，避免翻页时优先进行wd查询；
      this.req_detail();
    },
    // 搜索关键字
    querypage: function () {
      this.showlike = 0;
      this.tips = "正在搜索:" + this.wd;
      this.req_detail();
    },
    // 切换host时清空查询条件
    changehost: function (index) {
      this.showlike = 0;
      this.current_host_index = index;
      this.pg = 1;
      this.t = "";
      this.wd = "";
      this.req_list();
      this.req_detail();
    },
    // 收藏
    likeit: function (item) {

      this.mylike.push(item);
      this.tips  = "收藏成功！当前收藏总数 = " + this.mylike.length ;
      //查询完成之后，存入本地缓存
      var jsonstr = JSON.stringify(this.mylike);
      localStorage.setItem("mylike", jsonstr);
    },
    // 取消收藏
    unlikeit: async function (item) {
      
      var url = item.vpath || item.vod_play_url;
      console.log(item,url);

      this.mylike = await this.mylike.filter(x=> (x.vpath || x.vod_play_url) != url );
      this.tips  = "取消收藏成功！当前收藏总数 = " + this.mylike.length ;
      //查询完成之后，存入本地缓存
      var jsonstr = JSON.stringify(this.mylike);
      localStorage.setItem("mylike", jsonstr);
      //界面显示
      this.detail_items = this.mylike;
    },
    // 查看收藏
    showmylike: function () {
      this.showlike = 1;
      this.detail_items = this.mylike;
      this.tips = "加载本地收藏完毕！当前收藏总数 = " + this.mylike.length ;
    },
  }
});
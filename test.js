var hostlist = 
[
  {
    "id": 1,
    "name": "色色资源站",
    "uri": "https://www.emiao026.com",
    "classapi": "http://sscj8.com/inc/jsonsapi.php?ac=list",
    "listapi": "http://sscj8.com/inc/jsonsapi.php?ac=videolist",
    "type": "综合性资源"
  },
  {
    "id": 2,
    "name": "玖玖资源站",
    "uri": "https://www.sesejiu.com",
    "classapi": "http://99zxcj.com/inc/jsonsapi.php?ac=list",
    "listapi": "http://99zxcj.com/inc/jsonsapi.php?ac=videolist",
    "type": "综合性资源"
  },
  {
    "id": 3,
    "name": "撸死你资源站",
    "uri": "http://www.ttlsn3.com",
    "classapi": "http://lsnzxcj.com/inc/jsonsapi.php?ac=list",
    "listapi": "http://lsnzxcj.com/inc/jsonsapi.php?ac=videolist",
    "type": "猎奇资源"
  },
  {
    "id": 4,
    "name": "富二代资源站",
    "uri": "https://sb8.app/rb8.png",
    "classapi": "http://f2dcj6.com/sapi/json?ac=list",
    "listapi": "http://f2dcj6.com/sapi/json?ac=videolist",
    "type": "国产资源"
  },
  {
    "id": 5,
    "name": "字幕网资源站",
    "uri": "https://www.zmffl.com",
    "classapi": "http://zcyydy.com/api/json?ac=list",
    "listapi": "http://zcyydy.com/sapi/json?ac=videolist",
    "type": "中文字幕"
  },
  {
    "id": 6,
    "name": "久草资源站",
    "uri": "https://www.9ckkl.com",
    "classapi": "http://ssyydy.com/sapi/json?ac=list",
    "listapi": "http://ssyydy.com/sapi/json?ac=videolist",
    "type": "会员资源"
  },
  {
    "id": 7,
    "name": "女优资源站",
    "uri": "http://www.ttlsn4.com",
    "classapi": "http://nygcj.com/sapi.php?ac=jsonvideolist",
    "listapi": "http://nygcj.com/sapi.php?ac=jsonlist",
    "type": "无水印资源"
  },
  {
    "id": 8,
    "name": "利来资源站",
    "uri": "https://sao-lang-jian.com",
    "classapi": "http://llzxcj.com/inc/json.php?ac=list",
    "listapi": "http://llzxcj.com/inc/json.php?ac=videolist",
    "type": "无水印资源"
  }
]

var vm = new Vue({
  el: '#app-4',
  data: {
    "hostlist":hostlist,
    "getlist_url": "http://f2dcj6.com/sapi/json?ac=videolist",//&pg=&t=
    "getlist_rsp":{},
    "getclass_url":"http://f2dcj6.com/sapi/json?ac=list",
    "getclass_rsp":{},
    "classid":"",
    "currenthostindex":0
  },
  created: function (){
    this.getlist(this.hostlist[0].listapi);
    this.getclass(this.hostlist[0].classapi);
  },
  methods: {
    playvideo: function(url){
      PlayVideo(url);
    },
    getnextpage:function(page){
      var url = this.getlist_url+"&pg="+page+"&t="+this.classid;
      console.log(url);
      this.getlist(url);
    },
    getclasspage:function(classid){
      this.classid = classid;
      var url = this.getlist_url+"&t="+classid;
      console.log(url);
      this.getlist(url);
    },
    getlist:function(url){
      (async () =>{
        try {
              let response = await fetch(url,{withCredentials: true});
              var data = await response.json();
              // console.log(data);
              vm.getlist_rsp = data;
        }catch(e) {
            console.log("Oops, error", e);
        }
      })();
    },
    getclass:function(url){
      (async () =>{
        try {
              let response = await fetch(url,{withCredentials: true});
              var data = await response.json();
              // console.log(data);
              vm.getclass_rsp = data;
        }catch(e) {
            console.log("Oops, error", e);
        }
      })();
    },
    changehost:function(listapi,classapi,index){
      this.getlist_url = listapi;
      this.getclass_url = classapi;
      this.currenthostindex = index;
      console.log(this.getlist_url)
      this.getlist(this.getlist_url);
      this.getclass(this.getclass_url);
    }
  }
});



function PlayVideo(url){
    var Hls = window.Hls
    //var url = 'https://video2.caomin5168.com/20190804/8FzUhPwA/index.m3u8'
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


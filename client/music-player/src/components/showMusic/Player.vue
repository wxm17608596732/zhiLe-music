<template>
	<div class="biger">
		<div class="baffle">
			<img class="blur" :src="songMsg[0].album_img"/>
		</div>
		<el-container class="player">
			<div class="left">
				<div class="logo">
					<img class="loader" :class="{flag:isFlag}" :src="songMsg[0].album_img" />
				</div>
				<div class="col">
					<img src="../../../static/img/icon1/backward.png"  />
					<img :src="icons" @click="Play" />
					<img src="../../../static/img/icon1/forward.png"/>
				</div>
				<div class="block">
    				<el-slider v-model="value1" :show-tooltip="false" :max="value2"></el-slider>
				</div>
				<div class="showTime nowTime">{{ nowTime }}</div>
				<div class="showTime endTime">{{ songMsg[0].m_long }}</div>
			</div>
			<div class="right">
				<div class="r-top">
					<span class="p1">{{ songMsg[0].m_name }}</span>
					<span class="p2">{{ songMsg[0].singer }}</span>
				</div>
				<ul class="r-mid"></ul>
				<div class="r-bom">
					<div>
						<a @click="dianZan"><img :src="zan" /></a>
					</div>
					<div>
						<a><img src="../../../static/img/icon1/shoucang.png" /></a>
					</div> 
					<div>
						<a href="#com"><img src="../../../static/img/icon1/xiaoxi.png" /></a>
					</div>
					<div>
						<a><img src="../../../static/img/icon1/fenxiang.png" /></a>
					</div>
				</div>
			</div>
		</el-container>
		<audio id="audio" loop="loop">
			<source src="" type="audio/mpeg"></source>
		</audio>
		<Comment></Comment>
	</div>
</template>

<script>
	import Comment from './Comment';

	export default {
		name:'Player',
	    data() {
	    	return {
		        value1: 0,
		        value2: 0,
		        icons: '../../../static/img/icon1/bofang.png',
		        s:'',
		        g:'',
		        lrcObj:null,
		        p:null,
		        lrc: '',
		        allTime:'',
		        nowTime:'',
		        songMsg:[{}],
		        isFlag: true,
		        zan: '../../../static/img/icon1/xihuan.png'
	    	}
	    },
	    methods: {
	    	formatTooltip(val1,val2) {
	        	return val1 / val2;
	    	},
	    	Play(){
	    		var Audio=document.getElementById("audio");
	    		if(Audio.paused){
	    			Audio.play();
	    			this.icons='../../../static/img/icon1/zanting.png';
	    			this.isFlag=false;
	    		}else{
	    			Audio.pause();
	    			this.icons='../../../static/img/icon1/bofang.png';
	    			this.isFlag=true;
	    		}
	    	},
	    	AllTime(){
	    		var Audio=document.getElementById("audio");
	    		var time=Audio.duration;
	    		this.value2=time;
	    		var newTime=Math.round(time);
	    		this.allTime='0'+Math.floor(newTime/60)+':'+newTime%60;
	    	},
	    	NowTime(){
	    		var Audio=document.getElementById("audio");
	    		var time=Audio.currentTime;
	    		this.value1=time;
	    		var newTime=Math.round(time);
	    		this.nowTime='0'+Math.floor(newTime/60)+':'+newTime%60;
	    	},
	    	jx(){
			    var lyrics = this.lrc.split("\n");
			    var lrcObj = {};
			    for(var i=0;i<lyrics.length;i++){
			        var lyric = decodeURIComponent(lyrics[i]);
			        var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
			        var timeRegExpArr = lyric.match(timeReg);
			        if(!timeRegExpArr)continue;
			        var clause = lyric.replace(timeReg,'');
			        for(var k = 0,h = timeRegExpArr.length;k < h;k++) {
			            var t = timeRegExpArr[k];
			            var min = Number(String(t.match(/\[\d*/i)).slice(1)),
			            sec = Number(String(t.match(/\:\d*/i)).slice(1));
			            var time = min * 60 + sec;
			            lrcObj[time] = clause;
			        }
			    }
			    return lrcObj;
			},
			getMusic(){
				let _this = this;
				
				_this.$http
					.get("/getMusic",{params: {id:_this.$route.params.id}})
					.then(function(res){
						console.log(res);
						_this.songMsg = res.data;
						_this.s=_this.songMsg[0].play_url;
						_this.lrc=_this.songMsg[0].lyrics;
					})
					.catch(function(err){
						console.log(err);
					})
			},
			showLy() {
				//限制只显示12句歌词，达到13句就把第一句删除
				var ul1=document.getElementsByClassName('r-mid')[0];
				setInterval(function(){
					if(ul1.children.length>=12){
						ul1.removeChild(ul1.firstElementChild);
					}
				},500)
			},
			dianZan(){
				if(this.zan=='../../../static/img/icon1/xihuan2.png'){
					this.zan='../../../static/img/icon1/xihuan.png';
				}else{
					this.zan='../../../static/img/icon1/xihuan2.png';
				}
			}
	   },
	    mounted() {
	    	let _this = this;
			_this.getMusic();
		      
		    //歌词部分
		    setTimeout(function(){
		    	_this.p = document.querySelector("#audio");
		    	_this.lrcObj = _this.jx();
		    
		    //给当前播放时间添加事件监听函数
		    _this.p.addEventListener("timeupdate",function(){
		      let obj = _this.lrcObj[Math.floor(this.currentTime)];
		      _this.NowTime();
		      _this.AllTime();
		      if(obj!=undefined){
		        _this.g = obj;
		      }
		    });
		    },500);
		    
		    
		    _this.showLy();
		    
        },
	    computed:{
	    	
	    },
	    components: {
	    	Comment
	    },
	    watch:{
	    	g:function(){
	    		var ul=document.querySelector(".r-mid");
	    		var oli=document.createElement('li');
		      	var txt=document.createTextNode(this.g);
		        oli.appendChild(txt);
		        oli.style.marginTop=6+'px';
		        oli.style.color='floralwhite';
		      	ul.append(oli);
	    	},
	    	s:function(){
	    		var Audio=document.getElementById("audio");
	    		Audio.src=this.songMsg[0].play_url;
	    	}
	    }
	}
</script>

<style scoped>
	/*#audio{
		display: none;
	}*/
	.biger{
		width: 1000px;
		margin: 20px auto;
		position: relative;
	}
	.player{
		width: 1000px;
		height: 500px;
		background-color: rgba(76,76,76,0.7);
		background-size:100%;
		margin: 20px auto;
		border-radius: 10px;
	}
	.baffle{
		width: 1000px;
		height: 500px;
		position: absolute;
		left: 0;
		overflow: hidden;
		border-radius: 10px;
		/*top: 20px;*/
		z-index: -1;
	}
	.blur {	
	    filter: blur(8px);
	    width: 100%;
	    height: 100%;
	}
	.left {
		width: 400px;
		margin-left: 100px;
		text-align: center;
	}
	.logo {
		width: 240px;
		height: 240px;
		margin: 50px auto;
		border: 10px solid white;
		border-radius: 50%;
		overflow: hidden;
		/*animation: dh 200s linear infinite;*/
	}
	.logo img {
		width: 240px;
		height: 240px;
		/*border-radius: 50%;*/
	}
	.col img{
		cursor: pointer;
		width: 45px;
		height: 45px;
		margin: 0 8px;
	}
	.block {
		width: 240px;
		margin-left: 80px;
		margin-top: 10px;
	}
	.showTime {
		position: absolute;
		font-size: 14px;
		color: white;
		top: 430px;
	}
	.nowTime {
		left: 135px;
	}
	.endTime {
		left: 430px;
	}
	.right {
		width: 300px;
		height: 100%;
	}
	.r-top{
		text-align: center;
		margin-top: 20px;
		border-bottom: 1px solid gray;
	}
	.r-mid{
		margin-top: 20px;
		height: 330px;
		overflow: hidden;
		text-align: center;
	}
	.r-mid li{
		border-bottom: 8px solid rgba(0,0,0,0);
	}
	.p1{
		font-size: 20px;
		color: white;
	}
	.p2{
		color: white;
	}
	.r-mid li{
		list-style: none;
		text-align: center;
		margin-top: 20px;
	}
	.r-bom {
		height: 50px;
		margin-top: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.r-bom div{
		width: 24%;
		height: 100%;
		text-align: center;
		display: inline-block;
	}
	.r-bom div a{
		cursor: pointer;
	}
	.loader {
        display: block;
        position: relative;
        animation: spin 7s linear infinite;
    }
    @keyframes spin {
        0%   {
            -webkit-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    .flag{
    	animation-play-state:paused;
    }
</style>
<template>
	<div class="box">
		<div id="musicList">
			<div class="content">
				<!-- 标题 -->
				<div class="title">
					<div class="left">
						<h3>全部</h3>
						<!--<button>选择分类<span>e</span></button>-->
						<el-button @click="show" size="mini" type="info">选择分类<i class="el-icon-arrow-down"></i></el-button>
					</div>
					<div class="right">
						<button class="active">热门</button>
						<button>最新</button>
					</div>
				</div>
				
				<!-- 分类 -->
				<div class="kinds" v-if="isTrue">
					<div class="all">
						<button @click="classify('all')">全部风格</button>
					</div>
					<ul class="musicStyle">
						<li>语种</li>
						<li>风格</li>
						<li>场景</li>
						<li>情感</li>
						<li>主题</li>
					</ul>
					<div class="musicStyleList">
						<ul class="language">
							<li><a @click="classify('华语')" class="a-f">华语</a><span class="line">|</span></li>
							<li><a @click="classify('欧美')" class="a-f">欧美</a><span class="line">|</span></li>
							<li><a @click="classify('日语')" class="a-f">日语</a><span class="line">|</span></li>
							<li><a @click="classify('韩语')" class="a-f">韩语</a><span class="line">|</span></li>
							<li><a @click="classify('粤语')" class="a-f">粤语</a><span class="line">|</span></li>
							<li><a @click="classify('小语种')" class="a-f">小语种</a><span class="line">|</span></li>
						</ul>
						<ul class="stlye-kinds">
							<li><a @click="classify('流行')" class="a-f">流行</a><span class="line">|</span></li>
							<li><a @click="classify('摇滚')" class="a-f">摇滚</a><span class="line">|</span></li>
							<li><a @click="classify('民谣')" class="a-f">民谣</a><span class="line">|</span></li>
							<li><a @click="classify('电子')" class="a-f">电子</a><span class="line">|</span></li>
							<li><a @click="classify('舞曲')" class="a-f">舞曲</a><span class="line">|</span></li>
							<li><a @click="classify('说唱')" class="a-f">说唱</a><span class="line">|</span></li>
							<li><a @click="classify('古典')" class="a-f">古典</a><span class="line">|</span></li>
							<li><a @click="classify('古风')" class="a-f">古风</a><span class="line">|</span></li>
							<li><a @click="classify('金属')" class="a-f">金属</a><span class="line">|</span></li>
							<li><a @click="classify('民族')" class="a-f">民族</a><span class="line">|</span></li>
							<li><a @click="classify('爵士')" class="a-f">爵士</a><span class="line">|</span></li>
						</ul>
						<ul class="scenario">
							<li><a @click="classify('清晨')" class="a-f">清晨</a><span class="line">|</span></li>
							<li><a @click="classify('夜晚')" class="a-f">夜晚</a><span class="line">|</span></li>
							<li><a @click="classify('学习')" class="a-f">学习</a><span class="line">|</span></li>
							<li><a @click="classify('工作')" class="a-f">工作</a><span class="line">|</span></li>
							<li><a @click="classify('午休')" class="a-f">午休</a><span class="line">|</span></li>
							<li><a @click="classify('下午茶')" class="a-f">下午茶</a><span class="line">|</span></li>
							<li><a @click="classify('地铁')" class="a-f">地铁</a><span class="line">|</span></li>
							<li><a @click="classify('驾车')" class="a-f">驾车</a><span class="line">|</span></li>
							<li><a @click="classify('运动')" class="a-f">运动</a><span class="line">|</span></li>
							<li><a @click="classify('酒吧')" class="a-f">酒吧</a><span class="line">|</span></li>
							<li><a @click="classify('旅行')" class="a-f">旅行</a><span class="line">|</span></li>
						</ul>
						<ul class="scenario">
							<li><a @click="classify('怀旧')" class="a-f">怀旧</a><span class="line">|</span></li>
							<li><a @click="classify('清新')" class="a-f">清新</a><span class="line">|</span></li>
							<li><a @click="classify('浪漫')" class="a-f">浪漫</a><span class="line">|</span></li>
							<li><a @click="classify('性感')" class="a-f">性感</a><span class="line">|</span></li>
							<li><a @click="classify('伤感')" class="a-f">伤感</a><span class="line">|</span></li>
							<li><a @click="classify('治愈')" class="a-f">治愈</a><span class="line">|</span></li>
							<li><a @click="classify('放松')" class="a-f">放松</a><span class="line">|</span></li>
							<li><a @click="classify('孤独')" class="a-f">孤独</a><span class="line">|</span></li>
							<li><a @click="classify('感动')" class="a-f">感动</a><span class="line">|</span></li>
							<li><a @click="classify('兴奋')" class="a-f">兴奋</a><span class="line">|</span></li>
							<li><a @click="classify('安静')" class="a-f">安静</a><span class="line">|</span></li>
						</ul>
						<ul class="scenario">
							<li><a @click="classify('影视原声')" class="a-f">影视原声</a><span class="line">|</span></li>
							<li><a @click="classify('儿童')" class="a-f">儿童</a><span class="line">|</span></li>
							<li><a @click="classify('游戏')" class="a-f">游戏</a><span class="line">|</span></li>
							<li><a @click="classify('网络歌曲')" class="a-f">网络歌曲</a><span class="line">|</span></li>
							<li><a @click="classify('榜单')" class="a-f">榜单</a><span class="line">|</span></li>
							<li><a @click="classify('校园')" class="a-f">校园</a><span class="line">|</span></li>
							<li><a @click="classify('KTV')" class="a-f">KTV</a><span class="line">|</span></li>
							<li><a @click="classify('乐器')" class="a-f">乐器</a><span class="line">|</span></li>
							<li><a @click="classify('经典')" class="a-f">经典</a><span class="line">|</span></li>
						</ul>
					</div>
				</div>
				
				<!-- 歌单 -->
				<div class="list">
					<div class="list-left">
						<div class="list-box" v-for="item in list" :key="item.f_id">
							<img :src="item.f_cover" alt="加载失败">
							<router-link :to="'/Three/'+item.f_id">{{ item.f_name }}</router-link>
							<span>{{ item.f_publisher }}</span>
						</div>
					</div>
				</div>
			</div>
			<div class='main1_right'>
				<div class="r-1">喜欢这首歌的人</div>
				<el-container class="r-2">
					<a href="#"><img src="../../../build/logo.png" /></a>
					<a href="#"><img src="../../../build/logo.png" /></a>
					<a href="#"><img src="../../../build/logo.png" /></a>
					<a href="#"><img src="../../../build/logo.png" /></a>
				</el-container>
				<div class="r-1">包含这首歌的歌单</div>
				<div class="r-4">
					<div class="r-4-1"><img src="http://p2.music.126.net/_-SFncN83N46qszXUcTlPA==/109951163559246810.jpg?param=50y50" /></div>
					<div class="r-4-2">分享生活，再忙也要让自己放松一下</div>
				</div>
				<div class="r-4">
					<div class="r-4-1"><img src="http://p2.music.126.net/_-SFncN83N46qszXUcTlPA==/109951163559246810.jpg?param=50y50" /></div>
					<div class="r-4-2">分享生活，再忙也要让自己放松一下</div>
				</div>
				<div class="r-4">
					<div class="r-4-1"><img src="http://p2.music.126.net/_-SFncN83N46qszXUcTlPA==/109951163559246810.jpg?param=50y50" /></div>
					<div class="r-4-2">分享生活，再忙也要让自己放松一下</div>
				</div>
				<div class="r-4">
					<div class="r-4-1"><img src="http://p2.music.126.net/_-SFncN83N46qszXUcTlPA==/109951163559246810.jpg?param=50y50" /></div>
					<div class="r-4-2">分享生活，再忙也要让自己放松一下</div>
				</div>
				<div class="r-1">相似歌曲</div>
				<div class="clear"></div>
			</div>
			<div class="clear"></div>
		</div>
	</div>
</template>

<script>

	var imgUrl = ["https://p3.music.126.net/9dLJ3rPpz3lobPjdpNKcRw==/109951163667817809.jpg?param=200y200"];
	var musicInfor = ['歌单信息'];
	var author = ['作者'];
	export default {
		name: 'Three',
		data() {
			return{
				list:[],
				isTrue: false
			}
		},
		methods: {
			show: function(){
		        this.isTrue = !this.isTrue;
		    },
		    classify:function(title1){
		    	if(title1=="all"){
		    		this.ajaxGet("/musicForm",title1);
		    	}else{
		    		this.ajaxGet("classify",title1);
		    	}
		    },
		    ajaxGet: function(getUrl,title){
		    	let _this=this;
				//发起ajax请求 Vue.prototype.$http = Axios
				_this.$http
				  .get(getUrl,{params: {Title: title}})
				  .then(function(res){
				  	console.log(res);
				  	_this.list = res.data;
				  })
				  .catch(function(err){
				  	console.log(err);
				  });
		    }
		},
		mounted() {
			this.ajaxGet("/musicForm","all");
		}
	}
</script>

<style scoped>
	.clear {
		clear: both;
	}
	
	.box {
		width: 100%;
		background-color: rgba(245,222,179,0.6);
	}
	
	#musicList {
		width: 1000px;
		/*height: 1744px;*/
		background-color: white;
		margin: 0px auto;
	}
	
	.content {
		width: 100%;
		margin: 0px auto;
	}
	
	.title {
		width: 100%;
		height: 50px;
		margin: 0px auto;
		/*padding-top: 50px;*/
		border-bottom: 2px solid #FF7428;
	}
	
	.title .left {
		float: left;
		margin-top: 15px;
	}
	
	.title .right {
		float: right;
		margin-top: 15px;
		margin-right: 15px;
	}
	
	.left h3 {
		display: inline;
	}
	
	.left button {
		cursor: pointer;
		position: relative;
	}
	
	.left button span {
		display: inline-block;
		width: 8px;
		height: 8px;
		border-right: 1px solid #0080ff;
		border-bottom: 1px solid #0080ff;
		transform: rotate(45deg);
		position: absolute;
		top: 4px;
		left: 65px;
	}
	
	.right button {
		cursor: pointer;
	}
	.right .active {
		background-color: #ff0000;
		border: 0px;
		outline: none;
	}
	.kinds {
		width: 700px;
		height: 300px;
		background-color: #fcfcfc;
		position: absolute;
		top: 196px;
		left: 156px;
		box-shadow: 2px 2px 5px #888888;
	}
	.all {
		width: 100%;
		height: 38px;
		border-bottom: 1px solid #e6e6e6;
		margin-top: 20px;
	}
	.all button {
		margin-left: 36px;
	}
	.musicStyle {
		width: 100px;
		height: 232px;
		border-right: 1px solid #e6e6e6;
		padding-top: 10px;
	}
	.musicStyle li {
		text-align: center;
		list-style: none;
		margin-bottom: 26px;
		font-weight: 600;
	}
	.musicStyleList {
		width: 588px;
		height: 240px;
		position: absolute;
		top: 60px;
		left: 102px;
		padding-left: 10px;
	}
	.musicStyleList li {
		display: inline-block;
		margin: 10px 10px 0px 0px;
	}
	.a-f {
		font-size: 12px;
		color: #333;
	}
	.a-f:hover {
		text-decoration: underline;
	}
	.line {
		margin-left: 10px;
		color: #d8d8d8;
	}
	.stlye-kinds {
		margin-top: 20px;
	}
	.scenario {
		margin-top: 18px;
	}
	.scenario a {
		cursor: pointer;
	}
	.language a {
		cursor: pointer;
	}
	.stlye-kinds a {
		cursor: pointer;
	}
	.list {
		width: 100%;
		margin-top: 30px;
	}
	.list-left {
		width: 750px;
		/*height: 100%;*/
		float: left;
	}
	
	.list-box {
		width: 140px;
		height: 190px;
		border: 1px solid #f0f0f0;
		float: left;
		margin-top: 10px;
		margin-right: 8px;
	}
	
	.list-box img {
		width: 140px;
		height: 140px;
	}
	.list-box a {
		text-decoration: none;
		color: #FF7428;
		display: block;
		width: 140px;
		/*line-height: 20px;*/
		margin-bottom: 5px;
		font-size: 14px;
		text-overflow: ellipsis;
		overflow: hidden;
        white-space: nowrap;
	}
	
	span{
		margin-top: 5px;
		font-size: 12px;
		color: gray;
	}
	
	.main1_right {
		float: right;
		width: 250px;
		height: 100%;
		background-color: white;
		/*border-left: 1px solid darkgray;*/
		/*border-right: 1px solid darkgray;*/
	}
	
	.com-right {
		width: 300px;
		/*		background-color: yellow;*/
	}
	
	.r-1 {
		width: 220px;
		margin: 10px auto;
		font-size: 14px;
		color: grey;
		font-weight: 600;
		border-bottom: 1px solid #FF7428;
	}
	
	.r-2 {
		width: 220px;
		margin: 10px auto;
	}
	
	.r-2 img {
		width: 40px;
		height: 40px;
		margin: 0 7px;
	}
	
	.r-4 {
		width: 220px;
		margin: 10px auto;
	}
	
	.r-4-1 {
		display: inline-block;
		margin: 10px;
		width: 50px;
		height: 50px;
	}
	
	.r-4-1 img {
		width: 50px;
		height: 50px;
	}
	
	.r-4-2 {
		display: inline-block;
		width: 140px;
		font-size: 14px;
		color: grey;
	}
</style>
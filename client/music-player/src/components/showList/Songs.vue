<template>
	<div class="content">
		<el-container class='main1'>
			<div class='main1_left'>
				<div class="left">
					<div class="clear"></div>
					<div class="ll">
						<img  :src=" list[0].f_cover "  alt=""/>
					</div>
					<div class="lr">
						<div class="lr-1">
							<img src="../../../static/img/icon1/gd.png" />
							<span>{{ list[0].f_name }}</span>
						</div>
						<div class="lr-2">
							<img src="http://p1.music.126.net/JVWb-Ist5KowjAAa7GpHqA==/109951163530949475.jpg?param=40y40" />
							<span>{{ list[0].f_publisher }}</span>
							<span>{{ time }}创建</span>
						</div>
						<div class="lr-3">
							<el-button-group>
								<el-button size="small"><img src="../../../static/img/icon1/shoucangjia.png" /><span>({{ list[0].f_collect_num }})</span></el-button>
								<el-button size="small"><img src="../../../static/img/icon1/zhuanfa.png" /><span>({{ list[0].f_forward_num }})</span></el-button>
								<el-button size="small"><img src="../../../static/img/icon1/xiazai_1.png" /></el-button>
								<el-button size="small"><img src="../../../static/img/icon1/pinglun.png" /><span>({{ list[0].f_comment_num }})</span></el-button>
							</el-button-group>
						</div>
						
						<div class="lr-4">
							<div>标签：</div>
							<div>{{ list[0].f_language }}</div>
							<div>{{ list[0].f_style }}</div>
							<div>{{ list[0].mood }}</div>
							
						</div>
						<div class="clear"></div>
						<div class="lr-5" :class="{classA:isA}">
							<span>{{ list[0].f_describe }}</span>
						</div>
						
						<div class="lr-6"><a @click="showMore">展开</a><span v-html="arrow"></span></div>
					</div>
					<div class="clear"></div>
					
					<MusicName :play_num="list[0].f_play_num"></MusicName>
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
			</div>
		</el-container>
	</div>
</template>

<script>
	import MusicName from './MusicName'
	
	export default {
		name: 'Songs',
		data(){
			return {
				list:[{}],
				time:'',
				arrow: '<i class="el-icon-arrow-down"></i>',
				isA: true
			}
		},
		components:{
			MusicName:MusicName
		},
		watch:{
			time:function(){
				let _this = this;
				_this.time=_this.timeFormat(_this.list[0].release_time,'yyyy-MM-dd');	
			}
		},
		mounted() {
			let _this = this;
	    	_this.getFormInfo();	
		},
		methods: {
			getFormInfo(){
				let _this = this;
				_this.$http
			  		.get("/getForm",{params: {id: _this.$route.params.id }})
			  		.then(function(res){
			  			console.log(res);
			  		_this.list = res.data;
			  		_this.time=_this.list[0].release_time;
			    	})
			  		.catch(function(err){
					  	console.log(err);
					});
			},
			timeFormat(time, timeDemo){
				let t = new Date(time);
		        let tf = function(i){return (i < 10 ? '0' : '') + i};
		        return timeDemo.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){
		            switch(a){
		                case 'yyyy':
		                return tf(t.getFullYear());
		                break;
		                case 'MM':
		                return tf(t.getMonth() + 1);
		                break;
		                case 'mm':
		                return tf(t.getMinutes());
		                break;
		                case 'dd':
		                return tf(t.getDate());
		                break;
		                case 'HH':
		                return tf(t.getHours());
		                break;
		                case 'ss':
		                return tf(t.getSeconds());
		                break;
		            }
		        })
			},
			showMore(){
				if(this.arrow=='<i class="el-icon-arrow-up"></i>'){
					this.arrow='<i class="el-icon-arrow-down"></i>';
					this.isA=true;
				}else{
					this.arrow='<i class="el-icon-arrow-up"></i>';
					this.isA=false;
				}
			}
		}
    }
</script>

<style scoped>
	.clear {
		clear: both;
	}
	.content{
		width: 100%;
		margin: 0 auto;
		background-color: rgba(245,222,179,0.6);
	}  
	.main1 {
	  	width: 1000px;
	  	margin: 0 auto;
	}
	.main1_left{
	  	width: 750px;
	  	background-color: white;
	  	border-left: 1px solid darkgray;
	}
	.left{
		width: 100%;
		height: 100%;
		/*background-color: yellow;*/
	}
	.ll{
		width: 210px;
		height: 210px;
		float: left;
		border: 1px solid grey;
		margin: 10px;
	}
	.ll img {
		width: 200px;
		height: 200px;
		margin: 5px;
	}
	.lr{
		width: 510px;
		float: right;
	}
	.lr-1{
		height: 35px;
		margin-top: 15px;
		line-height: 35px;
	}
	.lr-1 img{
		display: block;
		float: left;
		margin-top: 2px;
	}
	.lr-1 span{
		font-size: 20px;
		display: block;
		float: left;
		margin-left: 15px;
	}
	.lr-2{
		height: 40px;
		margin-top: 10px;
		line-height: 40px;
	}
	.lr-2 img{
		display: block;
		float: left;
	}
	.lr-2 span{
		font-size: 14px;
		color: gray;
		display: block;
		float: left;
		margin-left: 10px;
	}
	.lr-3{
		height: 30px;
		margin-top: 10px;
	}
	.lr-3 button {
		height: 30px;
	}
	.lr-3 button img{
		display: block;
		width: 20px;
		height: 20px;
		float: left;
		margin-top: -4px;
	}
	.lr-3 button span{
		font-size: 12px;
		display: block;
		float: left;
	}
	.lr-4{
		height: 30px;
		margin-top: 10px;
		line-height: 35px;
	}
	.lr-4 div {
		font-size: 14px;
		float: left;
	}
	.lr-4 div:nth-child(n+2){
		width: 60px;
		height: 25px;
		margin-top: 2px;
		margin-left: 15px;
		border-radius: 15px;
		text-align: center;
		line-height: 25px;
		color: white;
		background-color: grey;	
	}
	.lr-5 {
		width: 480px;
		min-height: 80px;
		font-size: 14px;
		line-height: 25px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.classA {
		-webkit-line-clamp: 3;
	}
	.lr-6 {
		width: 50px;
		height: 25px;
		margin-left: 430px;
		/*background-color: yellowgreen;*/
	}
	.lr-6 a {
		font-size: 14px;
		color: #FF7428;
		cursor: pointer;
	}
	.main1_right{
	  	width: 250px;
	  	background-color: white;
	  	border-left: 1px solid darkgray;
	  	border-right: 1px solid darkgray;
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
	.r-2 img{
		width: 40px;
		height: 40px;
		margin: 0 7px;
	}
	.r-4 {
		width: 220px;
		margin: 10px auto;
	}
	.r-4-1{
		display: inline-block;
		margin: 10px;
		width: 50px;
		height: 50px;
	}.r-4-1 img {
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
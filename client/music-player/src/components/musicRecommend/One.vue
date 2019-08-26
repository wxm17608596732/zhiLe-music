<template>
	<div class="content">
		<div class="swiper">
			<el-carousel :interval="2000" type="card" height="300px">
			    <el-carousel-item v-for="item in msg" :key="item">
			    	<img class="img" :src="item" />
			    </el-carousel-item>
			</el-carousel>
		</div>
		
		<el-container class='main1'>
			<div class='main1_left'>
				<div class='left_top'>
					<div class="inline circle"></div>
					<p class="inline hot">热门推荐</p>
					<ul class="inline tips">
						<li>华语</li>
						<li class="line"></li>
						<li>流行</li>
						<li class="line"></li>
						<li>摇滚</li>
						<li class="line"></li>
						<li>民谣</li>
						<li class="line"></li>
						<li>电子</li>
					</ul>
				</div>
				<div class="clear"></div>
				<div class="left_mid">
					<div class="clear"></div>
					<div class="show" v-for="item in list" :key="item.f_id">
						<img :src="item.f_cover"/>
						<span>{{ item.f_name }}</span>
					</div>
					<div class="clear"></div>
				</div>
				<div class="clear"></div>
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
	var imgUrl1="http://p1.music.126.net/n8eFxmgYCKD9qFfhzoxaWg==/109951163663193173.jpg";
	var imgUrl2="http://p1.music.126.net/3zCy9aqJ-pCoxRVoDOdsIg==/109951163665485062.jpg";
	var imgUrl3="http://p1.music.126.net/fPviQobrok-q_eEmcQ4-6g==/109951163662864125.jpg";
	var imgUrl4="http://p1.music.126.net/RskCHTsAbWnwPUNYBpqysg==/109951163663185330.jpg";
	export default {
		name: 'One',
		data(){
			return {
				msg:[imgUrl1,imgUrl2,imgUrl3,imgUrl4],
				list:[{}]
			}
		},
		mounted(){
			let _this=this;
			_this.$http
				.get("/recom")
				.then(function(res){
					console.log(res);
					_this.list=res.data;
				})
				.catch(function(err){
					console.log(err);
				})
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
	.swiper{
		margin: 0 auto;
		width: 1000px;
		padding-top: 10px;
	}
  
	.img {
		width: 100%;
	  	height: 100%;
	}
	  
	.main1 {
	  	width: 1000px;
	  	margin: 20px auto;
	}
	.main1_left{
	  	width: 750px;
	  	background-color: white;
	  	border-left: 1px solid darkgray;
	}
	.main1_right{
	  	width: 250px;
	  	background-color: white;
	  	border-left: 1px solid darkgray;
	  	border-right: 1px solid darkgray;
	}
	.left_top{
	  	/*background-color: darkcyan;*/
	  	width: 702px;
	  	height: 30px;
	  	margin-top: 20px;
	  	margin-left: 24px;
	  	border-bottom: 2px solid #FF7428;
	}
	.inline,li{
	  	display: inline-block;
	}
	.circle {
	  	width: 8px;
		height: 8px;
		border: 5px solid #FF7428;
		border-radius: 50%;
	}
	.hot {
	  	font-size: 18px;
	  	font-weight: 600;
	  	margin-left: 5px;
	  	margin-right: 20px;
	  	margin-top: 0;
	  	color: gray;
	}
	.line{
	  	width: 1px;
	  	height: 12px;
	  	background-color: gray;
	}
	li{
	  	color: gray;
	  	font-size: 14px;
	  	margin: 0 5px;
	}
	.left_mid{
	
	}
	.show {
	  	width: 120px;
	  	min-height: 170px;
	  	text-align: left;
	  	float: left;
	  	margin: 10px 0 0 24px;
	}
	.show img{
	  	width: 120px;
	  	height: 120px;
	}
	.show span {
		display: block;
		width: 100%;
		height: 45px;
		overflow: hidden;
	  	font-size: 12px;
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
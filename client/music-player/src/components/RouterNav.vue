<template>
	<div class="bg">
		<div class="left">
			<router-link to="/One" active-class="first">推荐</router-link>
		    <router-link to="/Two">排行榜</router-link>
		    <router-link to="/Three">歌单</router-link>
		    <router-link to="/Four">歌手</router-link>
		</div>
		<ul>
			<li><img src="../../static/img/icon1/xingxing1.png" /></li>
			<li>音乐直播</li>
			
			<li><img src="../../static/img/icon1/yinle1.png" /></li>
			<li>知了LIVE</li>

			<li><img src="../../static/img/icon1/icon-test1.png" /></li>
			<li>音乐人</li>
			
			<li><img src="../../static/img/icon1/shangcheng1.png" /></li>
			<li>音乐商城</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'RouterNav'
	}
</script>

<style scoped>
	.bg{
		width: 100%;
		height: 30px;
		background-color: wheat;
		border-top: 1px solid wheat;
		border-bottom: 1px solid wheat;
	}
	.bg a {
		display: inline-block;
		width: 100px;
		height: 30px;
		text-decoration: none;
		color: #FF7428;
		font-size: 18px;
		line-height: 30px;
		text-align: center;
	}
	.router-link-exact-active{
		color: white;
		border-radius: 15px;
		background-color: white;
	}
	.left{
		width: 500px;
		margin-left: 250px;
		float: left;
	}
	ul li {
		display: inline-block;
		height: 30px;
		vertical-align: middle;
		font-size: 12px;
		line-height: 30px;
		text-align: center;
	}
	ul li img {
		width: 18px;
		height: 18px;
		margin-top: 6px;
		margin-left: 15px;
	}
</style>
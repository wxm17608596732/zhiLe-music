<template>
	<div>
		<el-header class='com-title'>
			<span class="title-1">评论</span>
			<span class="title-num">共10条评论</span>
		</el-header>
		<el-container class='comment'>
			<div class="com-left">
				<el-container class="com-input">
					<div class="input-img">
						<img src="../../assets/logo.png" />
					</div>
					<div class="input-txt">
						<textarea placeholder="评论歌曲"></textarea>
						<el-button type="primary" size="mini">提交</el-button>
					</div>
				</el-container>
				<a id="com"></a>
				<ComeShow></ComeShow>
				
			</div>
			<div class="com-right">
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
	import ComeShow from './ComeShow';
	
	export default {
		name: 'Comment',
		components: {
	    	ComeShow
	    }
	}
</script>

<style scoped>
	.comment {
		width: 100%;
		background-color: rgba(245,222,179,0.6);
	}
	.com-title{
		height: 20px;
		width: 100%;
		line-height: 55px;
		background-color: rgba(245,222,179,0.6);
		border-bottom: 3px solid #FF7428;
	}
	.title-1{
		font-size: 20px;
		font-weight: 600;
		color: #FF7428;
		margin-right: 20px;
	}
	.title-num{
		font-size: 14px;
		color: gray;
	}
	.com-left {
		width: 697px;
		border-right: 3px solid #FF7428;
	}
	.com-left section{
		width: 600px;
		margin: 0 auto;
		/*background-color: chartreuse;*/
	}
	.com-input{
		height: 180px;
		border-bottom: 1px solid gray;
	}
	.input-img {
		width: 80px;
		height: 80px;
		margin: 20px;
	}
	.input-img img {
		width: 80px;
		height: 80px;
	}
	.input-txt {
		margin-top: 20px;
	}
	.input-txt textarea {
		width: 450px;
		height: 110px;
		resize: none;
		border-radius: 8px;
		padding-left: 10px;
	}
	.input-txt button {
		margin-left: 400px;
	}
	
	.com-right {
		width: 300px;
/*		background-color: yellow;*/
	}
	.r-1 {
		width: 220px;
		margin: 10px auto;
		font-size: 14px;
		font-weight: 600;
		border-bottom: 1px solid grey;
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
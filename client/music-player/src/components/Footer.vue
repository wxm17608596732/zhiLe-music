<template>
	<div class="foot">
		<ul>
			<li><a href="#">关于知了</a></li>
			<li class="line"></li>
			<li><a href="#">监督举报</a></li>
			<li class="line"></li>
			<li><a href="#">广告服务</a></li>
			<li class="line"></li>
			<li><a href="#">版权指引</a></li>
			<li class="line"></li>
			<li><a href="#">隐私政策</a></li>
			<li class="line"></li>
			<li><a href="#">推广合作</a></li>
			<li class="line"></li>
			<li><a href="#">知了音乐人</a></li>
			<li class="line"></li>
			<li><a href="#">客服中心</a></li>
			<li class="line"></li>
			<li><a href="#">用户体验计划</a></li>
		</ul>
		<div class="foot-bom">
			<p>
				我们致力于推动网络正版音乐发展，相关版权合作请联系
				<a href="#">zhilioa@163.com</a>
			</p>
			<p>
				不良信息举报及客服邮箱:<a href="#">zhilioa@163.com</a>
			</p>
			<p>
				不良信息举报及客服邮箱:<a href="#">zhilioa@163.com</a>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Footer"
	}
</script>

<style scoped>
	.foot{
		width: 100%;
		height: 160px;
		background-color: rgba(0,0,0,0.3);
	}
	.foot ul{
		width: 1200px;
		margin: 0 auto;
		text-align: center;
	}
	.foot ul li {
		margin-top: 20px;
		display: inline-block;
	}
	.foot ul li a{
		text-decoration: none;
		color: gray;
		font-size: 14px;
	}
	.foot ul li a:hover{
		color: #FF7428;
	}
	.line{
		width: 1px;
		height: 10px;
		margin: 0 10px;
		background-color: gray;
	}
	.foot-bom{
		width: 1200px;
		margin: 10px auto;
		text-align: center;
	}
	.foot-bom p {
		color: gray;
		font-size: 14px;
	}
	.foot-bom a{
		color: blue;
		text-decoration: none;
	}
</style>
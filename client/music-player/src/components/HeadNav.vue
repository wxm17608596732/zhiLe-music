<template>
	<div class="head">
		<div class="inline logo">
			<img src="../assets/logo.png" />
		</div>
		<div class="inline title">
			<span>知了音乐</span>
		</div>
		<div class="inline search">
			<el-input placeholder="搜索音乐" size='small' class="input-with-select">
    		<el-button slot="append" icon="el-icon-search"></el-button>
  			</el-input>
		</div>
		<ul class="inline ul">
			<li><a href="#">客服中心</a></li>	
			<li><a href="#">招贤纳士</a></li>	
			<li><a href="#">会员中心</a></li>	
			<li class="line"></li>
		</ul>
		<div class="inline LR">
			<el-button class='login' size='small' href="/login"><router-link to="/login">登录</router-link></el-button>
			<el-button class='login' size='small' href="/login"><router-link to="/signUp">注册</router-link></el-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Head"
	}
</script>

<style scoped>
	.head {
		width: 100%;
		height: 120px;
		background-color: #FF7428;
	}
	.inline {
		display: inline-block;
		vertical-align: middle;
		margin-left: 10px;
		margin-top: 10px;
	}
	.logo {
		width: 100px;
		height: 100px;
		margin-left: 200px;
	}
	.logo img {
		widows: 98px;
		height: 98px;
		border: 2px solid white;
		border-radius: 50%;
	}
	.title span {
		font-size: 24px;
		color: white;
		line-height: 100px;
		font-weight: bold;
	}
	.search {
		margin-left: 30px;
	}
	.ul li{
		display: inline-block;
		color: white;
		margin: 0 10px;
	}
	.ul li a {
		text-decoration: none;
		color: white;
	}
	.line {
		width: 1px;
		height: 14px;
		background-color: white;
	}
	.login{
		color: #FF7428;
	}
	.login a{
		text-decoration: none;
		color: #FF7428;
	}
</style>
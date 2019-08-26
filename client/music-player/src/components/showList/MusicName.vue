<template>
	<div class="biger">
		<div class="title">
			<div>歌曲列表</div>
			<div>共{{ songs.length }}首歌曲</div>
			<div>播放：<span>{{ play_num }} </span>次</div>
		</div>
		<div class="songs-show">
			<table>
				<tr>
					<th>序号</th>
					<th>歌曲标题</th>
					<th>时长</th>
					<th>歌手</th>
					<th>专辑</th>
				</tr>
				<tr v-for="(song,index) in songs" :key="song.m_id">
					<td>{{ index+1}}</td>
					<td class="song-name" @click="jump(index)">{{ song.m_name }}</td>
					<td>{{ song.m_long }}</td>
					<td>{{ song.singer }}</td>
					<td>{{ song.m_album }}</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			tableRowClassName({row,rowIndex}) {
				if(rowIndex === 1) {
					return 'warning-row';
				} else if(rowIndex === 3) {
					return 'success-row';
				}
				return '';
			},
			getSongInfo(){
				let _this = this;
				_this.$http
					.get("/getSongs",{params: {id:_this.$route.params.id}})
					.then(function(res){
						console.log(res);
						_this.songs = res.data;
					})
					.catch(function(err){
						console.log(err);
					})
			},
			 jump(index){
			    //this.$router.push("/cart")
			    //传递的参数用{{ $route.query.goodsId }}获取
			    let _this=this;
			    let Id=_this.$route.params.id;
			    let k=_this.songs[index].m_id;
			    let str='/Three/'+Id+'/'+ k;
			    this.$router.push({path: str});
			    //this.$router.go(-2)
			    //后退两步
			}
		},
		mounted(){
			let _this = this;
			console.log(_this.$route.params); 
			_this.getSongInfo();
		},
		data() {
			return {
				songs:[{}]
			}
		},
		props: {
			play_num: 0  //int类型
		}
	}
</script>

<style scoped>
	.biger{
		width: 720px;
		margin: 10px auto;
		/*background-color: thistle;*/
	}
	.title{
		width: 100%;
		height: 30px;
		border-bottom: 3px solid #FF7428;
		/*background-color: navajowhite;*/
	}
	.title div{
		height: 30px;
		float: left;
	}
	.title div:first-child{
		font-size: 20px;
		font-weight: 600;
		color: #FF7428;
		line-height: 30px;
	}
	.title div:nth-child(2){
		font-size: 14px;
		color: grey;
		line-height: 38px;
		margin-left: 15px;
	}
	.title div:last-child {
		font-size: 14px;
		color: grey;
		line-height: 38px;
		margin-left: 450px;
	}
	.title div span{
		font-size: 14px;
		color: #FF7428;
	}
	.songs-show {
		width: 720px;
	}
	.songs-show table{
		width: 700px;
		margin: 0 auto;
	}
	tr{
		height: 31px;
	}
	th {
		font-size: 14px;
		color: gray;
		text-align: left;
		background-color: gainsboro;
		padding-left:10px;
	}
	th:first-child{
		width: 80px;
	}
	th:nth-child(2){
		width: 300px;
	}
	th:nth-child(3){
		width: 100px;
	}
	th:nth-child(4){
		width: 100px;
	}
	th:nth-child(5){
		width: 120px;
	}
	tr:nth-child(2n){
		background-color: #FFFCF4;
	}
	tr:nth-child(2n-1){
		background-color: #F0F0F0;
	}
	.songs-show table tr td:nth-child(0){
		width: 100px;
	}
	td{
		font-size: 12px;
		height: 30px;
		color: grey;
		padding-left: 10px;
	}
	.song-name{
		color: #FF7428;
		cursor: pointer;
	}
</style>
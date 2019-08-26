<template>
	<div>
		<el-container class="com-show"  v-for="item in commentInfo" :key="item.c_id">
			<div class="comImg">
				<img :src="item.c_p_img " />
			</div>
			<div class="com-main">
				<p class="con-p">{{ item.c_people }}:</p>
				<span>{{ item.com }}</span>
				<p class="com-time">{{ item.c_time }}</p>
			</div>
		</el-container>
	</div>
</template>

<script>
	export default {
		name: 'ComeShow',
		data(){
			return {
				commentInfo:[{}]
			}
		},
		watch:{
			commentInfo:function(){
				let _this = this;
				console.log(_this.commentInfo.length);
				let len=_this.commentInfo.length;
				for(let i=0;i<_this.commentInfo.length;i++){
					_this.commentInfo[i].c_time=_this.timeFormat(_this.commentInfo[i].c_time,'yyyy-MM-dd HH:mm:ss');	
					console.log("========="+_this.commentInfo[i].c_time);
				}
			}
		},
		methods: {
			getComment(){
				let _this = this;
				
				_this.$http
					.get("/getComment",{params: {id:_this.$route.params.id}})
					.then(function(res){
						console.log(res);
						_this.commentInfo = res.data;
					})
					.catch(function(err){
						console.log(err);
					})
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
			}
		},
		mounted(){
			this.getComment();
		}
	}
</script>

<style scoped>
	.com-show{
		min-height: 130px;
		/*background-color: yellow;*/
		border-bottom: 1px dotted gray;
	}
	.comImg {
		width: 80px;
		height: 80px;
		margin: 20px;
	}
	.comImg img {
		width: 80px;
		height: 80px;
	}
	.con-p{
		font-size: 16px;
		font-weight: 500;
		line-height: 20px;
		color: cornflowerblue;
	}
	.com-main span {
		font-size: 14px;
		color: grey;
	}
	.com-time {
		font-size: 12px;
		color: grey;
	}
</style>
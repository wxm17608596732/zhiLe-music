<template>
    <div class="boby">
        <div class="bg bg-blur"></div>
        <div class="whole">
            <!-- 左侧用户信息显示模块 -->
            <div class="left">
                <div class="tuijian">
                    <div class="tuijian1">推荐</div>
                    <div class="tuijian2">
                        <a href=""><img src="../../../static/img/icon2x/yinle_1.png" alt=""><span>发现音乐</span></a>
                        <a href=""><img src="../../../static/img/icon2x/fashegongshuai.png" alt=""><span>私人FM</span></a>
                        <a href=""><img src="../../../static/img/icon2x/shipin.png" alt=""><span>视频</span></a>
                        <a href=""><img src="../../../static/img/icon2x/qunzu.png" alt=""><span>朋友</span></a>
                    </div>
                </div>
                <div class="wode">
                    <div class="wode1">我的音乐</div>
                    <div class="wode2">
                        <a href=""><img src="../../../static/img/icon2x/bendiyinleyunduanyinle24.png" alt=""><span>本地音乐</span></a>
                        <a href=""><img src="../../../static/img/icon2x/xiazai.png" alt=""><span>下载管理</span></a>
                    </div>
                </div>
                <div class="gedan">
                    <div class="gedan1">创建的歌单<img src="../../../static/img/icon2x/add.png" alt=""><a href="">∨</a></div>
                    <div class="gedan2">
                        <a href=""><img src="../../../static/img/icon2x/shoucang.png" alt=""><span>我喜欢的音乐</span></a>
                    </div>
                </div>
            </div>
    <!-- 右侧登录信息 -->
            <div class="right">
                <div class="juzhong">
                    <a href="" class="pic1"><img :src="userMsg[0].userImg" alt=""></a>
                    <div class="input1">
                        <el-input v-model="userMsg[0].userName" @focus="fun1" @blur="fun2" placeholder="请输入用户名">
                            <template slot="prepend">用户</template>
                        </el-input>
                        <p v-if="flag1" class="tips1">没有该用户，请重新输入或注册</p>
                    </div>
                    <div class="input1">
                        <el-input v-model="userMsg[0].userPwd" placeholder="请输入密码">
                            <template slot="prepend">密码</template>
                        </el-input>
                    </div>
                    <div class="radio">
                        <el-checkbox label="自动登录"></el-checkbox>
                    </div>
                    <div class="tips" v-if="flag2">密码错误</div>
                    <div class="sub">
                        <!--<input type="submit" value="登录">-->
                        <el-button @click="fun3">登录</el-button>
                    </div>
                    <div class="toRegist">
                        <router-link to='/signUp'>先注册？</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
            	flag1:false,
            	flag2:false,
            	userMsg:[{
            		userName:'',
            		userPwd:'',
            		userImg:''
            	}]
            }
        },
        methods:{
        	fun1:function(){
        		this.userImg='';
        	},
        	fun2:function(){
        		let _this=this;
        		_this.$http
        			.get('/validate',{params: {user:_this.userMsg[0].userName}})
        			.then(function(res){
        				console.log(res);
        				if(res.data.length==0){
        					//console.log("000");
							_this.flag1=true;
        				}else{
        					_this.userMsg[0].userImg=res.data[0].u_img;
        					_this.flag1=false;
        				}
        			})
        			.catch(function(err){
        				console.log(err);
        			})
        	},
        	fun3:function(){
        		let _this=this;
        		_this.$http
        			.get('/enter',{params: {userN:_this.userMsg[0].userName,userP:_this.userMsg[0].userPwd}})
        			.then(function(res){
        				if(res.data.length==0){
							_this.flag2=true;
        				}else{
        					_this.flag2=false;
        					setTimeout(function(){
        						_this.$router.push({path: '/One'});
        					},1000);
        				}
        			})
        			.catch(function(err){
        				console.log(err);
        			})
        	}
        },
        watch: {
        	
        }
    }
</script>

<style scoped>
    .boby {
        overflow: hidden;
    }

    .bg {
        background: url('../../../static/img/login/beijing.jpg');
        height:404px;
        text-align: center;
        line-height: 404px;
    }

    .bg-blur {
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        -webkit-filter: blur(15px);
        -moz-filter: blur(15px);
        -o-filter: blur(15px);
        -ms-filter: blur(15px);
        filter: blur(8px);
    }

    /* 版心 */
    .whole {
        width: 900px;
        display: flex;
        z-index: 9999;
        position: absolute;
        top:152px;
        left: 146px;
    }
    /* 左侧用户显示模块 */
    .left {
        width: 220px;
        font-size: 14px;
        background-color: rgba(0,0,0,0.3);
    }
    /*左侧公共样式部分 */
    .left a {
        display: block;
        width: 100%;
        height: 25px;
        position: relative;
        bottom: 0px;
        margin-top: 10px;
        color: #5C5C5C;
    }
    .left img {
        width: 20px;
        height: 20px;
        margin-left: 20px;
    }
    .left span {
        margin-left: 10px;
        line-height: 5px;
        position: absolute;
        top: 7px
    }
    /* 推荐 */
    .tuijian {
        width: 100%;
    }
    .tuijian1 {
        margin-left: 10px;
        font-size: 16px;
        line-height: 40px;
    }
    /* 我的音乐 */
    .wode {
        width: 100%;
        margin-top: 10px;
    }
    .wode1 {
        margin-left: 10px;
        font-size: 16px;
        line-height: 40px;
    }
    /* 创建的歌单 */
    .gedan {
        width: 100%;
        margin-top: 10px;
    }
    .gedan1 {
        margin-left: 10px;
        font-size: 16px;
        line-height: 40px;
    }
    .gedan1 img {
        width: 10px;
        height: 10px;
        margin-left: 86px;
        margin-top: 20px;
    }
    .gedan1 a {
        display: inline !important;
        text-decoration: none;
        margin-left: 10px;
    }
    /* 右侧登录栏 */
    .right {
        width: 680px;
        /* background-color: gold */
    }
    .juzhong {
        margin: 0 auto;
    }
    /* 头像 */
    .pic1 {
        margin: 15px 0px 15px 290px;
        display: block;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: antiquewhite;
    }
    .pic1 img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    /* 账号、密码 */
    .input1 {
        width: 355px;
        margin-left: 170px;
        margin-top: 12px;
    }
    /* 自动登录 */
    .radio {
        margin-left: 170px;
        margin-top: 10px;
    }
    /* 登录按钮 */
    button {
        width: 280px;
        height: 30px;
        margin-left: 210px;
        margin-top: 15px;
        line-height: 10px;
        border: 0px;
    }
    .toRegist{
    	width: 70px;
    	margin-top: 20px;
    	margin-left: 460px;
    }
    .toRegist a{
    	font-size: 14px;
    	color: white;
    }
    .tips{
    	width: 100%;
    	font-size: 12px;
    	color: red;
    	text-align: center;
    }
    .tips1{
    	font-size: 12px;
    	color: red;
    }
</style>
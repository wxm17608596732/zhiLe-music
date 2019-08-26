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
            <!-- <div class="bofangge"> -->
            <!-- <audio src="http://music.163.com/song/media/outer/url?id=1311319058.mp3"></audio> -->
            <!-- <audio controls>
                <source src="http://music.163.com/song/media/outer/url?id=1311319058.mp3" type="audio/mpeg">
                </source>
                <source src="http://music.163.com/song/media/outer/url?id=1311319058.ogg" type="audio/ogg">
                </source>
                <source src="http://music.163.com/song/media/outer/url?id=1311319058.wav" type="audio/wav">
                </source>
                您的浏览器不支持 HTML5 audio 标签。
            </audio>
        </div> -->
        <!-- 右侧注册信息 -->
            <div class="right">
                <div class="juzhong">
                    <div class="pic1">
                        <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </div>
                    <div class="input1">
                        <el-input v-model="input7" placeholder="请输入账号">
                            <template slot="prepend">账号</template>
                        </el-input>
                    </div>
                    <div class="input1">
                        <el-input placeholder="请输入手机号码" v-model="input7">
                            <template slot="prepend">+ 86</template>
                        </el-input>
                    </div>
                    <div class="input1">
                        <el-input v-model="input" placeholder="请输入密码">
                            <template slot="prepend">密码</template>
                        </el-input>
                    </div>
                    <div class="radio">
                        <el-checkbox label="记住密码？"></el-checkbox>
                    </div>
                    <div class="sub">
                        <input type="submit" value="注册">
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
            }
        }
    }
</script>

<style scoped>
	.boby {
        overflow: hidden;
    }
    
    .bg {
        background: url('../../../static/img/login/beijing.jpg');
        height: 404px;
        text-align: center;
        line-height: 404px;
    }
    .bg-blur {
        float: left;
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
        top: 152px;
        left: 146px;
    }

    /* 左侧用户显示模块 */
    .left {
        width: 220px;
        font-size: 14px;
        background-color: rgba(0, 0, 0, 0.3);
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
    }
    .juzhong {
        margin: 0 auto;
    }
    /* 上传头像 */
    .pic1 {
        margin-top: 15px;
        margin-left: 295px;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 100px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
    }
    .avatar {
        width: 100px;
        height: 100px;
        display: block;

    }
    /* 账号、手机号码、密码 */
    .input1 {
        width: 355px;
        margin-left: 170px;
        margin-top: 12px;
    }

    /* 记住密码？ */
    .radio {
        margin-left: 170px;
        margin-top: 10px;
    }

    /* 注册按钮 */
    .sub input {
        width: 280px;
        height: 35px;
        margin-left: 210px;
        margin-top: 15px;
        border: 0px;
    }
</style>
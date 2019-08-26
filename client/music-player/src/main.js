// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'   //引入vue模块
import App from './App' //引入App组件 
import router from './router' //引入路由模块
import ElementUI from 'element-ui'; //引入组件库
import 'element-ui/lib/theme-chalk/index.css'; //引入组件库的css文件

import Axios from 'axios'
Axios.defaults.baseURL= 'http://DESKTOP-2L8CFIS:8888';

Vue.prototype.$http = Axios

Vue.config.productionTip = false

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

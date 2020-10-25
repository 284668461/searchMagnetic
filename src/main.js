import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'


//导入全局样式
import global from './assets/css/global.css';

//导入字体图标
import fontIcon from './assets/fonts/font-awesome.min.css';

//导入皮肤
import skin from './assets/css/skin.css';
// import pinkSkin from './assets/css/pinkSkin.css';
// import orangeSkin from './assets/css/orangeSkin.css';



Vue.config.productionTip = false;


//导入请求库
import axios from 'axios';
// 配置请求根路径
let baseUrl = 'http://localhost:8081';
axios.defaults.baseURL = baseUrl;

axios.defaults.headers = {
    'Access-Control-Allow-Origin': "*",
    "Content-Type":"application/json;charset=UTF-8",
};


axios.interceptors.response.use(
    data => {
        return data;
    },
    error => {
        if (error.response.status === 509) {
            let html = error.response.data;
            let verifyWindow = window.open("","_blank","height=400,width=560");
            verifyWindow.document.write(html);
            verifyWindow.document.getElementById("baseUrl").value = baseUrl;
        }
    }
);



// 'Content-Type': 'application/x-www-form-urlencoded'


// 将 axios 挂载到vue ( 直接使用this.$http 就可访问到axios )
Vue.prototype.$axios= axios;
// axios.defaults.baseURL = '/api';




new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//高德地图 vue-amap 组件
import "./plugins/aMap"
// 引入阿里图标库
import '@/assets/style/iconfont/iconfont.css';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

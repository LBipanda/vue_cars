import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//高德地图 vue-amap 组件
import "./plugins/aMap"
// 引入阿里图标库
import '@/assets/style/iconfont/iconfont.css';
// 引入饿了么UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 引入全局组件
import "@/components/back/index"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

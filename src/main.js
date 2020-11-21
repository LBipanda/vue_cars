import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//高德地图 vue-amap 组件
import "./plugins/aMap"


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("@/views/index/index.vue"),
    children: [
      {
        path: "user",
        name: "User",
        component: () => import("@/views/user/index.vue"),
        children: [
          {
            path: "safety",
            name: "Safety",
            component: () => import("@/views/user/safety.vue"),
          },
          {
            path: "editPassword",
            name: "EditPassword",
            component: () => import("@/views/safety/editPassword.vue"),
          },
        ]
      },
      // {
      //   path: "safety",
      //   name: "safety",
      //   component: () => import("@/views/user/safety.vue"),
      // }
    ]
  },
  
];

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

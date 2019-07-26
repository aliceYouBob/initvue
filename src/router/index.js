import Vue from "vue";
import Router from "vue-router";
const HelloWorld = () => import("@/components/HelloWorld.vue");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name:'helloworld',
      component: HelloWorld
    }
  ]
});

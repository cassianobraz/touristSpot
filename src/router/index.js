import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
const lazyLoad = (view) => import(`../view/${view}.vue`);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:pathMatch(.*)*",
    component: lazyLoad("PageNotFound"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
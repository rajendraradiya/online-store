import { createRouter, createWebHistory } from "vue-router";

import homeRouter from "./home";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/product",
    },
    {
      path: "/",
      component: () => import("../layout/SiteLayout.vue"),
      children: [...homeRouter],
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../layout/PageNotFound.vue"),
    },
  ],
});

export default router;

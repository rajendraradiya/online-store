const home = [
  {
    path: "/product",
    component: () => import("../pages/productList.vue"),
  },
  {
    path: "/details/:id",
    component: () => import("../pages/productDetails.vue"),
  },
  {
    path: "/checkout",
    component: () => import("../pages/checkOutList.vue"),
  },
];

export default home;

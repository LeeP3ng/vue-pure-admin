export default [
  {
    path: "/admin",
    name: "Admin",
    component: () => import("@/views/admin/index.vue"),
    meta: {
      icon: "",
      title: "管理工作台",
      rank: 1
    },
    children: [
      {
        path: "/pricing-center",
        name: "PricingCenter",
        component: () => import("@/views/pricing-center/index.vue"),
        meta: {
          icon: "",
          title: "产品定价中心"
        }
      }
    ]
  }
] satisfies Array<RouteConfigsTable>;

const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "Home",
  component: Layout,
  redirect: "/dashboard",
  meta: {
    icon: "ep/home-filled",
    title: "工作台"
  },
  children: [
    {
      path: "/dashboard",
      name: "Welcome",
      component: () => import("@/views/dashboard/index.vue"),
      meta: {
        title: "工作台"
      }
    }
  ]
} satisfies RouteConfigsTable;

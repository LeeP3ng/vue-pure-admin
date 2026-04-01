const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "Home",
  component: Layout,
  redirect: "/dashboard",
  meta: {
    icon: "",
    title: "",
    rank: 0
  },
  children: [
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import("@/views/dashboard/index.vue"),
      meta: {
        title: "工作台"
      },
      children: [
        {
          path: "/step1",
          name: "Step1",
          component: () => import("@/views/step1/index.vue"),
          meta: {
            icon: "",
            title: "项目信息 & 标书上传"
          }
        },
        {
          path: "/step2",
          name: "Step2",
          component: () => import("@/views/step2/index.vue"),
          meta: {
            icon: "",
            title: "设备清单确认"
          }
        },
        {
          path: "/step3",
          name: "Step3",
          component: () => import("@/views/step3/index.vue"),
          meta: {
            icon: "",
            title: "AI推荐配置"
          }
        },
        {
          path: "/step4",
          name: "Step4",
          component: () => import("@/views/step4/index.vue"),
          meta: {
            icon: "",
            title: "报价总览 & 导出"
          }
        }
      ]
    }
  ]
} satisfies RouteConfigsTable;

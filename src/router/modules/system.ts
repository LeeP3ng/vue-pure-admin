export default [
  {
    path: "/system",
    meta: {
      icon: "ri:settings-3-line",
      title: "系统管理"
    },
    children: [
      {
        path: "/system/user/index",
        name: "SystemUser",
        component: () => import("@/views/system/user/index.vue"),
        meta: {
          icon: "ri:admin-line",
          title: "用户管理"
        }
      },
      {
        path: "/system/role/index",
        name: "SystemRole",
        component: () => import("@/views/system/role/index.vue"),
        meta: {
          icon: "ri:admin-fill",
          title: "角色管理"
        }
      },
      {
        path: "/system/menu/index",
        component: () => import("@/views/system/menu/index.vue"),
        name: "SystemMenu",
        meta: {
          icon: "ep:menu",
          title: "菜单管理"
        }
      },
      {
        path: "/system/dept/index",
        component: () => import("@/views/system/dept/index.vue"),
        name: "SystemDept",
        meta: {
          icon: "ri:git-branch-line",
          title: "部门管理"
        }
      }
    ]
  }
] satisfies Array<RouteConfigsTable>;

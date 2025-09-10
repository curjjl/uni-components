import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/components/button",
  },
  {
    path: "/components",
    name: "Components",
    component: () => import("./layouts/ComponentLayout.vue"),
    children: [
      {
        path: "button",
        name: "Button",
        component: () => import("./pages/button/index.vue"),
        meta: {
          title: "Button 按钮",
          category: "basic",
        },
      },
      // 其他组件路由将在这里添加
    ],
  },
  {
    path: "/guide",
    name: "Guide",
    component: () => import("./layouts/GuideLayout.vue"),
    children: [
      {
        path: "installation",
        name: "Installation",
        component: () => import("./pages/guide/installation.vue"),
        meta: { title: "安装" },
      },
      {
        path: "quickstart",
        name: "QuickStart",
        component: () => import("./pages/guide/quickstart.vue"),
        meta: { title: "快速开始" },
      },
    ],
  },
];

export default routes;

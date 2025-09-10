import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import UniComponents from "../packages/index";
import App from "./App.vue";
import routes from "./router";
import "./styles/index.css";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    }
    return { top: 0 };
  },
});

app.use(router);
app.use(Antd);
app.use(UniComponents);

app.mount("#app");

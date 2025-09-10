import { createApp } from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import UniComponents from "../packages/index";
import App from "./App.vue";

const app = createApp(App);

app.use(Antd);
app.use(UniComponents);

app.mount("#app");

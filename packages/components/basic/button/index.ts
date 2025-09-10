import Button from "./Button.vue";
import type { App } from "vue";

Button.install = (app: App) => {
  app.component("UniButton", Button);
  app.component("uni-button", Button);
};

export default Button;
export type { ButtonProps, ButtonSlots } from "@/types/button";

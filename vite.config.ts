import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "packages"),
      "@/components": resolve(__dirname, "packages/components"),
      "@/utils": resolve(__dirname, "packages/utils"),
      "@/types": resolve(__dirname, "packages/types"),
      "@/theme": resolve(__dirname, "packages/theme"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});

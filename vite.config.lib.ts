import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: "./tsconfig.json",
      outDir: "dist",
      insertTypesEntry: true,
      copyDtsFiles: false,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "packages/index.ts"),
      name: "UniComponents",
      formats: ["es", "cjs"],
      fileName: (format) => `uni-components.${format === "es" ? "js" : "cjs"}`,
    },
    rollupOptions: {
      external: ["vue", "ant-design-vue"],
      output: {
        globals: {
          vue: "Vue",
          "ant-design-vue": "antd",
        },
      },
    },
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "packages"),
      "@/components": resolve(__dirname, "packages/components"),
      "@/utils": resolve(__dirname, "packages/utils"),
      "@/types": resolve(__dirname, "packages/types"),
      "@/theme": resolve(__dirname, "packages/theme"),
    },
  },
});

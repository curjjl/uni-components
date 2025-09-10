import type { ConfigProviderProps } from "ant-design-vue";

export const defaultTheme: ConfigProviderProps["theme"] = {
  token: {
    colorPrimary: "#1677ff",
    borderRadius: 6,
    fontSize: 14,
  },
};

export const customTokens = {
  // 自定义组件库专用token
  componentPrefix: "uni",
  spacingUnit: 8,
};

export type UniTheme = typeof defaultTheme & typeof customTokens;

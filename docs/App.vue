<template>
  <div class="docs-app">
    <a-layout>
      <!-- 侧边导航 -->
      <a-layout-sider
        v-model:collapsed="collapsed"
        :width="280"
        theme="light"
        class="docs-sider"
      >
        <div class="docs-logo">
          <h2>Uni Components</h2>
        </div>

        <a-menu
          v-model:selectedKeys="selectedKeys"
          mode="inline"
          class="docs-menu"
          @click="handleMenuClick"
        >
          <a-menu-item-group key="guide" title="开发指南">
            <a-menu-item key="/guide/installation">
              <span>安装</span>
            </a-menu-item>
            <a-menu-item key="/guide/quickstart">
              <span>快速开始</span>
            </a-menu-item>
          </a-menu-item-group>

          <a-menu-item-group key="components" title="组件">
            <a-sub-menu key="basic" title="基础组件">
              <a-menu-item key="/components/button">Button 按钮</a-menu-item>
            </a-sub-menu>

            <a-sub-menu key="advanced" title="高级组件">
              <a-menu-item key="/components/tree" disabled
                >Tree 树形控件</a-menu-item
              >
              <a-menu-item key="/components/table" disabled
                >Table 表格</a-menu-item
              >
            </a-sub-menu>

            <a-sub-menu key="business" title="业务组件">
              <a-menu-item key="/components/user-selector" disabled
                >UserSelector 用户选择器</a-menu-item
              >
            </a-sub-menu>
          </a-menu-item-group>
        </a-menu>
      </a-layout-sider>

      <!-- 主内容区 -->
      <a-layout>
        <a-layout-header class="docs-header">
          <a-button
            type="text"
            class="docs-trigger"
            @click="collapsed = !collapsed"
          >
            <menu-unfold-outlined v-if="collapsed" />
            <menu-fold-outlined v-else />
          </a-button>

          <div class="docs-header-right">
            <a-button
              type="primary"
              href="https://github.com/yourcompany/uni-components"
              target="_blank"
            >
              GitHub
            </a-button>
          </div>
        </a-layout-header>

        <a-layout-content class="docs-content">
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import {
  Layout as ALayout,
  LayoutSider as ALayoutSider,
  LayoutHeader as ALayoutHeader,
  LayoutContent as ALayoutContent,
  Menu as AMenu,
  MenuItem as AMenuItem,
  MenuItemGroup as AMenuItemGroup,
  SubMenu as ASubMenu,
  Button as AButton,
} from "ant-design-vue";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";

const router = useRouter();
const route = useRoute();

const collapsed = ref(false);
const selectedKeys = ref<string[]>([]);

// 根据当前路由设置选中的菜单项
watch(
  () => route.path,
  (path) => {
    selectedKeys.value = [path];
  },
  { immediate: true },
);

const handleMenuClick = ({ key }: { key: string }) => {
  router.push(key);
};
</script>

<style scoped>
.docs-app {
  height: 100vh;
}

.docs-sider {
  border-right: 1px solid #e8e8e8;
  overflow-y: auto;
}

.docs-logo {
  padding: 16px 24px;
  border-bottom: 1px solid #e8e8e8;
}

.docs-logo h2 {
  margin: 0;
  color: #1677ff;
  font-size: 18px;
  font-weight: 600;
}

.docs-menu {
  border-right: none;
}

.docs-header {
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.docs-trigger {
  font-size: 16px;
}

.docs-header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.docs-content {
  padding: 24px;
  background: #fff;
  overflow-y: auto;
  height: calc(100vh - 64px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .docs-content {
    padding: 16px;
  }
}
</style>

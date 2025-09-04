# 使用指南

## 🚀 快速开始

### 安装

```bash
npm install @yourcompany/uni-components
```

### 基础用法

```typescript
// main.ts
import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import UniComponents from '@yourcompany/uni-components'
import 'ant-design-vue/dist/reset.css'
import '@yourcompany/uni-components/dist/style.css'

const app = createApp(App)
app.use(Antd)
app.use(UniComponents)
app.mount('#app')
```

## 📚 组件使用

### Button 按钮

```vue
<template>
  <!-- 基础按钮 -->
  <uni-button>默认按钮</uni-button>
  <uni-button type="primary">主要按钮</uni-button>
  <uni-button type="dashed">虚线按钮</uni-button>
  
  <!-- 不同尺寸 -->
  <uni-button size="small">小按钮</uni-button>
  <uni-button size="middle">中按钮</uni-button>
  <uni-button size="large">大按钮</uni-button>
  
  <!-- 按钮状态 -->
  <uni-button loading>加载中</uni-button>
  <uni-button disabled>禁用</uni-button>
  <uni-button danger>危险</uni-button>
  
  <!-- 块级按钮 -->
  <uni-button block type="primary">块级按钮</uni-button>
  
  <!-- 事件处理 -->
  <uni-button @click="handleClick">点击事件</uni-button>
</template>

<script setup lang="ts">
const handleClick = (event: MouseEvent) => {
  console.log('按钮被点击', event)
}
</script>
```

### Props 类型

```typescript
interface ButtonProps {
  type?: 'primary' | 'default' | 'dashed' | 'text' | 'link'
  size?: 'small' | 'middle' | 'large'
  disabled?: boolean
  loading?: boolean
  block?: boolean
  danger?: boolean
  ghost?: boolean
  shape?: 'default' | 'circle' | 'round'
  htmlType?: 'button' | 'submit' | 'reset'
  href?: string
  target?: string
}
```

## 🎨 主题定制

### 使用默认主题

```typescript
import { ConfigProvider } from 'ant-design-vue'
import { defaultTheme } from '@yourcompany/uni-components'

// 在根组件中配置
<template>
  <ConfigProvider :theme="defaultTheme">
    <App />
  </ConfigProvider>
</template>
```

### 自定义主题

```typescript
import type { ThemeConfig } from 'ant-design-vue'

const customTheme: ThemeConfig = {
  token: {
    colorPrimary: '#00b96b',
    borderRadius: 8,
    fontSize: 16
  }
}
```

## 📱 响应式使用

组件库完全支持响应式设计，可以在不同屏幕尺寸下正常使用：

```vue
<template>
  <div class="responsive-layout">
    <uni-button 
      :block="isMobile"
      :size="isMobile ? 'large' : 'middle'"
    >
      响应式按钮
    </uni-button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isMobile = ref(false)

const updateScreenSize = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  updateScreenSize()
  window.addEventListener('resize', updateScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize)
})
</script>
```

## 🔧 按需加载

为了减少打包体积，推荐使用按需加载：

```typescript
// 方式1: 导入特定组件
import { Button } from '@yourcompany/uni-components'

// 方式2: 使用插件（如果支持）
import { createApp } from 'vue'
import { Button, Input } from '@yourcompany/uni-components'

const app = createApp(App)
app.use(Button)
app.use(Input)
```

## 🐛 常见问题

### Q: 样式没有生效？
A: 确保导入了样式文件：
```typescript
import '@yourcompany/uni-components/dist/style.css'
```

### Q: TypeScript 类型错误？
A: 确保安装了类型依赖：
```bash
npm install --save-dev @types/vue
```

### Q: 与现有 Ant Design Vue 冲突？
A: 组件库基于 Ant Design Vue 构建，确保版本兼容：
```json
{
  "peerDependencies": {
    "vue": "^3.4.0",
    "ant-design-vue": "^4.0.0"
  }
}
```
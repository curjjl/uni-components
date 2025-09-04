# Uni Components

一个基于 Vue 3 和 Ant Design Vue 的企业级组件库。

## ✨ 特性

- 🔥 **Vue 3 + TypeScript**: 完整的类型支持
- 🎨 **基于 Ant Design Vue**: 继承优秀的设计语言
- 📦 **按需加载**: 支持 Tree Shaking
- 🔧 **开箱即用**: 丰富的组件和完善的文档
- 🌈 **主题定制**: 灵活的主题配置
- 💪 **TypeScript**: 完整的类型定义

## 📦 安装

```bash
# npm
npm install @yourcompany/uni-components

# yarn  
yarn add @yourcompany/uni-components

# pnpm
pnpm add @yourcompany/uni-components
```

## 🔨 使用

### 完整引入

```typescript
import { createApp } from 'vue'
import UniComponents from '@yourcompany/uni-components'
import '@yourcompany/uni-components/dist/style.css'

const app = createApp(App)
app.use(UniComponents)
```

### 按需引入

```typescript
import { Button } from '@yourcompany/uni-components'
import '@yourcompany/uni-components/dist/style.css'

export default {
  components: {
    UniButton: Button
  }
}
```

### 在模板中使用

```vue
<template>
  <div>
    <uni-button type="primary" @click="handleClick">
      点击按钮
    </uni-button>
  </div>
</template>
```

## 📚 组件分类

### 基础组件
- **Button** - 按钮组件
- **Input** - 输入框组件（待开发）
- **Icon** - 图标组件（待开发）

### 高级组件  
- **Tree** - 树形组件（待开发）
- **Table** - 表格组件（待开发）
- **Form** - 表单组件（待开发）

### 业务组件
- **UserSelector** - 用户选择器（待开发）
- **DataUploader** - 数据上传器（待开发）

## 🔗 相关链接

- [组件文档](docs/)
- [更新日志](CHANGELOG.md)
- [开发指南](docs/development.md)

## 🤝 贡献

请参考 [贡献指南](docs/contributing.md)

## 📄 License

MIT
# 开发指南

## 🚀 快速开始

### 环境要求
- Node.js >= 18
- npm >= 9

### 本地开发
```bash
# 克隆项目
git clone <repository-url>
cd uni-components

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 📝 组件开发规范

### 1. 目录结构
```
packages/components/{category}/{component-name}/
├── Component.vue          # 组件实现
├── index.ts              # 导出文件
└── Component.test.ts     # 单元测试
```

### 2. 组件命名
- 文件名使用 PascalCase: `Button.vue`
- 组件名使用 uni 前缀: `UniButton`
- CSS 类名使用 `uni-` 前缀

### 3. Props 设计
- 在 `packages/types/` 中定义接口
- 继承通用基础接口
- 遵循 Ant Design Vue 的命名约定

### 4. 样式规范
- 使用 scoped 样式
- CSS 类名以 `uni-` 开头
- 支持主题定制

## 🧪 测试

### 运行测试
```bash
npm run test              # 运行所有测试
npm run test:ui           # 可视化测试界面
npm run test:coverage     # 生成覆盖率报告
```

### 测试要求
- 每个组件必须有单元测试
- 测试覆盖率 > 80%
- 测试事件处理和边界情况

## 📋 发布流程

### 开发流程
1. 从 `develop` 分支创建功能分支
2. 开发组件并编写测试
3. 提交 PR 到 `develop` 分支
4. 代码评审通过后合并

### 发布流程  
1. 从 `develop` 合并到 `main`
2. 更新版本号和 CHANGELOG
3. 创建 Git tag
4. 自动触发 CI/CD 发布

## 🔧 工具配置

### 代码规范
- ESLint: 代码风格检查
- TypeScript: 类型检查
- Prettier: 代码格式化（可选配置）

### 构建工具
- Vite: 开发和构建
- Vue SFC: 单文件组件支持
- TypeScript: 类型定义生成
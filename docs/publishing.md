# 发布指南

## 📦 发布到内部 NPM 仓库

### 前置准备

1. **配置内部 NPM 仓库认证**
```bash
# 登录内部 npm 仓库
npm login --registry=https://npm.yourcompany.com/

# 或设置认证 token
npm config set //npm.yourcompany.com/:_authToken="<your-token>"
```

2. **验证配置**
```bash
npm whoami --registry=https://npm.yourcompany.com/
```

### 🔄 版本管理策略

遵循 [语义化版本控制](https://semver.org/lang/zh-CN/)：

- **PATCH (0.1.1)**: 修复 bug，向后兼容
- **MINOR (0.2.0)**: 新增功能，向后兼容  
- **MAJOR (1.0.0)**: 破坏性变更

### 📋 发布检查清单

发布前确保：

- [ ] 所有测试通过 (`npm run test`)
- [ ] 代码检查通过 (`npm run lint:check`)
- [ ] 类型检查通过 (`npm run type-check`) 
- [ ] 构建成功 (`npm run build:lib`)
- [ ] 更新 CHANGELOG.md
- [ ] 更新版本号
- [ ] Git 工作区干净

### 🚀 发布命令

```bash
# 1. 预检查（推荐）
npm run publish:dry

# 2. 发布版本
npm run release:patch    # 修复版本
npm run release:minor    # 功能版本  
npm run release:major    # 重大版本

# 3. 手动发布（高级用户）
npm version patch        # 更新版本号
npm publish             # 发布到仓库
```

### 🔍 发布验证

发布后验证：

```bash
# 检查包是否发布成功
npm view @yourcompany/uni-components --registry=https://npm.yourcompany.com/

# 在测试项目中安装验证
npm install @yourcompany/uni-components
```

## 🤖 自动化发布 (CI/CD)

### GitHub Actions 工作流

1. **持续集成** (`.github/workflows/ci.yml`)
   - 代码质量检查
   - 自动化测试
   - 构建验证

2. **版本检查** (`.github/workflows/version-check.yml`)
   - PR 中自动检查版本号更新

3. **自动发布** (`.github/workflows/publish.yml`)
   - 创建 Release 时自动发布

### 配置 Secrets

在 GitHub 仓库设置中添加：
- `NPM_TOKEN`: 内部 npm 仓库的认证 token

## ⚠️ 注意事项

### 安全要求
- 永远不要提交敏感信息（token、密码）
- 使用 `.npmrc` 配置仓库地址，不要硬编码
- 定期更新依赖版本

### 质量要求  
- 确保测试覆盖率 > 80%
- 遵循组件库 API 设计规范
- 提供清晰的 TypeScript 类型定义

### 兼容性
- 明确支持的 Vue 版本范围
- 声明 Ant Design Vue 的版本依赖
- 测试多个 Node.js 版本

## 🔧 故障排除

### 常见问题

**1. 发布权限错误**
```bash
# 检查登录状态
npm whoami --registry=https://npm.yourcompany.com/

# 重新登录
npm login --registry=https://npm.yourcompany.com/
```

**2. 版本冲突**
```bash
# 查看已发布版本
npm view @yourcompany/uni-components versions --json

# 更新到正确版本
npm version patch
```

**3. 构建失败**
```bash
# 清理缓存重新构建
rm -rf node_modules dist
npm install
npm run build:lib
```
# 变更日志

所有对此项目的重要更改都将记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)，
并且此项目遵循 [语义化版本控制](https://semver.org/lang/zh-CN/)。

## [Unreleased]

### Added
- 项目初始化
- Button 基础组件实现
- TypeScript 类型支持
- 单元测试框架
- 构建和发布配置

## [0.1.0] - 2024-09-04

### Added
- 🎉 项目初始发布
- ✨ Button 组件
  - 支持多种类型：primary、default、dashed、text、link
  - 支持多种尺寸：small、middle、large
  - 支持状态：loading、disabled、danger、ghost
  - 支持块级按钮
  - 完整 TypeScript 类型支持
- 🔧 开发环境搭建
  - Vite + Vue 3 + TypeScript
  - ESLint + Vitest 测试
  - Playground 调试环境
- 📦 构建和发布配置
  - 支持 ES Module 和 CommonJS
  - 类型定义文件生成
  - npm 发布配置
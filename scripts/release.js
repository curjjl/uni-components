#!/usr/bin/env node
/* eslint-env node */

/**
 * 发布脚本
 * 用法: npm run release:patch | npm run release:minor | npm run release:major
 */

import { execSync } from "child_process";
import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageJsonPath = join(__dirname, "../package.json");

function runCommand(command, description) {
  console.log(`\n🔄 ${description}...`);
  try {
    execSync(command, { stdio: "inherit" });
    console.log(`✅ ${description} 完成`);
  } catch (error) {
    console.error(`❌ ${description} 失败:`, error.message);
    process.exit(1);
  }
}

function getCurrentVersion() {
  const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));
  return packageJson.version;
}

async function main() {
  console.log("🚀 开始发布流程...\n");

  // 1. 检查Git状态
  runCommand("git status --porcelain", "检查Git工作区状态");

  // 2. 运行质量检查
  runCommand("npm run quality-check", "执行代码质量检查");

  // 3. 构建组件库
  runCommand("npm run build:lib", "构建组件库");

  // 4. 获取当前版本
  const oldVersion = getCurrentVersion();
  console.log(`\n📦 当前版本: ${oldVersion}`);

  // 5. 发布 (版本更新和发布由npm scripts处理)
  console.log("\n✅ 预检查完成，准备发布...");
  console.log("请运行以下命令之一进行发布:");
  console.log("  npm run release:patch  # 修复版本 (0.1.0 -> 0.1.1)");
  console.log("  npm run release:minor  # 功能版本 (0.1.0 -> 0.2.0)");
  console.log("  npm run release:major  # 重大版本 (0.1.0 -> 1.0.0)");
}

main().catch(console.error);

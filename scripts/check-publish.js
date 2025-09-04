#!/usr/bin/env node

/**
 * 发布前检查脚本
 * 确保包内容和配置正确
 */

import { execSync } from 'child_process'
import { readFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')

function checkFileExists(filePath, description) {
  const fullPath = join(rootDir, filePath)
  if (!existsSync(fullPath)) {
    console.error(`❌ 缺少必需文件: ${filePath} (${description})`)
    return false
  }
  console.log(`✅ ${description}: ${filePath}`)
  return true
}

function checkPackageJson() {
  console.log('\n📋 检查package.json配置...')
  
  const packageJson = JSON.parse(readFileSync(join(rootDir, 'package.json'), 'utf8'))
  const checks = []
  
  // 检查必需字段
  checks.push(packageJson.name?.includes('@') ? '✅ 包名包含作用域' : '❌ 包名应包含作用域 (@yourcompany)')
  checks.push(packageJson.main ? '✅ main字段配置' : '❌ 缺少main字段')
  checks.push(packageJson.module ? '✅ module字段配置' : '❌ 缺少module字段') 
  checks.push(packageJson.types ? '✅ types字段配置' : '❌ 缺少types字段')
  checks.push(packageJson.files?.includes('dist') ? '✅ files字段包含dist' : '❌ files字段应包含dist')
  checks.push(packageJson.publishConfig ? '✅ publishConfig配置' : '❌ 缺少publishConfig配置')
  
  checks.forEach(check => console.log(check))
  return checks.every(check => check.startsWith('✅'))
}

function checkBuildOutput() {
  console.log('\n🔧 检查构建输出...')
  
  const distFiles = [
    'dist/uni-components.js',
    'dist/uni-components.cjs', 
    'dist/index.d.ts',
    'dist/style.css'
  ]
  
  return distFiles.every(file => checkFileExists(file, '构建产物'))
}

async function main() {
  console.log('🔍 开始发布前检查...\n')
  
  let allChecks = true
  
  // 基础文件检查
  console.log('📁 检查项目文件...')
  const requiredFiles = [
    ['README.md', '项目说明文档'],
    ['CHANGELOG.md', '变更日志'],
    ['package.json', '包配置文件'],
    ['.npmrc', 'npm配置文件']
  ]
  
  requiredFiles.forEach(([file, desc]) => {
    if (!checkFileExists(file, desc)) allChecks = false
  })
  
  // package.json检查
  if (!checkPackageJson()) allChecks = false
  
  // 构建输出检查
  if (!checkBuildOutput()) {
    console.log('\n⚠️  构建产物不存在，将自动构建...')
    try {
      execSync('npm run build:lib', { stdio: 'inherit', cwd: rootDir })
      if (!checkBuildOutput()) allChecks = false
    } catch (error) {
      console.error('❌ 构建失败:', error.message)
      allChecks = false
    }
  }
  
  // Git检查
  console.log('\n📝 检查Git状态...')
  try {
    const gitStatus = execSync('git status --porcelain', { encoding: 'utf8', cwd: rootDir })
    if (gitStatus.trim()) {
      console.log('⚠️  工作区有未提交的更改:')
      console.log(gitStatus)
      console.log('建议提交或暂存更改后再发布')
    } else {
      console.log('✅ Git工作区干净')
    }
  } catch (error) {
    console.error('❌ Git检查失败:', error.message)
  }
  
  if (allChecks) {
    console.log('\n🎉 发布前检查通过！可以安全发布。')
    return true
  } else {
    console.log('\n❌ 发布前检查失败，请修复上述问题后重试。')
    process.exit(1)
  }
}

main().catch(console.error)
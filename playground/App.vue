<template>
  <div class="playground">
    <h1>Uni Components Playground</h1>

    <section class="demo-section">
      <h2>Button 组件示例</h2>

      <div class="demo-group">
        <h3>基础按钮</h3>
        <div class="button-group">
          <uni-button>默认按钮</uni-button>
          <uni-button type="primary">主要按钮</uni-button>
          <uni-button type="dashed">虚线按钮</uni-button>
          <uni-button type="text">文本按钮</uni-button>
          <uni-button type="link">链接按钮</uni-button>
        </div>
      </div>

      <div class="demo-group">
        <h3>按钮尺寸</h3>
        <div class="button-group">
          <uni-button size="small">小按钮</uni-button>
          <uni-button size="middle">中按钮</uni-button>
          <uni-button size="large">大按钮</uni-button>
        </div>
      </div>

      <div class="demo-group">
        <h3>按钮状态</h3>
        <div class="button-group">
          <uni-button loading>加载中</uni-button>
          <uni-button disabled>禁用状态</uni-button>
          <uni-button danger>危险按钮</uni-button>
          <uni-button ghost>幽灵按钮</uni-button>
        </div>
      </div>

      <div class="demo-group">
        <h3>块级按钮</h3>
        <uni-button block type="primary">块级按钮</uni-button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// 组件会通过全局注册自动可用
</script>

<style scoped>
.playground {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

h1 {
  color: #1677ff;
  text-align: center;
  margin-bottom: 40px;
}

.demo-section {
  background: #fafafa;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 24px;
}

.demo-group {
  margin-bottom: 24px;
}

.demo-group:last-child {
  margin-bottom: 0;
}

h3 {
  margin-bottom: 16px;
  color: #262626;
}

.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.button-group .uni-button {
  min-width: 80px;
}
</style>

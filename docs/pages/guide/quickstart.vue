<template>
  <div class="guide-page">
    <div class="page-header">
      <h1>快速开始</h1>
      <p>通过几个简单的步骤，快速上手使用 Uni Components。</p>
    </div>

    <div class="page-content">
      <section class="doc-section">
        <h2>完整引入</h2>
        <p>在 main.ts 中引入所有组件：</p>
        <div class="code-block">
          <pre><code>import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import UniComponents from '@yourcompany/uni-components'
import 'ant-design-vue/dist/reset.css'
import '@yourcompany/uni-components/dist/style.css'

const app = createApp(App)
app.use(Antd)
app.use(UniComponents)
app.mount('#app')</code></pre>
        </div>
      </section>

      <section class="doc-section">
        <h2>按需引入</h2>
        <p>为了减少打包体积，推荐使用按需引入：</p>
        <div class="code-block">
          <pre><code>import { Button } from '@yourcompany/uni-components'
import '@yourcompany/uni-components/dist/style.css'

export default {
  components: {
    UniButton: Button
  }
}</code></pre>
        </div>
      </section>

      <section class="doc-section">
        <h2>在模板中使用</h2>
        <div class="demo-container">
          <div class="demo-preview">
            <uni-button type="primary">Hello Uni Components!</uni-button>
          </div>
          <div class="code-block">
            <pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;uni-button type="primary"&gt;Hello Uni Components!&lt;/uni-button&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
          </div>
        </div>
      </section>

      <section class="doc-section">
        <h2>TypeScript 支持</h2>
        <p>Uni Components 使用 TypeScript 编写，提供完整的类型定义：</p>
        <div class="code-block">
          <pre><code>import type { ButtonProps } from '@yourcompany/uni-components'

const buttonProps: ButtonProps = {
  type: 'primary',
  size: 'large',
  loading: false
}</code></pre>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件会通过全局注册自动可用
</script>

<style scoped>
.guide-page {
  max-width: 800px;
}

.page-header {
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e8e8e8;
}

.page-header h1 {
  margin: 0 0 16px 0;
  font-size: 32px;
  font-weight: 600;
  color: #262626;
}

.page-header p {
  margin: 0;
  font-size: 16px;
  color: #666;
}

.doc-section {
  margin-bottom: 32px;
}

.doc-section h2 {
  margin: 0 0 16px 0;
  font-size: 24px;
  font-weight: 500;
  color: #262626;
}

.doc-section p {
  margin: 0 0 16px 0;
  font-size: 14px;
  line-height: 1.6;
  color: #666;
}

.demo-container {
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  overflow: hidden;
  margin: 16px 0;
}

.demo-preview {
  padding: 24px;
  background: #fafafa;
  border-bottom: 1px solid #e8e8e8;
}

.code-block {
  background: #f6f8fa;
  border: 1px solid #e1e8ed;
  border-radius: 6px;
  padding: 16px;
  margin: 16px 0;
}

.demo-container .code-block {
  border: none;
  border-radius: 0;
  margin: 0;
}

.code-block pre {
  margin: 0;
  font-family:
    "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
  font-size: 14px;
  color: #24292e;
  overflow-x: auto;
}
</style>

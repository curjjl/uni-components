<template>
  <div class="guide-page">
    <div class="page-header">
      <h1>安装</h1>
      <p>通过 npm 或 yarn 安装 Uni Components。</p>
    </div>

    <div class="page-content">
      <section class="doc-section">
        <h2>使用 npm 安装</h2>
        <div class="code-block">
          <pre><code>npm install @yourcompany/uni-components</code></pre>
          <a-button
            type="text"
            size="small"
            class="copy-btn"
            @click="copyCommand('npm install @yourcompany/uni-components')"
          >
            <copy-outlined />
          </a-button>
        </div>
      </section>

      <section class="doc-section">
        <h2>使用 yarn 安装</h2>
        <div class="code-block">
          <pre><code>yarn add @yourcompany/uni-components</code></pre>
          <a-button
            type="text"
            size="small"
            class="copy-btn"
            @click="copyCommand('yarn add @yourcompany/uni-components')"
          >
            <copy-outlined />
          </a-button>
        </div>
      </section>

      <section class="doc-section">
        <h2>使用 pnpm 安装</h2>
        <div class="code-block">
          <pre><code>pnpm add @yourcompany/uni-components</code></pre>
          <a-button
            type="text"
            size="small"
            class="copy-btn"
            @click="copyCommand('pnpm add @yourcompany/uni-components')"
          >
            <copy-outlined />
          </a-button>
        </div>
      </section>

      <section class="doc-section">
        <h2>浏览器兼容性</h2>
        <p>Uni Components 支持所有现代浏览器。</p>
        <ul>
          <li>Chrome >= 87</li>
          <li>Firefox >= 78</li>
          <li>Safari >= 14</li>
          <li>Edge >= 88</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { h } from "vue";
import { Button as AButton, message } from "ant-design-vue";
import { CopyOutlined } from "@ant-design/icons-vue";
import { copyToClipboard } from "../../utils/code-preview";

const copyCommand = async (command: string) => {
  const success = await copyToClipboard(command);
  if (success) {
    message.success("命令已复制到剪贴板");
  } else {
    message.error("复制失败，请手动复制");
  }
};
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

.doc-section ul {
  margin: 0;
  padding-left: 20px;
}

.doc-section li {
  font-size: 14px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 4px;
}

.code-block {
  position: relative;
  background: #f6f8fa;
  border: 1px solid #e1e8ed;
  border-radius: 6px;
  padding: 16px;
  margin: 16px 0;
}

.code-block pre {
  margin: 0;
  font-family:
    "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
  font-size: 14px;
  color: #24292e;
}

.copy-btn {
  position: absolute;
  top: 12px;
  right: 12px;
}
</style>

<template>
  <div class="code-preview">
    <div class="preview-header">
      <h3 v-if="title" class="demo-title">{{ title }}</h3>
      <p v-if="description" class="demo-description">{{ description }}</p>
    </div>

    <!-- 组件预览区域 -->
    <div class="preview-demo">
      <component :is="demoComponent" v-if="demoComponent" />
    </div>

    <!-- 操作按钮 -->
    <div class="preview-actions">
      <a-tooltip title="复制代码">
        <a-button
          type="text"
          size="small"
          :icon="copyIcon"
          @click="handleCopy"
        />
      </a-tooltip>
      <a-tooltip title="查看源码">
        <a-button
          type="text"
          size="small"
          :icon="codeIcon"
          @click="toggleCode"
        />
      </a-tooltip>
    </div>

    <!-- 代码展示区域 -->
    <div v-if="showCode" class="preview-code">
      <pre><code class="language-vue">{{ formattedCode }}</code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, h } from "vue";
import {
  Button as AButton,
  Tooltip as ATooltip,
  message,
} from "ant-design-vue";
import { CopyOutlined, CodeOutlined } from "@ant-design/icons-vue";
import { copyToClipboard, formatCode } from "../utils/code-preview";

interface Props {
  title?: string;
  description?: string;
  code: string;
  component?: any;
}

const props = defineProps<Props>();

const showCode = ref(false);
const copyIcon = h(CopyOutlined);
const codeIcon = h(CodeOutlined);

const formattedCode = computed(() => formatCode(props.code));
const demoComponent = computed(() => props.component);

const toggleCode = () => {
  showCode.value = !showCode.value;
};

const handleCopy = async () => {
  const success = await copyToClipboard(formattedCode.value);
  if (success) {
    message.success("代码已复制到剪贴板");
  } else {
    message.error("复制失败，请手动复制");
  }
};
</script>

<style scoped>
.code-preview {
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  margin-bottom: 24px;
  overflow: hidden;
  transition: box-shadow 0.2s;
}

.code-preview:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.preview-header {
  padding: 16px 24px 0;
}

.demo-title {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 500;
  color: #262626;
}

.demo-description {
  margin: 0 0 16px 0;
  color: #666;
  font-size: 14px;
  line-height: 1.5;
}

.preview-demo {
  padding: 24px;
  background: #fafafa;
  border-bottom: 1px solid #e8e8e8;
  position: relative;
}

.preview-actions {
  display: flex;
  justify-content: flex-end;
  padding: 8px 12px;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
}

.preview-actions .ant-btn {
  margin-left: 8px;
}

.preview-code {
  background: #f6f8fa;
  padding: 16px;
  border-top: 1px solid #e8e8e8;
}

.preview-code pre {
  margin: 0;
  background: transparent;
  border: none;
  font-family:
    "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
  font-size: 13px;
  line-height: 1.45;
  overflow-x: auto;
}

.preview-code code {
  color: #24292e;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
}

/* 代码高亮样式 */
.language-vue .token.tag {
  color: #d73a49;
}

.language-vue .token.attr-name {
  color: #6f42c1;
}

.language-vue .token.attr-value {
  color: #032f62;
}

.language-vue .token.punctuation {
  color: #24292e;
}

.language-vue .token.script {
  color: #24292e;
}
</style>

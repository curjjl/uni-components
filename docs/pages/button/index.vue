<template>
  <div class="component-page">
    <div class="page-header">
      <h1>Button 按钮</h1>
      <p>按钮用于开始一个即时操作。</p>
    </div>

    <div class="page-content">
      <!-- 何时使用 -->
      <section class="doc-section">
        <h2>何时使用</h2>
        <p>
          标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
        </p>
        <p>在 Ant Design 中我们提供了五种按钮。</p>
        <ul>
          <li>主按钮：用于主行动点，一个操作区域只能有一个主按钮。</li>
          <li>默认按钮：用于没有主次之分的一组行动点。</li>
          <li>虚线按钮：常用于添加操作。</li>
          <li>文本按钮：用于最次级的行动点。</li>
          <li>链接按钮：一般用于链接，即导航至某位置。</li>
        </ul>
      </section>

      <!-- 代码演示 -->
      <section class="doc-section">
        <h2>代码演示</h2>

        <!-- 基础用法 -->
        <code-preview
          title="按钮类型"
          description="按钮有五种类型：主按钮、默认按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。"
          :code="basicCode"
          :component="BasicDemo"
        />

        <!-- 按钮尺寸 -->
        <code-preview
          title="按钮尺寸"
          description="按钮有大、中、小三种尺寸。通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。"
          :code="sizeCode"
          :component="SizeDemo"
        />

        <!-- 加载状态 -->
        <code-preview
          title="加载中状态"
          description="添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。"
          :code="loadingCode"
          :component="LoadingDemo"
        />

        <!-- 禁用状态 -->
        <code-preview
          title="禁用状态"
          description="添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。"
          :code="disabledCode"
          :component="DisabledDemo"
        />
      </section>

      <!-- API文档 -->
      <section class="doc-section">
        <h2>API</h2>

        <h3>Button Props</h3>
        <a-table
          :columns="propsColumns"
          :data-source="propsData"
          :pagination="false"
          size="small"
        />

        <h3>Button Events</h3>
        <a-table
          :columns="eventsColumns"
          :data-source="eventsData"
          :pagination="false"
          size="small"
        />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Table as ATable } from "ant-design-vue";
import CodePreview from "../../components/CodePreview.vue";
import BasicDemo from "./demos/basic.vue";
import SizeDemo from "./demos/size.vue";
import LoadingDemo from "./demos/loading.vue";
import DisabledDemo from "./demos/disabled.vue";

// 导入代码示例
import basicCode from "./codes/basic";
import sizeCode from "./codes/size";
import loadingCode from "./codes/loading";
import disabledCode from "./codes/disabled";

// API文档表格数据
const propsColumns = [
  { title: "参数", dataIndex: "prop", key: "prop" },
  { title: "说明", dataIndex: "description", key: "description" },
  { title: "类型", dataIndex: "type", key: "type" },
  { title: "默认值", dataIndex: "default", key: "default" },
];

const propsData = [
  {
    prop: "type",
    description: "设置按钮类型",
    type: "primary | default | dashed | text | link",
    default: "default",
  },
  {
    prop: "size",
    description: "设置按钮大小",
    type: "small | middle | large",
    default: "middle",
  },
  {
    prop: "disabled",
    description: "按钮失效状态",
    type: "boolean",
    default: "false",
  },
  {
    prop: "loading",
    description: "设置按钮载入状态",
    type: "boolean",
    default: "false",
  },
  {
    prop: "block",
    description: "将按钮宽度调整为其父宽度的选项",
    type: "boolean",
    default: "false",
  },
  {
    prop: "danger",
    description: "设置危险按钮",
    type: "boolean",
    default: "false",
  },
  {
    prop: "ghost",
    description: "幽灵属性，使按钮背景透明",
    type: "boolean",
    default: "false",
  },
  {
    prop: "shape",
    description: "设置按钮形状",
    type: "default | circle | round",
    default: "default",
  },
  {
    prop: "htmlType",
    description: "设置 button 原生的 type 值",
    type: "button | submit | reset",
    default: "button",
  },
];

const eventsColumns = [
  { title: "事件名", dataIndex: "event", key: "event" },
  { title: "说明", dataIndex: "description", key: "description" },
  { title: "回调参数", dataIndex: "params", key: "params" },
];

const eventsData = [
  {
    event: "click",
    description: "点击按钮时的回调",
    params: "(event: MouseEvent) => void",
  },
];
</script>

<style scoped>
.component-page {
  width: 100%;
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
  margin-bottom: 48px;
}

.doc-section:last-child {
  margin-bottom: 0;
}

.doc-section h2 {
  margin: 0 0 16px 0;
  font-size: 24px;
  font-weight: 500;
  color: #262626;
}

.doc-section h3 {
  margin: 32px 0 16px 0;
  font-size: 18px;
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
  margin: 0 0 16px 0;
  padding-left: 20px;
}

.doc-section li {
  font-size: 14px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 4px;
}

:deep(.ant-table) {
  margin-top: 16px;
}

:deep(.ant-table-thead) > tr > th {
  background: #fafafa;
  font-weight: 500;
}
</style>

export default `<template>
  <demo-box>
    <uni-button disabled>禁用按钮</uni-button>
    <uni-button type="primary" disabled>主要禁用</uni-button>
    <uni-button danger disabled>危险禁用</uni-button>
    <uni-button ghost disabled>幽灵禁用</uni-button>
  </demo-box>
</template>

<script setup lang="ts">
import DemoBox from '../../components/DemoBox.vue'
</script>`;

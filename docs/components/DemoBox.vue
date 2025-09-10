<template>
  <div class="demo-box">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "DemoBox",
});
</script>

<style scoped>
.demo-box {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  padding: 0;
}

.demo-box > :deep(*) {
  margin: 0;
}
</style>

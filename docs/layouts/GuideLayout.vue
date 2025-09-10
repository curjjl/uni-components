<template>
  <div class="guide-layout">
    <router-view />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "GuideLayout",
});
</script>

<style scoped>
.guide-layout {
  max-width: 1000px;
  margin: 0 auto;
}
</style>

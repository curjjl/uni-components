<template>
  <div class="component-layout">
    <router-view />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "ComponentLayout",
});
</script>

<style scoped>
.component-layout {
  max-width: 1200px;
  margin: 0 auto;
}
</style>

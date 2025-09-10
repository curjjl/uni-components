export default `<template>
  <demo-box>
    <uni-button loading>加载中</uni-button>
    <uni-button loading type="primary">主要加载</uni-button>
    <uni-button :loading="loading" type="primary" @click="handleClick">
      点击加载
    </uni-button>
  </demo-box>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DemoBox from '../../components/DemoBox.vue'

const loading = ref(false)

const handleClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>`;

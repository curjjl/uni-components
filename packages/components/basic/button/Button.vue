<template>
  <a-button
    :type="type"
    :size="size"
    :disabled="disabled"
    :loading="loading"
    :html-type="htmlType"
    :block="block"
    :danger="danger"
    :ghost="ghost"
    :shape="shape"
    :href="href"
    :target="target"
    :class="[
      'uni-button',
      {
        [`uni-button--${type}`]: type,
        [`uni-button--${size}`]: size,
        'uni-button--block': block,
        'uni-button--danger': danger,
        'uni-button--ghost': ghost,
        'uni-button--loading': loading,
        'uni-button--disabled': disabled,
      },
    ]"
    @click="handleClick"
  >
    <template v-if="$slots.icon" #icon>
      <slot name="icon" />
    </template>
    <slot />
  </a-button>
</template>

<script setup lang="ts">
import { Button as AButton } from "ant-design-vue";
import type { ButtonProps } from "@/types/button";

defineOptions({
  name: "UniButton",
});

const props = withDefaults(defineProps<ButtonProps>(), {
  type: "default",
  size: "middle",
  htmlType: "button",
  disabled: false,
  loading: false,
  block: false,
  danger: false,
  ghost: false,
  shape: "default",
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit("click", event);
  }
};
</script>

<style scoped>
.uni-button {
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.uni-button--block {
  width: 100%;
}

.uni-button:not(.uni-button--disabled):not(.uni-button--loading):hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
}

.uni-button--loading {
  pointer-events: none;
}

.uni-button--disabled {
  cursor: not-allowed;
}
</style>

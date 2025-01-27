<template>
  <span
    v-html="icon"
    :style="{ fill: color }"
    role="img"
    aria-hidden="true"
  ></span>
</template>

<script>
import { computed } from 'vue';
import { icons } from "@/components/icons/icons.js";

export default {
  name: 'VIcon',
  props: {
    id: {
      type: String,
      required: true, // ID иконки обязателен
    },
    color: {
      type: String,
      default: 'currentColor',
    },
  },
  setup(props) {
    // Находим SVG по ID
    const icon = computed(() => icons[props.id] || '');

    return {icon};
  },
};
</script>

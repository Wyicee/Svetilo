<template>
  <span
    v-html="icon"
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
      required: true,
    },
    color: {
      type: String,
    },
  },
  setup(props) {
    const icon = computed(() => icons[props.id] || '');
    return {icon};
  },
};
</script>

<script setup>
const props = defineProps({
  type: {
    type: String,
    desc: 'Стили для кнопок',
    default: 'primary',
    validator: (value) => ['primary', 'outline', 'primary-link'].includes(value),
  },
  to: {
    type: String,
    desc: 'Маршруты для router-link',
    default: null,
  },
});
</script>

<template>
  <template v-if="to">
    <router-link :to="to" :class="props.type">
      <slot />
    </router-link>
  </template>
  <template v-else>
    <button :class="props.type">
      <slot />
    </button>
  </template>
</template>

<style lang="scss">
.primary {
  font-size: $font-size-medium;
  font-weight: $font-bold;
  background-color: $primary-color;
  cursor: pointer;
  width: 35rem;
  height: 9rem;
  border: none;
  border-radius: 3rem;
  transition: .35s;

  &:hover {
    scale: 1.05;
    transition: .35s;
  }

  &:active {
    background-color: $additional-color;
    scale: .98;
    transition: .25s;
  }
}

.outline {
  font-size: $font-size-medium;
  font-weight: $font-bold;
  cursor: pointer;
  border: none;
  background: none;
  transition: color .35s;

  svg path {
    transition: color .35s;
  }

  &:hover {
    color: $primary-color;
    transition: .35s;
  }

  &:hover svg path {
    color: $primary-color;
    transition: color .35s;
  }
}

.primary-link {
  font-size: $font-size-medium;
  font-weight: $font-bold;
  background-color: $primary-color;
  text-decoration: none;
  color: black;
  padding: 3rem 5rem;
  border-radius: 3rem;
  transition: .35s;

  &:hover {
    scale: 1.05;
    transition: .35s;
  }

  &:active {
    background-color: $additional-color;
    scale: .98;
    transition: .25s;
  }
}

@media (max-width: $tablet) {
  .primary {
    width: 30rem;
    height: 8rem;
  }
}
</style>
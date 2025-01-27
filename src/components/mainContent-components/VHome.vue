<script setup>
import VSwiper from "@/components/mainContent-components/VSwiper.vue";

defineProps({
  list: {
    type: Array,
  },
});
</script>

<template>
  <div class="home">
    <div class="home__inner">
      <div class="heroSwiper">
        <VSwiper
          :list="list"
        />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.home {
  .home__inner {
    padding: 4rem 15rem;

    .heroSwiper {
      background-color: $primary-color;
      align-items: center;
      display: flex;
      padding: 2rem 1rem;
      border-radius: 4rem;

    }
  }
}

@media (max-width: $l-Laptop) {
  .home {
    .home__inner {
      padding: 4rem 1rem;
    }
  }
}

</style>
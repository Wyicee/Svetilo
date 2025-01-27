<script setup>
import VHeader from "@/components/mainContent-components/VHeader.vue";
import VFooter from "@/components/mainContent-components/VFooter.vue";
</script>

<template>
  <VHeader/>
  <router-view />
  <VFooter />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "SF Pro Display";
}

html { font-size: 10px }

.page {
  font-size: $font-size-medium;
}

.content {
  margin: 0 5rem 0 5rem;
}

.heading {
  font-size: $font-size-large;
  font-weight: $font-bold;
  text-align: center;
}

@media (max-width: $l-Laptop) {
  .content {
    margin: 0 2.5rem 0 2.5rem;
  }
}

@media (max-width: $tablet) {
  .heading {
    font-size: 4rem;
  }

  .content {
    margin: 0 1rem 0 1rem;
  }
}
</style>

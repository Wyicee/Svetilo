<script setup>
import VBlogCard from "@/components/mainContent-components/blog/VBlogCard.vue";

defineProps({
  list: {
    type: Array,
  },
});
</script>

<template>
<div class="blog">
  <div class="blog__heading heading">
    Последние новости и статьи
  </div>
  <div class="blog__inner">
    <VBlogCard
      :list="list"
    />
  </div>
</div>
</template>

<style lang="scss">
.blog {
  .blog__heading {
    margin-top: 20vh;
    margin-bottom: 15vh;
  }

  .blog__inner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 100px;

    .blog__card:nth-child(odd) {
      justify-self: end;
    }

    .blog__card:nth-child(even) {
      justify-self: start;
    }
  }
}
</style>
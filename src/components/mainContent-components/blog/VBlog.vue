<script setup>
import VBlogSwiper from "@/components/mainContent-components/blog/VBlogSwiper.vue";
</script>

<template>
<div class="blog">
  <div class="blog__heading heading">
    Последние новости и статьи
  </div>
  <div class="blog__inner">
    <VBlogSwiper/>
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
    grid-template-columns: 1fr;
    column-gap: 10rem;

    .blog__card:nth-child(odd) {
      justify-self: end;
    }

    .blog__card:nth-child(even) {
      justify-self: start;
    }
  }
}

@media (max-width: $l-Laptop) {
  .blog {
    .blog__inner {
      column-gap: 5rem;
    }
  }
}

@media (max-width: 1040px) {
  .blog {
    .blog__inner {
      column-gap: 2rem;
    }
  }
}

@media (max-width: 980px) {
  .blog {
    .blog__inner {
      grid-template-columns: repeat(1, 1fr);
      row-gap: 2rem;

      .blog__card:nth-child(odd) {
        justify-self: center;
      }

      .blog__card:nth-child(even) {
        justify-self: center;
      }
    }
  }
}
</style>
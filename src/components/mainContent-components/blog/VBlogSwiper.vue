<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useBlogStore } from "@/stores/blogStore.js";

import 'swiper/css';
import 'swiper/swiper-bundle.css';

import VBlogCard from "@/components/mainContent-components/blog/VBlogCard.vue";

const blogStore = useBlogStore();
</script>

<template>
  <swiper
    :modules="[Navigation, Pagination, Autoplay]"
    navigation
    pagination
    autoplay
    loop
    class="sliderWrap"
  >
    <swiper-slide
      v-for="blogItem in blogStore.blogList"
      :key="blogItem.id"
    >
      <VBlogCard
        :blogItem="blogItem"
      />
    </swiper-slide>
  </swiper>
</template>

<style scoped lang="scss">
.sliderWrap {
  width: 100%;
  height: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    padding: 0 0 5rem 0;
  }

  .swiper-pagination-bullets {
    position: absolute;
    margin-top: 2rem;
  }
}
</style>
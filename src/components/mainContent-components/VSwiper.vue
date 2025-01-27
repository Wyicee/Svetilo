<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/swiper-bundle.css';

const sliderHomeList = [
  {id: 1, img: './assets/sliderHome-photos/slider1.jpeg', name: 'Элегантный минимализм', text: 'Современный стиль для тех, кто ценит простоту и функциональность. Наша лампа добавит уюта и тепла в любой интерьер.'},
  {id: 2, img: './assets/sliderHome-photos/slider2.jpeg', name: 'Природа и дизайн в гармонии', text: 'Настольная лампа из натуральных материалов — вдохновение природы для вашего дома. Экологичность и стиль в каждом элементе.'},
  {id: 3, img: './assets/sliderHome-photos/slider3.jpeg', name: 'Будущее света', text: 'Футуристический дизайн и передовые технологии. Лампа, которая создаёт рабочую атмосферу и вдохновляет на новые идеи.'},
  {id: 4, img: './assets/sliderHome-photos/slider4.jpeg', name: 'Экологичный выбор', text: 'Лампа из переработанных материалов в эко-дизайне. Освещает с заботой о планете и добавляет природную гармонию вашему пространству.'},
  {id: 5, img: './assets/sliderHome-photos/slider5.jpeg', name: 'Креатив без границ', text: 'Яркий акцент в вашем интерьере. Лампа с уникальной формой, подчеркивающая вашу индивидуальность и стиль.'},
]
</script>

<template>
  <swiper
    :modules="[Navigation, Pagination, Autoplay]"
    navigation
    pagination
    autoplay="{autoplay: 10000}"
    loop
    class="sliderWrap"
  >
    <swiper-slide
      class="swiperSlide__wrapper"
      v-for="listItem in sliderHomeList"
      key="listItem.id"
    >
      <div class="swiper-slide__info">
        <div class="swiper-slide__info-name fade-in">
          {{ listItem.name }}
        </div>
        <div class="swiper-slide__info-text fade-in">
          {{ listItem.text }}
        </div>
      </div>
      <div class="swiper-slide__photo">
        <img :src="listItem.img" alt="sliderPhoto" class="swiper-slide__photo-img">
      </div>
    </swiper-slide>
  </swiper>
</template>

<style scoped lang="scss">
.sliderWrap {

  .swiperSlide__wrapper {
    display: flex;

    .swiper-slide__info {
      padding: 0 0 0 9rem;
      margin-top: 3rem;

      .swiper-slide__info-name {
        width: 80%;
        font-size: $font-size-large;
        font-weight: $font-bold;
      }

      .swiper-slide__info-text {
        margin-top: 2rem;
        font-size: $font-size-medium;
        width: 80%;
      }

      .swiper-slide__info-name,
      .swiper-slide__info-text {
        width: 80%;
        opacity: 0;
        transform: translateX(1rem);
        animation: fadeIn 0.4s forwards;
      }
    }

    .swiper-slide__photo {
      display: flex;
      margin: 0 5rem 0 0;

      .swiper-slide__photo-img {
        align-self: end;
        max-width: 450px;
        border-radius: 4rem;
      }
    }
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

@media (max-width: $l-Laptop) {
  .swiperSlide__wrapper {
    .swiper-slide__photo {

      .swiper-slide__photo-img {
        align-self: end;
        width: 350px;
        border-radius: 4rem;
      }
    }
  }
}

@media (max-width: 975px) {
  .swiperSlide__wrapper {
    .swiper-slide__photo {

      .swiper-slide__photo-img {
        align-self: end;
        width: 350px;
        border-radius: 4rem;
      }
    }
  }
}
</style>
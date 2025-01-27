<script setup>
import { defineProps } from "vue";

defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="product__card">
    <div>
      <div class="product__discount" v-if="product.discount">
        Скидка {{ product.discount }}%
      </div>
      <div class="product__photo">
        <img :src="product.img" :alt="product.name" class="product__photo-img">
      </div>
      <div class="product__text-container">
        <div class="product__name">
          {{ product.name }}
        </div>
        <div class="product__description">
          {{ product.description }}
        </div>
        <div class="product__price-container">
          <div class="product__current-price">
            {{ product.discountedPrice }} ₽
          </div>
          <div class="product__prev-price" v-if="product.discount">
            {{ product.price }} ₽
          </div>
        </div>
      </div>
    </div>
    <VButton class="product__button">
      Подробнее
    </VButton>
  </div>
</template>


<style scoped lang="scss">
.product__card {
  max-width: 500px;
  min-height: 650px;
  height: 100%;
  border: 2px solid #d9d9d9;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .product__discount {
    position: absolute;
    background-color: #ffffff;
    padding: 10px 8px;
    border-radius: 50px;
    margin: 35px 0 0 50px;
    font-weight: $font-bold;
    font-size: $font-size-small;
    pointer-events: none;
  }

  .product__photo {
    width: 480px;
    justify-self: center;
    pointer-events: none;

    .product__photo-img {
      width: 100%;
      border-radius: 40px;
      margin-top: 5px;
      pointer-events: none;
    }
  }

  .product__text-container {
    margin-left: 30px;
    margin-top: 20px;

    .product__name {
      margin-bottom: 1vh;
      font-size: $font-size-medium;
      font-weight: $font-bold;
    }
    .product__description {
      font-size: $font-size-small;
      color: #a7a7a7;
      margin-bottom: 1vh;
      width: 97%;
    }

    .product__price-container {
      display: flex;
      margin-top: 20px;

      .product__current-price {
        font-weight: $font-medium;
        font-size: $font-size-medium;
      }

      .product__prev-price {
        font-weight: $font-medium;
        color: #a7a7a7;
        font-size: $font-size-medium;
        margin-left: 15px;
        text-decoration: line-through;
      }
    }
  }

  .product__button {
    width: 205px;
    height: 65px;
    align-self: end;
    margin: 10px 30px 20px 0;
  }
}
</style>
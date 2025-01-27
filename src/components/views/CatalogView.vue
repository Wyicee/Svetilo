<script setup>
import VProductCards from "@/components/mainContent-components/product-card/VProductCards.vue";
import { useProductStore } from "@/stores/productStore";
import { ref, computed } from "vue";

const productStore = useProductStore();
const productsToShow = ref(3);

const displayedProducts = computed(() =>
  productStore.productListWithDiscount.slice(0, productsToShow.value)
);

const showMoreProducts = () => {
  productsToShow.value += 3;
};
</script>

<template>
  <div class="catalog">
    <h1 class="catalog-heading heading">
      Наши товары
    </h1>
    <div class="catalog__inner">
      <div class="catalog__products">
        <VProductCards v-for="product in displayedProducts"
                       :key="product.id"
                       :product="product"
        />
      </div>
      <div v-if="productsToShow < productStore.productListWithDiscount.length" class="catalog__button-container">
        <VButton @click="showMoreProducts" class="catalog__show-more-button">
          Показать ещё
        </VButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.catalog {

  .catalog-heading {
    margin-top: 5vh;
    text-align: center;
  }

  .catalog__inner {
    margin-top: 5vh;
    padding: 0 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    .catalog__products {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 5rem;
      row-gap: 2rem;
    }

    .product__card {
      opacity: 0;
      animation: fadeIn 0.5s forwards;

      @keyframes fadeIn {
        to {
          opacity: 1;
          transform: translateY(-1rem);
        }
      }
    }
    
    .product__card:nth-child(3n+2) {
      justify-self: center;
    }

    .product__card:nth-child(3n+3) {
      justify-self: end;
    }

    .catalog__button-container {
      margin-top: 3rem;
    }
  }
}

@media (max-width: 1600px) {
  .catalog {
    .catalog__inner {
      .catalog__products {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
}

@media (max-width: 1050px) {
  .catalog {
    .catalog__inner {
      .catalog__products {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
}
</style>

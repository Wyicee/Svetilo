<script setup>
import VProductCards from "@/components/mainContent-components/product-card/VProductCards.vue";
import { useProductStore } from "@/stores/productStore";

const productStore = useProductStore();
const productsToShow = 3;

const displayedProducts = productStore.productListWithDiscount.slice(0, productsToShow);
</script>

<template>
  <div class="preview-products">
    <div class="preview-products__heading heading">
      Наши товары
    </div>
    <div class="preview-products__inner">
      <div class="preview-products__cards-container">
        <VProductCards v-for="product in displayedProducts"
                       :key="product.id"
                       :product="product"
        />
      </div>
      <VButton type="primary-link" class="preview-products__button" to="/catalog">
        Посмотреть каталог
      </VButton>
    </div>
  </div>
</template>

<style lang="scss">
.preview-products {

  .preview-products__heading {
    margin-top: 20vh;
    margin-bottom: 15vh;
  }

  .preview-products__inner {
    display: flex;
    flex-direction: column;
    align-items: center;

    .preview-products__cards-container {
      display: grid;
      grid-template-columns: repeat(3, 53rem);
      row-gap: 50px;
    }

    .product__card:nth-child(3n+2) {
      justify-self: center;
    }

    .product__card:nth-child(3n+3) {
      justify-self: end;
    }

    .preview-products__button {
      margin-top: 4rem;

      a {
        text-decoration: none;
        color: black;
      }
    }
  }
}

@media (max-width: 1620px) {
  .preview-products {
    .preview-products__inner {
      .preview-products__cards-container {
        grid-template-columns: repeat(1, 1fr);
        row-gap: 20px;

        .product__card:nth-child(2) {
          justify-self: end;
        }

        .product__card:nth-child(3) {
          grid: 1 / -1;
          justify-self: center;
        }
      }
    }
  }
}
</style>
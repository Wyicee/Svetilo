<script setup>
import VReviewCard from "@/components/mainContent-components/review/VReviewCard.vue";

defineProps({
  list: {
    type: Array,
    required: true
  },
});
</script>

<template>
  <div class="review">
    <div class="review__heading heading">
      Что говорят наши клиенты
    </div>
    <div class="review__inner">
      <div class="review__cards-container">
        <VReviewCard
          :list="list"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.review {
  .review__heading {
    margin-top: 20vh;
    margin-bottom: 15vh;
  }

  .review__inner {
    display: flex;
    flex-direction: column;

    .review__cards-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media (max-width: 1850px) {
  .review {

    .review__inner {

      .review__cards-container {
        grid-template-columns: repeat(1, 1fr);
        row-gap: 50px;
        align-self: center;
      }
    }
  }
}
</style>
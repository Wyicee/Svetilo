<script setup>
import VIcon from "@/components/icons/VIcon.vue";

defineProps({
  list: {
    type: Array,
    required: true
  },
});
</script>

<template>
  <div class="review-card" v-for="itemList in list" :key="itemList.id">
    <div class="review-card__inner">
      <div>
        <div>
          <div class="review-card__avatar">
          </div>
          <div class="review-card__container">
            <div class="review-card__reviewer-name">
              {{ itemList.name }}
            </div>
            <div class="review-card__reviewer-location">
              {{ itemList.location }}
            </div>
          </div>
        </div>
        <div class="review-card__star-container">
          <div
            class="review-card__rating"
            v-for="n in 5"
            :key="n"
          >
            <svg
              width="30"
              height="28"
              viewBox="0 0 30 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
              :fill="n <= itemList.rating ? '#EA8D11' : '#D3D3D3'"
              d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
              fill="#EA8D11"
            />
            </svg>
          </div>
        </div>
      </div>
      <div class="review-card__text">
        {{ itemList.text }}
      </div>
    </div>
    <VButton class="review-card__button">
      Оставить отзыв
    </VButton>
  </div>
</template>

<style scoped lang="scss">
.review-card {
  max-width: 580px;
  max-height: 400px;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .review-card__avatar {
    background-color: $primary-color;
    width: 80px;
    height: 80px;
    border-radius: 100px;
    margin: 1.25rem 0 0 1.875rem;
    display: flex;

    img {
      border-radius: 50%;
    }
  }
  .review-card__inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
      display: flex;
      justify-content: space-between;
    }

    .review-card__container {
      display: inline-flex;
      flex-direction: column;
      align-self: center;

      .review-card__reviewer-name {
        font-size: $font-size-medium;
        font-weight: $font-medium;
        margin: 0 0 0 2rem;
      }

      .review-card__reviewer-location {
        color: #a7a7a7;
        font-size: $font-size-small;
        margin: 0 0 0 2rem;
      }
    }

    .review-card__star-container {
      display: flex;
      pointer-events: none;
      align-self: center;
      margin-right: 4rem;

      .review-card__rating {
        margin-left: .15rem;
      }
    }
  }

  .review-card__text {
    font-size: $font-size-small;
    font-weight: $font-medium;
    width: 85%;
    line-height: 120%;
    margin: 2rem 0 0 2rem;
  }

  .review-card__button {
    max-width: 210px;
    max-height: 65px;
    margin: 2rem 0 2rem 1.875rem;
  }
}
</style>
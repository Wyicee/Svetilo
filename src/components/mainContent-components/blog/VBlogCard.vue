<script setup>
defineProps({
  blogItem: {
    type: Array,
  },
});
</script>

<template>
<div class="blog__card">
  <div class="blog__photo">
    <img :src="blogItem.img" loading="lazy" class="blog__photo-img">
  </div>
    <div class="blog__card-content">
      <div class="blog__card-textWrapper">
        <div class="blog__date">
          {{ blogItem.date }}
        </div>
        <div class="blog__name">
          {{ blogItem.name }}
        </div>
      </div>
      <VButton class="blog__button" type="outline">
          <span>Читать</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0V9Z"
          fill="black"/>
        </svg>
      </VButton>
    </div>
</div>
</template>

<style scoped lang="scss">
.blog__card {
  max-width: 500px;
  height: auto;
  padding: 1.2rem;
  border: 2px solid #d9d9d9;
  border-radius: 40px;
  display: flex;

  .blog__photo {
    pointer-events: none;
    max-width: 90px;
    margin: 0 10px 20px 5px;

    .blog__photo-img {
      width: 100%;
      border-radius: 40px;
      pointer-events: none;
    }
  }

  .blog__card-content {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .blog__date {
      font-size: $font-size-small;
      color: grey;
      margin-bottom: 5px;
    }

    .blog__name {
      font-size: $font-size-medium;
      font-weight: $font-bold;
      width: 95%;
    }
  }

  .blog__button {
    font-size: $font-size-small;
    white-space: nowrap;
    margin-top: 15px;
    align-self: start;
    display: flex;

    & svg path {
      transition: .35s;
    }

    &:hover svg path {
      fill: currentColor;
      transition: .35s;
    }

    svg {
      align-self: center;
      margin-left: 5px;
    }
  }
}
</style>
<script setup>
import VButton from "@/global_components/VButton.vue";
</script>

<template>
  <div class="about">
      <h1 class="about__inner-heading heading">
        О нас
      </h1>
    <div class="about__inner">

      <div class="features">
        <div class="features__inner">
          <p class="features__description page">
            Мы создаем настольные лампы, которые объединяют стиль, инновации и экологичность.
            Наш свет вдохновляет, помогает создавать уют и делает каждый дом уникальным.
          </p>
          <div class="features__grid-items">
            <div class="features__main-item">
              <img src="" alt="">
            </div>
            <div class="features__secondary-item">
              <img src="" alt="">
            </div>
            <div class="features__secondary-item">
              <img src="" alt="">
            </div>
          </div>
        </div>
      </div>

      <div class="stats">
        <div class="stats__items">
          <div class="stats__items-col">
            <div class="stats__items-combined">
              <span class="stats__items-title heading">2018 </span>
              <span class="stats__items-subtitle page">Год основания</span>
            </div>
            <div class="stats__items-combined">
              <span class="stats__items-title heading">50+ </span>
              <span class="stats__items-subtitle page">Дизайнерских моделей</span>
            </div>
          </div>
          <div class="stats__items-col">
            <div class="stats__items-combined">
              <span class="stats__items-title heading">10+ </span>
              <span class="stats__items-subtitle page">Премий за дизайн</span>
            </div>
            <div class="stats__items-combined">
              <span class="stats__items-title heading">100% </span>
              <span class="stats__items-subtitle page">Довольных клиентов</span>
            </div>
          </div>
        </div>
        <VButton class="stats__items-button">Подробнее</VButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about {
    .about__inner-heading {
      text-align: center;
      margin-top: 20vh;
      margin-bottom: 15vh;
    }

  .about__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .features {

      .features__inner {
        padding-left: 5rem;

        .features__description {
          font-size: $font-size-small;
          width: 70%;
        }

        .features__grid-items {
          display: grid;
          grid-template-columns: 1fr 1fr;
          margin-top: 1rem;
          max-width: 595px;
          column-gap: 2rem;

          .features__main-item {
            background-color: $additional-color;
            height: 383px;
            max-width: 385px;
            border-radius: 2rem;
            grid-area: 1 / 1 / 3 / 2;
          }

          .features__secondary-item {
            background-color: $additional-color;
            height: 185px;
            max-width: 285px;
            border-radius: 2rem;

            &:last-child {
              align-self: end;
            }
          }
        }
      }
    }
    .stats {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .stats__items {
        display: flex;
        justify-content: space-between;

        .stats__items-col {
          display: flex;
          flex-direction: column;

          &:nth-child(1) {
            border-right: 1px solid black;

            .stats__items-combined:nth-child(1) {
              flex-direction: row;
              align-items: end;

              .stats__items-title {
                padding-right: 1rem;
              }

              .stats__items-subtitle {
                padding-bottom: 1rem;
              }
            }
          }

          .stats__items-combined {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 5rem;
            min-height: 185px;

            &:nth-child(1) {
              border-bottom: 1px solid black;
            }

            .stats__items-title {
              font-weight: $font-bold;
            }
          }
        }
      }
      .stats__items-button {
        margin: 3rem 0 0 5rem;
      }
    }
  }
}

@media (max-width: $l-Laptop) {
  .about {
    .about__inner {
      padding: 0;
    }
  }
}
</style>
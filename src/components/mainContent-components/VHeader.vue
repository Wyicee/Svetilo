<script setup>
import VIcon from "@/components/icons/VIcon.vue";
import VAsideModalWrapper from "@/components/mainContent-components/VAsideModalWrapper.vue";

import { ref } from "vue";

const modalRef = ref(null);

const openModal = () => {
  modalRef.value.openModal();
};
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <nav class="header__menu">
        <router-link to="/" class="header__logo logo">
          <VIcon id="logoSecondary" />
        </router-link>
        <button class="burger-menu" @click="openModal">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="header__menu-list">
          <li class="header__menu-item">
            <router-link to="/" class="header__menu-link">Главная</router-link>
          </li>
          <li class="header__menu-item">
            <a href="#" class="header__menu-link">О нас</a>
          </li>
          <li class="header__menu-item">
            <router-link to="/catalog" class="header__menu-link">Каталог</router-link>
          </li>
          <li class="header__menu-item">
            <a href="#" class="header__menu-link">Отзывы</a>
          </li>
          <li class="header__menu-item">
            <a href="#" class="header__menu-link">Новости</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <VAsideModalWrapper ref="modalRef" />
</template>

<style scoped lang="scss">
.header {
  .header__inner {
    .header__menu {
      background-color: $primary-color;
      padding: 1rem 10rem;
      max-height: 10rem;
      min-height: 5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      position: relative;

      .burger-menu {
        display: none;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 21px;
        cursor: pointer;
        border: none;
        background: none;

        span {
          display: block;
          width: 100%;
          height: 3px;
          background-color: white;
          transition: all 0.3s ease;
        }
      }
    }

    .header__menu-list {
      font-size: $font-size-medium;
      display: flex;
      flex-direction: row;

      .header__menu-item {
        display: inline-flex;
        padding-right: 5vw;
        line-height: 1.5;

        &:last-child {
          padding: 0;
        }

        .header__menu-link {
          text-decoration: none;
          font-weight: $font-medium;
          color: black;
          transition: color .25s;

          &:hover {
            color: $additional-color;
            transition: color .25s;
          }
        }
      }
    }
  }
}

@media (max-width: 990px) {
  .header {
    .header__inner {
      .header__menu {
        padding: 1rem 5rem;
      }
    }
  }
}

@media (max-width: $tablet) {
  .header {
    .header__inner {
      .header__menu {
        padding: 1rem 2rem;
        justify-content: space-between;

        .burger-menu {
          display: flex;
        }

        .header__menu-list {
          display: none;
          flex-direction: column;
          position: absolute;
          top: 100%;
          right: 0;
          background-color: $primary-color;
          width: 100%;
          padding: 1rem;
          text-align: center;
          overflow: hidden;
          z-index: +100;

          &.menu-open {
            display: flex;
          }

          .header__menu-item {
            margin: 1rem 0;

            .header__menu-link {
              color: white;
            }
          }
        }
      }
    }
  }
}
</style>
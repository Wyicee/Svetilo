<script setup>
import VIcon from "@/components/icons/VIcon.vue";
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <nav class="header__menu">
        <router-link to="/" class="header__logo logo">
          <VIcon id="logoSecondary" />
        </router-link>
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
</style>
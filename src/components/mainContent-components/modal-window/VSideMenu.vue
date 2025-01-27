<template>
  <nav class="header__menu">
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
</template>

<style scoped lang="scss">
.header__menu {
  justify-content: space-between;

  .header__menu-list {
    font-size: 3.5rem;

    .header__menu-item {
      background-color: #ffffff;
      align-content: center;
      list-style-type: none;
      line-height: 1.5;
      border-radius: 12px;
      min-height: 7.5rem;
      margin-bottom: .1rem;
      padding-left: 1rem;

      &:last-child {
        margin: 0;
      }

      .header__menu-link {
        text-decoration: none;
        font-weight: $font-medium;
        color: black;
        transition: color .25s;
      }
    }
  }
}
</style>
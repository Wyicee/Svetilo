<script setup>
import VIcon from "@/components/icons/VIcon.vue";
</script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__col-container">
        <div class="footer__logo">
          <router-link to="/" class="footer__logo logo">
            <VIcon id="logoPrimary"/>
          </router-link>
        </div>
        <div class="footer__col_type-contacts footer__col">
          <p class="footer__title footer__contacts-item">Контакты</p>
          <p class="footer__address footer__contacts-item">г. Москва, ул. Светлая, д. 15</p>
          <p class="footer__phone footer__contacts-item">+7 (495) 123-45-67</p>
          <p class="footer__email footer__contacts-item">info@svetilo.ru</p>
          <p class="footer__schedule footer__contacts-item">Пн-Пт: 9:00 - 18:00, Сб-Вс: выходной</p>
        </div>
        <div class="footer__col_type-messengers footer__col">
          <p class="footer__title">Мессенджеры</p>
          <div>
            <a href="#" class="footer__messenger footer__messenger_type-telegram">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40ZM16.6738 24.0679L25.9474 15.6992C26.3545 15.3379 25.8586 15.1618 25.3182 15.4894L13.8727 22.7103L8.9289 21.1672C7.86125 20.8403 7.85358 20.1067 9.1686 19.5792L28.4336 12.1507C29.3135 11.7513 30.1627 12.3621 29.8268 13.7087L26.546 29.1693C26.3169 30.2679 25.6531 30.5307 24.7333 30.0232L19.7356 26.3308L17.3333 28.6667C17.0543 28.938 16.8333 29.1667 16.3333 29.1667L16.6738 24.0679Z" fill="white"/>
              </svg>
            </a>
            <a href="#" class="footer__messenger footer__messenger_type-whatsapp">
              <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 40.0679L2.87225 29.3882C0.555877 25.228 -0.180046 20.3733 0.799492 15.7151C1.77903 11.0568 4.40836 6.90748 8.20497 4.02841C12.0016 1.14943 16.7108 -0.266186 21.4686 0.041352C26.2263 0.34889 30.7134 2.35903 34.1063 5.70286C37.4994 9.04669 39.5707 13.4999 39.9404 18.2454C40.3099 22.9908 38.953 27.7102 36.1186 31.5375C33.2841 35.3647 29.1622 38.0432 24.5094 39.0813C19.8564 40.1194 14.9846 39.4476 10.7879 37.1891L0 40.0679ZM11.308 33.1927L11.9752 33.5878C15.015 35.3866 18.5654 36.131 22.0733 35.705C25.5811 35.2789 28.8492 33.7064 31.3683 31.2324C33.8875 28.7584 35.5161 25.522 36.0004 22.0275C36.4848 18.533 35.7977 14.9766 34.0461 11.9127C32.2945 8.8488 29.577 6.44936 26.3168 5.08831C23.0567 3.72735 19.4372 3.48119 16.0223 4.38833C12.6075 5.29538 9.58911 7.30482 7.43757 10.1034C5.28603 12.9019 4.12216 16.3323 4.12741 19.8601C4.12461 22.7852 4.93485 25.6538 6.46817 28.1464L6.88659 28.8351L5.28087 34.7958L11.308 33.1927Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.5007 22.6026C27.1096 22.2876 26.6516 22.0659 26.1617 21.9545C25.6718 21.843 25.1629 21.8445 24.6737 21.9591C23.9387 22.2639 23.4637 23.4154 22.9888 23.9912C22.8887 24.1292 22.7415 24.226 22.5749 24.2634C22.4084 24.3008 22.2339 24.2762 22.0842 24.1943C19.3932 23.1422 17.1377 21.2126 15.6839 18.7191C15.5598 18.5635 15.5011 18.3659 15.5201 18.168C15.5392 17.97 15.6343 17.7872 15.7856 17.6578C16.3153 17.1343 16.7043 16.4859 16.9164 15.7726C16.9635 14.9858 16.783 14.202 16.3963 13.5147C16.0973 12.5512 15.5283 11.6933 14.7567 11.0424C14.3586 10.8637 13.9172 10.8038 13.4858 10.8699C13.0545 10.936 12.6515 11.1252 12.3254 11.4149C11.7594 11.9024 11.3102 12.5105 11.0108 13.1943C10.7113 13.8782 10.5693 14.6203 10.5953 15.3661C10.597 15.785 10.6502 16.2021 10.7536 16.608C11.0162 17.5833 11.42 18.515 11.9523 19.3738C12.3362 20.0317 12.7553 20.6686 13.2074 21.2817C14.6769 23.2957 16.5241 25.0057 18.6466 26.3167C19.7116 26.983 20.8499 27.5247 22.0389 27.9311C23.2741 28.49 24.6379 28.7046 25.9854 28.552C26.7532 28.436 27.4806 28.1334 28.1037 27.6707C28.7268 27.2081 29.2265 26.5997 29.5588 25.899C29.7539 25.4758 29.8132 25.0025 29.7283 24.5443C29.5248 23.6073 28.2696 23.0541 27.5007 22.6026Z" fill="white"/>
              </svg>

            </a>
          </div>
        </div>
        <div class="footer__col_type-about footer__col">
          <router-link to="/" class="footer__link">Главная</router-link>
          <a href="" class="footer__link">О нас</a>
          <router-link to="/catalog" class="footer__link">Каталог</router-link>
          <a href="" class="footer__link">Отзвы</a>
          <a href="" class="footer__link">Новости</a>
        </div>
        <div class="footer__bottom">
          <div class="footer__copyright">© 2024 Светило.</div>
          <a href="#" class="footer__policy-link">Политика конфиденциальности</a>
          <a href="#" class="footer__policy-link">Условия использования</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: black;
  width: 100%;
  height: 100%;
  color: white;
  font-size: $font-size-medium;

  a {
    text-decoration: none;
    color: white;
    transition: .25s color;
  }

  .footer__inner {
    margin-top: 20vh;
    padding: 10rem 5rem 5rem 5rem;
  }

  .footer__col-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 0 5rem;
  }

  .footer__logo {
    max-width: 40px;
    max-height: 40px;
    align-self: center;
  }

  .footer__col {
    display: flex;
    flex-direction: column;
  }

  .footer__title {
    font-size: $font-size-medium;
    padding-bottom: 4rem;
  }

  .footer__contacts-item:not(:last-child) {
    padding-bottom: 4rem;
  }

  .footer__col_type-messengers {
    max-width: 200px;

    .footer__messenger_type-whatsapp {
      transition: .25s;
      margin-left: 5rem;

      &:hover svg path {
        fill: $primary-color;
        transition: .25s;
      }
    }

    .footer__messenger_type-telegram {
      transition: .25s;

      &:hover svg path {
        fill: $primary-color;
        transition: .25s;
      }
    }

    .footer__messenger {
      max-width: 40px;
      max-height: 40px;
    }
  }

  .footer__col_type-about {
    max-width: 80px;

    .footer__link:not(:last-child) {
      margin-bottom: 4rem;
    }

    a:hover {
      color: $primary-color;
      transition: .25s color;
    }
  }

  .footer__bottom {
    grid-area: 2 / -4;
    grid-column: 2 / -1;
    display: flex;
    margin-top: 6rem;
    color: grey;

    .footer__copyright {
      margin-right: 4rem;
    }

    .footer__policy-link:not(:last-child) {
      margin-right: 4rem;
    }

    a {
      color: grey;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

@media (max-width: $l-Laptop) {
  .footer {
    .footer__col-container {
      grid-template-columns: 20rem 1fr 1fr 20rem;
    }
  }
}

@media (max-width: 1330px) {
  .footer {
    .footer__col-container {
      grid-template-columns: 18rem 1.5fr 1fr 1fr;
    }
  }
}

@media (max-width: $s-Laptop) {
  .footer {
    .footer__col-container {
      padding: 0;
    }

    .footer__bottom {
      .footer__copyright {
        margin-right: 2rem;
      }

      .footer__policy-link:not(:last-child) {
        margin-right: 2rem;
      }
    }
  }
}

@media (max-width: 1065px) {
  .footer {
    .footer__bottom {
      flex-direction: column;
      grid-column: 2 / 3;

      .footer__copyright {
        margin-bottom: 1rem;
        margin-right: 0;
      }

      .footer__policy-link:not(:last-child) {
        margin-bottom: 1rem;
        margin-right: 0;
      }
    }
  }
}

@media (max-width: 940px) {
  .footer {
    .footer__bottom {
      min-width: 32rem;
    }
    .footer__col-container {
      grid-template-columns: 15rem 1.5fr 1fr .5fr;
    }
  }
}

@media (max-width: 835px) {
  .footer {
    .footer__inner {
      .footer__col-container {
        grid-template-columns: 1.5fr 1fr .5fr;
        .footer__logo {
          display: none;
        }
      }
      .footer__bottom {
        grid-column: 1 / -1;
      }
    }
  }
}

@media (max-width: 520px) {
  .footer {
    font-size: $font-size-small;
    .footer__inner {
      padding: 7rem 2rem 0;
    }
  }
}
</style>
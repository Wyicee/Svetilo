<script setup>
import VAbout from "@/components/mainContent-components/VAbout.vue";
import VPreviewProducts from "@/components/mainContent-components/product-card/VPreviewProducts.vue";
import VReview from "@/components/mainContent-components/review/VReview.vue";
import VBlog from "@/components/mainContent-components/blog/VBlog.vue";
import VHome from "@/components/mainContent-components/VHome.vue";

const reviewsList = [
  {id: 1, avatar: '', name: 'Анна Смирнова', location: 'Москва', rating: 5, text: 'Настольная лампа от Светило - это лучшее, что я купила для своего рабочего места. Она стильная, удобная и экологичная. Освещение идеально подходит для долгой работы за компьютером. Спасибо за продукт!'},
  {id: 2, avatar: '', name: 'Игорь Павлов', location: 'Санкт-Петербург', rating: 5, text: 'Очень доволен своей покупкой. Лампа функциональная, легко управляется через приложение. Удивил современный дизайн, который отлично вписался в интерьер моей квартиры. Однозначно рекомендую!'},
  {id: 3, avatar: '', name: 'Екатерина Белова', location: 'Новосибирск', rating: 4, text: 'Лампы от компании Светило поражают своей уникальностью. Я заказала индивидуальный проект, и результат превзошел все ожидания! Благодарю за внимание к деталям!'},
];

const blogList = [
  {id: 1, img: './src/assets/blog-photos/blog1.jpeg', date: '17 декабря 2024', name: 'Как правильно выбрать лампу для рабочего места?', text: 'Рабочее освещение — ключ к продуктивности и комфорту. Рассказываем, как подобрать идеальную лампу для офиса или дома, учитывая стиль, функциональность и особенности света.'},
  {id: 2, img: './src/assets/blog-photos/blog2.jpeg', date: '12 января 2025', name: 'Экология и стиль: лампы из переработанных материалов', text: 'Современные технологии позволяют создавать красивые и функциональные светильники, сохраняя природу. Узнайте, почему экологичность становится трендом в дизайне.'},
];
</script>

<template>
  <main class="content">
    <VHome />
    <VAbout />
    <VPreviewProducts />
    <VReview
      :list="reviewsList"
    />
    <VBlog
      :list="blogList"
    />
  </main>
</template>

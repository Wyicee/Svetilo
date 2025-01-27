import { defineStore } from 'pinia';

export const useProductStore = defineStore('productStore', {
    state: () => ({
        productList: [
            {
                id: 1,
                img: './assets/products-photos/product1.jpeg',
                discount: 15,
                name: 'Solar Vision',
                description:
                    'Элегантная настольная лампа с мягким рассеянным светом, идеальная для работы и чтения. Благодаря уникальному дизайну и регулируемой яркости она станет стильным акцентом любого интерьера.',
                price: 5000,
            },
            {
                id: 2,
                img: './assets/products-photos/product2.jpeg',
                discount: 20,
                name: 'Luna Glow',
                description:
                    'Современная лампа с технологией управления через смартфон. Включает режимы для работы, отдыха и чтения. Энергоэффективный LED-светильник обеспечивает длительный срок службы и экономию электроэнергии.',
                price: 7500,
            },
            {
                id: 3,
                img: './assets/products-photos/product3.jpeg',
                discount: null,
                name: 'Bright Accent',
                description:
                    'Настольная лампа в стиле минимализм. Удобный поворотный механизм и компактные размеры делают её незаменимой для рабочего пространства или учебы.',
                price: 4200,
            },
            {
                id: 4,
                img: './assets/products-photos/product4.jpeg',
                discount: 10,
                name: 'Aurora Glow',
                description:
                    'Компактная настольная лампа с эффектом северного сияния. Создайте уютную атмосферу в вашем доме.',
                price: 6500,
            },
            {
                id: 5,
                img: './assets/products-photos/product5.jpeg',
                discount: 15,
                name: 'EcoSphere',
                description:
                    'Экологичная лампа из переработанных материалов. Освещайте будущее с заботой о природе.',
                price: 7200,
            },
            {
                id: 6,
                img: './assets/products-photos/product3.jpeg',
                discount: null,
                name: 'Inspire Beam',
                description:
                    'Идеальное сочетание элегантности и функциональности. Подходит для офиса и дома.',
                price: 8000,
            },
            {
                id: 7,
                img: './assets/products-photos/product3.jpeg',
                discount: null,
                name: 'Zen Light',
                description:
                    'Настольная лампа в стиле минимализм с элементами дерева. Ваш островок гармонии и света.',
                price: 5900,
            },
            {
                id: 8,
                img: './assets/products-photos/product3.jpeg',
                discount: 20,
                name: 'TechnoRay',
                description:
                    'Лампа с интеграцией умных технологий. Управляйте светом с помощью смартфона.',
                price: 9800,
            },
            {
                id: 9,
                img: './assets/products-photos/product3.jpeg',
                discount: null,
                name: 'Crystal Halo',
                description:
                    'Роскошная лампа с кристаллическим абажуром. Превосходное решение для стильных интерьеров.',
                price: 12500,
            },
            {
                id: 10,
                img: './assets/products-photos/product3.jpeg',
                discount: null,
                name: 'LumiFlex Pro',
                description:
                    'Гибкая и регулируемая лампа для точечной подсветки. Максимум удобства в работе.',
                price: 6800,
            },
            {
                id: 11,
                img: './assets/products-photos/product3.jpeg',
                discount: null,
                name: 'Green Glow',
                description:
                    'Экодизайн с растительными мотивами. Природная свежесть в вашем пространстве.',
                price: 7000,
            },
            {
                id: 12,
                img: './assets/products-photos/product3.jpeg',
                discount: 5,
                name: 'ArtLight',
                description:
                    'Настольная лампа с уникальным художественным дизайном. Добавьте творчества в ваш интерьер.',
                price: 8500,
            },
        ],
    }),
    getters: {
        productListWithDiscount: (state) =>
            state.productList.map((product) => ({
                ...product,
                discountedPrice: product.discount
                    ? Math.round(product.price * (1 - product.discount / 100))
                    : product.price,
            })),
    },
});

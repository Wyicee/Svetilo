import { createApp } from 'vue';
import { createPinia } from 'pinia';
import registerGlobalComponents from './global-components.js';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Home',
            path: '/',
            component: () => import('@/components/views/HomeView.vue'),
        },
        {
            name: 'Catalog',
            path: '/catalog',
            component: () => import('@/components/views/CatalogView.vue'),
        },
    ],
});

const app = createApp(App);
const pinia = createPinia();

registerGlobalComponents(app);

app.use(router);
app.use(pinia);

app.mount('#app');

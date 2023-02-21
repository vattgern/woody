import { createRouter, createWebHistory } from "vue-router";
import Index from './components/Index.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
        }
    ]
})
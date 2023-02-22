import { createRouter, createWebHistory } from "vue-router";

import Index from './components/Index.vue';
import Login from './components/Login.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/dashboard',
            name: 'index',
            component: Index,
        },
    ]
})

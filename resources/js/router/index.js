import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../layouts/Dashboard.vue';
import Login from '../layouts/Login.vue';
import Admins from "../layouts/Admins.vue";
import Trash from "../layouts/Trash.vue";
import Snippets from "../layouts/Snippets.vue";
import Settings from "../layouts/Settings.vue";
import Users from "../layouts/Users.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'Авторизация',
            component: Login,
            alias: '/'
        },
        {
            path: '/dashboard',
            name: 'Главная',
            component: Dashboard,
        },
        {
            path: '/admins',
            name: 'Администраторы',
            component: Admins,
        },
        {
            path: '/trash',
            name: 'Корзина',
            component: Trash,
        },
        {
            path: '/snippets',
            name: 'Сниппеты',
            component: Snippets,
        },
        {
            path: '/settings',
            name: 'Настройки',
            component: Settings,
        },
        {
            path: '/users',
            name: 'Пользователи',
            component: Users,
        },
    ]
})

import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../layouts/Dashboard.vue';
import Login from '../layouts/Login.vue';
import Admins from "../layouts/Admin/Admins.vue";
import AdminCreate from "../layouts/Admin/AdminCreate.vue";
import AdminEdit from "../layouts/Admin/AdminEdit.vue";
import Trash from "../layouts/Trash.vue";
import Snippets from "../layouts/Snippets.vue";
import SnippetsDelete from "../layouts/SnippetsDelete.vue";
import Settings from "../layouts/Settings.vue";
import Users from "../layouts/User/Users.vue";
import UserCreate from "../layouts/User/UserCreate.vue";
import UserEdit from "../layouts/User/UserEdit.vue";

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
            path: '/admins/create',
            name: 'Администраторы / Создание Администратора',
            component: AdminCreate
        },
        {
            path: '/admins/edit',
            name: 'Администраторы / Редактирование Администратора',
            component: AdminEdit
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
            path: '/snippets/deleted',
            name: 'Удаленные сниппеты',
            component: SnippetsDelete,
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
        {
            path: '/users/create',
            name: 'Пользователи / Создание Пользователя',
            component: UserCreate,
        },
        {
            path: '/users/edit',
            name: 'Пользователи / Редактирование Пользователя',
            component: UserEdit,
        },

    ]
})

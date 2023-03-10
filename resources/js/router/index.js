import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../layouts/Dashboard.vue";
import Settings from "../layouts/Settings.vue";
// AUTH_ROUTE
import Login from "../layouts/Auth/Login.vue";
// USER_ROUTES
import Users from "../layouts/User/Users.vue";
import UserCreate from "../layouts/User/UserCreate.vue";
import UserEdit from "../layouts/User/UserEdit.vue";
// ADMIN_ROUTES
import Admins from "../layouts/Admin/Admins.vue";
import AdminCreate from "../layouts/Admin/AdminCreate.vue";
import AdminEdit from "../layouts/Admin/AdminEdit.vue";
// SNIPPETS_ROUTES
import GlobalSnippets from "../layouts/Snippet/GlobalSnippets.vue";
import UserSnippets from "../layouts/Snippet/UserSnippets.vue";
import SnippetsDelete from "../layouts/Snippet/SnippetsDelete.vue";
import SnippetCreate from "../layouts/Snippet/SnippetCreate.vue";
import SnippetEdit from "../layouts/Snippet/SnippetEdit.vue";

export default createRouter({
    history: createWebHistory(),
    // Поднее выносим роуты в бд
    routes: [
        {
            path: "/dashboard",
            name: "Главная",
            component: Dashboard,
        },
        {
            path: "/settings",
            name: "Настройки плагина",
            component: Settings,
        },
        /*
         *       AUTH_ROUTE
         */
        {
            path: "/login",
            name: "Авторизация",
            component: Login,
            alias: "/",
        },
        /*
         *       ADMINS_ROUTES
         */
        {
            path: "/admins",
            name: "Администраторы",
            component: Admins,
        },
        {
            path: "/admins/create",
            name: "Создание Администратора",
            component: AdminCreate,
        },
        {
            path: "/admins/edit",
            name: "Редактирование Администратора",
            component: AdminEdit,
        },
        /*
         *       SNIPPETS_ROUTES
         */
        {
            path: "/snippets",
            name: "Глобальные сниппеты",
            component: GlobalSnippets,
        },
        {
            path: "/snippets/user",
            name: "Пользовательские сниппеты",
            component: UserSnippets,
        },
        {
            path: "/snippets/deleted",
            name: "Удаленные сниппеты",
            component: SnippetsDelete,
        },
        {
            path: "/snippets/create",
            name: "Создание сниппета",
            component: SnippetCreate,
        },
        {
            path: "/snippets/edit",
            name: "Редактирование сниппета",
            component: SnippetEdit,
        },
        /*
         *       USERS_ROUTES
         */
        {
            path: "/users",
            name: "Пользователи",
            component: Users,
        },
        {
            path: "/users/create",
            name: "Создание Пользователя",
            component: UserCreate,
        },
        {
            path: "/users/edit",
            name: "Редактирование Пользователя",
            component: UserEdit,
        },
    ],
});

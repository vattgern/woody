<template>
<div class="sideNav">
    <ul>
        <li>
            <router-link to="/dashboard">Главная</router-link>
        </li>
        <li>
            <router-link to="/snippets">Сниппеты</router-link>
        </li>
        <li>
            <router-link to="/snippets/deleted">Удаленные сниппеты</router-link>
        </li>
        <li>
            <router-link to="/users/create">Создание пользователя</router-link>
        </li>
        <li>
            <router-link to="/users/edit">Редактирование пользователя</router-link>
        </li>
        <li>
            <router-link to="/users">Пользователи</router-link>
        </li>
        <li>
            <router-link to="/admins">Администраторы</router-link>
        </li>
        <li>
            <router-link to="/admins/create">Создание Администратора</router-link>
        </li>
        <li>
            <router-link to="/admins/edit">Редактирование Администратора</router-link>
        </li>
    </ul>

    <ul>
        <li>
            <router-link to="/settings">Параметры</router-link>
        </li>
        <li>
            <router-link to="/trash">Корзина</router-link>
        </li>
        <li>
            <button>Выйти</button>
        </li>
    </ul>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sideNav {
    background-color: #D9D9D9;
    grid-column: 1/2;
    grid-row: 1/3;
}
</style>

<template>
<div class="sideNav uk-flex uk-flex-column uk-flex-middle">
    <div class="w-75 h-1 uk-flex uk-flex-row uk-flex-middle">
        <img :src="'/img/Logo.svg'" class="uk-width-1-2">
        <p class="uk-padding-small uk-text-bold">Админ Панель</p>
    </div>
    <ul class="uk-list list">
        <router-link to="/dashboard" class="uk-flex uk-flex-row uk-text-secondary">
            <span uk-icon="home" class="mr"></span>
            <p>Главная</p>
        </router-link>
        <router-link to="/users" class="uk-flex uk-flex-row uk-text-secondary">
            <span uk-icon="users" class="mr"></span>
            <p>Пользователи</p>
        </router-link>
        <router-link to="/snippets" class="uk-flex uk-flex-row uk-text-secondary">
            <span uk-icon="snippets" class="mr"></span>
            <p>Сниппеты</p>
        </router-link>
        <router-link to="/snippets/deleted" class="uk-flex uk-flex-row uk-text-secondary">
            <span uk-icon="snippets" class="mr"></span>
            <p>Удал-ые сниппеты</p>
        </router-link>
        <router-link to="/admins" class="uk-flex uk-flex-row uk-text-secondary">
            <span uk-icon="users" class="mr"></span>
            <p>Администраторы</p>
        </router-link>
        <router-link to="/users/create" class="uk-flex uk-flex-row uk-text-secondary">
            <span uk-icon="users" class="mr"></span>
            <p>Создание пол-ля</p>
        </router-link>
        <router-link to="/users/edit" class="uk-flex uk-flex-row uk-text-secondary">
            <span uk-icon="users" class="mr"></span>
            <p>Редак-ие пол-ля</p>
        </router-link>
        <router-link to="/admins/create" class="uk-flex uk-flex-row uk-text-secondary">
            <span uk-icon="users" class="mr"></span>
            <p>Создание админа</p>
        </router-link>
        <router-link to="/admins/edit" class="uk-flex uk-flex-row uk-text-secondary">
            <span uk-icon="users" class="mr"></span>
            <p>Редак-ие админа</p>
        </router-link>
    </ul>
    <ul class="uk-list list">
        <router-link to="/settings" class="uk-flex uk-flex-row uk-flex-middle uk-text-secondary">
            <span uk-icon="settings" class="mr"></span>
            <p>Параметры</p>
        </router-link>
        <router-link to="/trash" class="uk-flex uk-flex-row uk-flex-middle uk-text-secondary">
            <span uk-icon="trash" class="mr"></span>
            <p>Корзина</p>
        </router-link>
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
.list{
    width: 75%;
    border: 2px red solid;
}
.mr{
    margin-right: 5%;
}
.h-1{
    height: 100px;
}
.w-75{
    width: 75%;
}
</style>

<template>
    <div class="sideNav uk-flex uk-flex-column uk-flex-middle">
        <div class="w-75 uk-flex uk-flex-row uk-flex-middle">
            <img :src="'/img/Logo.svg'" class="uk-width-1-2">
            <h2 class="uk-padding-small">Админ Панель</h2>
        </div>
        <div class="uk-margin w-80">
            <form class="uk-search uk-search-default">
                <span class="uk-search-icon-flip" uk-search-icon></span>
                <input class="uk-search-input" type="search" placeholder="Что-то ищем..." aria-label="Search">
            </form>
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

            <router-link to="" class="uk-flex uk-flex-row uk-text-secondary">
                <span uk-icon="code" class="mr"></span>
                <p>Сниппеты</p>
            </router-link>
            <div uk-dropdown="pos: right-top">
                <ul class="uk-nav uk-dropdown-nav">
                    <li><router-link to="/snippets">Глобальные сниппеты</router-link></li>
                    <li><router-link to="/snippets/user">Пользовательские сниппеты</router-link></li>
                </ul>
            </div>

            <router-link to="/admins" class="uk-flex uk-flex-row uk-text-secondary">
                <span uk-icon="user" class="mr"></span>
                <p>Администраторы</p>
            </router-link>

        </ul>
        <ul class="uk-list list">
            <router-link to="/settings" class="uk-flex uk-flex-row uk-flex-middle uk-text-secondary">
                <span uk-icon="settings" class="mr"></span>
                <p>Параметры</p>
            </router-link>
            <router-link to="/snippets/deleted" class="uk-flex uk-flex-row uk-flex-middle uk-text-secondary">
                <span uk-icon="trash" class="mr"></span>
                <p>Корзина</p>
            </router-link>
            <router-link to="/login" class="uk-flex uk-flex-row uk-flex-middle uk-text-secondary">
                <span uk-icon="sign-out" class="mr"></span>
                <p>Выйти</p>
            </router-link>
        </ul>
        <div class="uk-flex uk-flex-column uk-text-center uk-margin uk-flex-middle">
            <span class="image uk-border-circle"></span>
            <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">Name user</h3>
                <p class="uk-text-meta uk-margin-remove-top">user@mail.ru</p>
            </div>
        </div>
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

.sideNav div:nth-child(1) {
    height: 15%;
}

.list {
    width: 75%;
}

.mr {
    margin-right: 5%;
}

.w-75 {
    width: 75%;
}

.w-80 {
    width: 80%;
}

.uk-search {
    background-color: white;
    font-size: 0.9rem;
}

.uk-search input {
    padding-right: 5%;
}

.image {
    width: 50px;
    height: 50px;
    background-color: white;
}

h2 {
    margin-top: 20px;
    font-size: 1.2rem;
    letter-spacing: 0.045em;
    line-height: 97.4%;
    font-weight: 700;
}
</style>

<template>
    <section class="uk-flex uk-flex-center uk-flex-column uk-flex-middle w-100 h-100 login">
        <figure>
            <img :src="'./img/Logo.svg'" alt="logo">
        </figure>
        <form class="uk-flex uk-flex-column uk-flex-center uk-flex-middle">
            <div class="uk-margin uk-flex uk-flex-column">
                <label class="uk-form-label" for="email">Почта</label>
                <div class="uk-inline">
                    <span class="uk-form-icon" uk-icon="icon: user"></span>
                    <input class="uk-input" v-model="email" type="email" placeholder="Введите почту" id="email">
                </div>
                <span class="uk-text-warning" v-show="validation.isEmail">Должна содержать домен</span>
            </div>
            <div class="uk-margin uk-flex uk-flex-column">
                <label class="uk-form-label" for="password">Пароль</label>
                <div class="uk-inline">
                    <span class="uk-form-icon" uk-icon="icon: lock"></span>
                    <input class="uk-input" v-model="password" type="password" placeholder="Введите пароль" id="password">
                </div>
                <span class="uk-text-warning" v-show="validation.isPassword">Не менее 8 символов</span>
            </div>
            <button class="uk-button uk-button-primary w-75">Войти</button>
        </form>
    </section>
</template>

<script>
import axios from "axios";

export default {
    name: "Login",
    data(){
        return {
            email: '',
            password: '',
            validation: {
                isEmail: false,
                isPassword: false,
            }
        }
    },
    watch: {
        email: function(value){
            let a = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            this.validation.isEmail = value.match(a) === null;
        },
        password: function(value){
            this.validation.isPassword = value.length < 8;
        }
    },
    methods: {
        login(){
            // axios запрос
        }
    }
}
</script>

<style scoped>
    .w-100{
        width: 100%;
    }
    .h-100{
        height: 100%;
    }
    .w-75{
        width: 75%;
    }
    .login {
        grid-column: 1/3;
        grid-row: 1/3;
    }
    figure {
        width: 15%;
        height: 40%;
        display: flex;
        justify-content: center;
        background-color: #FDCB03;
    }
</style>

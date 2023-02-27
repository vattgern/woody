<template>
    <form class="uk-flex uk-flex-row">
        <div class="uk-width-1-2 uk-margin-large-top">
            <h2>Создание пользователя</h2>
            <div class="uk-flex uk-flex-column">
                <div class="uk-flex uk-flex-row">
                    <div class="avatar-area uk-width-1-2">
                        <div></div>
                    </div>
                    <div class="uk-width-1-2 uk-flex uk-flex-column uk-flex-around" >
                        <div class="uk-inline">
                            <span class="uk-form-icon" uk-icon="icon: user"></span>
                            <input type="text" class="uk-input" placeholder="Фамилия">
                        </div>
                        <div class="uk-inline">
                            <span class="uk-form-icon" uk-icon="icon: user"></span>
                            <input type="text" class="uk-input" placeholder="Имя">
                        </div>
                        <div class="uk-inline">
                            <span class="uk-form-icon" uk-icon="icon: mail"></span>
                            <input type="email" class="uk-input" placeholder="Почта">
                        </div>
                    </div>
                </div>
                <hr>
                <div class="uk-flex uk-flex-row uk-flex-between">
                    <div class="uk-inline">
                        <span class="uk-form-icon" uk-icon="icon: eye"></span>
                        <input class="uk-input"
                               type="password"
                               placeholder="Пароль"
                               aria-label="Clickable icon">
                    </div>
                    <div class="uk-inline">
                        <span class="uk-form-icon" uk-icon="icon: eye"></span>
                        <input class="uk-input"
                               type="password"
                               placeholder="Повторить пароль"
                               aria-label="Clickable icon">
                    </div>
                </div>
                <hr>
                <button class="uk-width-1-4 uk-button uk-button-primary" type="button">Создать</button>
            </div>
        </div>
        <div class="uk-width-1-2 uk-flex uk-flex-center uk-flex-middle">
            <div class="w-75">
                <div class="uk-text-center">
                    <h3>Правила заполнения формы</h3>
                </div>
                <div class="uk-flex uk-flex-row uk-flex-middle uk-background-muted uk-padding-small">
                    <span class="dot dot-warning"></span>
                    <p class="uk-text-warning">Пароль должен быть менее 8 символов</p>
                </div>
                <div class="uk-flex uk-flex-row uk-flex-middle uk-background-muted uk-padding-small">
                    <span class="dot dot-success"></span>
                    <p class="uk-text-success rule-success">Пароль должен быть менее 8 символов</p>
                </div>
                <div class="uk-flex uk-flex-row uk-flex-middle uk-background-muted uk-padding-small">
                    <span class="dot dot-success"></span>
                    <p class="uk-text-success rule-success">Пароль должен быть менее 8 символов</p>
                </div>
                <div class="uk-flex uk-flex-row uk-flex-middle uk-background-muted uk-padding-small">
                    <span class="dot dot-success"></span>
                    <p class="uk-text-success rule-success">Пароль должен быть менее 8 символов</p>
                </div>
                <div class="uk-flex uk-flex-row uk-flex-middle uk-background-muted uk-padding-small">
                    <span class="dot dot-success"></span>
                    <p class="uk-text-success rule-success">Пароль должен быть менее 8 символов</p>
                </div>
                <div class="uk-flex uk-flex-row uk-flex-middle uk-background-muted uk-padding-small">
                    <span class="dot dot-success"></span>
                    <p class="uk-text-success rule-success">Пароль должен быть менее 8 символов</p>
                </div>

            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: "UserCreate"
}
</script>

<style scoped>
.avatar-area{
    display: flex;
    justify-content: center;
    align-items: center;
}
.avatar-area > div{
    width: 225px;
    height: 225px;
    border-radius: 250px;
    background: #0e6dcd;
}
.w-75{
    width: 75%;
}
.dot-warning{
    background: #ec2147;
}
.dot-success{
    background: #32d296;
}
.dot{
    width: 10px;
    height: 10px;
    border-radius: 100px;
    margin: 0 10px;
}
.rule-success{
    text-decoration: line-through;
}
</style>

<template>
    <form class="uk-flex uk-flex-row">
        <div class="uk-width-1-2 uk-margin-large-top">
            <h2>Редактирование пользователя</h2>
            <div class="uk-flex uk-flex-column">
                <div class="uk-flex uk-flex-row">
                    <div class="avatar-area uk-width-1-2">
                        <div uk-form-custom id="file-upload" v-if="!isChoose">
                            <input type="file" ref="avatar" @change="handleFile">
                            <button type="button" class="file-upload">
                                <span uk-icon="icon: upload; ratio: 1.75"></span>
                            </button>
                            <p>Выберите файл</p>
                        </div>
                        <div class="file-preview" v-else>
                            <img :src="path">
                            <div>
                                <p>{{ file.name }}</p>
                                <span uk-icon="close" @click="resetFile"></span>
                            </div>
                        </div>
                    </div>
                    <div class="uk-width-1-2 uk-flex uk-flex-column uk-flex-around">
                        <div class="uk-inline">
                            <span class="uk-form-icon" uk-icon="icon: user"></span>
                            <input type="text" class="uk-input" v-model="surname" placeholder="Фамилия">
                        </div>
                        <div class="uk-inline">
                            <span class="uk-form-icon" uk-icon="icon: user"></span>
                            <input type="text" class="uk-input" v-model="name" placeholder="Имя">
                        </div>
                        <div class="uk-inline">
                            <span class="uk-form-icon" uk-icon="icon: mail"></span>
                            <input type="email" class="uk-input" v-model="email" placeholder="Почта">
                        </div>
                    </div>
                </div>
                <hr>
                <div class="uk-flex uk-flex-row uk-flex-between">
                    <div class="uk-inline">
                        <span class="uk-form-icon" uk-icon="icon: eye"></span>
                        <input class="uk-input" type="password" placeholder="Пароль" v-model="password"
                            aria-label="Clickable icon">
                    </div>
                    <div class="uk-inline">
                        <span class="uk-form-icon" uk-icon="icon: eye"></span>
                        <input class="uk-input" type="password" placeholder="Повторить пароль" v-model="confirmPassword"
                            aria-label="Clickable icon">
                    </div>
                </div>
                <hr>
                <button class="uk-width-1-4 uk-button uk-button-primary" @click.prevent="createUser"
                    type="button">Сохранить</button>
            </div>
        </div>
        <div class="uk-width-1-2 uk-flex uk-flex-center uk-flex-middle">
            <div class="w-75">
                <div class="uk-text-center">
                    <h3>Правила заполнения формы</h3>
                </div>
                <div class="rules">
                    <div class="uk-flex uk-flex-row uk-flex-middle uk-background-muted uk-padding-small">
                        <span :class="validation.isNotEqualPass ? 'dot dot-success' : 'dot dot-warning'"></span>
                        <p :class="validation.isNotEqualPass ? 'uk-text-success rule-success' : 'uk-text-warning'">Пароли
                            должны совпадать</p>
                    </div>
                    <div class="uk-flex uk-flex-row uk-flex-middle uk-background-muted uk-padding-small">
                        <span :class="validation.isNotCorrectPass ? 'dot dot-success' : 'dot dot-warning'"></span>
                        <p :class="validation.isNotCorrectPass ? 'uk-text-success rule-success' : 'uk-text-warning'">Кол-во
                            символов должно быть больше 8</p>
                    </div>
                    <div class="uk-flex uk-flex-row uk-flex-middle uk-background-muted uk-padding-small">
                        <span :class="validation.isNotEmailCorrect ? 'dot dot-success' : 'dot dot-warning'"></span>
                        <p :class="validation.isNotEmailCorrect ? 'uk-text-success rule-success' : 'uk-text-warning'">Почта
                            должена содержать домен</p>
                    </div>
                    <div class="uk-flex uk-flex-row uk-flex-middle uk-background-muted uk-padding-small">
                        <span :class="validation.isFillName ? 'dot dot-success' : 'dot dot-warning'"></span>
                        <p :class="validation.isFillName ? 'uk-text-success rule-success' : 'uk-text-warning'">Имя должно
                            быть заполнено</p>
                    </div>
                    <div class="uk-flex uk-flex-row uk-flex-middle uk-background-muted uk-padding-small">
                        <span :class="validation.isFillSurName ? 'dot dot-success' : 'dot dot-warning'"></span>
                        <p :class="validation.isFillSurName ? 'uk-text-success rule-success' : 'uk-text-warning'">Фамилия
                            должна быть заполнена</p>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: "UserEdit",
    data() {
        return {
            file: null,
            path: null,
            isChoose: false,

            name: '',
            surname: '',
            email: '',
            password: '',
            confirmPassword: '',

            validation: {
                isNotEqualPass: false,
                isNotCorrectPass: false,
                isNotEmailCorrect: false,
                isFillName: false,
                isFillSurName: false,
            }
        }
    },
    methods: {
        handleFile() {
            this.file = this.$refs.avatar.files[0];
            this.path = URL.createObjectURL(this.file);
            this.isChoose = true;
        },
        resetFile() {
            this.isChoose = false;
            this.file = null;
            this.path = null;
        },
        createUser() {
            if (this.validation.isFillName && this.validation.isFillSurName
                && this.validation.isNotEqualPass && this.validation.isNotCorrectPass
                && this.validation.isNotEmailCorrect) {

                let formData = this.setFormData();
                this.resetAllData();
            } else {
                console.log('неудача');
            }
        },
        setFormData() {
            let fd = new FormData();

            fd.set('name', this.name);
            fd.set('surname', this.surname);
            fd.set('email', this.email);
            fd.set('password', this.password);
            fd.set('avatar', this.file);

            return fd;
        },
        resetAllData() {
            this.name = '';
            this.surname = '';
            this.email = '';
            this.password = '';
            this.confirmPassword = '';

            this.resetFile();
        }
    },
    watch: {
        password(value) {
            this.validation.isNotEqualPass = this.password === this.confirmPassword;
            this.validation.isNotCorrectPass = this.password.length >= 8;
        },
        confirmPassword(value) {
            this.validation.isNotEqualPass = this.password === this.confirmPassword;
            this.validation.isNotCorrectPass = this.confirmPassword.length >= 8;
        },
        email(value) {
            let a = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            this.validation.isNotEmailCorrect = value.match(a) !== null;
        },
        name() {
            this.validation.isFillName = this.name != '';
        },
        surname() {
            this.validation.isFillSurName = this.surname != '';
        }
    }
}
</script>

<style scoped>
.avatar-area {
    display: flex;
    justify-content: center;
    align-items: center;
}

.avatar-area>div {
    width: 225px;
    height: 225px;
    border-radius: 250px;
    border: 2px #666666 dashed;

    cursor: pointer;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.file-upload {
    outline: none;
    border: none;
    background: transparent;
}

.file-upload>span {
    cursor: pointer;
}

.file-preview {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}

.file-preview>img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    object-fit: cover;
    border-radius: 250px;
}

.file-preview>div {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 4;

    width: 100%;
    padding: 10px 0;
    background: rgba(8, 8, 8, 0.66);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    color: white;
}

.w-75 {
    width: 75%;
}

.dot-warning {
    background: #ec2147;
}

.dot-success {
    background: #32d296;
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 100px;
    margin: 0 10px;
}

.rule-success {
    text-decoration: line-through;
}

.rules {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}

</style>

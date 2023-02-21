import './bootstrap';
import { createApp } from 'vue';
import Main from './components/layouts/Main.vue';
import router from './router';


createApp(Main)
    .use(router)
    .mount('#app');
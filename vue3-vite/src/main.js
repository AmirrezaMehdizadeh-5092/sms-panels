import { createApp } from 'vue'
import App from './App.vue'
import router from './plugin/router'
import { createPinia } from 'pinia'
import { vuetify } from './plugin/vuetify';
import VueSmoothScroll from 'vue3-smooth-scroll'

import './style.css';
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(createPinia());
app.use(VueSmoothScroll);

app.mount('#app')

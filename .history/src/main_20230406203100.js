import { createApp } from "vue";
import App from "./App.vue";
import Home from './views/Home'
import About from './views/About';
import Contact from './views/Contact';
import { createRouter, createWebHistory } from 'vue-router';

createApp(App).mount("#app");

App.use(router);

App.mount('#app');
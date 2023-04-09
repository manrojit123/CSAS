import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home'
import About from './views/About';
import Contact from './views/Contact';


createApp(App).mount("#app");

App.use(router);

App.mount('#app');
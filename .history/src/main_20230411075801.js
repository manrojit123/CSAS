import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Works from "./views/works";
import Research from "./views/Research";
import Blog from "./views/Blog";
import BlogPost from "./views/BlogPost";
import Slider from "./views/Slider";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    
  ],
});
createApp(App).use(router).mount("#app");

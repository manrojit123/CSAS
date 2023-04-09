import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Works from "./views/Works";
// import ResearchTeam from "./views/ResearchTeam";
import Blog from "./views/Blog";
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
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/our-works",
      name: "Our Works",
      component: Worl,
    },
    // {
    //   path: "/research-team",
    //   name: "Research Team",
    //   component: ResearchTeam,
    // },
    {
      path: "/blog",
      name: "Blog",
      component: Blog,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
  ],
});
createApp(App).use(router).mount("#app");

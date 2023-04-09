import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Works from "./views/works";
import Research from "./views/Research";
import Blog from "./views/Blog";
import Slider from "./views/Slider"
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
      name: "Works",
      component: Works,
			children:[
				{
					path:"slider",
					name:"Slider",
					component:Slider
				}
			]
    },
    {
      path: "/research-team",
      name: "Research",
      component: Research,
    },
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

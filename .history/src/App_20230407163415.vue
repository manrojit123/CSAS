<template>
  <div>
    <div class="logo">
      <img alt="Vue logo" src="./assets/loog.png" />
    </div>
    <nav>
      <ul>
        <li :class="{ active: activeMenuItem === 'home' }">
          <router-link :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li :class="{ active: activeMenuItem === 'about' }">
          <router-link :to="{ name: 'About' }">About US</router-link>
        </li>
        <li :class="{ active: activeMenuItem === 'works' }">
          <router-link :to="{ name: 'Works' }">Our Work</router-link>
        </li>
        <li :class="{ active: activeMenuItem === 'research' }">
          <router-link :to="{ name: 'Research' }">Research Team</router-link>
        </li>
        <li :class="{ active: activeMenuItem === 'blog' }">
          <router-link :to="{ name: 'Blog' }">Blog</router-link>
        </li>
        <li :class="{ active: activeMenuItem === 'contact' }">
          <router-link :to="{ name: 'Contact' }">Contact</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  data() {
    return {
      activeMenuItem: "home",
    };
  },
  name: "App",
  methods: {
    setActiveMenuItem() {
      const path = window.location.pathname;
      if (path === "/home") {
        this.activeMenuItem = "home";
      } else if (path === "/") {
        this.activeMenuItem = "home";
      } else if (path === "/about") {
        this.activeMenuItem = "about";
      } else if (path === "/our-works") {
        this.activeMenuItem = "works";
      } else if (path === "/research-team") {
        this.activeMenuItem = "research";
      } else if (path === "/blog") {
        this.activeMenuItem = "blog";
      } else if (path === "/contact") {
        this.activeMenuItem = "contact";
      }
    },
  },
  mounted() {
    this.setActiveMenuItem();
  },
  watch: {
    $route() {
      this.setActiveMenuItem();
    },
  },
};
</script>
<style>
:root {
  --pinkBrand: #ff67c4;
  --brownBrand: #f3e2c7;
  --blackBrand: #000;
  --pinkHover: #6e0d49;
}
body,
p {
  font-family: "Poppins" !important;
  font-weight: 300;
  line-height: 2rem;
  text-align: justify;
  font-size: 14px;
}
p {
  margin-bottom: 0.7rem !important;
}
.title {
  font-family: "EB Garamond";
}
.logo {
  display: flex;
  justify-content: center;
  padding: 15px;
}
.logo img {
  height: 120px;
}
nav ul {
  display: flex;
  align-items: self-start;
  list-style: none;
  justify-content: center;
}
nav ul a {
  text-decoration: none;
  color: var(--pinkBrand);
  text-transform: uppercase;
  padding: 10px 30px;
  transition: all 100ms ease-in;
}
nav ul a:hover {
  color: var(--pinkHover);
  transition: all 100ms ease-in;
}
nav ul li.active a {
  color: var(--blackBrand);
}
nav ul li a{
  position:relative;
}
nav ul li.active a:after {
  content: "";
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 7.5px;
  background-color: var(--blackBrand);
  position: absolute;
  left: 50%;
  margin-left: -2px;
  bottom: 0;
}

</style>

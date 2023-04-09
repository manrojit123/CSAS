<template>
  <div>
    <div class="logo">
      <img alt="Vue logo" src="../assets/loog.png" />
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
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      activeMenuItem: "home",
    };
  },
  name: "Header",
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
  
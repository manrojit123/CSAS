<template>
    <div>
    <div class="logo">
      <img alt="Vue logo" src="./assets/loog.png" />
    </div>
    <nav>
      <ul>
        <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'About' }">About US</router-link></li>
        <li><router-link :to="{ name: 'Works' }">Our Work</router-link></li>
        <li><router-link :to="{ name: 'Research' }">Research Team</router-link></li>
        <li><router-link :to="{ name: 'Blog' }">Blog</router-link></li>
        <li><router-link :to="{ name: 'Contact' }">Contact</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>
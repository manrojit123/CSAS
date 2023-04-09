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

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  // components: {
  //   HelloWorld,
  // },
};
</script>
<style>
:root {
--pinkBrand:#ff67c4;
--brownBrand:#F3E2C7;
--blackBrand:#000;
}
body,p{
            font-family: 'Poppins';
            font-weight: 300;
            line-height: 2rem;
            text-align: justify;
            font-size:14px;
        }
        .title{
            font-family:'EB Garamond';
        }
 .logo{
            display: flex;
            justify-content: center;
            padding: 15px;
        }
        .logo img{
            height:120px;
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
}
nav ul a:hover {
  color: #6e0d49;
}
nav ul a:active {
  color: black;
}
</style>

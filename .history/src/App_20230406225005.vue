<template>
  <div>
    <div class="logo">
      <img alt="Vue logo" src="./assets/loog.png" />
    </div>
    <nav>
      <ul>
        <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'About' }">About US</router-link></li>
        <li><router-link :to="{ name: 'About' }">Our Work</router-link></li>
        <li><router-link :to="{ name: 'About' }">Research Team</router-link></li>
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
body,p{
            font-family: 'Poppins';
            font-weight: 300;
            line-height: 2rem;
            text-align: justify;
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
  color: #ff67c4;
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

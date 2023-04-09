<template>
  <div>
    <div class="logo">
      <img alt="Vue logo" src="./assets/loog.png" />
    </div>
    <nav>
      <ul>
        <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'About' }">About</router-link></li>
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

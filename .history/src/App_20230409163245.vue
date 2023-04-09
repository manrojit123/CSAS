<template>
  <div>
     <router-view />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  
};
</script>
<style>
:root {
  --pinkBrand: #ff67c4;
  --brownBrand: #f3e2c7;
  --blackBrand: #000;
  --pinkHover: #6e0d49;
  --baseFontSize:15px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
body,
p {
  font-family: "Poppins" !important;
  font-weight: 300;
  line-height: 2rem;
  text-align: justify;
  font-size: var(--baseFontSize);
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
  transition: all 500ms ease-in;
}
nav ul a:hover {
  color: var(--pinkHover);
  transition: all 500ms ease-in;
}
nav ul li.active a {
  color: var(--blackBrand);
}
nav ul li a{
  position:relative;
}
nav ul li a:after {
  content: "";
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 7.5px;
  background-color: white;
  position: absolute;
  left: 50%;
  margin-left: -2px;
  bottom: 0;
  transition: all 500ms ease-in;
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
  transition: all 500ms ease-in;
}

.content{
    margin-top:50px;
}
.fw-600{
font-weight:600;
}
</style>

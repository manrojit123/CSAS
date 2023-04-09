<template>
  <div>
    <Header></Header>
  </div>
 
</template>
  
  <script>
import Footer from "./Footer";
import Header from "./Header";
export default {
  name: "Home",
  components: {
    Footer,
    Header
  },
};
</script>
  
  <style scoped>
.homeImage {
  float: right;
  width: 420px;
  margin: 0px 0px 10px 45px;
}
.start-overlay {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: white;
  top: 0;
  left: 0;
  z-index: 99;
}
.overlay-image {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: right;
}
.start-overlay-button {
  position: absolute;
    z-index: 100;
    bottom: 22%;
    left: 37%;
    width: 367px;
    border: 1px solid red;
}
</style>
  
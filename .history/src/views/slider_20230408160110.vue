<template>
    <section>

    </section>

</template>
   <script>
//importing bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import * as Bootstrap from "bootstrap";
//import DemoComponent from "./components/DemoComponent.vue"

export default {
name: "Slider",
  mounted() {
    var myCarousel = document.querySelector("#myCarousel");
    new Bootstrap.Carousel(myCarousel);
  },
};
</script>
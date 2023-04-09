<template>
  <section class="d-flex align-items-center justify-content-center">
    <a href="http://localhost:8080/our-works">
    	<span class="cross"><img src="../assets/cross.svg" alt=""></span>
    </a>
    <div class="container-fluid">
      <div class="row">
        <div class="col-13 mx-auto p-4 ">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="../assets/slider/1.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/slider/2.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
									src="../assets/slider/3.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
							<img src="../assets/prev.svg" alt="">
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <img src="../assets/next.svg" alt="">
            </button>
          </div>
        </div>
      </div>
    </div>
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
	data(){
		return{
			sliders:[
				{img:require('@/assets/slider/1.png')},
				{img:require('@/assets/slider/2.png')},
				{img:require('@/assets/slider/3.png')},
				{img:require('@/assets/slider/4.png')},
				{img:require('@/assets/slider/5.png')},
				{img:require('@/assets/slider/6.png')},
				{img:require('@/assets/slider/7.png')},
				{img:require('@/assets/slider/8.png')},
				{img:require('@/assets/slider/9.png')},
				{img:require('@/assets/slider/10.png')},
				{img:require('@/assets/slider/11.png')},
				{img:require('@/assets/slider/12.png')},
				{img:require('@/assets/slider/13.png')},
				{img:require('@/assets/slider/14.png')},
				{img:require('@/assets/slider/15.png')},
				{img:require('@/assets/slider/16.png')}
			]
		}
	}
  mounted() {
    var myCarousel = document.querySelector("#myCarousel");
    new Bootstrap.Carousel(myCarousel);
  },
};
</script>

<style scoped>
section{
    background: black;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
}
.cross{
    position: fixed;
    top:10px;   
    right:10px;
		z-index: 110;
}
.carousel-control-prev,.carousel-control-next  {
    position: fixed;
    width: unset;
		opacity:1;
}

</style>
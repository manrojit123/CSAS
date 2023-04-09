<template>
  <Header></Header>
  <section class="content homeContent">
    <div id="mainOverlay">
      <div
      class="start-overlay"
      :class="{ active: isActive }"
      @click="toggleActive"
    >
    <svg viewBox="0 0 500 500">
    <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
    <text width="500">
      <textPath xlink:href="#curve">
        Dangerous Curves Ahead
      </textPath>
    </text>
  </svg>
      <img src="../assets/start.png" alt="" class="overlay-image" />
      <img
        src="../assets/start-button.png"
        alt=""
        class="start-overlay-button"
      />
    </div>
    </div>
    
    <div class="video-overlay" id="gifimage">
      <img v-if="isActive"  src="../assets/video.gif" alt="Your GIF"  />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="title">Welcome to CSAS</h1>
        </div>
        <div class="col-12">
          <img src="../assets/homeImage.png" class="homeImage" alt="" />
          <p>
            The Center for the Study of Apparent Selves (CSAS) is an
            international research institute located in Kathmandu, Nepal, that
            serves as a hub for interdisciplinary research and teaching across
            the world.
          </p>
          <p>
            CSAS seeks to develop, study, and test models of intelligence that
            are ethically and aesthetically fulfilling and can be applied across
            a broad range of current and emerging substrates.
          </p>
          <p>
            Through collaborative research, grant awarding, teaching, outreach
            and public engagement, CSAS brings together projects, institutions,
            and individuals. The projects that we lead or participate in can be
            seen to converge in a vision of humans as interconnected,
            transformative, and dynamic beings—profoundly capable of care.
            Inspired and informed by this emergent vision, CSAS seeks to
            cultivate understanding of, and means for, human flourishing that
            are applicable to a broad range of societal and environmental
            contexts—health, education, peacebuilding, caring for the biosystem,
            etc.
          </p>
          <p>
            As a research network with global participation and a physical
            presence in Kathmandu, Nepal, CSAS is also inspired by the
            Himalayas—a region that since ancient times has been a fountainhead
            of spiritual and philosophical traditions, many of which are still
            studied and practiced to this day. Yet this region is also extremely
            vulnerable to global warming and environmental degradation (often
            leading to scarcity of resources and communal conflict) as well as
            geopolitical clashes of interest that impact billions in South and
            East Asia, and so also the world at large. In this way, our
            immediate environment abounds with rich resources for human
            flourishing, just as it presents powerful challenges. Our aim is
            then to learn from and respond to our environment—with scientific
            rigor and spiritual depth.
          </p>
        </div>
        <div class="col-6"></div>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>
<script>
import Footer from "./Footer";
import Header from "./Header";
export default {
  name: "Home",
  components: {
    Footer,
    Header,
  },
  data() {
    return {
      count: parseInt(localStorage.getItem("count") || 0),
      isActive: false,
    };
  },
  methods: {
    toggleActive() {
      this.count++;
      localStorage.setItem("count", this.count);
      this.isActive = !this.isActive;
      setTimeout(() => {
        document.getElementById('gifimage').classList.add("hidegif")
      }, 4600);
    },
  },
  created(){
    if(this.count > 0){
      this.$nextTick(() => {
        this.$el.querySelector("#mainOverlay").style.display = 'none'
      })
      
    }
  }
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
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
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
.start-overlay.active {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  pointer-events: none;
}
.video-overlay {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: white;
  top: 0;
  left: 0;
  z-index: 98;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}
.video-overlay.hidegif {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  pointer-events: none;
}
</style>
  
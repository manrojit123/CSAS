<template>
  <Header></Header>
  <section class="content aboutContent">
    <div class="container">
      <div class="row researcher mt-4 mb-2">
        <div class="col-10 mx-auto text-center">
          <h2 class="title mb-3">Research Team</h2>
        </div>
        <div class="col-3">
          <img
            src="../assets/research_bill_dune.png"
            class="img-fluid"
            alt="Bill Duane"
          />
          <h5>Bill Duane</h5>
        </div>
        <div class="col-3">
          <img
            src="../assets/research_elizabeth.png"
            class="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Elizaveta Solomonova</h5>
        </div>
        <div class="col-3">
          <img
            src="../assets/research_iman.png"
            class="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Iman Gurung</h5>
        </div>
        <div class="col-3">
          <img
            src="../assets/research_michael.png"
            class="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Michael Levin</h5>
        </div>
        <div class="col-3">
          <img
            src="../assets/research_olaf.png"
            class="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Olaf Witkowski</h5>
        </div>
        <div class="col-3">
          <img
            src="../assets/research_pranab.png"
            class="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Pranab Das</h5>
        </div>
        <div class="col-3">
          <img
            src="../assets/research_richard.png"
            class="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Richard Watson</h5>
        </div>
        <div class="col-3">
          <img
            src="../assets/research_thomas.png"
            class="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Thomas Doctor</h5>
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>
  
  <script>
  import Footer from './Footer';
export default {
  name: "About",
  components: {
    Footer
  },
};
</script>
  
  <style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}

.researcher h5{
  text-align: center;
  font-weight: 300;
  font-size: 0.9rem;
  margin: 8px 0 30px 0;
}
</style>
  
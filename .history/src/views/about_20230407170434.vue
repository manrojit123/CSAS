<template>
  <section class="content aboutContent">
    <div class="container">
      <div class="row">
        <div class="col-10 mx-auto">
          <h1 class="title">About US</h1>
        </div>
        <div class="col-10 mx-auto">
          <p>
            CSAS seeks to bring together thought leaders from the spheres of
            biology, Buddhism, education, medicine, psychology, and the sciences
            of information and cognition. We are committed to conduct
            multidisciplinary research comprehensively, critically and
            constructively.
          </p>
        </div>
        <div class="col-10 mx-auto">
          <p>
            <img
              src="../assets/aboutImg.png"
              class="img-fluid homeImage"
              alt=""
            />
          </p>
        </div>
        <div class="col-10 mx-auto">
          <p>
            <span class="fw-600">Comprehensively</span>, since members of CSAS
            collaborate continuously over extended periods of time, seeking to
            engender mutual knowledge transfers, with the view to concrete
            application within science, religion and society-at-large.
          </p>
          <p>
            <span class="fw-600">Critically</span>, because the recognition of
            conceptual opaqueness, operational weaknesses, or mismatches between
            aspiration and practice within one’s own community and its
            interfaces with human society and the global ecosystem remain
            explicit objectives.
          </p>
          <p>
            <span class="fw-600">Constructively</span>, because our aim is to
            describe, critique, and model caring intelligences in ways that map
            to concepts in biology, Buddhism and cognitive science and are
            relevant for the development of AI.
          </p>
        </div>
      </div>

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

      <div class="row trustees mt-4 mb-2 mx-auto justify-content-center">
        <div class="col-10 mx-auto text-center">
          <h2 class="title mb-3">Board of Trustees</h2>
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
            src="../assets/research_pranab.png"
            class="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Pranab Das</h5>
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

      <div class="row board mt-4 mb-2 mx-auto justify-content-center">
        <div class="col-10 mx-auto text-center">
          <h2 class="title mb-3">Advisory Board</h2>
        </div>
        <div class="col-3">
          <img
            src="../assets/board_chokyl.png"
            class="img-fluid"
            alt="Bill Duane"
          />
          <h5>Chökyi Nyima Rinpoche</h5>
          <span class="text-center d-block">Lineage Holder in the Kagyu and</span>
          <span class="text-center d-block">Nyingma schools of </span>
          <span class="text-center d-block">Himalayan Buddhism</span>
        </div>
       
        <div class="col-3">
          <img
            src="../assets/board_piet.png"
            class="img-fluid"
            alt="Bill Duane"
          />
          <h5>Dr. Thomas Doctor</h5>
          <span class="text-center d-block">Professor of Astrophysics,</span>
Head of the Program in Interdisciplinary Studies, Institute for Advanced Study, Princeton</span>
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>
  
  <script>
export default {
  name: "About",
};
</script>
  
  <style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}

.researcher h5,
.trustees h5,.board h5 {
  text-align: center;
  font-weight: 300;
  font-size: 0.8rem;
  margin: 5px 0 30px 0;
}
.board span{
    text-align:center;
}
</style>
  
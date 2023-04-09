<template>
  <section class="content aboutContent">
    <div class="container">
      <div class="row">
        <div class="col-10 mx-auto">
          <h1 class="title">Our Works</h1>
        </div>
        <div class="col-10 mx-auto">
          <p>
            Brought on by rapid advances in science and technology, novel and hybrid modes of being and engagement are becoming increasingly available to us, and so customary notions of "human," "animal," and "machine" are turning increasingly opaque or impractical: not for abstract philosophical reasons, but simply given the profound entanglement between human activities, scientific advances, and the ubiquitous influence of technology. As seemingly fundamental ideas about identity, meaning, and responsibility are in this way called into question, if not outright undermined, by the novel situations that we find ourselves in, it seems worth our while to consider a broad cross-cultural array of human systems for meaning and fulfilment.
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
    </div>
  </section>
  <Footer></Footer>
</template>
  
  <script>
import Footer from "./Footer";
export default {
  name: "Home",
  components: {
    Footer,
  },
};
</script>
  
  <style scoped>
.homeImage {
  float: right;
  width: 420px;
  margin: 0px 0px 10px 45px;
}
</style>
  
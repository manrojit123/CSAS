<template>
  <section class="content aboutContent">
    <div class="container">
      <div class="row">
        <div class="col-10 mx-auto">
          <h1 class="title">Our Works</h1>
        </div>
        <div class="col-10 mx-auto">
          <p>Brought on by rapid advances in science and technology, novel and hybrid modes of being and engagement are becoming increasingly available to us, and so customary notions of "human," "animal," and "machine" are turning increasingly opaque or impractical: not for abstract philosophical reasons, but simply given the profound entanglement between human activities, scientific advances, and the ubiquitous influence of technology. As seemingly fundamental ideas about identity, meaning, and responsibility are in this way called into question, if not outright undermined, by the novel situations that we find ourselves in, it seems worth our while to consider a broad cross-cultural array of human systems for meaning and fulfilment.</p>
        </div>
        <div class="col-10 mx-auto text-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jtta_5rGsHU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="col-10 mx-auto">
          <p>CSAS draws inspiration from Buddhist models of cognitive and ethical transformation, taking the idea of the Bodhisattva as the starting point. Bodhisattvas are traditionally conceived as evolutionary models of caring and insightful engagement that transcend the boundaries of species and understand organisms and their environments in terms of interdependence and mutual integration. We suggest that the frameworks of AI, cognitive science, developmental biology, and the Bodhisattva idea can serve as touchstones for each other as they carry common or compatible aspirations and concerns.</p>
        </div>
      </div>


      <div class="row worksTypes mt-4 mb-2">
       
        <div class="col-3" @click="showResearch = !showResearch">
          <img src="../assets/work_research.png" class="img-fluid" alt="Bill Duane"/>
          <h5>Research</h5>
        </div>
        <div class="col-3" @click="showSeminar = !showSeminar">
          <img src="../assets/work_workshop.png" class="img-fluid" alt="Bill Duane"/>
          <h5>Workshop & Seminars</h5>
        </div>
        <div class="col-3" @click="showEducation = !showEducation">
          <img src="../assets/work_education.png" class="img-fluid" alt="Bill Duane" />
          <h5>Education</h5>
        </div>
        <div class="col-3" @click="showEngagement = !showEngagement">
          <img src="../assets/work_public.png" class="img-fluid" alt="Bill Duane" />
          <h5>Public Engagement</h5>
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
  data(){
    
  }
  components: {
    Footer,
  },
};
</script>
  
  <style scoped>

.worksTypes h5{
font-family: 'EB Gardamon';
text-align: center;
color:var(--pinkBrand);
margin:10px;
font-weight: 400;
font-size:1.1rem;

}
</style>
  
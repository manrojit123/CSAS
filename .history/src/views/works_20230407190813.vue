<template>
  <section class="content aboutContent">
    <div class="container">
      <div class="row">
        <div class="col-10 mx-auto">
          <h1 class="title">Our Works</h1>
        </div>
        <div class="col-10 mx-auto">
          <p>Brought on by rapid advances in science and technology, novel and hybrid modes of being and engagement are becoming increasingly available to us, and so customary notions of "human," "animal," and "machine" are turning increasingly opaque or impractical: not for abstract philosophical reasons, but simply given the profound entanglement between human activities, scientific advances, and the ubiquitous influence of technology. As seemingly fundamental ideas about identity, meaning, and responsibility are in this way called into question, if not outright undermined, by the novel situations that we find ourselves in, it seems worth our while to consider a broad cross-cultural array of human systems for meaning and fulfilment.</p>
            <YouTubeEmbed videoId="YOUR_YOUTUBE_VIDEO_ID" />
          <p>CSAS draws inspiration from Buddhist models of cognitive and ethical transformation, taking the idea of the Bodhisattva as the starting point. Bodhisattvas are traditionally conceived as evolutionary models of caring and insightful engagement that transcend the boundaries of species and understand organisms and their environments in terms of interdependence and mutual integration. We suggest that the frameworks of AI, cognitive science, developmental biology, and the Bodhisattva idea can serve as touchstones for each other as they carry common or compatible aspirations and concerns.</p>
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>
  
  <script>
import Footer from "./Footer";
import YouTubeEmbed from '../components/youtube.vue';
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
  
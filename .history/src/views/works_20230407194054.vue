<template>
  <section class="content aboutContent">
    <div class="container">
      <div class="row">
        <div class="col-10 mx-auto">
          <h1 class="title">Our Works</h1>
        </div>
        <div class="col-10 mx-auto">
          <p>
            Brought on by rapid advances in science and technology, novel and
            hybrid modes of being and engagement are becoming increasingly
            available to us, and so customary notions of "human," "animal," and
            "machine" are turning increasingly opaque or impractical: not for
            abstract philosophical reasons, but simply given the profound
            entanglement between human activities, scientific advances, and the
            ubiquitous influence of technology. As seemingly fundamental ideas
            about identity, meaning, and responsibility are in this way called
            into question, if not outright undermined, by the novel situations
            that we find ourselves in, it seems worth our while to consider a
            broad cross-cultural array of human systems for meaning and
            fulfilment.
          </p>
        </div>
        <div class="col-10 mx-auto text-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jtta_5rGsHU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div class="col-10 mx-auto">
          <p>
            CSAS draws inspiration from Buddhist models of cognitive and ethical
            transformation, taking the idea of the Bodhisattva as the starting
            point. Bodhisattvas are traditionally conceived as evolutionary
            models of caring and insightful engagement that transcend the
            boundaries of species and understand organisms and their
            environments in terms of interdependence and mutual integration. We
            suggest that the frameworks of AI, cognitive science, developmental
            biology, and the Bodhisattva idea can serve as touchstones for each
            other as they carry common or compatible aspirations and concerns.
          </p>
        </div>
      </div>

      <div class="row worksTypes mt-4 mb-2">
        <div class="col-3" @click="showResearch = !showResearch">
          <img
            src="../assets/work_research.png"
            class="img-fluid"
            alt="Bill Duane"
          />
          <h5>Research</h5>
        </div>
        <div class="col-3" @click="showSeminar = !showSeminar">
          <img
            src="../assets/work_workshop.png"
            class="img-fluid"
            alt="Bill Duane"
          />
          <h5>Workshop & Seminars</h5>
        </div>
        <div class="col-3" @click="showEducation = !showEducation">
          <img
            src="../assets/work_education.png"
            class="img-fluid"
            alt="Bill Duane"
          />
          <h5>Education</h5>
        </div>
        <div class="col-3" @click="showEngagement = !showEngagement">
          <img
            src="../assets/work_public.png"
            class="img-fluid"
            alt="Bill Duane"
          />
          <h5>Public Engagement</h5>
        </div>
      </div>
      <div class="row workTypesDetails">
        <div v-if="showResearch">
          Through interdisciplinary study of Buddhist philosophy and
          contemporary science, we seek to conduct research that brings
          understudied Buddhist ideas to a broader scientific community.
          Likewise, we wish to bring the latest ideas in AI, neuroscience,
          evolutionary biology, and regenerative medicine to the attention of
          Buddhist scholars. This will enrich both sides: science (improving its
          application for human flourishing) and Buddhist traditions (which have
          a long history of adaptive value for human well-being and fulfilment
          that can be integrated with fundamental scientific discoveries).
        </div>
        <div v-if="showSeminar">This is the content to show</div>
        <div v-if="showEducation">
          CSAS is developing a Science-Buddhism compendium that could become an
          important resource for the development of mutually recognizable
          curricula in the secular Nepalese school system and the country's
          Buddhist and Vedic monastic schools. As Nepal's societal structures
          transform, the traditional scholarly institutions, which have for many
          centuries focused almost exclusively on religious learning, must
          change and adjust to the demands of contemporary society. Thus, when
          today an eight year old girl or boy enters a traditional monastic
          school system, they will over the following years be charged with
          learning and appropriating the contents of an all-round, secular
          education—along with the vast and complex philosophical and spiritual
          learning that is contained in the traditional models. For anyone but
          the rare genius, such a feat is impossible. Therefore, in order for
          the knowledge and insights that are carried by traditional Himalayan
          educational models to survive and remain accessible in the world, it
          becomes imperative that we rethink and restructure the contents of
          both traditional and contemporary educational systems, such that,
          ideally, the two can shine a dynamic light on one another. Curriculum
          Development
        </div>
        <div v-if="showEngagement">This is the content to show</div>
      </div>

      <div class="tabs">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: activeTab === index }"
          @click="setActiveTab(index)"
        >
          {{ tab.title }}
        </button>
      </div>
      <div v-for="(tab, index) in tabs" :key="index" v-if="activeTab === index">
        {{ tab.content }}
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>
  
  <script>
import Footer from "./Footer";
export default {
  name: "Home",
  data() {
    return {
      tabs: [
        {
          title: 'Tab 1',
          content: 'This is the content for Tab 1',
        },
        {
          title: 'Tab 2',
          content: 'This is the content for Tab 2',
        },
        {
          title: 'Tab 3',
          content: 'This is the content for Tab 3',
        },
      ],
      activeTab: 0,
    };
  },
  methods: {
    setActiveTab(index) {
      this.activeTab = index;
    },
  },
  components: {
    Footer,
  },
};
</script>
  
  <style scoped>
.worksTypes h5 {
  font-family: "EB Gardamon";
  text-align: center;
  color: var(--pinkBrand);
  margin: 10px;
  font-weight: 400;
  font-size: 1.1rem;
}
.tabs {
  display: flex;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 10px;
}

button.active {
  border-bottom: 2px solid black;
}
</style>
  
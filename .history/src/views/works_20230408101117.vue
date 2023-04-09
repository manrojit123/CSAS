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
        <div class="col-3" @click="toggleClass('button1')">
          <div :class="{ active: isActive('button1') }">
            <img
              src="../assets/work_research.png"
              class="img-fluid"
              alt="Bill Duane"
            />
            <h5>Research</h5>
          </div>
        </div>
        <div class="col-3" @click="toggleClass('button2')">
          <div :class="{ active: isActive('button2') }">
            <img
              src="../assets/work_workshop.png"
              class="img-fluid"
              alt="Bill Duane"
            />
            <h5>Workshop & Seminars</h5>
          </div>
        </div>
        <div class="col-3" @click="toggleClass('button3')">
          <div :class="{ active: isActive('button3') }">
            <img
              src="../assets/work_education.png"
              class="img-fluid"
              alt="Bill Duane"
            />
            <h5>Education</h5>
          </div>
        </div>
        <div class="col-3" @click="toggleClass('button4')">
          <img
            src="../assets/work_public.png"
            class="img-fluid"
            alt="Bill Duane"
          />
          <h5>Public Engagement</h5>
        </div>
      </div>
      <div class="row workTypesDetails">
        <div :class="{ active: isActive('button1') }">
          Through interdisciplinary study of Buddhist philosophy and
          contemporary science, we seek to conduct research that brings
          understudied Buddhist ideas to a broader scientific community.
          Likewise, we wish to bring the latest ideas in AI, neuroscience,
          evolutionary biology, and regenerative medicine to the attention of
          Buddhist scholars. This will enrich both sides: science (improving its
          application for human flourishing) and Buddhist traditions (which have
          a long history of adaptive value for human well-being and fulfilment
          that can be integrated with fundamental scientific discoveries).

          <ul>
            <li>Doctor, Thomas. 2020. “True Love for the Artificial? Toward the Possibility of Bodhisattva Relations with Machines.” Journal of Buddhist Ethics vol. 27 2020.</li>
              <li>Doctor, Thomas, Solomonova, Elizaveta, Duane, Bill, Witkowski, Olaf. 2021. "Can Being Aware of the Illusion of Self Augment an Agent's Affordances: Integrating Buddhist Philosophy, Cognitive Science, and Artificial Life." Proceedings of the ALIFE 2021: The 2021 Conference on Artificial Life. ALIFE 2021: The 2021 Conference on Artificial Life. <a href="https://doi.org/10.1162/isal_a_00465">https://doi.org/10.1162/isal_a_00465</a></li>
              <li>Doctor, Thomas. “Can Being Aware of the Illusion of Self Augment an Agent’s Affordances: Integrating Buddhist Philosophy, Cognitive Science, and Artificial Life”. Video recorded in 2021. ALIFE 2021: The 2021 Conference on Artificial Life.</li>
              <li>CSAS-edited papers presented at CSAS Special Session at ALIFE 2021: “Illusions of Self: Beyond Human, Animal, and Robot”:
                <ul>
                  <li> Gershenson, Carlos. 2021. “On the Scales of Selves: Information, Life, and Buddhist Philosophy”. Proceedings of the ALIFE 2021: The 2021 Conference on Artificia Life. ALIFE 2021: The 2021 Conference on Artificial Life. doi: <a href="https://doi.org/10.1162/isal_a_00402">https://doi.org/10.1162/isal_a_00402</a>.</li>
                  <li>Lopes, Ana Christina. 2021. “Monks, Labs, Cyborgs: the Plasticity of Personhood in Tibetan Buddhism”. Proceedings of the ALIFE 2021: The 2021 Conference on Artificial Life. ALIFE 2021: The 2021 Conference on Artificial Life. doi: <a href="https://doi.org/10.1162/isal_a_00455">https://doi.org/10.1162/isal_a_00455</a>.</li>
                  <li>Siqueiros, José. 2021. “You, Robot: Empathy in a Hybrid World”. Proceedings of the ALIFE 2021: The 2021 Conference on Artificial Life. ALIFE 2021: The 2021 Conference on Artificial Life. doi: <a href="https://doi.org/10.1162/isal_a_00465">https://doi.org/10.1162/isal_a_00465</a> .</li>  
                </ul> 
              </li>
              <li>  Doctor, Thomas, Olaf Witkowski, Elizaveta Solomonova, Bill Duane, and Michael Levin. 2022. “Biology, Buddhism, and AI: Care as the Driver of Intelligence”. Entropy 24, no. 5: 710. <a href="https://doi.org/10.3390/e24050710">https://doi.org/10.3390/e24050710</a>.</li>
              <li>Witkowski, Olaf, Schwitzgebel, Eric. 2022 “Ethics of Artificial Life: The Moral Status of Life as It Could Be.” Proceedings of the ALIFE 2022: The 2022 Conference on Artificial Life. ALIFE 2022: The 2022 Conference on Artificial Life. <a hf.</li>
              <li>Witkowski, Olaf, Thomas Doctor, Elizaveta Solomonova, Bill Duane, and Michael Levin. 2023. “Towards an Ethics of Autopoietic Technology: Stress, Care, and Intelligence.” PsyArXiv. February 16. doi:10.31234/osf.io/pjrd2.</li>

          </ul>
        </div>
        <div :class="{ active: isActive('button2') }">
          This is the content to show
        </div>
        <div :class="{ active: isActive('button3') }">
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
        <div :class="{ active: isActive('button4') }">
          <section class="overlays">
            <span class="cross" @click="toggleClass('button4')"
              ><img src="../assets/cross.svg" alt=""
            /></span>
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  v-for="(slide, index) in slides"
                  :key="index"
                  :data-bs-target="'#carouselExampleIndicators'"
                  :data-bs-slide-to="index"
                  :class="{ active: index === currentSlide }"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div
                  v-for="(slide, index) in slides"
                  :key="index"
                  class="carousel-item"
                  :class="{ active: index === currentSlide }"
                >
                  <img :src="slide.image" class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>{{ slide.title }}</h5>
                    <p>{{ slide.description }}</p>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>
<script>
import { ref } from "vue";
import Footer from "./Footer";
export default {
  setup() {
    const activeButton = ref("");
    const slides = ref([
      {
        image: "https://via.placeholder.com/800x400?text=Slide+1",
        title: "Slide 1 Title",
        description: "Slide 1 Description",
      },
      {
        image: "https://via.placeholder.com/800x400?text=Slide+2",
        title: "Slide 2 Title",
        description: "Slide 2 Description",
      },
      {
        image: "https://via.placeholder.com/800x400?text=Slide+3",
        title: "Slide 3 Title",
        description: "Slide 3 Description",
      },
    ]);

    const currentSlide = ref(0);
    const toggleClass = (button) => {
      activeButton.value = activeButton.value === button ? "" : button;
    };

    const isActive = (button) => {
      return activeButton.value === button;
    };
    return { slides, currentSlide,toggleClass, isActive };
  },
  name: "Home",
  data() {
    return {
      showResearch: false,
      showSeminar: false,
      showEducation: false,
      showEngagement: false,
    };
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

.workTypesDetails div {
  display: none;
}
.workTypesDetails div.active {
  display: grid;
}
.overlays {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: #000000f0;
  z-index: 99;
  top: 0;
  left: 0;
}
.cross {
  position: fixed;
  right: 20px;
  top: 20px;
}
</style>

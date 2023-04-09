<template>
  <section class="content homeContent">
    <div class="container">
      <div class="row">
        <div class="col-10 mx-auto">
          <h1 class="title">Blog</h1>
          <p>
            CSAS seeks to cultivate understanding of and means for. human
            flourishing that are applicable to a broad range of societal and
            environmental contexts health, education. peace building, caring for
            the biosyjtem, etc. As a research network with global participation
            and a physical presence in Kathmandu, Nepal,
          </p>
        </div>
        <div class="col-12"></div>
      </div>
    </div>
  </section>
  <div class="home">
    <div v-for="(post, index) in posts" :key="post.id" class="col-3">
      <div :data></div>
      {{ post.image }}
      {{ post.date }}
      {{ post.author }}
      {{ post.title }}
    </div>
  </div>
</template>
<script>
export default {
  name: "Blog",
  data() {
    return {
      parentMessage: "Parent",
      posts: [
        {
          id: 1,
          title: "Approaching Bodhisattva Agency",
          date: "April 7, 2021",
          author: "Bodhisattva Agent AI",
          image:
            "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_2000,w_2000,f_auto,q_auto/862721/154836_967074.png",
        },
        {
          id: 1,
          title:
            "Call for Papers for Illusions Of Self: Beyond Human, Animal and Robot",
          date: "April 7, 2021",
          author: "Bodhisattva Agent AI",
          image: "",
        },
      ],
    };
  },
};
</script>
<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}
</style>

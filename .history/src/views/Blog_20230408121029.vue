<template>
     <section class="content homeContent">
    <div class="container">
      <div class="row">
        <div class="col-10 mx-auto">
          <h1 class="title">Blog</h1>
          <p>CSAS seeks to cultivate understanding of and means for. human flourishing that are applicable to a broad range of societal and environmental contexts health, education. peace building, caring for the biosyjtem, etc. As a research network with global participation and a physical presence in Kathmandu, Nepal,</p>
        </div>
        <div class="col-12">

        </div>
    </div>
    </div>
    </section>
  <div class="home">
    <h1>Blog</h1>
    <li v-for="(post, index) in posts" :key="post.id">
      {{ parentMessage }} - {{ index }} - {{ post.title }}
    </li>
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
            id:1,
            title: "Foo" 
        }, 
        { 
            id:2,
            title: "Bar" 
        }
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

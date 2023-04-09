

<template>
  <Header></Header>
  <section class="content homeContent">
    <div class="container">
      <div class="row">
        <h2>{{ blogPost.title }}</h2>
        <img src="../assets/blog/" alt="">
        <p>{{ blogPost.body }}</p>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>
  
  <script>
import Footer from "./Footer";
import Header from "./Header";
export default {
  components: {
    Footer,
    Header,
  },
  props: {
    blogId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      blogPost: {},
    };
  },
  created() {
    // Fetch blog post details from API using blogId
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.blogId}`)
      .then((response) => response.json())
      .then((data) => {
        this.blogPost = data;
      });
  },
};
</script>
  



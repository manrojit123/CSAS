

<template>
  <Header></Header>
  <section class="content BlogContent">
    <div class="container">
      <div class="row">
        <div class="col-12 col-xl-10 mx-auto "><h2 class="title">{{ blogPost.title }}</h2></div>
        
        <img src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_2000,w_2000,f_auto,q_auto/862721/154836_967074.png" alt="">
        <div class="col-12 col-xl-10 mx-auto "><p>{{ blogPost.body }}</p></div>
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
  



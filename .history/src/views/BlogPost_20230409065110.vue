

<template>
    <Header></Header>
    <section class="content homeContent">
      <div class="container">
        <div class="row">
          
            <h2>{{ blogPost.title }}</h2>
    <p>{{ blogPost.body }}</p>
          
            
          
        </div>
      </div>
    </section>
    <Footer></Footer>
  </template>
  
  <script>
  import Footer from './Footer';
  import Header from './Header';
export default {
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
  




  <script>
  import Footer from './Footer';
  import Header from './Header';
  export default {
    name: "Blog",
    components:{
      Footer,
      Header
    },
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
            image: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/862721/518708_746704.jpeg",
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
  .blog-list img{
      height:150px;
      width:100%;
      object-fit: cover;
      border-radius:10px;
  }
  .blog-meta{
    font-size:0.8rem;
    margin-top:5px;
    opacity:0.4;
  }
  </style>
  
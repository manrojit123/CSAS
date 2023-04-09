<template>
  <Header></Header>
  <section class="content homeContent">
    <div class="container">
      <div class="row">
        <div class="col-10 mx-auto mb-3">
          <h1 class="title">Blog</h1>
          <p>
            CSAS seeks to cultivate understanding of and means for. human
            flourishing that are applicable to a broad range of societal and
            environmental contexts health, education. peace building, caring for
            the biosyjtem, etc. As a research network with global participation
            and a physical presence in Kathmandu, Nepal,
          </p>
        </div>
        
        
          <div v-for="(post, index) in posts" :key="post.id" class="col-3 blog-list ">
            <div :data-id="index">
              <img :src="post.image" class="img-fluid" alt="" />
              <div class="blog-meta">
                <span> {{ post.date }}</span
                >&nbsp;&nbsp;|&nbsp;&nbsp;<span> {{ post.author }}</span>
              </div>
              <h5 class="title mt-3">{{ post.title }}</h5>
            </div>
          </div>
        
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>
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

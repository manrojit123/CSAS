<template>
     <section class="content homeContent">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="title">Welcome to CSAS</h1>
        </div>
        <div class="col-12">

        </div>
    </div>
  <div class="home">
    <h1>Blog</h1>
    <li v-for="(post, index) in posts" :key="post.id">
      {{ parentMessage }} - {{ index }} - {{ post.message }}
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
        { id:1,message: "Foo" }, 
        { id:2,message: "Bar" }
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

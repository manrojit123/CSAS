<template>
  <div class="home">
   
    <div v-for="(post, index) in posts" :key="post.id">
      {{ parentMessage }} - {{ index }} - {{ post.message }}
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

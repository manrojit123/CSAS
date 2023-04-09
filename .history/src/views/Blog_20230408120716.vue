<template>
  <div class="home">
    <h1>Welcome to my website!</h1>
    <li v-for="(item, index) in post" :key="item.id">
      {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>
  </div>
</template>
<script>
export default {
  name: "Blog",
  data() {
    return {
      parentMessage: "Parent",
      items: [
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

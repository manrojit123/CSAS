<template>
  <div class="home">
    <h1>Welcome to my website!</h1>
    <li v-for="(item, index) in items" :key="item.id">
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
      items: [{ id:1,message: "Foo" }, { idmessage: "Bar" }],
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

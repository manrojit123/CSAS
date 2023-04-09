<template>
  <div>
    <p>The count is {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
  
  <script>
import { reactive } from "vue";

export default {
  name: "Tests",
  
};
</script>
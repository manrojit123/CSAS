<template>
  <div>
    <p>The count is {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
  
  <script>
import { reactive } from "vue";

export default {
  name: "Test",
  setup() {
    // Initialize the state object with reactive()
    const state = reactive({
      count: 0,
    });

    // Define the increment method
    const increment = () => {
      state.count++;
    };

    // Return the reactive state and methods as an object
    return {
      ...state,
      increment,
    };
  },
};
</script>
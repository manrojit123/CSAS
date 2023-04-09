<template>
    <div class="home">
      <h1>Welcome to my website!</h1>
      <p>This is my Blog.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Blog',
    data() {
    return {
        parentMessage: 'Parent',
        items: [{ message: 'Foo' }, { message: 'Bar' }]
    }
    }
  }
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    margin-top: 50px;
  }
  </style>
  
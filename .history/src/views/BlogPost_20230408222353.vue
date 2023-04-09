<template>
    <div>
      <h2>{{ blogPost.title }}</h2>
      <p>{{ blogPost.body }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      blogId: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        blogPost: {}
      }
    },
    created() {
      // Fetch blog post details from API using blogId
      fetch(`https://jsonplaceholder.typicode.com/posts/${this.blogId}`)
        .then(response => response.json())
        .then(data => {
          this.blogPost = data;
        });
    }
  };
  </script>
  
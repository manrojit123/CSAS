<template>
    <section class="content homeContent">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="title">Contact Us</h1>
          </div>
          <div class="col-12">
            <img src="../assets/homeImage.png" class="homeImage" alt="" />
          </div>
          <div class="col-6"></div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </template>
    
    <script>
    import Footer from './Footer';
  export default {
    name: "Home",
    components: {
      Footer
    },
  };
  </script>
    
    <style scoped>
  .homeImage {
    float: right;
    width: 420px;
    margin: 0px 0px 10px 45px;
  }
  
  </style>
    
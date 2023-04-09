<template>
    <section class="content contactContent">
      <div class="container">
        <div class="row">
          <div class="col-10 mx-auto">
            <h1 class="title">Contact Us</h1>
          </div>
          <div class="col-4 offset-2">
            <img src="../assets/contact.png" class="img-fluid" alt="" />
          </div>
          <div class="col-5">
                <img class="logo" src="../assets/loog.png">
                <h4 class="title">Center for the Study of Apparent Selves</h4>
          </div>
         
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
.contactContent{
    min-height:52vh;
}
.contactContent .logo{
    height:100px;
    padding: 0;
}
  
  </style>
    
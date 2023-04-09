<template>
  <Header></Header>
  <section class="content contactContent">
    <div class="container">
      <div class="row">
        <div class="col-10 offset-2">
          <h1 class="title">Contact Us</h1>
        </div>
        <div class="col-4 offset-2">
          <img src="../assets/contact.png" class="img-fluid" alt="" />
        </div>
        <div class="col-4">
          <img class="logo" src="../assets/loog.png" />
          <h4 class="title">Center for the Study of Apparent Selves</h4>
          <div class="contact_icon">
            <img src="../assets/location.svg" class="icon" alt="" /><span
              >Nagpokhari, Kathmandu, Nepal</span
            >
          </div>
          <div class="contact_icon">
            <img src="../assets/phone.svg" class="icon" alt="" /><span
              >+977-9803525252</span
            >
          </div>
          <div class="contact_icon">
            <img src="../assets/email.svg" class="icon" alt="" /><span
              >info@apparentselves.org</span
            >
          </div>
          <div class="contact_icon">
            <img src="../assets/web.svg" class="icon" alt="" /><span
              >www.apparentselves.org</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>
    
    <script>
import Footer from "./Footer";
import Header from "./Header";
export default {
  name: "Home",
  components: {
    Footer,
    Header,
  },
};
</script>
    
<style scoped>
.contactContent {
  min-height: 52vh;
}
.contactContent .logo {
  height: 100px;
  padding: 0;
}
.icon {
  height: 16px;
  padding-right: 10px;
}
.contact_icon {
  margin-bottom: 20px;
}
</style>
    
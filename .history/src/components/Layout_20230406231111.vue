<template>
    <div>
      <header>
        <!-- Include your header component here -->
        <Header />
      </header>
  
      <main>
        <!-- This is where your page content will go -->
        <slot></slot>
      </main>
  
      <footer>
        <!-- Include your footer component here -->
        <Footer />
      </footer>
    </div>
  </template>


  <script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer
  }
}
</script>
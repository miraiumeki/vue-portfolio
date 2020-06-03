<template>
  <v-app>
    <AppHeader/>
    <v-content>
      <Home/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
  // window.addEventListener("scroll", function() {
  //   let scroll = window.pageYOffset;
  //   if(scroll < 3200) {
  //     document.body.style.backgroundColor = "#fff";
  //   } else {
  //     document.body.style.backgroundColor = "#01abcc";
  //   }
  // })

  import AppHeader from './components/AppHeader.vue'
  import Footer from './components/Footer.vue'
  import Home from './components/Home.vue'
 
  export default {
    name: 'App',
    components: {
      AppHeader,
      Home,
      Footer
    }
  }
</script>
<style scoped>
/* @import "./css/style.css"; */
</style>

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
@import "./styles/common/common.scss";
</style>

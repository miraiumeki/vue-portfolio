<template>
  <section class="home">
    <section id="top">
      <MainImage/>
    </section>
    <section id="blog">
      <Blog/>
    </section>
    <section id="news">
      <news/>
    </section>
    <section id="company">
      <company/>
    </section>
    <section id="service">
      <service/>
      <service1/>
      <service2/>
      <service3/>
    </section>
    <section id="recruit">
      <recruit/>
    </section>
    <section id="access">
      <access/>
    </section>
    <!-- <contact/> -->
  </section>
</template>
<script>
import MainImage from './MainImage.vue'
import Blog from './Blog.vue'
import News from './News.vue'
import Company from './Company.vue'
import Service from './Service.vue'
import service1 from './service1.vue'
import service2 from './service2.vue'
import service3 from './service3.vue'
import Recruit from './Recruit.vue'
import Access from './Access.vue'
// import Contact from './Contact.vue'

 
export default {
  components: {
    MainImage,
    Blog,
    News,
    Company,
    Service,
    service1,
    service2,
    service3,
    Recruit,
    Access,
    // Contact
  }
}
</script>
<style lang="scss" scoped>
.home {
  padding-bottom: 50px;
}
#blog {
  background-color: #FFEBEE;
}
</style>
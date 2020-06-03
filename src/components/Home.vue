<template>
  <section class="home">
    <MainImage/>
    <Blog/>
    <news/>
    <company/>
    <service/>
    <system-develop/>
    <app-and-vr/>
    <web-develop/>
    <recruit/>
    <access/>
    <contact/>
  </section>
</template>
<script>
import MainImage from './MainImage.vue'
import Blog from './Blog.vue'
import News from './News.vue'
import Company from './Company.vue'
import Service from './Service.vue'
import SystemDevelop from './SystemDevelop.vue'
import AppAndVr from './AppAndVr.vue'
import WebDevelop from './WebDevelop.vue'
import Recruit from './Recruit.vue'
import Access from './Access.vue'
import Contact from './Contact.vue'

 
export default {
  components: {
    MainImage,
    Blog,
    News,
    Company,
    Service,
    SystemDevelop,
    AppAndVr,
    WebDevelop,
    Recruit,
    Access,
    Contact
  }
}
</script>
<style lang="scss" scoped>
.home {
  padding-bottom: 50px;
}
</style>
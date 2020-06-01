<template>
  <div id='mainPage'>
      <MainImage/>
    <section id="Blog">
      <cheat-park/>
    </section>
    <section id="News">
      <news/>
    </section>
    <section id="Company">
      <company/>
    </section>
    <section id="Service">
      <service/>
      <system-develop/>
      <app-and-vr/>
      <web-develop/>
    </section>
    <section id="Recruit">
      <recruit/>
    </section>
    <section id="Access">
      <access/>
    </section>
    <section id="Contact">
      <contact/>
    </section>
    <section id="Footer">
      <Footer/>
    </section>
  </div>
</template>
<script>
  
  window.addEventListener("scroll", function() {
    let scroll = window.pageYOffset;
    if(scroll < 3200) {
      document.body.style.backgroundColor = "#fff";
    } else {
      document.body.style.backgroundColor = "#01abcc";
    }
  })

  import MainImage from '../components/MainImage.vue'
  import CheatPark from '../components/CheatPark.vue'
  import News from '../components/News.vue'
  import Company from '../components/Company.vue'
  import Service from '../components/Service.vue'
  import SystemDevelop from '../components/SystemDevelop.vue'
  import AppAndVr from '../components/AppAndVr.vue'
  import WebDevelop from '../components/WebDevelop.vue'
  import Recruit from '../components/Recruit.vue'
  import Access from '../components/Access.vue'
  import Contact from '../components/Contact.vue'
  import Footer from '../components/Footer.vue'


export default {
  components: {
    MainImage,
    CheatPark,
    News,
    Company,
    Service,
    SystemDevelop,
    AppAndVr,
    WebDevelop,
    Recruit,
    Access,
    Contact,
    Footer
  }
}
</script>
<template>
  <div id='mainPage'>
      <!-- <Header/> -->
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
    <!-- <section id="Contact">
      <contact/>
    </section> -->
    <footer id="footer">
      <img src="@/assets/go_top.png" class="goTopImg" @click="scrollTop" alt="go to topの画像">
      Ⓒ2018 CHEAT INC. All rights reserved.
    </footer>

  </div>
</template>
<script>
  
  window.addEventListener("scroll", function() {
    let scroll = window.pageYOffset;
    if(scroll < 3000) {
      document.body.style.backgroundColor = "#fff";
    } else {
      document.body.style.backgroundColor = "#01abcc";
    }
  })

  import MainImage from '../components/MainImage.vue'
  // import Header from '../components/Header.vue'
  import CheatPark from '../components/CheatPark.vue'
  import News from '../components/News.vue'
  import Company from '../components/Company.vue'
  import Service from '../components/Service.vue'
  import SystemDevelop from '../components/SystemDevelop.vue'
  import AppAndVr from '../components/AppAndVr.vue'
  import WebDevelop from '../components/WebDevelop.vue'
  import Recruit from '../components/Recruit.vue'
  import Access from '../components/Access.vue'
  // import Contact from '../components/Contact.vue'


export default {
  components: {
    MainImage,
    // Header,
    CheatPark,
    News,
    Company,
    Service,
    SystemDevelop,
    AppAndVr,
    WebDevelop,
    Recruit,
    Access,
    // Contact,
  },
  methods: {
    scrollTop: function() {
      window.scrollTo({
        top:0,
        behavior: 'instant'
      });
    }
  }
}
</script>
<style type = text/css>
#footer {
  background-color: #fff;
}
#footer p {
  color: #333;
}
</style>
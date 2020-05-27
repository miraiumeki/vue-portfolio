<template>
  <div id="CreateLp">
      <createLpHeader/>
      <topImage/>
     <section id="feature">
      <feature/>
    </section>
    <section id="work">
      <work/>
    </section>
    <section id="creative">
      <corporateSite/>
      <recruitSite/>
      <ecSite/>
      <matchingAndPortalSite/>
      <landingPage/>
      <conslation/>
    </section>
    <section id="webProduce">
      <webProduce/>
      <codingAndPrograming/>
      <photograph/>
      <transltion/>
      <result/>
      <present/>
    </section>
    <section id="afterSuport">
      <afterSuport/>
    </section>
    <section id="Contact">
      <contact/>
    </section>
    <section id="Access">
      <access/>
    </section>
    <footer id="footer">
      <img src="@/assets/go_top.png" class="goTopImg" @click="scrollTop" alt="go to topの画像">
      <p>Ⓒ2018 CHEAT INC. All rights reserved.</p>
    </footer>

  </div>
</template>
<script>
  import createLpHeader from './createLp/createLpHeader.vue'
  import topImage from './createLp/topImage.vue'
  import feature from './createLp/feature.vue'
  import conslation from './createLp/conslation.vue'
  import work from './createLp/work.vue'
  import corporateSite from './createLp/corporateSite.vue'
  import recruitSite from './createLp/recruitSite.vue'
  import ecSite from './createLp/ecSite.vue'
  import matchingAndPortalSite from './createLp/matchingAndPortalSite.vue'
  import landingPage from './createLp/landingPage.vue'
  import webProduce from './createLp/webProduce.vue'
  import codingAndPrograming from './createLp/codingAndPrograming.vue'
  import photograph from './createLp/photograph.vue'
  import transltion from './createLp/transltion.vue'
  import result from './createLp/result.vue'
  import present from './createLp/present.vue'
  import afterSuport from './createLp/afterSuport.vue'
  import Contact from '../components/Contact.vue'
  import Access from '../components/Access.vue'



export default {
  components: {
    createLpHeader,
    topImage,
    feature,
    conslation,
    work,
    corporateSite,
    recruitSite,
    ecSite,
    matchingAndPortalSite,
    landingPage,
    webProduce,
    codingAndPrograming,
    photograph,
    transltion,
    result,
    present,
    afterSuport,
    Contact,
    Access,
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

<style scoped type=text/css>
@import "createLp.css";
</style>
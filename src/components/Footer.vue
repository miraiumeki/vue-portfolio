<template>
  <div class="footer">
    <div class="footer-img">
      <img src="@/assets/go_top.png" class="goTopImg" @click="scrollTop" alt="go to topの画像">
    </div>
    <p class="footer-copyright">
      Ⓒ2018 CHEAT INC. All rights reserved.
    </p>
  </div>
</template>
<script>
export default {
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
.footer {
  background-color: #fff;
  position: relative;
}
.footer-img {
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.footer-img img {
  width: 300px;
  cursor: pointer;
}
.footer-copyright {
  margin: 0;
  padding: 50px 0 40px;
}
</style>
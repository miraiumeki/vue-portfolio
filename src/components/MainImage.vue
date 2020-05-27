<template>
    <div>
      <div class="mainImage">
        <img src="@/assets/main_object.png" class="topMainImg" alt="メイン画像">
        <img src="@/assets/main_logo_large.png" class="topMainOnImg" alt="メイン画像上の画像">
      </div>
      <div class="toCreateLp">
        <router-link to='../components/createLp'>
          <img src="@/assets/lp_banner.png" class="advertisement" alt="広告の画像">
        </router-link>
      </div>
    </div>
</template>

<style scoped>
.mainImage {
  margin-bottom: -10%;
  position: absolute;
  top:0;
  z-index: -1;
}
.topMainImg {
  width: 100%;
  height: auto;
  display: block;
  background: no-repeat url("~@/assets/bg_main.png");
}
.topMainOnImg {
  position: absolute;
  top:45px;
  left: 0;
  width: 100%;
}
.toCreateLp {
  position: relative;
}
.advertisement {
  width: 880px;
  position: absolute;
  top: -450px;
  left: 200px;
  cursor: pointer;
}
</style>
<template>
  <section>
    <v-container fluid :class="{ 'move': scrollY > 1500 }" class="contents-display pa-0">
      <v-row class="mr-0">
        <v-col class="home-company__content-text">
          <div class="contents mx-auto py-4 fontColorWhite">
              <h1>COMPANY</h1>
              <p class="articleSubTitle-w">会社概要</p>
              <h1>ダミーダミーダミーダミーダミーダミーダミー</h1>
              <p class="mt-8">ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー</p>
              <v-chip x-large color="red lighten-3" class="btn d-block text-center">
                <a href="#" class="white--text text--lighten-1">
                  会社概要を見る
                </a>
              </v-chip>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
    data() {
        return {
            scrollY: 0
        }
    },
    mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
    }
}
}
</script>
<style lang="scss" scoped>
.home-company__content-text {
  background-image: url('../assets/roadandsea.jpg');
  background-size: cover;
  background-repeat: no-repeat;
    @include display_pc {
      background-image: url('../assets/bird.jpg');
      background-size: 100%;
      background-position: 0 30%;
    }
  .contents {
    width: 80%;
      h1 {
          font-size: 30px;
                @include display_pc {
                  font-size: 40px;
                  width: 50%;
          }
      }
      p:nth-child(4) {
        line-height: 2;
          @include display_pc {
            width: 40%;
          }
      }
  }
}
</style>
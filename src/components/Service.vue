<template>
    <section>
        <v-container fluid class="deep-purple lighten-3 contents-display" :class="{ 'move': scrollY > 2000 }">
            <v-row class="service">
                <v-col class="d-lg-flex justify-lg-center">
                    <div class="service-img">
                        <v-img src="@/assets/destination.jpg"></v-img>
                    </div>
                    <div class="pt-3 pl-lg-7 fontColorWhite">
                        <h1 class="articleTitle-w">SERVICE</h1>
                        <p class="articleSubTitle-w">サービス一覧</p>
                        <p class="fontSize fontColorWhite">恥の多い生涯を送って来ました。自分には、人間の生活というものが、見当つかないのです。自分は東北の田舎</p>
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

<style lang="scss">
    .service-img {
        @include display_pc {
        width: 50%;
    }
    }
    .service {
        width: 100%;
        margin: auto;
        @include display_pc {
            width: 70%;
        }
}
</style>

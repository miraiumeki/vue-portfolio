<template>
    <v-container :class="{ 'move': scrollY > 280 }" class="contents-display pt-4">
        <v-layout text-xs-center mt-5 px-3 py-3 home-blog__content-text>
            <v-flex xs12>
                <h1 class="articleTitle">BLOG</h1>
                <p class="articleSubTitle">ブログ</p>
            </v-flex>
        </v-layout>
        <div class="d-lg-flex d-sm-block px-3 py-3 row">
            <v-flex lg4 sm12 xs12 text-center>
                <v-avatar size="300">
                    <v-img src="@/assets/houses.jpg"></v-img>
                </v-avatar>
                <a href="#" class="title black--text text--lighten-1">
                    <p class="mt-4">2020.5.20</p>
                    <p class="mt-2">美しい街並みを堪能</p>
                </a>
            </v-flex>
            <v-flex lg4 sm12 xs12 text-center>
                <v-avatar size="300">
                    <v-img src="@/assets/kyoto.jpg"></v-img>
                </v-avatar>
                <a href="#" class="title black--text text--lighten-1">
                    <p class="mt-4">2020.4.8</p>
                    <p class="mt-2">京都再発見</p>
                </a>
            </v-flex>
            <v-flex lg4 sm12 xs12 text-center>
                <v-avatar size="300">
                    <v-img src="@/assets/lake.jpg"></v-img>
                </v-avatar>
                    <a href="#" class="title black--text text--lighten-1">
                        <p class="mt-4">2020.3.9</p>
                        <p class="mt-2">心を静める</p>
                    </a>
            </v-flex>
        </div>
  </v-container>
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
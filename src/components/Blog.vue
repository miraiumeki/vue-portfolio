<template>
  <v-container :class="{ 'move': scrollY > 280 }" class="contents-display">
        <v-layout text-xs-center mt-5 px-3 py-3 home-blog__content-text>
            <v-flex xs12>
                <h1 class="articleTitle">blog</h1>
                <p class="articleSubTitle">ブログ</p>
            </v-flex>
        </v-layout>
        <v-layout px-3 py-3 row>
            <v-flex lg4 sm12 xs12 text-center>
                <v-avatar size="300" color="grey lighten-4">
                    <v-img
                        src="@/assets/houses.jpg"
                        >
                    </v-img>
                </v-avatar>
                <a href="#" class="title">
                    <p class="mt-4">2020.5.20</p>
                    <p class="mt-2">美しい街並みを堪能</p>
                </a>
            </v-flex>
            <v-flex lg4 sm12 xs12 text-center>
                <v-avatar size="300" color="lighten-4">
                    <v-img
                        src="@/assets/kyoto.jpg"
                    >
                    </v-img>
                </v-avatar>
                <a href="#" class="title">
                    <p class="mt-4">2020.4.8</p>
                    <p class="mt-2">京都再発見</p>
                </a>
            </v-flex>
            <v-flex lg4 sm12 xs12 text-center>
                <v-avatar size="300">
                    <v-img
                        src="@/assets/lake.jpg"
                    >
                    </v-img>
                </v-avatar>
                <v-hover v-slot:default open-delay="200">
                    <a to="#" class="title">
                            <p class="mt-4">2020.3.9</p>
                            <p class="mt-2">心を静める</p>
                    </a>
                </v-hover>
            </v-flex>
        </v-layout>
  </v-container>
</template>
<script>
export default {
    data() {
        return {
            url: "#",
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

    .home-blog__content-text {
        margin-top: 1.2%;

        link p{
            color: #333;
        }
        link:hover {
            color: #006172;
        }
    }
</style>
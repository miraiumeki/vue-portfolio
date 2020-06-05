<template>
  <v-container>
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
                src="@/assets/pixta_48617354_M.jpg"
                >
            </v-img>
        </v-avatar>
        <router-link to="#" class="indigo--text text--darken-2">
            <p class="mt-4">2020.4.20</p>
            <p class="mt-2">しばし、お暇いただきます。</p>
        </router-link>
      </v-flex>
      <v-flex lg4 sm12 xs12 text-center>
        <v-avatar size="300" color="lighten-4">
            <v-img
                src="@/assets/abecd10a8f69bd3a26055da91cf7b1df_t.jpeg"
            >
            </v-img>
        </v-avatar>
        <router-link to="#" class="indigo--text text--darken-2">
            <p class="mt-4">2020.4.16</p>
            <p class="mt-2">WordPressのbloginfo()は非推奨テンプレートタグ？代わりの表示方法は？</p>
        </router-link>
      </v-flex>
      <v-flex lg4 sm12 xs12 text-center>
        <v-avatar size="300">
            <v-img
                src="@/assets/pixta_57238114_M.jpg"
            >
            </v-img>
        </v-avatar>
            <v-hover v-slot:default open-delay="200">
        <router-link to="#" class="indigo--text text--darken-2">
                <p class="mt-4">2020.4.9</p>
                <p class="mt-2">park ARってなんなの？！</p>
        </router-link>
            </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
    data() {
        return {
            url: "#"
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
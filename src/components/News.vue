<template>
  <v-container class="contents-display" :class="{ 'move': scrollY > 800 }">
    <v-layout text-xs-center mt-5 px-3 py-3 home-news__content-text>
      <v-flex xs12>
        <h1 class="articleTitle">NEWS</h1>
        <p class="articleSubTitle">最新のお知らせ</p>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <p class="headline font-weight mt-2">2020.04.20</p>
        <p class="title mt-3">
            【GWのお休みについて】<br>ダミーでは、5/2（土）～5/6（水）迄をお休みさせて頂きます。
        </p>
      </v-flex>
    </v-layout>
    <v-layout text-xs-center mt-5 px-3 py-3 id="about">
      <v-flex xs12>
        <p class="headline font-weight mt-2">2020.04.10</p>
        <p class="title font-weight-thin mt-3">
            新型コロナウイルス感染症の拡大防止における社内取り組みについて。
        </p>
      </v-flex>
    </v-layout>
    <v-layout mt-3 px-5 class="text-xs-center" row wrap>
      <v-flex xs12>
        <p class="headline font-weight mt-2">2020.03.30</p>
        <p class="title font-weight-thin mt-3">
            【キャンセル・払い戻しについて】<br>詳しくは<a href="#" class="red--text text--lighten-1">こちら</a>からご確認ください。
        </p>
      </v-flex>
    </v-layout>
    <v-layout mt-3 px-5 class="text-xs-center" row wrap>
      <v-flex xs12>
        <p class="headline font-weight mt-2">2020.02.09</p>
        <p class="title font-weight-thin mt-3">
            <a href="#" class="red--text text--lighten-1">写真</a>をアップしました。
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
    data() {
        return {
            url: "#",
            show: true,
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
.home-news__content-text {
    ul {
        width: 80%;
    }
    li {
        line-height: 2;
    }
    li p:first-child {
        font-weight: bold;
    }
    a {
        color: #00d1b2;
    }
}
</style>
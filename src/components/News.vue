<template>
  <v-container id="container-full">
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
            【GWのお休みについて】<br>CHEATでは、カレンダー通り、04/29（水）、5/2（土）～5/6（水）迄をお休みさせて頂きます。<br>期間中は大変ご不便おかけいたしますが、何卒ご了承くださいますよう宜しくお願い申し上げます。
        </p>
      </v-flex>
    </v-layout>
    <v-layout text-xs-center mt-5 px-3 py-3 id="about">
      <v-flex xs12>
        <p class="headline font-weight mt-2">2020.04.02</p>
        <p class="title font-weight-thin mt-3">
            新型コロナウイルス感染症の拡大防止における社内取り組みについて、こちらに記載させて頂きました。
        </p>
      </v-flex>
    </v-layout>
    <v-layout mt-3 px-5 class="text-xs-center" row wrap>
      <v-flex xs12>
        <p class="headline font-weight mt-2">2020.03.09</p>
        <p class="title font-weight-thin mt-3">
            期間限定で、ホームページ制作料20%オフのキャンペーンを実施しております。<br>詳しくは<router-link to="#">こちら</router-link>からご確認頂けます。<br>ホームページの制作、リニューアルを考えている方は、この機会にぜひご利用ください！
        </p>
      </v-flex>
    </v-layout>
    <v-layout mt-3 px-5 class="text-xs-center" row wrap>
      <v-flex xs12>
        <p class="headline font-weight mt-2">2020.03.09</p>
        <p class="title font-weight-thin mt-3">
            <router-link to="#">実績一覧ページ</router-link>をアップ致しました。CHEATの実績の一部を公開しております。
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

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
<template>
  <section>
    <v-container fluid>
      <v-row class="mr-0">
        <v-col class="home-company__content-text">
          <div class="contents">
              <h1 class="fontColorWhite fontColorWhite">COMPANY</h1>
              <p class="articleSubTitle-w fontColorWhite">会社概要</p>
              <h1 class="fontColorWhite fontSize">毎日を楽しむ、<br>プロフェッショナル</h1>
              <p class="fontColorWhite mt-8">私たち自身も、お客さまにも、毎日を楽しく過ごしてもらいたい。業績UP・業務効率化によって、少しでも余暇を作ることで、個人が”本当に自分のしたいこと”ができる時間を創出します。そのために、企画・提案・構成・演出などを行う表現部門、デザイン・エンジニアリングの開発部門が連携し、クオリティにこだわった制作に注力しています。常に情報感度を高く持ち、新しい分野にチャレンジしていくことで、そこで得たスキルを制作物にブラッシュアップすることも忘れません。</p>
              <v-chip x-large color="secondary" class="btn d-block text-center">
                会社概要を見る
              </v-chip>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<style lang="scss" scoped>
.container {
  padding: 0;
}
.home-company__content-text {
  background-color: #808080;
     @include display_pc {
      background-image: url('../assets/company_visual.jpg');
      background-size: 100%;
      background-repeat: no-repeat;
      width: 100%;
      height: auto;
    }
  .contents {
    width: 80%;
    margin: 0 auto;
    padding: 15px 0;

      h1 {
          font-size: 30px;
                @include display_pc {
                  font-size: 40px;
          }
      }
      p:nth-child(4) {
        line-height: 2;
      }
  }
}
</style>
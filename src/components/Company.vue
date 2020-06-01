<template>
  <div class="bgImg">
    <div class="contents">
        <h1 class="fontColorWhite">COMPANY</h1>
        <p class="articleSubTitle-w">会社概要</p>
        <h1 class="fontColorWhite fontSize">毎日を楽しむ、<br>プロフェッショナル</h1>
        <p class="fontColorWhite">私たち自身も、お客さまにも、毎日を楽しく過ごしてもらいたい。業績UP・業務効率化によって、少しでも余暇を作ることで、個人が”本当に自分のしたいこと”ができる時間を創出します。そのために、企画・提案・構成・演出などを行う表現部門、デザイン・エンジニアリングの開発部門が連携し、クオリティにこだわった制作に注力しています。常に情報感度を高く持ち、新しい分野にチャレンジしていくことで、そこで得たスキルを制作物にブラッシュアップすることも忘れません。</p>
        <router-link to='../components/CompanyDetail' class='linkBtn'>会社概要を見る</router-link>
      </div>
    </div>
</template>
<style scoped>
.bgImg {
  background-image: url('../assets/company_visual.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: auto;
}
.contents {
  width: 80%;
  margin: 0 auto;
  padding: 65px 0;
  text-align: left;
}
.linkBtn {
  display: block;
  width: 340px;
  text-align: center;
  background-color: #fff;
  color:#006172;
  padding: 10px 20px;
  border-radius: 20px;
  text-decoration: none;
}
.linkBtn:hover {
  background-color: #006172;
  color: #fff;
}
h1 {
  font-size: 40px;
  margin: 0;
}
p {
  margin-bottom: 30px;
}
</style>
<template>
    <section class="home-recruit">
        <v-container fluid class="light-green darken-1 home-recruit__content">
            <v-row>
                <v-col class="home-recruit__content-text text-center">
                    <h1 class="articleTitle-w fontColorWhite">RECRUIT</h1>
                    <p class="articleSubTitle-w fontColorWhite">採用情報</p>
                    <div class="recruitInfo">
                        <div class="page">
                            <p class="text fontColorWhite">採用特設ページ公開中</p>
                            <img src="@/assets/logo_white.svg" class="engageLogo" alt="engageロゴ">
                        </div>
                        <div class="companyName">
                            <div class="cheatLogo">
                                <img src="@/assets/ダウンロード.png" alt="cheatLogo画像">
                            </div>
                            <p>株式会社CHEAT</p>
                        </div>
                        <h1>career at 株式会社CHEAT私たちと一緒に働きませんか？</h1>
                        <div class="recruitNow">
                            <div>
                                現在<span>3</span>職種募集中：フロントエンジニア／各種WEBサー
                            </div>
                            <button>今すぐチェック！＞</button>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>

</template>
<style lang="scss" scoped>
//  @import "../css/style.scss";
.home-recruit__content-text {
.page {
    position: relative;
}
.text {
    display: inline-block;
    margin: 0;
}
.page img {
    position: absolute;
    right: 10px;
    top: 5px;
}
.recruitInfo {
    width: 100%;
    margin: 0 auto;
    background-image: url(../assets/main_object.png),url("../assets/bg_main.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height: 350px;
    position: relative;
     @include display_pc {
        width: 40%;
  }
}
.engageLogo {
    width: 45px;
}
.companyName {
    display: flex;
    position: absolute;
    top: 50%;
    left: 3%;
}
.companyName p {
    font-size: 10px;
    font-weight: bold;
    line-height: 3;
}
.cheatLogo {
    background-color: #fff;
    width: 45px;
    height: 45px;
    position: relative;
    margin-right: 10px;
    /* bottom: -65px;
    left: 10px; */
}
.cheatLogo img{
    width: 30px;
    position: absolute;
    top: 40%;
    left: 15%;
}
.recruitInfo h1 {
    background-color: #fff;
    padding: 5px 20px;
    margin: 0;
    position: absolute;
    bottom: 55px;
    width: 100%;
}
.recruitNow {
    display: flex;
    justify-content: center;
    padding: 10px;
    background-color: #f7f7f7;
    position: absolute;
    bottom: 0;
    width: 100%;
}
.recruitNow div {
    width: 300px;
    font-size: 12px;
    margin-right: 20px;
    line-height: normal;
        @include display_pc {
            line-height: 3;
  }
}
.recruitNow span {
    color: #f70;
    margin: 0;
}
.recruitNow button {
    background-color: #fff;
    color: #01abcc;
    border: 1px solid #01abcc;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 10px;
}
}
</style>



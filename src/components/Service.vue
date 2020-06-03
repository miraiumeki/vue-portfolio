<template>
    <section class="home-service">
        <v-container fluid fill-height class="deep-purple lighten-3 home-service__content">
            <v-row>
                <v-col class="home-service__content-text">
                    <div class="service-img">
                        <img src="@/assets/service_main.jpg" alt="service画像">
                    </div>
                    <div class="pt-3 pl-7">
                        <h1 class="articleTitle-w">SERVICE</h1>
                        <p class="articleSubTitle-w">サービス一覧</p>
                        <h1 class="fontSize fontColorWhite">生まれたばかりですが、<br>確かな実績があります。</h1>
                    </div>
                </v-col>
            </v-row>
        </v-container>
  </section>
</template>
<style lang="scss" scope>
.home-service__content-text {
    display: flex;
    justify-content: center;
    
    .service-img {
        width: 50%;
    }
    .service-img img {
        width : 100%;
    }
}
</style>
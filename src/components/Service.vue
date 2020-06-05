<template>
    <section>
        <v-container fluid class="deep-purple lighten-3">
            <v-row>
                <v-col class="d-lg-flex justify-lg-center">
                    <div class="service-img">
                        <v-img src="@/assets/service_main.jpg"></v-img>
                    </div>
                    <div class="pt-3 pl-lg-7 fontColorWhite">
                        <h1 class="articleTitle-w">SERVICE</h1>
                        <p class="articleSubTitle-w">サービス一覧</p>
                        <h1 class="fontSize fontColorWhite">生まれたばかりですが、<br>確かな実績があります。</h1>
                    </div>
                </v-col>
            </v-row>
        </v-container>
  </section>
</template>
<style lang="scss" scoped>
    .service-img {
        @include display_pc {
        width: 50%;
    }
    }
</style>

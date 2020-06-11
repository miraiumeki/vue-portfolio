<template>
    <section>
        <v-container fluid class="light-green darken-1 contents-display" :class="{ 'move': scrollY > 6000 }">
            <v-row>
                <v-col class="text-center fontColorWhite">
                    <h1 class="articleTitle-w">RECRUIT</h1>
                    <p class="articleSubTitle-w">採用情報</p>
                    <div class="service d-lg-flex justify-lg-center">
                        <!-- <div class="fontColorWhite"> -->
                        <v-img
                        src="@/assets/work.jpg"
                        class="recruitInfo-img"
                        >
                        </v-img>

                        <table class="recruitInfo-detail pr-6 text-left">
                            <tr>
                                <td class="px-lg-8">募集職種</td>
                                <td>ダミーダミーダミーダミーダミーダミー</td>
                            </tr>
                            <tr>
                                <td class="px-lg-8">給与</td>
                                <td class="pl-lg-12">月給〇〇円～</td>
                            </tr>
                            <tr>
                                <td class="px-lg-8">福利厚生</td>
                                <td>
                                    ・ダミーダミーダミーダミーダミーダミー<br>
                                    ・ダミーダミーダミーダミーダミーダミー<br>
                                    ・ダミーダミーダミーダミーダミーダミー<br>
                                    ・ダミーダミーダミーダミーダミーダミー<br>
                                    ・ダミーダミーダミーダミーダミーダミー
                                </td>
                            </tr>
                        </table>
                        <!-- </div> -->
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>

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
<style lang="scss" scoped>
.recruitInfo-img {
        @include display_pc {
            width: 50%;
            margin: auto;
         }
}
.recruitInfo-detail {
    tr {
        display: block;
        border-bottom: 1px dotted #808080;
        padding: 20px 0;
    }
    td:first-child {
        width: 30%;
        @include display_pc {
            width: auto;
        }
    }
    tr:nth-child(2) {
        td:nth-child(2) {
            width: 200px;
            padding-left: 30px;
            @include display_pc {
            width: auto;
            }
        }
    }
}
</style>
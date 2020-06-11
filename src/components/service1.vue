<template>
    <section>
        <v-container fluid class="blue lighten-4 contents-display" :class="{ 'move': scrollY > 2500 }">
            <v-row>
            <v-col>
                <div class="service fontColorWhite">
                    <h1 class="serviceIndex">overseas travelling</h1>
                    <v-img src="@/assets/desert.jpg"></v-img>
                    <h1 class="serviceTitle headline">海外旅行</h1>
                <p class="serviceFont">恥の多い生涯を送って来ました。自分には、人間の生活というものが、見当つかないのです。自分は東北の田舎に生れましたので、汽車をはじめて見たのは、よほど大きくなってからでした。自分は停車場のブリッジを、上って、降りて、そうしてそれが線路をまたぎ越えるために造られたものだという事には全然気づかず、ただそれは停車場の構内を外国の遊戯場みたいに、複雑に楽しく、ハイカラにするためにのみ、設備せられてあるもの</p>
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


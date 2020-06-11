<template>
    <section class="home-access">
    <v-container fluid fill-height class="lime lighten-2 contents-display" :class="{ 'move': scrollY > 6500 }">
      <v-row>
        <v-col class="text-center fontColorWhite">
          <h1 class="articleTitle-w fontColorWhite">ACCESS</h1>
          <p class="articleSubTitle-w fontColorWhite">アクセス</p>
          <p>社名：株式会社dammy</p>
          <p>設立：2018年9月</p>
          <p>代表取締役：沢田 恵美</p>
          <p>TEL:03-698-1147</p>
          <div class="px-sm-3">
          <p>所在地：〒100-0005&nbsp;東京都千代田区丸の内１丁目510</p>
          <p>アクセス：東京駅&nbsp;徒歩10分</p>
          </div>
          <GmapMap
              :center="{lat:35.67832667, lng:139.77044378}"
              :zoom="15"
              map-type-id="terrain"
              style="width: 100%; height: 500px"
          >
          <GmapMarker v-show="marker_center"
              :position="marker_center"
              :draggable="false"
          >
          </GmapMarker>
          </GmapMap>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      marker_center: {lat: 35.67832667, lng:139.77044378},
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
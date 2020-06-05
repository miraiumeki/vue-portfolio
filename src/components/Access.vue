<template>
    <section class="home-access">
    <v-container fluid fill-height class="lime lighten-2">
      <v-row>
        <v-col class="text-center fontColorWhite">
          <h1 class="articleTitle-w fontColorWhite">ACCESS</h1>
          <p class="articleSubTitle-w fontColorWhite">アクセス</p>
          <p>社名：株式会社CHEAT</p>
          <p>設立：2018年4月</p>
          <p>代表取締役：山本貴也</p>
          <p>TEL:078-600-2795</p>
          <div class="px-sm-3">
          <p>所在地：〒650-0033&nbsp;兵庫県神戸市中央区江戸町104&nbsp;5F</p>
          <p>各路線「三宮」駅&nbsp;徒歩8分</p>
          </div>
          <GmapMap
              :center="{lat:34.687468, lng:135.194419}"
              :zoom="15"
              map-type-id="terrain"
              style="width: 100%; height: 500px"
          >
          <GmapMarker v-show="marker_center"
              :position="marker_center"
              :icon="map_icon"
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
      map_icon: {
        url: require('@/assets/place_company.png'),
        size: { width: 65, height: 85, f: 'px', b:'px' },
      },
      marker_center: {lat: 34.687468, lng:135.194419}
    }
  }
}
</script>
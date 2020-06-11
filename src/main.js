import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import vuetify from './plugins/vuetify';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBI4lx7G3Rl0Qy449etLpx8A9lTDuSbizA',
    libraries: 'places',
    region: 'JP',
    language: 'ja'
  }
})

Vue.config.productionTip = false

  new Vue({
    vuetify,
    render: h => h(App)
  }).$mount('#app')

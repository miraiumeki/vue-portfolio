import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'



axios.defaults.baseURL = 'https://firestore.googleapis.com/v1/projects/todolist3-b4058/databases/(default)/documents'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBI4lx7G3Rl0Qy449etLpx8A9lTDuSbizA',
    libraries: 'places',
    region: 'JP',
    language: 'ja'
  }
})

Vue.config.productionTip = false

store.dispatch('autoLogin').then(() => {
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app')
})


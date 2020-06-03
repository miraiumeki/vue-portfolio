import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

// window.addEventListener("scroll", function() {
//   let scroll = window.pageYOffset;
//   if(scroll < 3200) {
//     document.body.style.backgroundColor = "#fff";
//   } else {
//     document.body.style.backgroundColor = "#01abcc";
//   }
// })


export default new Vuetify({
  // theme: {
  //   dark: true,
  // }
  theme: {
    themes: {
      light: {
        primary: colors.purple,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
      dark: {
        primary: colors.blue.lighten3,
      },
    },
  },
});

import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#263238',
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c',
          },
        },
      },
});

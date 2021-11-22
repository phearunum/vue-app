import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.use(vuetify, {
  theme: {
     primary: '#263238',
  },
  icons: {
    vue: {
      component: FontAwesomeIcon,
      props: {
        icon: ["fab", "vuejs"]
      }
    }
  }
});

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
router.replace('/login');
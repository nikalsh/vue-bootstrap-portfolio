// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'

// import { faFacebookF } from '@fortawesome/free-solid-svg-icons'
import { faJs, faVuejs, faNodeJs, faGithub, faGithubAlt, faGithubSquare, faLinkedin, faLinkedinIn, faJava } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'

library.add(faJs, faVuejs, faNodeJs, faGithub, faGithubAlt, faGithubSquare, faLinkedin, faLinkedinIn, faJava)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

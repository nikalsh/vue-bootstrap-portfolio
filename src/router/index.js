import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CV from '@/components/CV'
import PersonligtBrev from '@/components/PersonligtBrev'
import Kontakt from '@/components/Kontakt'
import Om from '@/components/Om'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/CV',
      name: 'CV',
      component: CV
    },
    {
      path: '/PersonligtBrev',
      name: 'PersonligtBrev',
      component: PersonligtBrev
    },
    {
      path: '/Kontakt',
      name: 'Kontakt',
      component: Kontakt
    },
    {
      path: '/Om',
      name: 'Om',
      component: Om
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Create from '@/components/Create'
import Group from '@/components/Group'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/home',
      component: Home
    },
    {
      path: '/group',
      component: Group
    },
    {
      path: '/create',
      component: Create
    },
    {
      path: '/github',
      beforeEnter() {
        window.open('https://github.com/montama-kk/dailyreport', '_blank')
      }
    },
  ]
})
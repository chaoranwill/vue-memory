import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Memory from '@/pages/Memory'
import Welfare from '@/pages/Welfare'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  'linkActiveClass': 'active',
  routes: [{
      path: '',
      name: 'login',
      component: Login
    },
    {
      path: '/memory',
      name: 'memory',
      component: Memory
    },
    {
      path: '/welfare',
      name: 'welfare',
      component: Welfare
    }]
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import components from '@/components'
import store from './store/store'


Vue.config.productionTip = false
components.map((cmp, index) => Vue.component(cmp.name, cmp))


var $body = document.body

router.beforeEach((to, from , next) => {
  $body.className = 's-' + to.name
  next()
})

//use custom directive
Vue.use(VueLazyload)

// use options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/404.jpg',
  loading: 'dist/loading.gif',
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store'
import Maker from './components/Maker'
import Share from './components/Share'
import Footer from './components/Footer'

// Vue.use(VueHead)
Vue.use(VueRouter)
Vue.component('Maker', Maker)
Vue.component('Share', Share)
Vue.component('Footer', Footer)
Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  base: process.env.BASE_URL,
  mode: 'history'
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

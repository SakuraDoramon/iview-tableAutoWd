import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/iframeVue',
      name: 'iframeVue',
      component: () => import(/* webpackChunkName: "about" */ './views/iframeVue.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/tableAutoWd.vue')
    }
  ]
})

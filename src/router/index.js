/*
 * @Date: 2020-02-29 12:57:14
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-02-29 17:17:54
 */
import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    }
  ]
})

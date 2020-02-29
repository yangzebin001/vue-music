/*
 * @Date: 2020-02-29 12:57:14
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-02-29 17:02:43
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'common/stylus/index.styl'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

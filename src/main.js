import Vue from 'vue'
import 'babel-polyfill'
import 'normalize.css/normalize.css' // CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import dataV from '@jiaminghi/data-view'

Vue.use(dataV)

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // 权限

import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'development') {
  mockXHR()
}

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false
// echarts
Vue.prototype.$echarts = require('echarts/lib/echarts')

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

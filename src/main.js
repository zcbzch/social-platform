import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/iconfont/iconfont.css' // iconfont
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from '@/apis/index.js'
import axios from 'axios'
import {setConfig, Log} from 'log-tool'

window.axios = axios;
window.Log = Log;
Vue.use(Element)
Vue.use(api)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

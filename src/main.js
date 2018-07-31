// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueKindEditor from './plugins/vue-kindeditor'
import App from './App'
import router from './router'
require('@/kindeditor/kindeditor-all.js')
require('@/kindeditor/themes/default/default.css')
Vue.config.productionTip = false
Vue.use(VueKindEditor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

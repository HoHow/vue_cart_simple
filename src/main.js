// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css' // 載入 bootstrap CSS 檔
import 'bootstrap'      // 載入 bootstrap 的 JS 檔
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

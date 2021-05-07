import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//事件总线，此项目中主要用于监听图片的加载
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

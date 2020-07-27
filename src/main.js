import Vue from 'vue'
import App from './App.vue'
import resetCss from './assets/css/reset.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

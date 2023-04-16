import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'
import 'font-awesome/css/font-awesome.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import '@/assets/index.css'

Vue.use(ElementUI);
Vue.use(VueTypedJs)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

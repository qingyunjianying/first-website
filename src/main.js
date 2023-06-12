import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'
import 'font-awesome/css/font-awesome.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index.js'
import lottie from 'vue-lottie'
import store from './store'
import { Swipe, SwipeItem, Button } from 'vant';
import axios from 'axios'

axios.defaults.baseURL = "http://iwenwiki.com:3000/"
Vue.prototype.$http = axios

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Button);
// import getVant from './plugins/index.js'



import App from './App.vue'
import '@/assets/index.css'

Vue.use(ElementUI);
Vue.use(VueTypedJs);
Vue.component('lottie', lottie);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

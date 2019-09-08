import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

// Bootstrap vue
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

// Use Vue cookie to store Bearer
var VueCookie = require('vue-cookie');
Vue.use(VueCookie);

// Axios
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Accept'] = 'application/json';

// API
import * as api from './api.js'
window.api = api;

window.konobarApi = axios.create({
  baseURL: api.apiDomain,
  timeout: 5000
});

// Event bus
window.eventBus = new Vue();

// Components
import '@/components'

new Vue({
  created() {
		AOS.init();
	},
  router,
  store,
  render: h => h(App)
}).$mount('#app');

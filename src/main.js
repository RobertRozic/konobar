import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Bootstrap vue
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

// Axios
window.axios = require('axios');
//window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Accept'] = 'application/json';

// API
import * as api from './api.js'
window.api = api;

window.konobarApi = axios.create({
  baseURL: api.apiDomain,
  timeout: 5000
});

// Components
import '@/components'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';

import Router from 'vue-router';
import Vuex from 'vuex';

import App from './App.vue';
import router from './router';
// import store from './store/store';

Vue.use(Router);
Vue.use(Vuex);
Vue.use(BootstrapVue);
new Vue({
  router,
  template: '<App/>',
  components: { App },
}).$mount('#app');

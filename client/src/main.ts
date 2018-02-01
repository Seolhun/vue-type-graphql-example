import Vue from 'vue';
import Component from 'vue-class-component';
import VueI18n from 'vue-i18n';
import Router from 'vue-router';
import Vuex from 'vuex';

import router from './router';
import store from './store';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import VueApollo from 'vue-apollo';

import axios from 'axios';
import messages from './assets/languages/messages';

import App from './App.vue';

// Component.registerHooks([
//   'beforeRouteEnter',
//   'beforeRouteLeave',
//   'beforeRouteUpdate',
// ]);

Vue.prototype.$appName = 'Hi-Cord';
Vue.prototype.$http = axios;

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'ko',
  fallbackLocale: 'en',
  messages,
  silentTranslationWarn: true,
});

const link = new HttpLink({
  uri: `http://localhost:5000/graphql`,
});
const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.use(VueApollo);
Vue.use(BootstrapVue);
new Vue({
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App },
  apolloProvider,
}).$mount('#app');

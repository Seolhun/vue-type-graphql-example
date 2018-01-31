import Vue from 'vue';
import Component from 'vue-class-component';
import Router, { NavigationGuard, Route, RouteConfig } from 'vue-router';
import Vuex, { ActionTree, MutationTree, Store } from 'vuex';

import router from './router';
import store from './store';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import VueApollo from 'vue-apollo';

import App from './App.vue';

// Component.registerHooks([
//   'beforeRouteEnter',
//   'beforeRouteLeave',
//   'beforeRouteUpdate',
// ]);

const link = new HttpLink({
  uri: `http://localhost:5000/graphql`,
});

// Create the apollo client
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
  template: '<App/>',
  components: { App },
  apolloProvider,
}).$mount('#app');

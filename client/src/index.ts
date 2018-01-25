import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';

import router from './router';
// import store from './store/store';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import VueApollo from 'vue-apollo';

import App from './App.vue';

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

Vue.use(Router);
Vue.use(Vuex);
Vue.use(VueApollo);
Vue.use(BootstrapVue);
new Vue({
  router,
  template: '<App/>',
  components: { App },
  apolloProvider,
}).$mount('#app');

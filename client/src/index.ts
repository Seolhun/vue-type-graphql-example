import Vue from 'vue';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Completed GraphQL examples
import Router from 'vue-router';
import Vuex from 'vuex';

import router from './router';
// import store from './store/store';
<<<<<<< HEAD
=======
>>>>>>> TypeScript Setting 80% completed, except Vuex
=======
>>>>>>> Completed GraphQL examples

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Completed GraphQL examples
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import VueApollo from 'vue-apollo';
<<<<<<< HEAD

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
=======
import Router from 'vue-router';
import Vuex from 'vuex';
=======
>>>>>>> Completed GraphQL examples

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
<<<<<<< HEAD
>>>>>>> TypeScript Setting 80% completed, except Vuex
=======
Vue.use(VueApollo);
>>>>>>> Completed GraphQL examples
Vue.use(BootstrapVue);
new Vue({
  router,
  template: '<App/>',
  components: { App },
<<<<<<< HEAD
<<<<<<< HEAD
  apolloProvider,
=======
>>>>>>> TypeScript Setting 80% completed, except Vuex
=======
  apolloProvider,
>>>>>>> Completed GraphQL examples
}).$mount('#app');

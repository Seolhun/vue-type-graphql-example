import Vue from "vue";

import VueI18n from "vue-i18n";
import messages from "./assets/languages/messages";

import axios from "axios";
import router from "./router";

import store from "./store";

import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import VueApollo from "vue-apollo";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App.vue";

Vue.prototype.$appName = "Hi-Cord";
Vue.prototype.$http = axios;

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: "ko",
  fallbackLocale: "en",
  messages,
  silentTranslationWarn: true,
});

const link = new HttpLink({
  uri: `http://localhost:4000/graphql`,
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
  provide: apolloProvider.provide(),
  template: "<App/>",
  components: { App },
}).$mount("#app");

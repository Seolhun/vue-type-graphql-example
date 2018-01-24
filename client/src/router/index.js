import Vue from 'vue';
import Router from 'vue-router';
import Counter from 'components/Counter.vue';
<<<<<<< HEAD
import Graphql from 'components/Graphql.vue';
=======
import VueLogo from 'components/VueLogo.vue';
>>>>>>> TypeScript Setting 80% completed, except Vuex

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Counter',
      component: Counter,
    },
    {
<<<<<<< HEAD
      path: '/graphql',
      name: 'Graphql',
      component: Graphql,
=======
      path: '/vue',
      name: 'VueLogo',
      component: VueLogo,
>>>>>>> TypeScript Setting 80% completed, except Vuex
    },
  ],
  mode: 'history',
});

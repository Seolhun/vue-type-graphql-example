import Vue from 'vue';
import Router from 'vue-router';
import Counter from 'components/Counter.vue';
import Graphql from 'components/Graphql.vue';
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Counter',
      component: Counter,
    },
    {
      path: '/graphql',
      name: 'Graphql',
      component: Graphql,
    },
  ],
  mode: 'history',
});

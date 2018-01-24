import Vue from 'vue';
import Router from 'vue-router';
import Counter from 'components/Counter.vue';
import VueLogo from 'components/VueLogo.vue';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Counter',
      component: Counter,
    },
    {
      path: '/vue',
      name: 'VueLogo',
      component: VueLogo,
    },
  ],
  mode: 'history',
});

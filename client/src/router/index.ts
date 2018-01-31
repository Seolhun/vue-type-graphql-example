import Vue, { AsyncComponent } from 'vue';
import Router, { NavigationGuard, Route, RouteConfig } from 'vue-router';

import Hello from '@/components/ui/Hello.vue';

import Graphql from '@/components/Graphql.vue';
import { loginIn } from '../utils/login';

// const login: AsyncComponent = (): any => import('@/pages/login.vue');
// const home: AsyncComponent = (): any => import(/* webpackChunkName: "home" */ '@/pages/home/index.vue')

Vue.use(Router);
const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Hello,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Graphql,
    redirect: '/home',
    meta: { leaf: false, icon: 'icon-article' },
    children: [
      { path: '/article/index', component: Graphql, name: '文章列表', meta: { requiresAuth: true, icon: 'icon-list' } },
      { path: '/article/release', component: Graphql, name: '发布文章', meta: { requiresAuth: true, icon: 'icon-write' } },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Hello,
    meta: { requiresAuth: false },
  },
];

const router: Router = new Router({
  mode: 'history',
  routes,
});

router.beforeEach((to: Route, from: Route, next: ({ }?) => void): void => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!loginIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

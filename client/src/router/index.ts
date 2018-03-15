import Vue, { AsyncComponent } from 'vue';
import Router, { NavigationGuard, Route, RouteConfig } from 'vue-router';

import Home from '@/components/Home.vue';
import Login from '@/components/ui/common/Login.vue';
import Signin from '@/components/ui/common/Signin.vue';

import BookDetail from '@/components/ui/books/BookDetail.vue';
import Books from '@/components/ui/books/Books.vue';
import DivisionDetail from '@/components/ui/divisions/DivisionDetail.vue';
import Divisions from '@/components/ui/divisions/Divisions.vue';
import UserDetail from '@/components/ui/users/UserDetail.vue';
import Users from '@/components/ui/users/Users.vue';

import { loginIn } from '../utils/login';

// const login: AsyncComponent = (): any => import('@/pages/login.vue');
// const home: AsyncComponent = (): any => import(/* webpackChunkName: "home" */ '@/pages/home/index.vue')
Vue.use(Router);
const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/books',
    name: 'Books',
    component: Books,
    // meta: { requiresAuth: true },
    children: [
      { path: '/books/:name', component: BookDetail, name: 'BookDetail' },
    ],
  },
  {
    path: '/divisions/{name}',
    name: 'Divisions',
    component: Divisions,
    // meta: { requiresAuth: true },
    children: [
      { path: '/divisions/:name', component: DivisionDetail, name: 'DivisionDetail' },
    ],
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
    // meta: { requiresAuth: true },
    // redirect: '/home',
    // meta: { leaf: false, icon: 'icon-article' },
    children: [
      { path: '/users/:email', component: UserDetail, name: 'UserDetail' },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false },
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
    meta: { requiresAuth: false },
  },
];

const router: Router = new Router({
  mode: 'history',
  routes,
});

router.beforeEach((to: Route, from: Route, next: ({ }?) => void): void => {
  if (!from) {
    next();
  }
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

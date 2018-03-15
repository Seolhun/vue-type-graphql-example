import Vue, { AsyncComponent } from 'vue';
import Router, { NavigationGuard, Route, RouteConfig } from 'vue-router';

import HomeView from '@/components/HomeView.vue';
import LoginView from '@/components/ui/common/LoginView.vue';
import SigninView from '@/components/ui/common/SigninView.vue';

import BookDetailView from '@/components/ui/books/BookDetailView.vue';
import BooksView from '@/components/ui/books/BooksView.vue';
import DivisionDetailView from '@/components/ui/divisions/DivisionDetailView.vue';
import DivisionsView from '@/components/ui/divisions/DivisionsView.vue';
import UserDetailView from '@/components/ui/users/UserDetailView.vue';
import UsersView from '@/components/ui/users/UsersView.vue';

import { loginIn } from '../utils/login';

// const login: AsyncComponent = (): any => import('@/pages/login.vue');
// const home: AsyncComponent = (): any => import(/* webpackChunkName: "home" */ '@/pages/home/index.vue')
Vue.use(Router);
const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/books',
    name: 'Books',
    component: BooksView,
    // meta: { requiresAuth: true },
    children: [
      { path: '/books/:name', component: BookDetailView, name: 'BookDetail' },
    ],
  },
  {
    path: '/users',
    name: 'Users',
    component: UsersView,
    // meta: { requiresAuth: true },
    // redirect: '/home',
    // meta: { leaf: false, icon: 'icon-article' },
    children: [
      { path: '/users/:email', component: UserDetailView, name: 'UserDetail' },
    ],
  },
  {
    path: '/divisions',
    name: 'Divisions',
    component: DivisionsView,
    children: [
      { path: '/divisions/:name', component: DivisionDetailView, name: 'DivisionDetail' },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: { requiresAuth: false },
  },
  {
    path: '/signin',
    name: 'Signin',
    component: SigninView,
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

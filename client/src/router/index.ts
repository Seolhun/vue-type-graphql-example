import Vue, { AsyncComponent } from 'vue';
import Router, { NavigationGuard, Route, RouteConfig } from 'vue-router';

import Home from '@/components/Home.vue';
import Login from '@/components/ui/common/Login.vue';
import Signin from '@/components/ui/common/Signin.vue';
import Profile from '@/components/ui/profile/Profile.vue';
import User from '@/components/ui/users/User.vue';
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
    path: '/users',
    name: 'Users',
    component: Users,
    // redirect: '/home',
    // meta: { leaf: false, icon: 'icon-article' },
    // children: [
    //   { path: '/article/index', component: Users, name: 'Users', meta: { requiresAuth: true, icon: 'icon-list' } },
    //   { path: '/article/release', component: Users, name: 'Users', meta: { requiresAuth: true, icon: 'icon-write' } },
    // ],
  }, {
    path: '/user',
    name: 'User',
    component: User,
  }, {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: false },
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false },
  }, {
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

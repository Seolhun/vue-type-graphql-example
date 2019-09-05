import Vue from "vue";
import Router, { Route, RouteConfig } from "vue-router";

import HomeView from "@/components/HomeView.vue";
import LoginView from "@/components/ui/auth/LoginView.vue";
import SigninView from "@/components/ui/auth/SigninView.vue";

import BookDetailView from "@/components/ui/books/BookDetailView.vue";
import BooksView from "@/components/ui/books/BooksView.vue";
import DivisionDetailView from "@/components/ui/divisions/DivisionDetailView.vue";
import DivisionsView from "@/components/ui/divisions/DivisionsView.vue";
import UserDetailView from "@/components/ui/users/UserDetailView.vue";
import UsersView from "@/components/ui/users/UsersView.vue";

import { loginIn } from "../utils/login";

// const login: AsyncComponent = (): any => import('@/pages/login.vue');
// const home: AsyncComponent = (): any => import(/* webpackChunkName: "home" */ '@/pages/home/index.vue')
Vue.use(Router);
const routes: RouteConfig[] = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/books",
    name: "Books",
    component: BooksView
    // meta: { requiresAuth: true },
  },
  {
    path: "/books/:id",
    name: "BookDetail",
    component: BookDetailView
  },
  {
    path: "/divisions",
    name: "Divisions",
    component: DivisionsView
  },
  {
    path: "/divisions/:name",
    name: "DivisionDetail",
    component: DivisionDetailView
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
    meta: { requiresAuth: false }
  },
  {
    path: "/signin",
    name: "Signin",
    component: SigninView,
    meta: { requiresAuth: false }
  },
  {
    path: "/users",
    name: "Users",
    component: UsersView
    // meta: { requiresAuth: true },
    // redirect: '/home',
    // meta: { leaf: false, icon: 'icon-article' },
  },
  {
    path: "/users/:name",
    name: "UserDetail",
    component: UserDetailView
  }
];

const router: Router = new Router({
  mode: "history",
  routes
});

router.beforeEach((to: Route, from: Route, next: ({}) => void): void => {
  if (!from) {
    next();
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!loginIn()) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

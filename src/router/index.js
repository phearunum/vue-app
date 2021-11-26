import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import layoutComponent from '../components/layoutComponent'
import store from '../store/index'
import Sale  from '../views/Sale'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      auth: true
    }

  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      auth: true
    }
  },
  {
    path: '/sale',
    name: 'Sale',
    component: Sale,
    meta: {
      sale: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login

  },
  {
    path: '/layout',
    name: 'Layout',
    component: layoutComponent,
    meta: {
      auth: true
    }
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      auth: true
    }
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    console.log(store.state.isLogin)
    if (store.state.isLogin) {
      next();
    } else {
      next({
        path: "/login",
      });
    }
  } else {
    next();
  }
});

export default router

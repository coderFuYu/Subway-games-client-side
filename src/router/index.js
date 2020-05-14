import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: 1,
    component: () => import('../views/Home')
  },

  {
    name: 'friend',
    meta: 2,
    path: '/friend',
    component: () => import('../views/Friend')
  },
  {
    name: 'task',
    meta: 3,
    path: '/task',
    component: () => import('../views/Task')
  },
  {
    name: 'bag',
    meta: 4,
    path: '/bag',
    component: () => import('../views/Bag')
  },
  {
    name: 'mall',
    meta: 5,
    path: '/mall',
    component: () => import('../views/Mall')
  },
  {
    name: 'notice',
    meta: 6,
    path: '/notice',
    component: () => import('../views/Notice')
  },
  {
    name: 'mailbox',
    meta: 7,
    path: '/mailbox',
    component: () => import('../views/Mailbox')
  },
  {
    name: 'game',
    meta: 8,
    path: '/game',
    component: () => import('../views/Game')
  },
  {
    name: 'rank',
    meta: 9,
    path: '/rank',
    component: () => import('../views/Rank')
  },
  {
    name: 'game1',
    meta: 10,
    path: '/game1',
    component: () => import('../views/Game1')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router

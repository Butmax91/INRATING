import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import('../components/Edit.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router

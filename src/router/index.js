import Vue from 'vue'
import VueRouter from 'vue-router'
import Shop from '../views/Shop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Shop',
    component: Shop,
    children:[
      {path: '/Shop-order',component: () => import('../views/Shop-order.vue')},
      {path: '/Shop-appraise',component: () => import('../views/Shop-appraise.vue')},
      {path: '/Shop-seller',component: () => import('../views/Shop-seller.vue')},
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: ()=>import('../views/Home')
  },
  {
    path: '/cate',
    name: 'Cate',
    component: () => import('../views/Category.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('../views/My.vue')
  },
  {
    // path: '/list/:name',
    path: '/list',
    name: 'List',
    component: () => import('../views/List.vue')    // 路由懒加载
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

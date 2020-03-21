import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home'
import Login from '@/views/home/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: '首页',
    component: Home,
    redirect: '/login',
    children: [
      {
        path: '/login',
        name: '登录',
        component: Login
      },
      {
        path: '/register',
        name: '注册',
        component: () => import('@/views/home/register')
      },
      {
        path: '/forget',
        name: '忘记密码',
        component: () => import('@/views/home/forget')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

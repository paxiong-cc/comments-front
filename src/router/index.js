import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
import Lrf from '@/views/lrf'
import Home from '@/views/content/home'
import Content from '@/views/content'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Layout,
    children: [
      // 登录、注册、找回密码
      {
        path: '',
        component: Lrf,
        redirect: '/home',
        children: [
          {
            path: '/login',
            name: '登录',
            component: () => import('@/views/lrf/login')
          },
          {
            path: '/register',
            name: '注册',
            component: () => import('@/views/lrf/register')
          },
          {
            path: '/forget',
            name: '忘记密码',
            component: () => import('@/views/lrf/forget')
          }
        ]
      },
      // 首页模块
      {
        path: '',
        component: Content,
        children: [
          {
            path: '/home',
            name: '首页',
            component: Home
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'router-active'
})

export default router

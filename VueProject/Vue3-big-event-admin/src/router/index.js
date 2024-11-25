import { createRouter, createWebHashHistory } from 'vue-router'
import {useUserStore } from '@/stores'
// , createWebHashHistory

// createRouter 创建路由实例
// 配置history 模式
// 1. history模式: createWebHistory  地址栏不带#
// 2. hash模式: createWebHashHistory  地址栏带#

// console.log(import.meta.env.DEV)

// vite中的环境变量 import.meta.env.BASE_URL  就是 vut.config.js 中的 base 配置项
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [ 
    {path: '/login', component:() => import('@/views/login/LoginPage.vue')}, // 登录页
    {
      path: '/', 
      component:() => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/article/manage',
      children: [
      {
        path: 'article/manage',
        component: () => import('@/views/article/ArticleManage.vue')
      },
      {
        path: 'article/channel',
        component: () => import('@/views/article/ArticleChannel.vue')
      },
      {
        path: 'user/profile',
        component: () => import('@/views/user/UserProfile.vue')
      },
      {
        path: 'user/avatar',
        component: () => import('@/views/user/UserAvatar.vue')
      },
      {
        path: 'user/password',
        component: () => import('@/views/user/UserPassword.vue')
      }      
    ]
    } // 登录页
  ]
})

// 登录访问拦截 => 默认直接放行
// 根据返回值决定 是放行 还是拦截
// 返回值:
// 1. underfined / true 直接放行
// 2. false 蓝灰from的地址页面
// 3. 具体路径 或 路径对象 拦截对应的地址
  // /'login' {name: 'login'}
router.beforeEach((to) => {
    // 如果没有token 且访问的是非登录页 拦截到登录 其他的情况正常放行
  const useStore = useUserStore()
  if (!useStore.token && to.path !== '/login') return '/login'
  
})


export default router

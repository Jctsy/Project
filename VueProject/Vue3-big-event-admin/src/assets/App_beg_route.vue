<script setup>
// 在 vue3 CompositionAPI 中
// 1. 获取路由对象 router useRouter
    // const router = useRouter()
  // 2. 获取路由参数 route  useRoute
    // const route  = useRoute()
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { useUserStore, useCountStore } from '@/stores'

const router = useRouter()
const route = useRoute()
const goList = () => {
  // vue3中没有this这个概念了 要用const定义route路由对象了
  // this.$router.push('/list')
  console.log(router, route)
  router.push('/list')
  
}

const userStore = useUserStore()
const countStore = useCountStore()
</script>

<template>
  <div>

    <hr>
    <router-view></router-view>
    <hr>
    <hr>
    <hr>
    我是App
    <test-demo></test-demo>
    <el-button @click="$router.push('/home')">跳首页</el-button>
    <el-button @click="goList">跳列表页</el-button>

    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>

    <p>{{ userStore.token }}</p>
    <el-button @click="userStore.setToken('Bearer asbadnaioudb')">
      登录
    </el-button>
    <el-button @click="userStore.removeToken()">
      退出
    </el-button>

    <hr>
    {{ countStore.count }}
    <el-button @click="countStore.add(2)">加法</el-button>
  </div>
</template>

<style scoped>

</style>

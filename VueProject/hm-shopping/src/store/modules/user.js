import { getInfo, setInfo } from '@/utils/storage'
export default {
  // 开启命名空间
  namespaced: true,
  state () {
    return {
      // 个人权重相关
      userInfo: getInfo()
    }
  },
  mutations: {
    // 所有mutations的第一个参数 都是state
    setUserInfo (state, obj) {
      state.userInfo = obj
      setInfo(obj)
    }
  },
  actions: {
    logout (context) {
      // 个人信息要重置
      context.commit('setUserInfo', {})
      // 购物车的信息要重置(跨模块调用 mutation) cart/setCarList
      context.commit('cart/setCarList', [], { root: true })
    }
  },
  getters: {}
}

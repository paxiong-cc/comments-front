const state = {
  token: JSON.parse(localStorage.getItem('userInfo')) && JSON.parse(localStorage.getItem('userInfo')).token || '', // 用户token
  userInfo: JSON.parse(localStorage.getItem('userInfo')) && JSON.parse(localStorage.getItem('userInfo')).data || {} // 用户信息
}

const mutations = {
  // 保存用户token
  setToken(state, val) {
    state.token = val
  },

  // 保存用户信息
  setUserInfo(state, val) {
    state.userInfo = val
  }
}

const actions = {
  // 保存用户token
  setToken({ commit }, val) {
    commit('setToken', val)
  },

  // 保存用户信息
  setUserInfo({ commit }, val) {
    commit('setUserInfo', val)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

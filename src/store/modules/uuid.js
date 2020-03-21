const state = {
  uuid: localStorage.getItem('sid') // uuid唯一值(用来确定本地验证码)
}

const mutations = {
  // 保存用户信息
  setUuid(state, val) {
    state.uuid = val
  }
}

const actions = {
  // 保存用户信息
  setUuid({ commit }, val) {
    commit('setUuid', val)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

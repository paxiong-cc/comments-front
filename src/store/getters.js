const getters = {
  getToken: state => state.user.token, // 获取用户token
  getUserInfo: state => state.user.userInfo, // 获取用户信息
  getUuid: state => state.uuid.uuid // 获取uuid信息
}

export default getters

const getters = {
  getIdentity: state => state.user.IDENTITY, // 获取用户信息
  getUuid: state => state.uuid.uuid // 获取uuid信息
}

export default getters

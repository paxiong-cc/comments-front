const ENV = {
  // 正常命令
  development: 'http://localhost:3000',
  production: '',

  // 新配置命令
  test: '',
  prod: ''
}

export function getUrl() {
  return ENV[process.env.VUE_APP_TITLE]
}

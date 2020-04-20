// 获取mock对象
const Mock = require('mockjs')

// 获取random对象，随机生成各种数据，具体请翻阅文档
const Random = Mock.Random

// 定义默认域名，随便写
// const domain = 'http://localhost:3000'

// 延时
Mock.setup({
  timeout: '300 - 500'
})

// import publicList from './public-list'

// 随机生成文章数据
const postData = req => {
  const posts = [] // 用于存放文章数据的数组
  for (let i = 0; i < 10; i++) {
    const post = {
      title: Random.csentence(10, 25), // 随机生成长度为10-25的标题
      icon: Random.dataImage('250x250', '文章icon'), // 随机生成大小为250x250的图片链接
      author: Random.cname(), // 随机生成名字
      date: Random.date() + ' ' + Random.time(), // 随机生成年月日 + 时间
      color: Random.hex(), // "#a479f2"
      colors: Random.rgba(), // "rgb(121, 183, 242, .1)"
      text: Random.paragraph(1, 3), // 1-3段
      titles: Random.title(3, 5), // 标题
      city: Random.county()
    }
    posts.push(post)
  }
  // 返回状态码和文章数据posts
  return {
    code: 200,
    posts
  }
}

// 定义请求链接，类型，还有返回数据
Mock.mock(/\/post/, 'get', postData)
// Mock.mock(/\/public\/list/, 'get', publicList)

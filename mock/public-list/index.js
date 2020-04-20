// 获取mock对象
const Mock = require('mockjs')

// 获取random对象，随机生成各种数据，具体请翻阅文档
const Random = Mock.Random

const response = req => {
  const data = []
  for (let i = 0; i < 10; i++) {
    const item = {
      username: '@name', // 随机生成长度为10-25的标题
      icon: Random.dataImage('250x250', '文章icon'), // 随机生成大小为250x250的图片链接
      author: Random.cname(), // 随机生成名字
      date: Random.date() + ' ' + Random.time() // 随机生成年月日 + 时间
    }

    data.push(item)
  }

  return {
    code: 200,
    data
  }
}

export default response

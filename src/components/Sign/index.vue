<template>
  <div class="layui-card">
    <div class="layui-card-header">
      <div class="sign-pannel">
        <div class="pannel-title">
          <a>签到</a>
          <span class="mid"></span>
          <a class="bounced">说明</a>
          <span class="mid"></span>
          <a class="bounced">活跃榜</a>
        </div>
        <span v-if="getUserInfo.email" class="sign-state">
          已经连续签到<span class="sign-day">{{ getUserInfo.count }}</span>天
        </span>
      </div>
    </div>
    <div class="layui-card-body center" style="padding: 20px 0">
      <div v-if="!getUserInfo.isSign" :key="1">
        <span class="layui-btn layui-btn-danger" style="margin-right: 5px" @click="sign">今日签到</span>
        <span v-if="getUserInfo.email">可获得<span style="padding: 0 5px; color: #FF5722">{{ kiss }}</span>飞吻</span>
      </div>
      <div v-else :key="2">
        <span class="layui-btn layui-btn-danger layui-btn-disabled" style="margin-right: 5px">今日已签到</span>
        <span v-if="getUserInfo.email">已获得<span style="padding: 0 5px; color: #FF5722">{{ kiss }}</span>飞吻</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      kiss: 0
    }
  },

  computed: {
    ...mapGetters([
      'getUserInfo'
    ])
  },

  created() {
    this.getKissCount()
    // TODO: 是否在0点时仍在界面
  },

  methods: {
    ...mapActions('user', ['setUserInfo']),

    // 获取可获得的飞吻数
    getKissCount() {
      if (this.getUserInfo.email) {
        // 连续签到的次数
        let count = this.getUserInfo.count
        count += 1
        if (count < 5) {
          this.kiss = 5
        } else if (count >= 5 && count < 15) {
          this.kiss = 10
        } else if (count >= 15 && count < 30) {
          this.kiss = 15
        } else if (count >= 30 && count < 100) {
          this.kiss = 20
        } else if (count >= 100 && count < 365) {
          this.kiss = 30
        } else if (count >= 365) {
          this.kiss = 50
        }
      }
    },

    // 签到
    sign() {
      // 当前用户信息状态
      if (this.getUserInfo.email) {
        // 发送签到请求
        this.$http
          .get('/user/fav')
          .then(res => {
            if (res.data.code === 200) {
              const userInfo = {
                ...this.getUserInfo
              }
              userInfo.count += 1
              userInfo.isSign = true
              userInfo.favs += this.kiss
              // 修改vuex里的状态
              this.setUserInfo(userInfo)
              // 修改localStorage里的状态
              const localUserInfo = JSON.parse(localStorage.getItem('userInfo'))
              localUserInfo.data = userInfo
              localStorage.setItem('userInfo', JSON.stringify(localUserInfo))
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  /* 签到 */
  .sign-pannel {
    @include flex($row: space-between);

    .pannel-title {
      @include flex($align: center);

      a {
        display: inline-block;
        padding: 0 10px;
        text-align: center;
        cursor: pointer;
      }

      .bounced {
        color: #01AAED;

        &:hover {
          color: $router-h-active-color
        }
      }
    }

    .sign-state {
      color: $comment-info-color;

      .sign-day {
        margin: 0 5px;
        font-weight: 600;
        color: $praise;
      }
    }
  }
</style>

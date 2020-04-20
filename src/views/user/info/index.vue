<template>
  <div class="info-content">
    <!-- 提示 -->
    <p class="prompt"> 您的邮箱尚未验证，这比较影响您的帐号安全，<router-link to=""> 立即去激活?</router-link></p>

    <!-- 签到 -->
    <div class="sign">
      <div class="layui-card members">
        <div class="layui-card-header">我的会员信息</div>
        <div class="layui-card-body">
          <p>你的财富经验值：<span class="experience">&yen;&nbsp;0</span>你当前为：<span class="vip">非VIP</span></p>
          <p>你拥有社区飞吻：<span class="kiss">20飞吻</span><router-link to="/" class="layui-badge layui-bg-orange">充值</router-link></p>
        </div>
      </div>

      <div class="layui-card">
        <div class="layui-card-header">
          <div class="sign-pannel">
            <div class="pannel-title">
              <a>签到</a>
              <span class="mid" />
              <a class="bounced">说明</a>
              <span class="mid" />
              <a class="bounced">活跃榜</a>
            </div>
            <span class="sign-state">
              已经连续签到<span class="sign-day">16</span>天
            </span>
          </div>
        </div>
        <div class="layui-card-body center" style="padding: 20px 0">
          <span class="layui-btn layui-btn-danger">今日签到</span>
        </div>
      </div>
    </div>

    <!-- 快捷方式 -->
    <div class="layui-card shortcut">
      <div class="layui-card-header">快捷方式</div>
      <div class="layui-card-body">
        <ul class="shortcut-pannel">
          <li
            v-for="(item, idx) in shorcutItem"
            :key="idx"
          >
            <i class="iconfont" :class="item.icon" />
            <span>{{ item.text }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shorcutItem: [ // 快捷方式列表
        { text: '修改信息', icon: 'icon-shezhi' },
        { text: '修改信息', icon: 'icon-shezhi' },
        { text: '修改信息', icon: 'icon-shezhi' },
        { text: '修改信息', icon: 'icon-shezhi' },
        { text: '修改信息', icon: 'icon-shezhi' },
        { text: '修改信息', icon: 'icon-shezhi' },
        { text: '修改信息', icon: 'icon-shezhi' },
        { text: '修改信息', icon: 'icon-shezhi' },
        { text: '修改信息', icon: 'icon-shezhi' },
        { text: '修改信息', icon: 'icon-shezhi' },
        { text: '修改信息', icon: 'icon-shezhi' },
        { text: '修改信息', icon: 'icon-shezhi' }
      ]
    }
  }
}
</script>

<style lang="scss" scpoed>
  .info-content {

    /* 提示 */
    .prompt {
      margin-bottom: 20px;
      padding: 15px;
      font-size: 13px;
      color: #666;
      background-color: #F8F8F8;

      a {
        font-size: 13px;
        color: #4F99CF;
      }
    }

    /* 签到 */
    .sign {
      @include flex($row: space-between);

      .layui-card {
        width: 49%;
      }

      .members {
        p {
          font-size: 13px;
          color: #666;
        }

        .experience {
          padding-right: 20px;
          color: #FF5722;
        }

        .kiss {
          padding-right: 10px;
          color: #FF5722;
        }
      }

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
    }

    /* 快捷方式 */
    .shortcut {
      margin-top: 20px;

      .shortcut-pannel {
        @include flex($row: space-between);
        flex-wrap: wrap;

        li {
          margin-bottom: 10px;
          width: 24%;
          text-align: center;
          cursor: pointer;

          &:hover i {
            background: #44A194
          }

          i {
            @include flex($align: center, $row: center);
            height: 60px;
            font-size: 30px;
            color: #fff;
            background: #2F9688
          }

          span {
            font-size: 13px;
          }
        }
      }
    }
  }
</style>

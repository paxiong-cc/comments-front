<template>
  <section class="layout-container">
    <!-- 头部 -->
    <header class="head">
      <div class="head-box">
        <div class="logo">
          123
        </div>

        <ul class="share">
          <li>
            <i class="iconfont icon-jiaoliu" style="font-size: 24px" />
            <span>交流</span>
          </li>
          <li>
            <i class="iconfont icon-iconmingxinganli" style="margin-bottom: 4px; font-size: 30px" />
            <span>案例</span>
          </li>
          <li>
            <i class="iconfont icon-UIzhongguo-copy" style="font-size: 28px" />
            <span>框架</span>
          </li>
        </ul>

        <!-- 用户信息 -->
        <div>
          <ul v-if="false" class="info">
            <li><span class="iconfont icon-geren8" style="font-size: 34px"></span></li>
            <li>
              <router-link to="/login">登录</router-link>
            </li>
            <li>
              <router-link to="/register">注册</router-link>
            </li>
            <li><span class="iconfont icon-qq" style="font-size: 24px"></span></li>
            <li><span class="iconfont icon-weibo" style="font-size: 24px"></span></li>
          </ul>

          <ul v-else class="layui-nav user">
            <li class="layui-nav-item">
              <a href="javascript:;" class="user-info">
                <img src="~@/assets/imgs/paxiong.jpg" class="layui-nav-img">
                趴熊
              </a>
              <dl class="layui-nav-child">
                <dd><router-link to="/user/info">用户中心</router-link></dd>
                <dd><router-link to="/user/info">基本设置</router-link></dd>
                <dd><hr></dd>
                <dd><router-link to="/user/info">我的消息</router-link></dd>
                <dd><router-link to="/user/info">我的主页</router-link></dd>
                <dd><hr></dd>
                <dd><router-link to="/user/info">退出</router-link></dd>
              </dl>
            </li>
          </ul>

        </div>
      </div>
    </header>

    <!-- 内容 -->
    <section class="body">
      <router-view />
    </section>

    <!-- 底部 -->
    <footer class="foot">123</footer>
  </section>
</template>

<script>

export default {
  name: 'Layout'
}
</script>

<style lang="scss">
  /* 970 - 1180 */
  @media (min-width: $content-width-md) and (max-width: $content-width) {
    .head-box {
      width: $md-width !important
    }
  }

  /* 768 - 970 */
  @media (min-width: $content-width-xs) and (max-width: $content-width-md) {
    .head-box {
      width: $xs-width !important
    }
  }

  /* < 768 */
  @media (max-width: $content-width-xs) {
    .head-box {
      width: 100% !important
    }
  }

  .layout-container {
    @include flex($dr: column);
    box-sizing: border-box;
    height: 100%;
    background: $bg;
  }

  /* 头部 */
  .head {
    @include position($ps: sticky, $top: 0, $index: 999);
    height: 60px;
    color: $head-color;
    background: #303540;

    &-box {
      @include flex($row: space-between, $align: center);
      margin: 0 auto;
      max-width: $lg-width;
      height: 60px;

      .logo {
        width: 120px;
      }

      /* 分享 */
      .share {
        display: flex;
        flex: 1;

        > li {
          @include flex($row: space-between, $align: center);
          margin-left: 60px;
          box-sizing: border-box;
          width: 70px;
          cursor: pointer;

          &:hover {
            color: #fff;
          }
        }
      }

      /* 个人信息 */
      .info {
        display: flex;

        > li {
          @include flex($row: space-between, $align: center);
          margin-right: 30px;
          line-height: 60px;
          cursor: pointer;

          > a {
            text-decoration: none;
            color: $head-color;
          }
        }
      }

      .user {
        background-color: transparent;

        .user-info {
          @include flex($align: center);
        }

        dd {
          text-align: center
        }

        hr {
          margin: 0;
        }
      }
    }
  }

  .body {
  }

  .foot {
    margin-top: 60px;
    border-top: 1px solid #E2E2E2;
    height: 160px;
  }
</style>

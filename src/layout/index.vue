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
            <i class="el-icon-chat-line-round" style="font-size: 30px" />
            <span>交流</span>
          </li>
          <li>
            <i class="el-icon-edit" style="font-size: 30px" />
            <span>交流</span>
          </li>
          <li>
            <i class="el-icon-edit" style="font-size: 30px" />
            <span>交流</span>
          </li>
        </ul>

        <ul class="info">
          <li>1</li>
          <li>
            <router-link to="/login">登录</router-link>
          </li>
          <li>
            <router-link to="/register">注册</router-link>
          </li>
          <li>123</li>
          <li>22</li>
        </ul>
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
        }
      }

      /* 个人信息 */
      .info {
        display: flex;
        width: 300px;

        > li {
          @include flex($row: space-between, $align: center);
          width: 20%;
          line-height: 60px;

          > a {
            text-decoration: none;
            color: $head-color;
          }
        }
      }
    }
  }

  .body {
  }

  .foot {
    margin-top: 60px;
    border-top: 1px solid #E2E2E2;
    height: 200px;
  }
</style>

<template>
  <div class="content-box">
    <!-- 导航 -->
    <div style="background-color: #fff">
      <div class="nav-width">
        <ul>
          <li class="layui-hide-xs"><router-link to="/home">首页</router-link></li>
          <li><router-link to="/request">提问</router-link></li>
          <li><router-link to="/share">分享</router-link></li>
          <li><router-link to="/discuss">讨论</router-link></li>
          <li><router-link to="/advise">建议</router-link></li>
          <li><router-link to="/announcement">公告</router-link></li>
          <li><router-link to="/dynamic">动态</router-link></li>
        </ul>

        <div class="nav-right">
          <span class="layui-icon layui-icon-search layui-hide-xs" style="font-size: 24px">&nbsp;</span>
          <button type="button" class="layui-btn">发表新帖</button>
        </div>
      </div>
    </div>

    <!-- 组件 -->
    <router-view class="content" />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  /* 970 - 1180 */
  @media (min-width: $content-width-md) and (max-width: $content-width) {
    .nav-width {
      width: $md-width !important
    }

    .content {
      width: $md-width !important
    }
  }

  /* 768 - 970 */
  @media (min-width: $content-width-xs) and (max-width: $content-width-md) {
    .nav-width {
      width: $xs-width !important
    }

    .content {
      width: $xs-width !important
    }
  }

  /* < 768 */
  @media (max-width: $content-width-xs) {
    .nav-width {
      width: 100% !important
    }

    ul {
      width: 100%;

      li {
        width: 33% !important
      }
    }

    .nav-right {
      position: relative !important;

      .layui-btn {
        margin: 0 auto;
      }
    }

    .content {
      width: 100% !important
    }
  }

  /* 内容盒子 */
  .content-box {
    width: 100%;
    background: $bg;
  }

  /* 导航宽度 */
  .nav-width {
    position: relative;
    margin: 0 auto;
    width: $lg-width;

    .nav-right {
      @include flex($align: center);
      @include position($ps: absolute, $top: 0, $right: 0)
    }

    li {
      display: inline-block;
      width: 68px;
      height: 50px;

      a {
        display: block;
        height: 50px;
        text-align: center;
        line-height: 50px;

        &:hover {
          color: $router-h-active-color;
        }
      }
    }
  }

  /* 路由高亮 */
  .router-active {
    color: $router-active-color !important;
  }

  /* 搜索图标 */
  .layui-icon-search {
    display: inline-block;
    margin-right: 5px;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 24px;
    cursor: pointer;

    &:hover {
      color: $router-h-active-color
    }
  }

  .content {
    margin: 20px auto 0;
    width: $lg-width;
  }
</style>

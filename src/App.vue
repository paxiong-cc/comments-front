<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  @import url('~@/styles/reset.scss');

  #app {
    height: 100%;
  }

  .ml-20 {
    margin-left: 20px
  }

  a:hover {
    color: black;
    cursor: pointer;
  }

  /* 横向垂直居中 */
  .center {
    @include flex($row: center, $align: center);
  }

  /* 隔离竖线 */
  .mid {
    width: 1px;
    height: 10px;
    background: #ccc;
  }

  /* 表单input框宽度 */
  .custom-input {
    width: $input-width;
  }

  /* 表单错误样式 */
  .err-msg {
    color: #ff0000
  }

  /* 验证码 */
  .vcode {
    padding: 0 !important;
    cursor: pointer;
  }

  /* layui样式 */
  .layui-badge-rim {
    border: 1px solid #5FB878;
    background: none;
    color: #5FB878;
  }

  .layui-card {
    border: 1px solid #E6E6E6;

    .layui-card-header {
      border-bottom: 1px solid #E6E6E6
    }
  }

  /* 内容宽度 */
  .content-width {
    margin: 15px auto 0;
    width: $content-width;
  }

  /* 970 - 1180 */
  @media (min-width: $content-width-md) and (max-width: $content-width) {
    .content-width {
      width: $md-width !important
    }
  }

  /* 768 - 970 */
  @media (min-width: $content-width-xs) and (max-width: $content-width-md) {
    .content-width {
      width: $xs-width !important
    }
  }

  /* < 768 */
  @media (max-width: $content-width-xs) {
    .content-width {
      width: 100% !important
    }
  }

</style>

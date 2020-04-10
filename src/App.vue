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

</style>

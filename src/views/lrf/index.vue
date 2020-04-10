<template>
  <section class="lrf-container">
    <div class="toggle">
      <router-link to="/login">登录</router-link>
      <router-link
        v-if="$route.path !== '/forget'"
        key="register"
        to="/register"
      >注册</router-link>
      <router-link
        v-else
        key="forget"
        to="/forget"
      >找回密码</router-link>
    </div>

    <article class="info">
      <router-view />
    </article>
  </section>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import { mapActions } from 'vuex'

export default {
  created() {
    this.getUuid()
  },

  methods: {
    ...mapActions('uuid', [
      'setUuid'
    ]),

    // 获取创建uuid
    getUuid() {
      if (!localStorage.getItem('sid')) {
        const uuid = uuidv4()
        localStorage.setItem('sid', uuid)
        // 保存到vue-x中
        this.setUuid(uuid)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  /* 970 - 1180 */
  @media (min-width: $content-width-md) and (max-width: $content-width) {
    .lrf-container {
      width: $md-width !important
    }
  }

  /* 768 - 970 */
  @media (min-width: $content-width-xs) and (max-width: $content-width-md) {
    .lrf-container {
      width: $xs-width !important
    }
  }

  /* < 768 */
  @media (max-width: $content-width-xs) {
    .lrf-container {
      margin: 0 !important;
      width: 100% !important
    }
  }

  .lrf-container {
    margin: 10px auto 0;
    box-sizing: border-box;
    padding: 10px 20px 20px;
    width: $lg-width;
    height: 100%;
    background-color: $form-bg;
  }

  .toggle {
    border-bottom: 1px solid #ccc;
    margin: 0 auto;

    >a {
      display: inline-block;
      border-bottom: 2px solid #fff;
      width: 80px;
      height: 40px;
      text-align: center;
      line-height: 40px;
    }
  }

  .info {
    margin-top: 10px
  }

  /* 路由高亮 */
  .router-active {
    border-bottom: 2px solid $router-active-color !important;
    color: $router-active-color !important;
  }
</style>

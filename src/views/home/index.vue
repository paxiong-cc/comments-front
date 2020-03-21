<template>
  <section class="login-container">
    <!-- 头部 -->
    <header class="head">
      头
    </header>

    <!-- 内容 -->
    <section class="body">
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

    <!-- 底部 -->
    <footer class="foot">123</footer>
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

<style lang="scss">
  .login-container {
    @include flex($dr: column);
    height: 100%;
  }

  .head {
    height: 60px;
    background: black
  }

  .body {
    flex: 1
  }

  .foot {
    height: 120px;
    background: #F1EFF1;
  }
</style>

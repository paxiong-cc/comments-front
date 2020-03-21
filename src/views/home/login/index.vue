<template>
  <div>
    <el-form
      label-position="right"
      label-width="80px"
      :model="form"
      style="width: 500px"
    >
      <el-form-item label="用户名">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" />
      </el-form-item>
      <div style="display: flex">
        <el-form-item label="验证码" style="flex: 1">
          <el-input v-model="form.code" />
        </el-form-item>

        <Throttle :time="1000" events="click">
          <div class="code-img" @click="getCode" v-html="codeImg">图片</div>
        </Throttle>
      </div>

      <div>
        <Button val="立即登录" />
        <router-link to="/forget">忘记密码</router-link>
      </div>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Button from '@/components/Button'

export default {
  name: 'Login',

  components: {
    Button
  },

  data() {
    return {
      form: {
        username: '',
        password: '',
        code: ''
      },
      codeImg: ''
    }
  },

  computed: {
    ...mapGetters([
      'getUuid'
    ])
  },

  created() {
    this.getCode()
  },

  methods: {
    // 获取验证码
    getCode() {
      this.$http
        .get('/getCaptcha', {
          params: {
            sid: this.getUuid
          }
        })
        .then(res => {
          this.codeImg = res.data.data
        })
    }
  }
}
</script>

<style lang="scss">
.code-img {
  width: 150px;
  height: 40px;
  cursor: pointer;
}
</style>

<template>
  <div class="login-content">
    <form class="layui-form layui-form-pane" action="">
      <div class="layui-form-item">
        <label class="layui-form-label">邮箱</label>
        <div class="layui-input-block">
          <input
            v-model="form.email"
            type="text"
            name="email"
            placeholder="请输邮箱"
            autocomplete="off"
            class="layui-input custom-input"
          >
        </div>
        <div class="err-msg">{{ errorMessags.email }}</div>
      </div>

      <div class="layui-form-item">
        <label class="layui-form-label">用户名</label>
        <div class="layui-input-block">
          <input
            v-model.trim="form.username"
            type="text"
            name="email"
            placeholder="请输入用户名"
            maxlength="10"
            autocomplete="off"
            class="layui-input custom-input"
          >
        </div>
        <div class="err-msg">{{ errorMessags.username }}</div>
      </div>

      <div class="layui-form-item">
        <label class="layui-form-label">密码</label>
        <div class="layui-input-block">
          <input
            v-model="form.password"
            type="password"
            name="password"
            placeholder="请输入密码"
            autocomplete="off"
            class="layui-input custom-input"
          >
        </div>
        <div class="err-msg">{{ errorMessags.password }}</div>
      </div>

      <div class="layui-form-item">
        <label class="layui-form-label">确认密码</label>
        <div class="layui-input-block">
          <input
            v-model="form.vpassword"
            type="password"
            name="password"
            placeholder="再次输入密码"
            autocomplete="off"
            class="layui-input custom-input"
          >
        </div>
        <div class="err-msg">{{ errorMessags.vpassword }}</div>
      </div>

      <div class="layui-form-item">
        <div style="display: flex">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-block" style="margin: 0 !important">
            <input
              v-model="form.code"
              type="text"
              name="code"
              placeholder="请输验证码"
              autocomplete="off"
              class="layui-input custom-input"
            >
          </div>
          <div
            class="layui-form-mid layui-word-aux vcode"
            @click="getCode"
            v-html="codeImg"
          >验证码图片</div>
        </div>
        <div class="err-msg">{{ errorMessags.code }}</div>
      </div>
    </form>

    <div>
      <button class="layui-btn" @click="submitForm(form)">立即提交</button>
    </div>
    <WarmPrompt v-if="prompt.isShow" :msg="prompt.msg" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Button from '@/components/Button'
import WarmPrompt from '@/components/WarmPrompt'

export default {
  name: 'Login',

  components: {
    // Button
    WarmPrompt
  },

  data() {
    return {
      form: { // 表单信息
        email: '',
        username: '',
        password: '',
        vpassword: '',
        code: ''
      },
      codeImg: '', // 验证码
      errorMessags: { // 表单错误提示
        email: '',
        username: '',
        password: '',
        vpassword: '',
        code: ''
      },
      prompt: { // 弹出框属性
        isShow: false,
        msg: ''
      }
    }
  },

  computed: {
    ...mapGetters([
      'getUuid'
    ])
  },

  watch: {
    // 邮箱验证
    'form.email': function(nVal) {
      /^[A-Za-z0-9\u4e00-\u9fa5]+[@]\w+(\.\w+)+$/.test(nVal)
        ? this.errorMessags.email = ''
        : this.errorMessags.email = '请输入正确的邮箱'
    },

    // 用户名验证
    'form.username': function(nVal) {
      nVal
        ? this.errorMessags.username = ''
        : this.errorMessags.username = '请输入用户名'
    },

    // 密码验证
    'form.password': function(nVal) {
      nVal.length < 3
        ? this.errorMessags.password = '密码长度至少为3位'
        : this.errorMessags.password = ''
    },

    // 密码验证
    'form.vpassword': function(nVal) {
      nVal === this.form.password
        ? this.errorMessags.vpassword = ''
        : this.errorMessags.vpassword = '请与密码保持一致'
    },

    // 验证码验证
    'form.code': function(nVal) {
      nVal.length
        ? this.errorMessags.code = ''
        : this.errorMessags.code = '请输入验证码'
    }
  },

  created() {
    this.getCode()
  },

  methods: {
    // 获取验证码
    getCode() {
      this.$http
        .get('/login/getCaptcha', {
          params: {
            sid: this.getUuid
          }
        })
        .then(res => {
          this.codeImg = res.data.data
        })
    },

    // 校验表单信息
    submitForm(form) {
      const localPrompt = {
        email: '请输入邮箱',
        username: '请输入用户名',
        password: '请输入密码',
        vpassword: '请再次输入密码',
        code: '请输入验证码'
      }
      const arr = ['email', 'username', 'password', 'vpassword', 'code']

      // 本地验证是否为空
      for (const item in form) {
        form[item]
          ? ''
          : this.errorMessags[item] = localPrompt[item]
      }

      if (this.form.password !== this.form.vpassword) {
        this.errorMessags.vpassword = '确认密码错误'
      }

      // 如果有错误提示将不会发送请求
      for (const item of arr) {
        if (this.errorMessags[item]) {
          return
        }
      }

      // 发送请求
      this.$http
        .post('/login/register', {
          ...this.form,
          'sid': this.getUuid,
          isPublic: true
        })
        .then(res => {
          if (res.data.code === 404) {
            this.errorMessags.code = res.data.msg
          } else if (res.data.code === 401) {
            this.errorMessags.email = res.data.msg
          } else if (res.data.code === 200) {
            this.prompt = {
              isShow: true,
              msg: res.data.msg
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-content {
  margin: 0 auto;
}

.code-img {
  width: 150px;
  height: 40px;
  cursor: pointer;
}
</style>

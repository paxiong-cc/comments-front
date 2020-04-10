<template>
  <div class="mask">
    <div class="prompt-box">
      <div class="prompt">温馨提示</div>
      <div class="message">{{ msg }}</div>
      <div class="confirm" @click="confirm">确定</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: ''
    }
  },

  methods: {
    confirm() {
      this.$router.replace('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.mask {
  @include flex($row: center, $align: center);
  @include position($ps: fixed, $top: 0, $right: 0, $bottom: 0, $left: 0);
  background: rgba(0, 0, 0, .4);
}

.prompt-box {
  @include flex($dr: column);
  overflow: hidden;
  margin: 0 auto;
  border-radius: 5px;
  width: 300px;
  height: 200px;
  background: #fff;

  .prompt {
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    color: #fff;
    background-color: #009688
  }

  .message {
    @include flex($row: center, $align: center);
    flex: 1;
    box-sizing: border-box;
    padding: 10px;
    text-align: center;
  }

  .confirm {
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    background: #d6d6d6;
    cursor: pointer;
  }
}

</style>

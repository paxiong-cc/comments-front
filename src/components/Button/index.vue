<template>
  <Throttle :time="2000" events="click">
    <span
      class="button"
      :style="{color, background: bg}"
      @click="click"
    >{{ val }}</span>
  </Throttle>
</template>

<script>
export default {
  props: {
    // 内容
    val: {
      type: String,
      default: ''
    },

    // 字体颜色
    color: {
      type: String,
      default: '#fff'
    },

    // 背景颜色
    bg: {
      type: String,
      default: '#02887D'
    }
  },

  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style>
  .button {
    display: inline-block;
    border-radius: 4px;
    margin-left: 5px;
    padding: 0 20px;
    height: 34px;
    font-size: 14px;
    text-align: center;
    line-height: 34px;
    color: black;
    cursor: pointer;
  }
</style>

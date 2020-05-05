<template>
  <div v-if="isShow" ref="pop" class="pop" :class="{'shake': type === 'shake'}">
    {{ msg }}
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },

    isShow: {
      type: Boolean,
      default: false
    },

    msg: {
      type: String,
      default: ''
    }
  },

  watch: {
    isShow(newVal, oldVal) {
      if (newVal && oldVal !== newVal) {
        this.$nextTick(() => {
          const width = this.$refs.pop.getBoundingClientRect().width
          const height = this.$refs.pop.getBoundingClientRect().height
          this.$refs.pop.style.marginLeft = -width / 2 + 'px'
          this.$refs.pop.style.marginTop = -height / 2 + 'px'
          setTimeout(() => {
            this.isShow = false
          }, 2000)
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .pop {
    @include position($ps: fixed, $top: 30%, $left: 50%);
    border-radius: 4px;
    padding: 20px;
    background-color: rgba(0, 0, 0, .2);
  }

  .shake {
    animation: shake 2s
  }

  @keyframes shake {
    0%, 100% {
      transform: translateX(0)
    }
    10%, 30%, 50%, 70%, 90% {
      transform: translate(-10px)
    }
    20%, 40%, 60%, 80%{
      transform: translate(10px)
    }
  }
</style>

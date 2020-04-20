<template>
  <div class="layui-card">
    <div class="layui-card-header">本周热议</div>
    <div class="layui-card-body">
      <ul class="week-hot">
        <li v-for="(item, idx) in list" :key="idx">
          <a>{{ item.title }}</a>
          <span class="pinglu comment-icon">
            <i class="iconfont icon-pinglun"></i>
            {{ item.answer }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  /* 本周热议 */
  .week-hot {

    li {
      @include flex($align: center);
      a {
        &:hover {
          color: $router-h-active-color
        }
      }

      .comment-icon {
        @include flex($align: center);
        margin-left: 10px;
        font-size: 12px;
        color: $comment-info-color;

        .icon-pinglun {
          margin-right: 3px;
          font-size: 16px;
        }
      }
    }
  }
</style>

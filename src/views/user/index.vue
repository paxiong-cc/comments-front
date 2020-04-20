<template>
  <div class="content-width pannel">
    <ul class="layui-nav layui-nav-tree layui-inline" lay-filter="demo" style="margin-right: 10px;">
      <li
        v-for="(item, idx) in pathItem"
        :key="idx"
        class="layui-nav-item"
        :class="{'layui-this': $route.path === item.path}"
      >
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
    </ul>

    <article class="pannel-content">
      <router-view />
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pathItem: [
        { name: '我的主页', path: '/user/' },
        { name: '用户中心', path: '/user/info' },
        { name: '基本设置', path: '/user/set' },
        { name: '我的帖子', path: '/user/' },
        { name: '我的消息', path: '/user/' },
        { name: '已购产品', path: '/user/' },
        { name: '我的组件', path: '/user/' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .pannel {
    display: flex;
    height: 623px;

    &-content {
      flex: 1;
      border-radius: 4px;
      padding: 20px;
      background: #fff;
    }
  }
</style>

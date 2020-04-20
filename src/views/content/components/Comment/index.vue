<template>
  <div class="layui-card">
    <!-- 评论筛选条件 -->
    <div class="layui-card-header">
      <div class="comment-pannel">
        <div class="comment-pannel-title">
          <a
            class="bounced"
            :class="{'active': conditions.status === '' && conditions.tags === ''}"
            @click="query(0)"
          >综合</a>
          <span class="mid"></span>
          <a
            class="bounced"
            :class="{'active': conditions.status === '0'}"
            @click="query(1)"
          >未结</a>
          <span class="mid"></span>
          <a
            class="bounced"
            :class="{'active': conditions.status === '1'}"
            @click="query(2)"
          >已结</a>
          <span class="mid"></span>
          <a
            class="bounced"
            :class="{'active': conditions.status === '' && conditions.tags === '精华'}"
            @click="query(3)"
          >精华</a>
        </div>

        <div class="comment-pannel-title">
          <a
            class="bounced"
            :class="{'active': conditions.sort === 'created'}"
            @click="query(4)"
          >按最新</a>
          <span class="mid"></span>
          <a
            class="bounced"
            :class="{'active':conditions.sort === 'answer'}"
            @click="query(5)"
          >按热议</a>
        </div>
      </div>
    </div>

    <div class="layui-card-body">
      <!-- 评论内容 -->
      <ul>
        <li
          v-for="(item, idx) in lists"
          :key="idx"
          class="comments-info"
        >
          <!-- 头像 -->
          <img class="user-icon" :src="getPath(item.uid.pic)" alt="">
          <div style="flex: 1; margin-left: 10px">
            <!-- 评论标题栏 -->
            <h2 class="title">
              <div>
                <span class="layui-badge-rim">公告</span>
                <span class="sub-title">{{ item.title }}</span>
              </div>
              <div v-if="item.tags.length">
                <span
                  v-for="(tagsItem, tagsIdx) in item.tags"
                  :key="tagsIdx"
                  :class="{'layui-badge': tagsItem.name === '精华'}"
                >{{ tagsItem.name }}</span>
              </div>
            </h2>

            <!-- 评论信息栏 -->
            <div class="info">
              <div>
                <a class="info-person">
                  <span>{{ item.uid.username }}&nbsp;</span>
                  <i v-if="item.uid.isVip !== '0'" class="layui-badge">{{ item.uid.isVip }}</i>
                </a>
                <span class="ml-20">{{ createTime(item.created) }}</span>
                <span class="praise ml-20">
                  <i class="iconfont icon-good">{{ item.reads }}</i>
                </span>
                <span v-if="item.isEnd === 0" class="layui-badge layui-bg-green ml-20">已结</span>
                <span v-else class="layui-badge layui-bg-green ml-20">未结</span>
              </div>
              <span class="pinlun">
                <i class="iconfont icon-pinglun"></i>
                {{ item.answer }}
              </span>
            </div>
          </div>
        </li>
      </ul>
      <div class="more">
        <span class="layui-btn layui-btn-primary" @click="loadMore">更多求解</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import 'moment/locale/zh-cn'
import { getUrl } from '@/config/path'

export default {
  props: {
    lists: {
      type: Array,
      default: () => {
        return []
      }
    }
  },

  data() {
    return {
      conditions: {
        status: '', // 0-未结、1-已结
        sort: 'created', // created-最新、answer-热议
        tags: '', // '精华'且status为''，status为空且tag为空为综合
        page: 0, // 起始数
        limit: 20, // 每页条数
        catalog: '', // 帖子分类，index-全部，ask-提问, advise-建议, discuss-交流, share-分享, logs-动态, notice-公告
        isTop: 0
      }
    }
  },

  computed: {
    // 获取帖子时间差
    createTime() {
      return function(time) {
        return moment(time).from(moment())
      }
    },

    // 获取地址
    getPath() {
      return function(path) {
        return `${getUrl()}${path}`
      }
    }
  },

  methods: {
    /* 按条件查询 */
    query(num) {
      switch (num) {
        case 0:
          this.conditions.status = ''
          this.conditions.tags = ''
          break
        case 1:
          this.conditions.status = '0'
          this.conditions.tags = ''
          break
        case 2:
          this.conditions.status = '1'
          this.conditions.tags = ''
          break
        case 3:
          this.conditions.status = ''
          this.conditions.tags = '精华'
          break
        case 4:
          this.conditions.sort = 'created'
          break
        case 5:
          this.conditions.sort = 'answer'
          break
      }
      this.$emit('query', this.conditions)
    },

    // 加载更多
    loadMore() {

    }
  }
}
</script>

<style lang="scss" scoped>
  /* 评论信息 */
  .comments-info {
    display: flex;
    border-bottom: 1px dashed #ccc;
    padding: 10px 0;

    &:nth-of-type(1) {
      padding-top: 0;
    }

    &:nth-last-of-type(1) {
      border-bottom: none;
      padding-bottom: 0;
    }

    .user-icon {
      display: block;
      width: 45px;
      height: 45px;
    }

    .title {
      @include flex($row: space-between);

      .sub-title {
        margin-left: 10px;
        font-size: 16px;
      }
    }

    .info {
      @include flex($row: space-between);
      color: $comment-info-color;
      font-size: 13px;

      .info-person {
        color: $comment-info-color;
      }

      .praise {
        color: $praise
      }
    }
  }

  /* 筛选 */
  .comment-pannel {
    @include flex($row: space-between);

    .comment-pannel-title {
      @include flex($align: center);

      a {
        display: inline-block;
        padding: 0 10px;
        text-align: center;
        cursor: pointer;
      }

      .bounced {

        &:hover {
          color: $router-h-active-color
        }
      }
    }
  }

  .more {
    @include flex($row: center, $align: center);
    margin-top: 20px;
    height: 80px;
  }

  .active {
    color: $router-active-color
  }
</style>

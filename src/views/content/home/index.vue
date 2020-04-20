<template>
  <div>
    <div class="layui-container">
      <div class="layui-row layui-col-space20">
        <!-- 左侧 -->
        <div class="layui-col-sm8 layui-col-xs12">
          <!-- 置顶 -->
          <div class="layui-card">
            <div class="layui-card-header">置顶</div>
            <div class="layui-card-body">
              <ul>
                <li class="comments-info">
                  <!-- 评论标题栏 -->
                  <h2 class="title">
                    <div>
                      <span class="layui-badge-rim">公告</span>
                      <span class="sub-title">基于layui的极简社区页面模板</span>
                    </div>
                    <span class="layui-badge">精帖</span>
                  </h2>

                  <!-- 评论信息栏 -->
                  <div class="info">
                    <div>
                      <a class="info-person">
                        <span>paxiong&nbsp;</span>
                        <i class="layui-badge">VIP3</i>
                      </a>
                      <span class="ml-20">刚刚</span>
                      <span class="praise ml-20">
                        <i class="iconfont icon-good">123</i>
                      </span>
                      <span class="layui-badge layui-bg-green ml-20">已结</span>
                    </div>
                    <span class="pinlun">
                      <i class="iconfont icon-pinglun"></i>
                      66
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- 筛选评论内容 -->
          <Comment :lists="commentList" @query="getCommentList" />
        </div>

        <!-- 右侧 -->
        <div class="layui-col-sm4 layui-col-xs12">
          <!-- 温馨通道 -->
          <div class="layui-card">
            <div class="layui-card-header">温馨通道</div>
            <div class="layui-card-body">
              <ul class="warm-channel">
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
              </ul>
            </div>
          </div>

          <!-- 签到 -->
          <div class="layui-card">
            <div class="layui-card-header">
              <div class="sign-pannel">
                <div class="pannel-title">
                  <a>签到</a>
                  <span class="mid"></span>
                  <a class="bounced">说明</a>
                  <span class="mid"></span>
                  <a class="bounced">活跃榜</a>
                </div>
                <span class="sign-state">
                  已经连续签到<span class="sign-day">16</span>天
                </span>
              </div>
            </div>
            <div class="layui-card-body center" style="padding: 20px 0">
              <span class="layui-btn layui-btn-danger">今日签到</span>
            </div>
          </div>

          <!-- 本周热议 -->
          <WeekHot :list="hotList" />

          <div class="layui-card">
            <div class="layui-card-header">广告区域</div>
            <div class="layui-card-body">
              卡片式面板面板通常用于非白色背景色的主体内<br>
              从而映衬出边框投影
            </div>
          </div>

          <div class="layui-card">
            <div class="layui-card-header">友情链接</div>
            <div class="layui-card-body">
              卡片式面板面板通常用于非白色背景色的主体内<br>
              从而映衬出边框投影
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from '../components/Comment'
import WeekHot from '../components/WeekHot'

export default {
  components: {
    Comment,
    WeekHot
  },

  data() {
    return {
      commentList: [], // 评论列表
      hotList: [] // 热议列表
    }
  },

  created() {
    // 加载评论列表
    this.getCommentList({})
    // 热议
    this.getWeekHot()
  },

  methods: {
    // 获取评论数据列表
    getCommentList(conditions) {
      this.$http
        .get('/public/list', {
          params: conditions
        })
        .then(res => {
          this.commentList = res.data.data
        })
    },
    // 获取本周热议
    getWeekHot() {
      this.$http
        .get('/public/topWeek')
        .then(res => {
          this.hotList = res.data.data
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .layui-container {
    padding: 0;
    width: 100%;
  }

  /* 评论信息 */
  .comments-info {
    border-bottom: 1px dashed #ccc;
    padding: 10px 0;

    &:nth-of-type(1) {
      padding-top: 0;
    }

    &:nth-last-of-type(1) {
      border-bottom: none;
      padding-bottom: 0;
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

  /* 温馨通道 */
  .warm-channel {
    display: flex;
    flex-wrap: wrap;
    border: 2px solid #F3F2F4;

    li {
      box-sizing: border-box;
      border-right: 2px solid #F3F2F4;
      border-bottom: 2px solid #F3F2F4;
      width: 50%;
      height: 40px;
      text-align: center;
      line-height: 40px;
      cursor: pointer;

      &:nth-of-type(2n) {
        border-right: 0;
      }

      &:nth-last-of-type(1) {
        border-bottom: 0;
      }

      &:nth-last-of-type(2) {
        border-bottom: 0;
      }

      &:hover {
        color: $router-h-active-color;
      }
    }
  }

  /* 签到 */
  .sign-pannel {
    @include flex($row: space-between);

    .pannel-title {
      @include flex($align: center);

      a {
        display: inline-block;
        padding: 0 10px;
        text-align: center;
        cursor: pointer;
      }

      .bounced {
        color: #01AAED;

        &:hover {
          color: $router-h-active-color
        }
      }
    }

    .sign-state {
      color: $comment-info-color;

      .sign-day {
        margin: 0 5px;
        font-weight: 600;
        color: $praise;
      }
    }
  }
</style>

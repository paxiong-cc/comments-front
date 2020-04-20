<template>
  <div>
    <div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
      <ul class="layui-tab-title">
        <li class="layui-this">我的资料</li>
        <li>头像</li>
        <li>密码</li>
        <li>账号绑定</li>
      </ul>
      <div class="layui-tab-content" style="height: 100px;">
        <div class="layui-tab-item layui-show">
          <form class="layui-form layui-form-pane" action="">
            <div class="layui-form-item">
              <label class="layui-form-label">短输入框</label>
              <div class="layui-input-inline">
                <input type="text" name="username" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input">
              </div>
            </div>

            <div class="layui-form-item">
              <label class="layui-form-label">自定义验证</label>
              <div class="layui-input-inline">
                <input type="password" name="password" lay-verify="pass" placeholder="请输入密码" autocomplete="off" class="layui-input">
              </div>
              <div class="">
                <input type="radio" name="sex" value="男" title="男" checked="">
                <input type="radio" name="sex" value="女" title="女">
              </div>
            </div>

            <div class="layui-form-item layui-form-text">
              <label class="layui-form-label">文本域</label>
              <div class="layui-input-block">
                <textarea placeholder="请输入内容" class="layui-textarea"></textarea>
              </div>
            </div>
            <div class="layui-form-item">
              <button class="layui-btn" lay-submit="" lay-filter="demo2">跳转式提交</button>
            </div>
          </form>
        </div>
        <div class="layui-tab-item">头像</div>
        <div class="layui-tab-item">密码</div>
        <div class="layui-tab-item">账号绑定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

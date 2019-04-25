<template>
  <div id="login">
    <header-top :title="title"></header-top>
    <dl class="list">
      <dd class="nav">
        <ul class="taba taban samfix noslide">
          <li class="active">
            <a class="react">账号登录</a>
          </li>
        </ul>
      </dd>
    </dl>
    <div class="from-login">
        <input type="text" class="input-words" placeholder="账户名/手机号/email">
        <input type="password" class="input-words" placeholder="请输入密码">
        <button class="btn login-btn">登录</button>
    </div>

  </div>
</template>
<script>
import HeaderTop from "@/components/common/header";
export default {
  data() {
    return {
      title: "用户中心"
    };
  },
  components: {
    HeaderTop
  }
};
</script>
<style lang="scss" scoped>
@import '~@/style/css/common.scss';
#login {
  .nav {
    padding-top: 50px;
  }
  .btn{
      width: 90%;
      margin-left: 5%;
      height: 40px;
      background: #df2d2d;
      margin-top: 16px;
      color: #fff;
      font-size: 16px;
      border-radius: 4px;
  }
  .taba {
    display: -webkit-box;
    display: -ms-flexbox;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    position: relative;
    border-bottom: 0.08rem solid #d6d6d6;
    li {
      display: block;
      text-align: center;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      position: relative;
      a.react {
        font-size: 14px;
        display: block;
        color: inherit;
        height: 100%;
        padding-top: 0.28rem;
        padding-bottom: 0.2rem;
      }
    }
    li.active {
      color: #df2d2d;
      &::after {
        content: " ";
        position: absolute;
        width: 120px;
        height: 3px;
        left: 93px;
        bottom: -3px;
        background: #df2d2d;
      }
    }
  }
  .from-login{
      width: 100%;
      height: 150px;
      .input-words{
        width: 100%;
        height: 40px;
        line-height: 40px;
        border: none;
        border-bottom: 1px solid $borderColorLight;
        text-indent: 16px;
      }
  }
}
</style>

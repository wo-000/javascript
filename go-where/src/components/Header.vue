<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">输入城市景点</div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .header
    font-size:0.24rem;
    line-height: .86rem;
    display: flex;
    background : #00bcd4;
    color: #fff;
    .header-left
      width : .64rem;
      float : left;
    .header-input
      flex:1;
      height: 0.64rem;
      margin-top .12rem;
      border-radius: .1rem;
      background : #fff;
      color: #ccc;
      line-height: .64rem;
      padding-left: .12rem;
    .header-right
      width: 1.24rem;
      float : right;
      text-align center;
</style>

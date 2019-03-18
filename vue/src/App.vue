<template>
  <div id="app">
    <mt-header title="顶部信息"></mt-header>
    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="Home">
        <img slot="icon" src="@/imgs/index.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="Member">
        <img slot="icon" src="@/imgs/vip.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="Shopcart">
        <img slot="icon" src="@/imgs/shopcart.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="Search">
        <img slot="icon" src="@/imgs/find.png">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      selected:''
    }
  },
  watch:{
    selected:function(newData,oldData){
      this.$router.push({
        name:newData
      })
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0
}
</style>

<template>
  <div class="header">
    <span v-if="isShow" @click="backHandle">＜</span>
    <p>{{title}}</p>
  </div>
</template>
<script>
export default {
  props:{
   title: {
      type:String,
      default:'电影'
    },
    isShow:{
      type:Boolean,
      default:false
    }
  },
  methods: {
    backHandle(){
      this.$router.back();
    }
  },
      
}
</script>
<style lang="scss" scoped>
.header{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  color: #ffffff;
  height: 50px;
  width: 100%;
  background: #f03d37;
  text-align: center;
  font-size: 18px;
  line-height: 50px;
  z-index: 3;
  span{
    position: absolute;
    top: 0px;
    left: 10px;
    font-size: 26px;
  }
}
</style>

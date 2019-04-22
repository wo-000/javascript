<template>
  <div class="header">
    <p>{{title}}</p>
  </div>
</template>
<script>
export default {
  props:{
   title: {
      type:String,
      default:'电影'
    } 
  }
      
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
}
</style>

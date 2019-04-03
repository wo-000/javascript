<template>
  <div id="app">

    <keep-alive exclude="Detail">  
      <!-- keep-alive  缓存问题  "exclude"特定某个组件不进行缓存用以多次调用数据  -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>

</style>

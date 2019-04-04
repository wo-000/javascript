<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view>

    </router-view>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
export default {
  name: 'App',
  components:{
    MHeader,
    Tab
  },
  created() {  
    var url = '/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1554349143478&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1'
    this.$axios.get(url).then(res=>{
      console.log(res)
    }).catch(error=>{
      console.log(error)
    })
  },  
  methods: {  
  
  }

}
</script>

<style lang="stylus" scoped>

</style>

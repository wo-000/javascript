<template>
  <div>
      <Header></Header>
      <HomeSwiper :swiperList="swiperList"></HomeSwiper>
      <Icons :iconList="iconList"></Icons>
      <Recommend :recommendList="recommendList"></Recommend>
      <Weekend :weekendList="weekendList"></Weekend>
  </div>
</template>

<script>
import Header from '@/components/Header'
import HomeSwiper from '@/components/Swiper'
import Icons from '@/components/Icons'
import Recommend from '@/components/Recommend'
import Weekend from '@/components/Weekend'


import Axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      iconList:[],
      recommendList:[],
      swiperList:[],
      weekendList:[]
    }
  },
  components:{
      Header,
      HomeSwiper,
      Icons,
      Recommend,
      Weekend
  },
  methods: {
    getHomeInfo(){
      Axios.get('/api/index.json')
      .then(this.getInfoSuc)
    },
    getInfoSuc(res){
      if(res.data.ret&&res.data){
        this.iconList=res.data.data.iconList
        this.recommendList=res.data.data.recommendList
        this.swiperList=res.data.data.swiperList
        this.weekendList=res.data.data.weekendList
      }
      console.log(res.data)
    }
  },
  mounted() {
    this.getHomeInfo()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

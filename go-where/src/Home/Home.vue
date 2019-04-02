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
import {mapState} from 'vuex'

import Axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      lastCity:'',
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
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo(){
      Axios.get('/api/index.json?city='+this.city)
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
    this.lastCity=this.city;
    this.getHomeInfo()
  },
  activated() { //使用keep-alive 的生命周期函数
    if(this.lastCity!==this.city){
      this.lastCity=this.city;
      this.getHomeInfo();
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

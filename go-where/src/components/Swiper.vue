<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props:{
      swiperList:Array
  },
  data () {
    return {
      dataImgs:[
          {
              id:'001',
              src:'//img12.360buyimg.com/jrpmobile/jfs/t1/19037/8/10380/37518/5c862ba2Ec8e629f7/6c4f8c721cf210d8.jpg'
          },
          {
              id:'002',
              src:'//img12.360buyimg.com/jrpmobile/jfs/t1/28576/40/10399/139307/5c862bc6E022a873e/c50fcefa58db30ce.jpg'
          }
      ],
      swiperOption:{
        pagination :'.swiper-pagination',
        loop :true
      }
    }
  },
  computed: {
      showSwiper(){ //解决 swiper组件默认会显示最后一张图片
          return this.swiperList.length
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active   //样式穿透，能跳过scoped限制，进行设置样式
    background #fff
.wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 31.33%  //图片自适应
    background #eee
    .swiper-img
        width 100%
</style>

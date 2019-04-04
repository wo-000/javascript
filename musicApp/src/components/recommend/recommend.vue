<template>
  <div class="recommend" ref="recommend">
    <div v-if="recommendList.length" class="slider-wrapper" ref="sliderWrapper">
      <Slider>
        <div v-for="item in recommendList" :key="item.id">
          <a :href="item.linkUrl">
            <img :src="item.picUrl" alt="">
          </a>
        </div>
      </Slider>
    </div>
    <div class="recommend-list">
      <h1 class="list-title">
        热门歌单推荐
      </h1>
      <ul></ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {commonParams,Error_YES} from '@/api/config'
import Slider from '@/base/slider/slider'
export default{
  data(){
    return {
      recommendList:[]
    }
  },
  components:{
    Slider
  },
  created() {  
    this.getRecommend();
  }, 
  methods: {
    getRecommend(){
      var url = '/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
      this.$axios.get(url,{params:commonParams}).then(res=>{
        // console.log(res.data.code,Error_YES)
        if(res.data.code===Error_YES){
          this.recommendList=res.data.data.slider
          console.log(res)
        }
      }).catch(error=>{
        console.log(error)
      })
    }
  },
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
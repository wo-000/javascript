<template>
  <!-- <transition name="slide" mode="out-in"> -->
    <!-- <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list> -->
    <div class="singer-detail">

      <div class="music-list">
        <div class="back" @click="back">
          <i class="icon-back"></i>
        </div>
        <h1 class="title" v-html="title"></h1>
        <div class="bg-image"  >
          <!-- ref="bgImage" -->
          <img class="imgBg" :src="bgImage" ref="bgImage" alt="">
          <div class="play-wrapper">
            <div ref="playBtn" class="play">
              <i class="icon-play"></i>
              <span class="text">随机播放全部</span>
            </div>
          </div>
          <div class="filter" ref="filter"></div>
        </div>
        <div class="bg-layer" ref="layer"></div>
        <scroll :data="songs" class="list" ref="list">
          <div class="song-list-wrapper">
            <song-list :songs="songs" ></song-list>  
            <!-- :rank="rank" @select="selectItem" -->
          </div>
          <!-- <div v-show="!songs.length" class="loading-container">
            <loading></loading>
          </div> -->
        </scroll>
      </div>

    </div>
  <!-- </transition> -->
</template>

<script>
import {mapGetters} from 'vuex'
import SongList from '@/base/song-list/song-list'
import Scroll from '@/base/scroll/scroll'
  export default {
    computed: {
      ...mapGetters([
        'singer'
      ])
    },
    data() {
      return {
        songs: [],
        title:'',
        bgImage:''
      }
    },
    created() {
      console.log(this.singer);
      this.title=this.singer.singer_name;
      this.bgImage=this.singer.singer_pic;
      this.getSingerInfo()
    },
    methods: {
      getSingerInfo(){
        if(!this.singer.singer_mid){
          this.$router.push({
            path:'/singer'
          })
        }
        var url='/api/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
        this.$axios.get(url,{params:{
          loginUin: 0,
          hostUin: 0,
          format: 'json',
          inCharset: 'utf8',
          outCharset: 'utf-8',
          notice: 0,
          platform: 'yqq',
          needNewCode: 0,
          ct: 24,
          singermid:this.singer.singer_mid,
          order: 'listen',
          begin: 0,
          num: 10
        }})
        .then(res=>{
          this.songs=res.data.data.list
          console.log(res.data)
        })
        .catch(error=>{console.log(error)})
      },
      back(){
        this.$router.back();
      }
    },
    mounted() {
      this.$refs.list.$el.style.top=`${this.$refs.bgImage.clientHeight}`+"px"
    },
    components: {
      Scroll,
      SongList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .singer-detail
    position: fixed
    z-index:100
    top:0
    left:0
    right:0
    bottom:0;
    background:#333
  

  .music-list
    position: fixed
    z-index: 100
    top: 0
    left: 0
    bottom: 0
    right: 0
    background: $color-background
    .imgBg
      position: absolute
      left: 0px
      top:0px
      width:100%
      height:100%
      z-index:30
    .back
      position absolute
      top: 0
      left: 6px
      z-index: 50
      .icon-back
        display: block
        padding: 10px
        font-size: $font-size-large-x
        color: $color-theme
    .title
      position: absolute
      top: 0
      left: 10%
      z-index: 40
      width: 80%
      no-wrap()
      text-align: center
      line-height: 40px
      font-size: $font-size-large
      color: $color-text
    .bg-image
      position: relative
      width: 100%
      height: 0
      padding-top: 70%
      transform-origin: top
      background-size: cover
      .play-wrapper
        position: absolute
        bottom: 20px
        z-index: 50
        width: 100%
        .play
          box-sizing: border-box
          width: 135px
          padding: 7px 0
          margin: 0 auto
          text-align: center
          border: 1px solid $color-theme
          color: $color-theme
          border-radius: 100px
          font-size: 0
          .icon-play
            display: inline-block
            vertical-align: middle
            margin-right: 6px
            font-size: $font-size-medium-x
          .text
            display: inline-block
            vertical-align: middle
            font-size: $font-size-small
      .filter
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: rgba(7, 17, 27, 0.4)
    .bg-layer
      position: relative
      height: 100%
      background: $color-background
    .list
      position: fixed
      top: 0
      bottom: 0
      width: 100%
      background: $color-background
      .song-list-wrapper
        padding: 20px 30px
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)


</style>
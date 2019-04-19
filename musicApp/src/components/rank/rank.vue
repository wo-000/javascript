<template>
  <div class="rank" ref="rank">
    <scroll :data="topList" class="toplist" ref="toplist">
      <ul>
        <li @click="selectItem(item)" class="item" v-for="item in topList" :key="item.id">
          <div class="icon">
            <img width="100" height="100" v-lazy="item.picUrl"/>
          </div>
          <ul class="songlist">
            <li class="song" v-for="(song,index) in item.songList" :key="index">
              <span>{{index + 1}}</span>
              <span>{{song.songname}}-{{song.singername}}</span>
            </li>
          </ul>
        </li>
      </ul>
      <div class="loading-container" v-show="!topList.length">
        <loading></loading>
      </div>
    </scroll>
    <transition name="slide">
       <router-view></router-view>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import Loading from '@/base/loading/loading'
import Scroll from '@/base/scroll/scroll'
export default{
  data(){
    return {
      topList:[]
    }
  },
  components:{
    Scroll,
    Loading
  },
  methods: {
    getRankInfo(){
      var url='/api/v8/fcg-bin/fcg_myqq_toplist.fcg'
      this.$axios.get(url,{
        params:{
          // 'g_tk': 5381,
          // 'uin': 0,
          'format': 'json',
          // 'inCharset': 'utf-8',
          // 'outCharset': 'utf-8',
          // 'notice': 0,
          // 'platform': 'h5',
          // 'needNewCode': 1
        }
      })
      .then((res)=>{
        console.log( res)
        this.topList=res.data.data.topList
      })
      .catch((error)=>{
        console.log(error)
      })
    },
    selectItem(item){
      this.$router.push({
        path:`/rank/${item.id}`
      })
    }
  },
  mounted() {
    this.getRankInfo()
  },
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .slide-enter-active, .slide-leave-active
    transition: all 0.3s ease
  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
  .rank
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .toplist
      height: 100%
      overflow: hidden
      .item
        display: flex
        margin: 0 20px
        padding-top: 20px
        height: 100px
        &:last-child
          padding-bottom: 20px
        .icon
          flex: 0 0 100px
          width: 100px
          height: 100px
        .songlist
          flex: 1
          display: flex
          flex-direction: column
          justify-content: center
          padding: 0 20px
          height: 100px
          overflow: hidden
          background: $color-highlight-background
          color: $color-text-d
          font-size: $font-size-small
          .song
            no-wrap()
            line-height: 26px
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
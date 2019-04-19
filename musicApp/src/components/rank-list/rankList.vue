<template>  
    <div class="rankSongs">
        <div class="top-bg" ref="topBg">
            <div class="back" @click="back">
                <i class="icon-back"></i>
            </div>
            <h1 class="title" v-html="topInfo.ListName"></h1>
        </div>
        <scroll class="list" ref="list">
            <div class="song-list-wrapper">
                <div class="song-list">
                    <ul>
                    <li class="item" v-for="(song, index) in songs" :key="index">
                        <div class="rank" >
                            <span class="text" v-text="getRankText(index)"></span>
                        </div>
                        <div class="content">
                            <h2 class="name">{{song.data.songname}}</h2>
                            <p class="desc">{{song.data.singer[0].name}}</p>
                        </div>
                    </li>
                    </ul>
                </div>
                <div v-show="!songs.length" class="loading-container">
                    <loading></loading>
                </div>
            </div>
        </scroll>
    </div>
        
</template>

<script type="text/ecmascript-6">
import {mapGetters} from 'vuex'
import Scroll from '@/base/scroll/scroll'
import Loading from '@/base/loading/loading'

  export default {
    computed: {
        
    },
    data() {
      return {
        songs: [],
        topInfo:{}
      }
    },
    components:{
        Scroll,
        Loading
    },
    created() {
      this.getMusicList()
      console.log(Scroll)
    },
    methods: {
        getMusicList() {
            if (!this.$route.params.id) {
            this.$router.push('/rank')
            return
            }
            var url='/api/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
            this.$axios.get(url,{
                params:{
                // 'g_tk': 5381,
                // 'uin': 0,
                'format': 'json',
                'topid':this.$route.params.id
                // 'inCharset': 'utf-8',
                // 'outCharset': 'utf-8',
                // 'notice': 0,
                // 'platform': 'h5',
                // 'needNewCode': 1
                }
            })
            .then((res)=>{
                this.songs=res.data.songlist
                this.topInfo=res.data.topinfo
            })
            .catch((error)=>{
                console.log(error)
            })

        },
        back(){
            this.$router.back();
        },
        getRankText(index){
            return index+1;
        }
    },
    mounted() {
        
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .rankSongs
    position: fixed
    top: 0
    left: 0
    right:0 
    bottom: 0
    z-index: 100
    background:#333
    .top-bg
        position absolute
        top 0
        z-index 111;
        background #222
        width 100%
        height 40px
    .list
        height: 100%;
       overflow: hidden;
    .song-list-wrapper
        padding: 50px 30px 20px 30px
        position: relative
    .item
      display: flex
      align-items: center
      box-sizing: border-box
      height: 64px
      font-size: $font-size-medium
      .rank
        flex: 0 0 25px
        width: 25px
        margin-right: 30px
        text-align: center
    .name
        no-wrap()
        color: $color-text
    .desc
        no-wrap()
        margin-top: 4px
        color: $color-text-d
    .icon
        display: inline-block
        width: 25px
        height: 24px
        background-size: 25px 24px
    .text
        color: $color-theme
        font-size: $font-size-large
    .content
        flex: 1
        line-height: 20px
        overflow: hidden
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
</style>
<template>
  <div class="recommend" ref="recommend">
    <scroll class="recommend-content" ref="scroll" :data="songList">
      <div>
        <div v-if="recommendList.length" class="slider-wrapper" ref="sliderWrapper">
          <Slider>
            <div v-for="item in recommendList" :key="item.id">
              <a :href="item.linkUrl">
                <img @onload="loadImage" :src="item.picUrl" alt="">
              </a>
            </div>
          </Slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">
            热门歌单推荐
          </h1>
          <ul>
            <li class="item" v-for="item in songList" :key="item.content_id">
              <div class="icon">
                <img width="60" height="60" v-lazy="item.cover" alt="">
              </div>
              <div class="text">
                <h2 class="name">{{item.title}}</h2>
                <p class="desc">{{item.username}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
       <div class="loading-container" v-show="!songList.length">
        <Loading></Loading>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import {commonParams,Error_YES} from '@/api/config'
import Slider from '@/base/slider/slider'
import Scroll from '@/base/scroll/scroll'
import Loading from '@/base/loading/loading'
export default{
  data(){
    return {
      recommendList:[],
      songList:[]
    }
  },
  components:{
    Slider,
    Scroll,
    Loading
  },
  created() {  
      this.getRecommend();
    // setTimeout(()=>{
    //   this.getSongs();
    //    this.getRecommend();
    // },2000)
    
    this.getSongs();
  }, 
  methods: {
    getRecommend(){
      var url = '/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
      this.$axios.get(url,{params:commonParams}).then(res=>{
        // console.log(res.data.code,Error_YES)
        if(res.data.code===Error_YES){
          this.recommendList=res.data.data.slider
          // console.log(res)
        }
      }).catch(error=>{
        console.log(error)
      })
    },
    getSongs(){
      // var url = '/songsApi/cgi-bin/musicu.fcg?-=recom07073311525375336&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data=%7B"comm"%3A%7B"ct"%3A24%7D%2C"category"%3A%7B"method"%3A"get_hot_category"%2C"param"%3A%7B"qq"%3A""%7D%2C"module"%3A"music.web_category_svr"%7D%2C"recomPlaylist"%3A%7B"method"%3A"get_hot_recommend"%2C"param"%3A%7B"async"%3A1%2C"cmd"%3A2%7D%2C"module"%3A"playlist.HotRecommendServer"%7D%2C"playlist"%3A%7B"method"%3A"get_playlist_by_category"%2C"param"%3A%7B"id"%3A8%2C"curPage"%3A1%2C"size"%3A40%2C"order"%3A5%2C"titleid"%3A8%7D%2C"module"%3A"playlist.PlayListPlazaServer"%7D%2C"new_song"%3A%7B"module"%3A"newsong.NewSongServer"%2C"method"%3A"get_new_song_info"%2C"param"%3A%7B"type"%3A5%7D%7D%2C"new_album"%3A%7B"module"%3A"newalbum.NewAlbumServer"%2C"method"%3A"get_new_album_info"%2C"param"%3A%7B"area"%3A1%2C"sin"%3A0%2C"num"%3A10%7D%7D%2C"new_album_tag"%3A%7B"module"%3A"newalbum.NewAlbumServer"%2C"method"%3A"get_new_album_area"%2C"param"%3A%7B%7D%7D%2C"toplist"%3A%7B"module"%3A"musicToplist.ToplistInfoServer"%2C"method"%3A"GetAll"%2C"param"%3A%7B%7D%7D%2C"focus"%3A%7B"module"%3A"QQMusic.MusichallServer"%2C"method"%3A"GetFocus"%2C"param"%3A%7B%7D%7D%7D'
      var url = '/songsApi/cgi-bin/musicu.fcg';
      this.$axios.get(url,{params:{
        data:{
          "comm":{"ct":24},
          "category":{"method":"get_hot_category","param":{"qq":""},"module":"music.web_category_svr"},
          "recomPlaylist":{"method":"get_hot_recommend","param":{"async":1,"cmd":2},"module":"playlist.HotRecommendServer"},
          "playlist":{"method":"get_playlist_by_category","param":{"id":8,"curPage":1,"size":40,"order":5,"titleid":8},"module":"playlist.PlayListPlazaServer"},
          "new_song":{"module":"newsong.NewSongServer","method":"get_new_song_info","param":{"type":5}},
          "new_album":{"module":"newalbum.NewAlbumServer","method":"get_new_album_info","param":{"area":1,"sin":0,"num":10}},
          "new_album_tag":{"module":"newalbum.NewAlbumServer","method":"get_new_album_area","param":{}},
          "toplist":{"module":"musicToplist.ToplistInfoServer","method":"GetAll","param":{}},
          "focus":{"module":"QQMusic.MusichallServer","method":"GetFocus","param":{}}
        }
        
      }}).then(res=>{
        console.log(res.data,Error_YES)
        // if(res.data.code===Error_YES){
          this.songList=res.data.recomPlaylist.data.v_hot
          // console.log(res.data.recomPlaylist.data.v_hot)
        // }
      }).catch(error=>{
        console.log(error)
      })
    },
    loadImage(){  //异步加载dom未加载完毕，better-scroll进行滑动会无法滑动到底部bug
      if(!this.checkLoaded){
        this.$refs.scroll.refresh();
        this.checkLoaded=true
      }
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
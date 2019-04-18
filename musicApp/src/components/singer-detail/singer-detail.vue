<template>
  <!-- <transition name="slide" mode="out-in"> -->
    <!-- <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list> -->
    <div class="singer-detail">

      <div class="music-list">
        <div class="top-bg" ref="topBg">
          <div class="back" @click="back">
            <i class="icon-back"></i>
          </div>
          <h1 class="title" v-html="title"></h1>
        </div>
        <div class="bg-image" ref="bgImageDiv" >
          <!-- ref="bgImage" -->
          <img class="imgBg" :src="bgImage" ref="bgImage" alt="">
          <div class="play-wrapper" ref="play">
            <div ref="playBtn" class="play">
              <i class="icon-play"></i>
              <span class="text">随机播放全部</span>
            </div>
          </div>
          <div class="filter" ref="filter"></div>
        </div>
        <div class="bg-layer" ref="layer"></div>
        <scroll @scroll="scroll" :probe-type="probeType" :listen-scroll="listenScroll" :data="songs" class="list" ref="list">
          <div class="song-list-wrapper">
            <song-list @select="selectItem" :songs="songs" ></song-list>  
            <!-- :rank="rank" @select="selectItem" -->
          </div>
          <div v-show="!songs.length" class="loading-container">
            <loading></loading>
          </div>
        </scroll>
      </div>

    </div>
  <!-- </transition> -->
</template>

<script>
import {mapGetters} from 'vuex'
import SongList from '@/base/song-list/song-list'
import Loading from '@/base/loading/loading'
import Scroll from '@/base/scroll/scroll'
import {mapActions} from 'vuex'
import {playlistMixin} from 'common/js/mixin'
  export default {
    mixins:[playlistMixin],
    computed: {
      ...mapGetters([
        'singer'
      ])
    },
    data() {
      return {
        songs: [],
        title:'',
        bgImage:'',
        scrollY:0,
        imageHeight:0,
        musicUrl:[  //添加音乐
          {
            src:'http://42.236.125.151/amobile.music.tc.qq.com/C4000017Blqp0Uerzb.m4a?guid=8039992632&vkey=AB24F668136CBB07D2F2D5019E241DDEDF56131C3ABB27510E4F0FF4C856315D828250F7BE57B77B5AD331C310D07BDCC6EC1E27C98F74D5&uin=0&fromtag=66',
            name:'陈雪凝',
            songname:'愚昧',
            imgUrl:'https://y.gtimg.cn/music/photo_new/T002R800x800M000003sJU2v415UqR.jpg?max_age=2592000',
            duration:'04:13'
          },
          {
            src: 'http://42.236.125.151/amobile.music.tc.qq.com/C4000010ZFzB469WVa.m4a?guid=8039992632&vkey=C20DF104B8703E9A5D46DF61EDF5A758ACA55C115FEF54789C6B198E2A42080A32F885454EE7D6A095F4BF01915C5452BF928300EA5AACB0&uin=0&fromtag=66',
            name:'陈雪凝',
            songname:'你好前任',
            imgUrl:'https://y.gtimg.cn/music/photo_new/T002R300x300M000001YUAm31MtQgg.jpg?max_age=2592000',
             duration:'04:00'
          },
          {
            src:'http://42.236.95.144/amobile.music.tc.qq.com/C400001Qu4I30eVFYb.m4a?guid=8039992632&vkey=15762277DEB3A454D23E727FF6FDD9FDE107537246B5143E4669AF74BA9534BBD58816CBC0FF0F68DD982AF2AE7DF886EAAEA5DCC54DCA47&uin=0&fromtag=66',
            name:'薛之谦',
            songname:'演员',
            imgUrl:'https://y.gtimg.cn/music/photo_new/T002R800x800M000003y8dsH2wBHlo.jpg?max_age=2592000',
             duration:'04:21'
          },
          {
            src:'http://isure.stream.qqmusic.qq.com/C400000Qepff3UyUWO.m4a?guid=8039992632&vkey=9B2B061D122E1270CA8DE8A906AE4BE3DCCA29CB728F4BDA930D9952F539DD54384872C360FC4C7C77996EA7560F6B3A02D8C6110A5C115E&uin=0&fromtag=66',
             name:'薛之谦',
            songname:'天分',
            imgUrl:'https://y.gtimg.cn/music/photo_new/T002R800x800M0000015rUVB2OUdGA.jpg?max_age=2592000',
             duration:'04:08'
          },
          {
            src: 'http://isure.stream.qqmusic.qq.com/C400001TXSYu1Gwuwv.m4a?guid=8039992632&vkey=4CA71776A178D8D825A0BE2E13406A4D2DA67D0C7781EABA30DD3B64BC82E536B3F7993FC370BAFC5B6E50D7833DCC2DF5B63787BEF8F033&uin=0&fromtag=66',
             name:'薛之谦',
            songname:'刚刚好',
            imgUrl:'https://y.gtimg.cn/music/photo_new/T002R800x800M000000dcZ9I1nzO62.jpg?max_age=2592000',
             duration:'04:10'
          },
          {
            src: 'http://isure.stream.qqmusic.qq.com/C400001CG3wA3QkuJS.m4a?guid=8039992632&vkey=40744557110AA81372A3DA340C33094C348AF5CE9FB77EED7527AEE6A0C987CCBFDE05B379B6AAA53458D74A0C40AC9F12B1C0808600BDD3&uin=0&fromtag=66',
             name:'薛之谦',
            songname:'绅士',
            imgUrl:'https://y.gtimg.cn/music/photo_new/T002R800x800M000003y8dsH2wBHlo.jpg?max_age=2592000',
             duration:'04:50'
          },
          {
            src: 'http://isure.stream.qqmusic.qq.com/C400004VBMk71TdUuR.m4a?guid=8039992632&vkey=E832CFB1F8F2B5B6D95F6BC1F47A3ED84C0153533A0CDCC10212261FEB3C3BC3EB752E3A42178A83EDA2DDE2292C97BF79E051368EB08860&uin=0&fromtag=66',
             name:'薛之谦',
            songname:'我们好像在哪见过',
            imgUrl:'https://y.gtimg.cn/music/photo_new/T002R800x800M000000dcZ9I1nzO62.jpg?max_age=2592000',
             duration:'04:39'
          },
          {
            src: 'http://isure.stream.qqmusic.qq.com/C400000QwTVo0YHdcP.m4a?guid=8039992632&vkey=79F41FF0577CEC0D4FEA0688A48FFF24549397513CD1C7105C184D623096EDBE1C1E1B9E5E50409CD45BD1646681911168670B3F0089CE04&uin=0&fromtag=66',
            name:'薛之谦',
            songname:'丑八怪',
            imgUrl:'https://y.gtimg.cn/music/photo_new/T002R800x800M000000QgFcm0v8WaF.jpg?max_age=2592000',
             duration:'04:08'
          },
           {
            src:  'http://isure.stream.qqmusic.qq.com/C400003odRSi1odVpq.m4a?guid=8039992632&vkey=7EA40A670EC4665B28EA9FE0796C5EB485C304C8210AA7D471D049999E16CBECC54E7F758F87E31F69EE11C665242192B2660BE5F8D23DC0&uin=0&fromtag=66',
            name:'薛之谦',
            songname:'你还要我怎样',
            imgUrl:'https://y.gtimg.cn/music/photo_new/T002R800x800M000000QgFcm0v8WaF.jpg?max_age=2592000',
             duration:'05:10'
          },
          {
            src: 'http://isure.stream.qqmusic.qq.com/C400003v4UL61IYlTY.m4a?guid=8039992632&vkey=907AD5F222971E5D1EEE0BC658583AA1E49818951E70F6183914F054FF6E26FB64CEF4000402365BDA01AC900AD7813D645B475B073BDA61&uin=0&fromtag=66',
            name:'薛之谦',
            songname:'暧昧',
            imgUrl:'https://y.gtimg.cn/music/photo_new/T002R800x800M000001L7UIu3GXVtT.jpg?max_age=2592000',
             duration:'05:12'
          }
        
        ]
      }
    },
    created() {
      this.title=this.singer.singer_name;
      this.bgImage=this.singer.singer_pic;
      this.getSingerInfo();
      this.probeType=3;
      this.listenScroll=true;
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
          for(let i=0;i<this.songs.length;i++){
            this.songs[i].src=this.musicUrl[i].src
            this.songs[i].singername=this.musicUrl[i].name
            this.songs[i].singersongname=this.musicUrl[i].songname
            this.songs[i].imgUrl=this.musicUrl[i].imgUrl
            this.songs[i].duration=this.musicUrl[i].duration
          }
          console.log(res.data)
        })
        .catch(error=>{console.log(error)})
      },
      handlePlaylist(playlist){
        const bottom = playlist.length>0?'60px':''
        this.$refs.list.$el.style.bottom=bottom;
        this.$refs.list.refresh();
      },
      back(){
        this.$router.back();
      },
      scroll(pos){
        this.scrollY=pos.y
      },
      selectItem(item,index){
        this.selectPlay({
          list:this.songs,
          index
        })
        console.log(this.songs,index)
      },
      ...mapActions([
        'selectPlay'
      ])
    },
    watch:{
     scrollY(newY){
         let tranlateY=Math.max(this.minTranslateY,newY);
         let scale=1;
         const percent=Math.abs(newY/(this.imageHeight+100))
         this.$refs.layer.style['transform']=`translate3d(0,${tranlateY}px,0)`
         console.log(newY,this.minTranslateY,this.imageHeight)
        this.$refs.list.$el.style.top=`${this.$refs.bgImage.clientHeight}`+"px"
        if(newY<this.minTranslateY){
          // this.$refs.list.$el.style.top=+"px"
          this.$refs.topBg.style.background="#333"
        }else{
          this.$refs.topBg.style.background="none"
        }

        if(newY>0){
          scale=1+percent
          this.$refs.bgImage.style.zIndex=40
          this.$refs.bgImageDiv.style.zIndex=40
          this.$refs.play.style.zIndex=40  
        } else{
          this.$refs.bgImage.style.zIndex=30
          this.$refs.bgImageDiv.style.zIndex=30
          this.$refs.play.style.zIndex=30
        }
        this.$refs.bgImage.style['transform']=`scale(${scale})`
        this.$refs.bgImageDiv.style['transform']=`scale(${scale})`
         
      }
    },
    mounted() {
      this.$refs.list.$el.style.top=`${this.$refs.bgImage.clientHeight}`+"px"
      this.imageHeight=this.$refs.bgImage.clientHeight;
      this.minTranslateY=-this.imageHeight+40
   },
    components: {
      Scroll,
      SongList,
      Loading
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
  .top-bg
    width: 100%
    height 40px
    position absolute
    z-index 999
    transition .2s
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
        z-index: 36
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
      z-index: 38
    .list
      position: fixed
      top: 0
      bottom: 0
      width: 100%
      z-index: 38
      background: $color-background
      .song-list-wrapper
        padding: 20px 30px
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)


</style>
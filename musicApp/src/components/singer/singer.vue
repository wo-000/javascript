<template>
  <div class="singer" ref="singer">
   
    <scroll 
          class="listview"
          ref="listview">
    <ul>
      
      <li @click="moveSingerDetail(group)" v-for="group in singers" class="list-group" :key="group.singer_id">
        <ul>
          <li class="list-group-item">
            <img class="avatar" v-lazy="group.singer_pic">
            <span class="name">{{group.singer_name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    
 
    <!-- <div v-show="!data.length" class="loading-container">
      <loading></loading>
    </div> -->
  </scroll>
  <transition name="slide" mode="out-in">
   <router-view></router-view>
  </transition>
  </div>
</template>

<script>
import scroll from '@/base/scroll/scroll'
import {mapMutations} from 'vuex'
const hotName='';
const hotNameList=10;
 export default{
   data(){
     return{
       singers:[]
     }
   },
   components:{
     scroll
   },
   methods: {
     getSingers(){
       var url = '/songsApi/cgi-bin/musicu.fcg';
       this.$axios.get(url,{params:{
         data:{
         "comm":{"ct":24,"cv":0},
         "singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":-100,"sex":-100,"genre":-100,"index":-100,"sin":0,"cur_page":1}}
        }}}
       )
       .then(res=>{
         this.singers=res.data.singerList.data.singerlist
         console.log(this.singers)
        //  this.normalSingers(this.singers)
       })
       .catch(error=>{console.log(error)})
     },
     normalSingers(list){
       let map={
         hot:{
           title:hotName,
           items:[]
         }
       }
       list.forEach((item,index) => {
          if(index<hotNameList){
            map.hot.items.push({
              singer_id:item.singer_id,
              singer_mid:item.singer_mid,
              singer_name:item.singer_name,
              singer_pic:item.singer_pic
            })
          }
       });
     },
     moveSingerDetail(group){
       this.$router.push({
         path:`/singer/${group.singer_id}`
       })
       this.setSinger(group)
     },
     ...mapMutations({
       setSinger:'set_singer'
     })
   },
   mounted() {
     this.getSingers();
   },
 }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)

  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
   .listview
    position: relative
    width: 100%
    height: 100%
    overflow: hidden
    background: $color-background
    .list-group
      padding-bottom: 20px
      &:nth-child(2n+1)
        background: #333
      .list-group-title
        height: 30px
        line-height: 30px
        padding-left: 20px
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
      .list-group-item
        display: flex
        align-items: center
        padding: 20px 0 0 30px
        .avatar
          width: 50px
          height: 50px
          border-radius: 50%
        .name
          margin-left: 20px
          color: $color-text-l
          font-size: $font-size-medium
    .list-shortcut
      position: absolute
      z-index: 30
      right: 0
      top: 50%
      transform: translateY(-50%)
      width: 20px
      padding: 20px 0
      border-radius: 10px
      text-align: center
      background: $color-background-d
      font-family: Helvetica
      .item
        padding: 3px
        line-height: 1
        color: $color-text-l
        font-size: $font-size-small
        &.current
          color: $color-theme
    .list-fixed
      position: absolute
      top: 0
      left: 0
      width: 100%
      .fixed-title
        height: 30px
        line-height: 30px
        padding-left: 20px
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>

<template>
  <!-- <transition name="slide" mode="out-in"> -->
    <!-- <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list> -->
    <div class="singer-detail"></div>
  <!-- </transition> -->
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'singer'
      ])
    },
    data() {
      return {
        songs: []
      }
    },
    created() {
      console.log(this.singer);
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
          console.log(res.data)
        })
        .catch(error=>{console.log(error)})
      }
    },
    components: {
      
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer-detail
    position: fixed
    z-index:100
    top:0
    left:0
    right:0
    bottom:0;
    background:#333
  
</style>
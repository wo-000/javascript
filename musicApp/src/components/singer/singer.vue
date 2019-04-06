<template>
  <div class="singer" ref="singer">
   歌手
  </div>
</template>

<script>
 export default{
   data(){
     return{

     }
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
         console.log(res.data)
       })
       .catch(error=>{console.log(error)})
     }
   },
   mounted() {
     this.getSingers();
   },
 }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>

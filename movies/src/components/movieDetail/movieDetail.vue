<template>
  <div>
    <header-top :title="title" :isShow="isShow"></header-top>
    <p>qqq</p>
    <h4>ddd</h4>
  </div>
</template>
<script>
import HeaderTop from '@/components/common/header'
export default {
  data(){
    return{
      title:'',
      isShow:true
    }
  },
  components:{
    HeaderTop,
  },
  watch: {
   
  },
  methods: {
    getMovieInfo(){
      this.$axios.get(`/api/ajax/detailmovie?movieId=${this.$route.params.id}`)
      .then((res)=>{
        this.title=res.data.detailMovie.nm;
        console.log(res.data)
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  },
  mounted() {
    this.getMovieInfo();
  },
}
</script>
<style lang="scss" scoped>
div{
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 99999;
}
</style>

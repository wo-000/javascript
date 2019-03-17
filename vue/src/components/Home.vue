<template>
  <div class="home">
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in imgList" :key="item.id">
          <img :src="item.images.small" :alt="item.title" >
        </mt-swipe-item>
    </mt-swipe>
  </div>
   
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      imgList:[]
    }
  },
  created() {
    this.$axios.get('/movie/top250')
    .then(res=>{
      this.imgList=res.data.subjects.slice(0,2);
    })
    .catch(err=>{

    })
  },
}
</script>

<style scoped>
.home{
  margin-top: 40px;
}
.mint-swipe{
  height: 200px;
  width: 100%;
}
.mint-swipe img{
  width: 100%;
  height: 200px;

}
</style>

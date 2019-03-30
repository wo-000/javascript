<template>
  <div>
      <Header></Header>
      <HomeSwiper></HomeSwiper>
  </div>
</template>

<script>
import Header from '@/components/Header'
import HomeSwiper from '@/components/Swiper'
export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  components:{
      Header,
      HomeSwiper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

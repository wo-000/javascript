<template>
  <div>
      <Header></Header>
      <HomeSwiper></HomeSwiper>
      <Icons></Icons>
  </div>
</template>

<script>
import Header from '@/components/Header'
import HomeSwiper from '@/components/Swiper'
import Icons from '@/components/Icons'
export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  components:{
      Header,
      HomeSwiper,
      Icons
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

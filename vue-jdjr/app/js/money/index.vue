<template lang="html">
    <div>
        <Header></Header>
        <Slider></Slider>
        <Money></Money>
        <Ad></Ad>
        <Finance></Finance>
        <Footer></Footer>
        <Navbar></Navbar>
    </div>
</template>

<script>
import Header from '../public/header.vue'
import Slider from './mslide.vue'
import Footer from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
import Money from './money.vue'
import Ad from './ad.vue'
import Finance from './finance.vue'
export default {
  components:{
    Header,
    Slider,
    Footer,
    Navbar,
    Ad,
    Money,
    Finance
  }
}
</script>

<style lang="scss" module>

</style>

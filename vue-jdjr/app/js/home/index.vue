<template lang="html">
    <div>
        <Header></Header>
        <Slider></Slider>
        <Novice></Novice>
        <Borrow></Borrow>
        <Money></Money>
        <Product></Product>
        <Life></Life>
        <Footer></Footer>
        <Navbar></Navbar>
    </div>
</template>

<script>
import Header from '../public/header.vue'
import Slider from './hslide.vue'
import Novice from './novice.vue'
import Borrow from './borrow.vue'
import Money from './money.vue'
import Product from './product.vue'
import Life from './life.vue'
import Footer from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
export default {
  components:{
    Header,
    Slider,
    Novice,
    Borrow,
    Money,
    Product,
    Life,
    Footer,
    Navbar
  }
}
</script>

<style lang="scss" module>

</style>

<template lang="html">
    <div>
        <Header></Header>
        <Slider></Slider>
        <Novice></Novice>
        <Borrow></Borrow>
        <Money></Money>
    </div>
</template>

<script>
import Header from '../public/header.vue'
import Slider from './hslide.vue'
import Novice from './novice.vue'
import Borrow from './borrow.vue'
import Money from './money.vue'
export default {
  components:{
    Header,
    Slider,
    Novice,
    Borrow,
    Money,
  }
}
</script>

<style lang="scss" module>

</style>

<template>
    <div class="weekend">
       <h3>周末去哪</h3>
        <ul>
            <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img :src="item.imgUrl" alt="" class="item-img">
                </div>
                <div class="item-info">
                    <span class="item-title">{{item.title}}</span>
                    <span class="item-desc">{{item.desc}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'Weekend',
    props:{
        weekendList:Array
    }
    // data(){
    //     return{
    //     //    recommendList:[
    //     //         {
    //     //             id:'001',
    //     //             imgUrl:'//userimg.qunarzz.com/imgs/201812/12/C._M0DCii9WLVS1Nlfii240.jpg',
    //     //             title:'查看详情查看详情',
    //     //             desc:'查看详情查看详情查看详情查看详情查看详情查看详情'
    //     //         },
    //     //         {
    //     //             id:'002',
    //     //             imgUrl:'//userimg.qunarzz.com/imgs/201812/12/C._M0DCii9WLVS1Nlfii240.jpg',
    //     //             title:'查看详情查看详情',
    //     //             desc:'查看详情查看详情查看详情查看详情查看详情查看详情'
    //     //         },
    //     //         {
    //     //             id:'003',
    //     //             imgUrl:'//userimg.qunarzz.com/imgs/201812/12/C._M0DCii9WLVS1Nlfii240.jpg',
    //     //             title:'查看详情查看详情',
    //     //             desc:'查看详情查看详情查看详情查看详情查看详情查看详情'
    //     //         }
    //     //     ]
    //     }
    // }
          
}
</script>
<style lang="stylus" scoped>
 @import "~styles/varibles.styl";
.weekend
    h3
        line-height .8rem
        background #eee
        font-weight 500
        font-size .28rem
        text-indent .2rem
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 37.09%
    .item-img
        width 100%
        padding .1rem
    .item-info
        padding .1rem
        min-width 0
        span 
            display block
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            font-size .24rem
            color #ccc
            line-height .4rem
            ellipsis()
</style>

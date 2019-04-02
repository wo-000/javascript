<template>
    <div class="recommend">
       <h3>热销推荐</h3>
       <ul>
           <router-link tag="li" :to="'/detail/'+item.id" class="item border-bottom" v-for="item in recommendList" :key="item.id">
               <div class="item-img-wrapper">
                   <img :src="item.imgUrl" alt="" class="item-img">
               </div>
               <div class="item-info">
                   <span class="item-title">{{item.title}}</span>
                   <span class="item-desc">{{item.desc}}</span>
                   <button class="item-button">查看详情</button>
               </div>
           </router-link>
       </ul>
    </div>
</template>
<script>
export default {
    name:'Recommend',
    props:{
      recommendList:Array
    },
    // data(){
    //     return{
    //         recommendList:[
    //             {
    //                 id:'001',
    //                 imgUrl:'//userimg.qunarzz.com/imgs/201812/12/C._M0DCii9WLVS1Nlfii240.jpg',
    //                 title:'查看详情查看详情',
    //                 desc:'查看详情查看详情查看详情查看详情查看详情查看详情'
    //             },
    //             {
    //                 id:'002',
    //                 imgUrl:'//userimg.qunarzz.com/imgs/201812/12/C._M0DCii9WLVS1Nlfii240.jpg',
    //                 title:'查看详情查看详情',
    //                 desc:'查看详情查看详情查看详情查看详情查看详情查看详情'
    //             },
    //             {
    //                 id:'003',
    //                 imgUrl:'//userimg.qunarzz.com/imgs/201812/12/C._M0DCii9WLVS1Nlfii240.jpg',
    //                 title:'查看详情查看详情',
    //                 desc:'查看详情查看详情查看详情查看详情查看详情查看详情'
    //             }
    //         ]
    //     }
    // }
          
}
</script>
<style lang="stylus" scoped>
 @import "~styles/varibles.styl";
.recommend
    h3
        line-height .8rem
        margin-top .2rem
        background #eee
        font-weight 500
        font-size .28rem
        text-indent .2rem
    .item
        display flex
        height 1.9rem 
        overflow hidden
        .item-img
            height 1.7rem
            width 1.7rem
            padding .1rem
        .item-info
            padding .1rem
            flex 1
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
            .item-button
                display block
                font-size .24rem
                line-height .44rem
                background #ff9300
                margin-top .16rem
                padding 0 .2rem
                border-radius .06rem
                color #fff
                border none
</style>

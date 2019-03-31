<template>
    <div class="icons">

         <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="(page,index) in pages" :key="index">  
                 <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <p>{{item.title}}</p>
                </div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>



       
    </div>
</template>
<script>
export default {
    name:'Icons',
    data(){
        return{
           swiperOption:{

           },
           iconLists:[
               {
                   id:'001',
                   imgUrl:'//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png',
                   title:'第一'
               },
               {
                   id:'002',
                   imgUrl:'//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png',
                   title:'第二'
               },
               {
                   id:'003',
                   imgUrl:'//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png',
                   title:'第三'
               },
               {
                   id:'004',
                   imgUrl:'//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png',
                   title:'第四'
               },
               {
                   id:'005',
                   imgUrl:'//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png',
                   title:'第五'
               },
               {
                   id:'006',
                   imgUrl:'//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png',
                   title:'第六'
               },
               {
                   id:'007',
                   imgUrl:'//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png',
                   title:'第七'
               },
               {
                   id:'008',
                   imgUrl:'//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png',
                   title:'第八'
               },
               {
                   id:'009',
                   imgUrl:'//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png',
                   title:'第九'
               }
            ]
        }
    },
    computed: {
        pages(){
          const pages=[];
          this.iconLists.forEach((item,index) => {
              const page=Math.floor(index/8);
              if(!pages[page]){
                    pages[page]=[];
              }
              pages[page].push(item)
          });  
          return pages;
        }
    },
}
</script>
<style lang="stylus" scoped>
 @import "~styles/varibles.styl";
.icons >>> .swiper-container
    height 0
    padding-bottom 50%
.icon
    position relative
    float left
    width 25%
    padding-bottom 25%
    height 0
    .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .1rem
        img 
            display block
            height 100%
            margin 0 auto
    p
        font-size .28rem
        color $drakTextColor
        height .44rem
        line-height .44rem
        position absolute
        left 0
        right 0
        bottom 0
        text-align center
        ellipsis()
</style>

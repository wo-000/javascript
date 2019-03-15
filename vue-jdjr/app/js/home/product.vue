<template>
    <Panel title="新品推荐" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.arrow">更多</div>
            <Slide :options="options" :items="items" cname="product-slider"></Slide>
        </section>
    </Panel>
</template>
<script>
import Panel from '../core/panel.vue'
import Slide from '../core/slide.vue'
export default {
    components:{
        Panel,
        Slide,
    },
    data(){
        return {
            items:[
                {
                   href:'home',
                   src:'//img12.360buyimg.com/jrpmobile/jfs/t1/10297/24/14008/46685/5c862b47Eef810b58/30b8c5430103352a.jpg' 
                },
                {
                   href:'home',
                   src:'//img12.360buyimg.com/jrpmobile/jfs/t1/10297/24/14008/46685/5c862b47Eef810b58/30b8c5430103352a.jpg' 
                },
                {
                   href:'home',
                   src:'//img12.360buyimg.com/jrpmobile/jfs/t1/10297/24/14008/46685/5c862b47Eef810b58/30b8c5430103352a.jpg' 
                },
                {
                   href:'home',
                   src:'//img12.360buyimg.com/jrpmobile/jfs/t1/10297/24/14008/46685/5c862b47Eef810b58/30b8c5430103352a.jpg' 
                }
            ],
            options:{
                slidesPerView: 2.3,
                spaceBetween: 30,
                freeMode: true,
            }
        }
    }
}
</script>
<style lang="scss">
.product-slider{
    .swiper-container{
        box-sizing: border-box;
        padding: 0 24px;
        .swiper-slide{
            a{
                display: inline-block;
                width: 100%;
                img{
                    width: 100%;
                    display: block;
                    height: 314px;
                    border: 1px solid #fafafa;
                }
            }
        }
    }
}
</style>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
    .content{
        padding-bottom:40px;
        position: relative;
        .arrow{
            position: absolute;
            font-size:28px;
            top:-70px;
            right:20px;
        }
    }
}
</style>

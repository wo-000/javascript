<template>
    <article>
        <Slider :items="items" :cname="$style.slider"></Slider>
        <section :class="$style.list">
            <div :class="$style.item" v-for="(item,index) in enters" :key="index">
                <router-link :to="{name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{item.title}}</h4>
                </router-link>
            </div>
        </section>
    </article>
</template>
<script>
import Slider from '../core/slide.vue'
export default {
    components:{
        Slider,
    },
    data(){
        return {
            items:[{
                href:'home',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t1/28576/40/10399/139307/5c862bc6E022a873e/c50fcefa58db30ce.jpg'
            },{
                href:'home',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t1/28576/40/10399/139307/5c862bc6E022a873e/c50fcefa58db30ce.jpg'
            },{
                href:'home',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t1/28576/40/10399/139307/5c862bc6E022a873e/c50fcefa58db30ce.jpg'
            }],
            enters:[{
                href:'home',
                img:'//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png',
                title:'aaa'
            },{
                href:'home',
                img:'//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png',
                title:'bbb'
            },{
                href:'home',
                img:'//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png',
                title:'ccc'
            },{
                href:'home',
                img:'//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png',
                title:'ddd'
            },{
                href:'home',
                img:'//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png',
                title:'eee'
            }],
        }
    },
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.slider{
    margin-top: 120px;
    img{
        width: 100%;
    }
}
.list{
    @include list(row);
    background: #fff;
    padding-bottom: 20px;    
    padding-top: 40px;
    justify-content: space-around;
    a{
        text-decoration: none;
    }
    .item{
        text-align: center;
        img{
            display: inline-block;
            width: 90px;
            height: 90px;
        }
        h4{
            font-size: 26px;
            color: #666;
            margin-top: 12px;
            text-align: center
        }
    }
}
</style>

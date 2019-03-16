<template>
    <Panel title="轮播图" :class="$style.panel">
        <section :class="$style.content">
            <Slide :items="items" :cname="$style.slider">

            </Slide>
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
        }
    }
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
    >h4{
        display: none;
    }
    .content{
        .slider{
            margin-top: 120px;
        }
    }
}
</style>

<template>
    <Panel title="神券" :class="$style.panel">
        <section :class="$style.content">
            <img :src="src" alt="" >
        </section>
    </Panel>
</template>
<script>
import Panel from '../core/panel.vue'
export default {
    components:{
        Panel,
    },
    data(){
        return {
            src:'//img12.360buyimg.com/jrpmobile/jfs/t1/28576/40/10399/139307/5c862bc6E022a873e/c50fcefa58db30ce.jpg'
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
        img{
            width: 100%;
            height: 230px;
            display: block;
        }
    }
}
</style>

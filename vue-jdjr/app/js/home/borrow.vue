<template>
    <Panel title="急速借贷" :class="$style.panel">
        <section :class="$style.content">
            <router-link :to="{name:'home'}">
                <img :src="src" alt="" >
            </router-link>
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
            src:'//img12.360buyimg.com/jrpmobile/jfs/t1/10297/24/14008/46685/5c862b47Eef810b58/30b8c5430103352a.jpg'
        }
    }
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
    .content{
        padding-bottom: 40px;
        img{
            display: block;
            width: 100%;
        }
    }
}
</style>

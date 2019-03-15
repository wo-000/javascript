<template>
    <Panel title="理财精选" :class="$style.panel">
        <section :class="$style.content">
            <dl :class="$style.item" v-for="(item,index) in items" :key="index">
                <dt>{{item.title}}<span :class="$style.red">{{item.sub}}</span></dt>
                <dd>{{item.rate}}</dd>
                <dd>{{item.text}}</dd>
            </dl>
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
            items:[
                {
                    title:'理财1',
                    sub:'理财1',
                    rate:'80%',
                    text:'理财1'
                },
                {
                    title:'理财2',
                    sub:'理财2',
                    rate:'80%',
                    text:'理财2'
                },
                {
                    title:'理财3',
                    sub:'理财3',
                    rate:'80%',
                    text:'理财3'
                },
                {
                    title:'理财4',
                    sub:'理财4',
                    rate:'80%',
                    text:'理财4'
                }
            ]
           
        }
    }
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
    .content{
        .item{
            color: red;
        }
    }
}
</style>

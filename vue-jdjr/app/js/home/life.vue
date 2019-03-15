<template>
    <Panel title="生活服务" :class="$style.panel">
        <ul :class="$style.content">
            <li :class="$style.item" v-for="(item,index) in items" :key="index">
                <img :src="item.img" >
                <p>{{item.title}}</p>
                <p>{{item.sub}}</p>
            </li>
        </ul>
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
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png',
                    title:'aaa',
                    sub:'aaa'
                },
                {
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png',
                    title:'bbb'
                },
                {
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png',
                    title:'ccc'
                },
                {
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png',
                    title:'ddd'
                },
                {
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png',
                    title:'eee'
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
        @include flex(row);
        box-sizing: border-box;
        padding-bottom: 40px;
        .item{
            width: 20%;
            text-align: center;
            img{
                width: 90px;
                height: 90px;
            }
            p{
                font-size: 26px;
                color: #666;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                margin-top: 12px;
                &:nth-of-type(2){
                    color: #ff801a
                }
               
            }
        }
    }
}
</style>

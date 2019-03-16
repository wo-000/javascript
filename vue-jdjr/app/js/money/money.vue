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
        @include flex(row);
        justify-content: space-around;
        box-sizing: border-box;
        &::after{
            content: " ";
            display: block;
            width: 100%;
            height: 0px;
            box-sizing: border-box;
            border-bottom: 1px solid #ddd;
            position: relative;
            top: -208px;
        }
        .item{
            position: relative;
            width: 50%;
            box-sizing: border-box;
            &::after{
                content:" ";
                width: 1px;
                display: block;
                height: 136px;
                position: absolute;
                top: 50%;
                right: 0;
                margin-top: -68px;
                border-right: 1px solid #eee
            }
            &:nth-child(2n){
                &::after{
                    display: none;
                }
            }
            padding: 34px 16px;
            dt{
                font-size: 30px;
                line-height: 42px;
                color: #333;
                span{
                    font-size: 22px;
                    color: #ff5155;
                    border: 1px solid #ff5155;
                    margin-left: 2px;
                    vertical-align: 1px;
                }
            }
            dd{
                font-weight: 700;
                font-size: 44px;
                height: 58px;
                color: #ff5155;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                &:nth-child(3){
                    font-size: 24px;
                    height: 34px;
                    color: #999;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }
        }
        
    }
}
</style>

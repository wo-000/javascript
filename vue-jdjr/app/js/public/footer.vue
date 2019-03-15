<template>
    <Panel title="公司信息" :class="$style.panel">
        <ul :class="$style.content">
            <li>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/10297/24/14008/46685/5c862b47Eef810b58/30b8c5430103352a.jpg" alt="">
            </li>
            <li>
               <div>
                   <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/10297/24/14008/46685/5c862b47Eef810b58/30b8c5430103352a.jpg" alt="">
                   <p>客户端</p>
               </div>
               <div>
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/10297/24/14008/46685/5c862b47Eef810b58/30b8c5430103352a.jpg" alt="">
                   <p>客户端</p>
               </div>
               <div>
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/10297/24/14008/46685/5c862b47Eef810b58/30b8c5430103352a.jpg" alt="">
                    <p>客户端</p>
               </div>
            </li>
            <li><span>版权1</span></li>
            <li><span>版权1</span></li>
            <li><span>版权1</span></li>
        </ul>
    </Panel>
</template>
<script>
import Panel from '../core/panel.vue'
export default {
    components:{
        Panel,
    }
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
    margin-bottom: 100px;
    >h4{
        display: none
    }
    .content{
        @include flex;
        background: #f5f5f5;
        li{
            width: 100%;
            text-align: center;
            color: #999;
            font-size: 30px;
            img{
                width: 100%;
                height: 142px;
            }
            @include flex(row);
            >div{
                width: 33.33333%;
                text-align: center;
                padding: 20px 0;
                img{
                    width: 90px;
                    height: 90px;
                }
                p{
                    font-size: 26px;
                    text-align: center;
                    display: block;
                    color: #999;
                    margin-top: 12px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }
            &:nth-child(n+3){
                padding: 24px 0;
                height: 38px;
                line-height: 38px;
                border-top: 1px solid #ddd;
                justify-content: center;
            }
        }
        
    }
    

}
</style>

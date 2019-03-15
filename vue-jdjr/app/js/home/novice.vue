<template>
    <Panel title="新手特权" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item">
                <h4>下载APP <span :class="$style.red">888礼包</span></h4>
                <p :class="$style.gray">新手专享</p>
                <img :src="src" alt="新手图片">
            </div>
            <div :class="$style.item">
                <ul>
                    <li>
                        <img :src="src" alt="">
                        <h4 :class="$style.red">上部分上部分上部分上部分上部分</h4>
                        <p :class="$style.gray">上部分</p>
                    </li>
                    <li>
                        <img :src="src" alt="">
                        <h4 :class="$style.red">下部分</h4>
                        <p :class="$style.gray">下部分</p>
                    </li>
                </ul>
            </div>
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
    >h4{
        border-bottom: 1px solid #ddd;
    }
    .content{
        @include list(row);
        .item{
            width: 50%;
            box-sizing: border-box;
            &:first-child{
                border-right: 1px solid #ddd;
                padding: 32px 20px;
                text-align: center;
                img{
                    width: 132px;
                    height: 132px;
                    margin: 20px auto
                }
            }
            h4{
                font-size: 26px;
                line-height: 40px;
            }
            .red{
                color: #f00;
            }
            .gray{
                color: #999;
                font-size: 24px;
            }
            p{
                margin: 6px 0;
                font-size: 24px;
            }
            ul{
                width: 100%;
                li{
                    &:first-child{
                        border-bottom: 1px solid #ddd;
                    }
                    height: 144px;
                    width: 100%;
                    padding: 32px 28px;
                    box-sizing: border-box;
                    h4{
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        text-align: left
                    }
                    img{
                        width: 80px;
                        height: 80px;
                        float: right
                    }
                }
            }
        }
    }
}
</style>


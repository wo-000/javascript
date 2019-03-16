<template>
    <Panel title="导航条" :class="$style.panel">
        <ul :class="$style.content">
            <li>
                <router-link :to="{name:'home'}">
                    <img :src="'/'===$route.path ? navBarImgs[0].active:navBarImgs[0].normal">
                    <p>首页</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'money'}">
                    <img :src="'/money'===$route.path ? navBarImgs[1].active:navBarImgs[1].normal">
                    <p>赚钱</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'ious'}">
                    <img :src="'/ious'===$route.path ? navBarImgs[2].active:navBarImgs[2].normal">
                    <p>借钱</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'raise'}">
                    <img :src="'/raise'===$route.path ? navBarImgs[3].active:navBarImgs[3].normal">
                    <p>省钱</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'my'}">
                    <img :src="'/my'===$route.path ? navBarImgs[4].active:navBarImgs[4].normal">
                    <p>金融会员</p>
                </router-link>
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
            navBarImgs:[
                {
                    normal:'//img12.360buyimg.com/jrpmobile/jfs/t1/931/18/14488/935/5bda58fdE542c2cc7/f29a349a4ed750ca.png',
                    active:'//img12.360buyimg.com/jrpmobile/jfs/t1/8325/8/4331/3095/5bda5c89E1be47c14/47b6a296683a12a5.png'
                },
                {
                    normal:'//img12.360buyimg.com/jrpmobile/jfs/t1/1890/15/14183/1269/5bda5c97E34734b01/241a0f5b17fd3e51.png',
                    active:'//img12.360buyimg.com/jrpmobile/jfs/t1/93/2/15333/2159/5bda590eE721487cd/85ef52d2b68205ef.png'
                },
                {
                    normal:'//img12.360buyimg.com/jrpmobile/jfs/t1/5291/40/14133/594/5bda5ca3E92d0e800/09ac81fa5a5c96ef.png',
                    active:'//img12.360buyimg.com/jrpmobile/jfs/t1/9286/14/4082/2147/5bda5a64Eb1a3b609/6fc19f89b087eff1.png'
                },
                {
                    normal:'//img12.360buyimg.com/jrpmobile/jfs/t1/3358/38/14064/816/5bda5cabEcb7eca8b/9bb064f1cda7ceba.png',
                    active:'//img12.360buyimg.com/jrpmobile/jfs/t1/3832/28/14067/2174/5bda5ae4E623fa89e/fa47608de6864e2a.png'
                },
                {
                    normal:'//img12.360buyimg.com/jrpmobile/jfs/t1/7491/15/4277/926/5bda5cb9E421a0e60/89ee14ce9daf4aab.png',
                    active:'//img12.360buyimg.com/jrpmobile/jfs/t1/3319/34/13973/2193/5bda5c6bEdc8891ec/83b5622944f51c88.png'
                }
            ]
        }
    },
    methods: {
        aPath(){
            console.log(this.$route.path)
        }
    },
    mounted() {
        this.aPath();
    },
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100px;
    margin: 0;
    z-index: 2;
    >h4{
        display: none;
    }
    .content{
        @include flex(row);
        justify-content: space-around;
        li{
            text-align: center;
            a{
                text-decoration: none;
                
            }
            img{
                width: 44px;
                height: 44px;
                display: inline-block;
                margin: 12px auto 2px;
            }
            p{
                font-size: 22px;
                color: #656565
            }
        }
    }
}
</style>

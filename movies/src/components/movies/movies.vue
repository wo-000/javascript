<template>
    <div class="movies">
        <header-top :title="title"></header-top>
        <div class="top-tab">
            <city></city>
            <div class="switch-hot" >
                <div class="hot-item active">正在热映</div>
                <div class="hot-item ">即将上映</div>
            </div>
            <div class="icon iconfont icon-sousuo search-entry search-icon"></div>
        </div>
    </div>
</template>
<script>
import HeaderTop from '@/components/common/header'
import City from '@/components/common/city'
export default {
    data(){
        return{
            title:'电影首页'
        }
    },
    components:{
        HeaderTop,
        City
    },
    methods: {
        getMoviesInfo(){
            this.$axios.get('/api/ajax/movieOnInfoList?token=')
            .then((res)=>{
                console.log(res.data)
            })
        }
    },
    mounted() {
        this.getMoviesInfo()
    },
}
</script>
<style scoped>
.top-tab{
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    height: 45px;
    border-bottom: 1px solid #e6e6e6;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 44px;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.switch-hot {
    display: -webkit-box;
    display: flex;
    height: 44px;
    line-height: 44px;
    position: relative;
}
.switch-hot .hot-item {
    font-size: 15px;
    color: #666;
    width: 80px;
    text-align: center;
    margin: 0 12px;
    font-weight: 700;
}
.icon-suosuo{
    width: 20px;
    height: 20px;
    background-size: 20px;
    padding: 10px 10px 10px 10px;
}
.iconfont::before{
    margin-top: 0px;
}
</style>

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
        <div class="movie-list">
            <movie-list :movies-data="moviesData" v-if="moviesData"></movie-list>
        </div>
    </div>
</template>
<script>
import HeaderTop from '@/components/common/header'
import City from '@/components/common/city'
import MovieList from '@/components/common/movieList'
export default {
    data(){
        return{
            title:'电影首页',
            moviesData:[]
        }
    },
    components:{
        HeaderTop,
        City,
        MovieList
    },
    methods: {
        getMoviesInfo(){
            this.$axios.get('/api/ajax/movieOnInfoList?token=')
            .then((res)=>{
                this.moviesData=res.data.movieList
                console.log(res.data)
            })
        }
    },
    mounted() {
        this.getMoviesInfo()
    },
}
</script>
<style lang="scss" scoped>
@import '~@/style/css/common.scss';
.top-tab{
    position: fixed;
    background: #fff;
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
    justify-content: space-around;
}
.switch-hot {
    display: -webkit-box;
    display: flex;
    height: 44px;
    line-height: 44px;
    position: relative;
    .hot-item {
        font-size: 15px;
        color: #666;
        width: 80px;
        text-align: center;
        margin: 0 6px;
    }
    .active{
        color: #ef4238;
    }
}
.icon-suosuo{
    width: 20px;
    height: 20px;
    background-size: 20px;
    padding: 10px 10px 10px 10px;
}
.iconfont::before{
    margin-top: 0px;
    color: $bgColor;
    font-size: 20px;
}
.movie-list{
    padding-top:95px;  
}
</style>

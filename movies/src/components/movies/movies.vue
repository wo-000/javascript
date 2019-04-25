<template>
    <div class="movies">
        <header-top :title="title"></header-top>
        <div class="top-tab">
            <city></city>
            <div class="switch-hot" >
                <div class="hot-item" :class="isHot?'active':''" @click="hot">正在热映</div>
                <div class="hot-item" :class="isHot?'':'active'" @click="comingSoon">即将上映</div>
            </div>
            <div @click="isShow" class="icon iconfont icon-sousuo search-entry search-icon"></div>
        </div>
        <div class="movie-list" v-if="isHot">
            <movie-list :movies-data="moviesData" v-if="moviesData"></movie-list>
        </div>
        <div class="comingsoon" v-if="!isHot">
            <wash :wash-data="washData"></wash>
            <movie-list :movies-data="comingData" v-if="comingData"></movie-list>
        </div>
        <router-view></router-view>
   </div>
</template>
<script>
import HeaderTop from '@/components/common/header'
import City from '@/components/common/city'
import MovieList from '@/components/common/movieList'
import Wash from '@/components/common/wash'
import Search from '@/components/search/search'
export default {
    data(){
        return{
            title:'电影首页',
            moviesData:[],
            comingData:[],
            washData:[],
            isHot:true,
            placeholderText:'搜电影、搜影院',
            isSearch:false
        }
    },
    components:{
        HeaderTop,
        City,
        MovieList,
        Wash,
        Search
    },
    methods: {
        getMoviesInfo(){
            this.$axios.get('/api/ajax/movieOnInfoList?token=')
            .then((res)=>{
                this.moviesData=res.data.movieList
                // console.log(res.data)
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        getComingSoonInfo(){
            this.$axios.get('/api/ajax/comingList?ci=1058&token=&limit=10')
            .then((res)=>{
                this.comingData=res.data.coming;
                console.log(res.data)
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        getComingMost(){
            this.$axios.get('/api/ajax/mostExpected?ci=1058&limit=10&offset=0&token=')
            .then((res)=>{
                this.washData=res.data.coming;
                console.log(res.data)
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        hot(){
            this.isHot=true;
        },
        comingSoon(){
            this.isHot=false;
        },
        isShow(){
            this.$router.push({
                path:'/search'
            })
        }
    },
    mounted() {
        this.getMoviesInfo();
        this.getComingSoonInfo();
        this.getComingMost();
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
    z-index: 3;
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
.movie-list,.comingsoon{
    padding-top:95px;  
}

</style>

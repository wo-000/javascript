<template>
  <div class="search" >
    <header-top :title="title"></header-top>
    <div class="search-wrapper">
      <div class="search-header">
        <div class="input-wrapper">
          <span class="icon iconfont icon-sousuo"></span>
          <input class="search-input" @keyup.enter="searchHandle" v-model="val" type="text" :placeholder="placeholderText">
          <span class="close" v-if="isShow" @click="clearHandle">×</span>
        </div>
        <div class="cancel" @click="cancelHandle">取消</div>
      </div>
    </div>
    <div class="search-result">
      <div class="result-wrapper">
        <div class="result" v-if="this.moviesList.length>0">
          <h3>电影/电视剧/综艺</h3>
          <search-movies :movies-list="moviesList" :movies-total="moviesTotal"></search-movies>
        </div>
        <div class="result" v-if="this.cinemasList.length>0">
          <h3>影院</h3>
          <search-cinema :cinemas-list="cinemasList" :cinemas-total="cinemasTotal"></search-cinema>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SearchCinema from '@/components/common/searchCinema'
import SearchMovies from '@/components/common/searchMovies'
import HeaderTop from '@/components/common/header'
export default {
  components:{
    SearchCinema,
    SearchMovies,
    HeaderTop
  },
  data(){
    return{
      isShow:false,
      val:'',
      isClose:false,
      title:'搜索',
      placeholderText:'搜索',
      moviesList:[],
      cinemasList:[],
      moviesTotal:0,
      cinemasTotal:0
    }
  },
  watch: {
    val(newVal){
      if(newVal){
        this.isShow=true
      }
    }
  },
  methods: {
    clearHandle(){
      if(this.val){
        this.val=''
        this.isShow=false
      }
    },
    cancelHandle(){
      this.$router.back()
    },
    searchHandle(){
      this.$axios.get(`/api/ajax/search?kw=${this.val}&cityId=${this.$store.state.cityId}&stype=-1`)
      .then((res)=>{
        this.moviesList=res.data.movies.list.slice(0,3);
        this.moviesTotal=res.data.movies.total;
        if(res.data.cinemas){
          this.cinemasList=res.data.cinemas.list.slice(0,2);
          this.cinemasTotal=res.data.cinemas.total;
        }
        console.log(res.data)
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  },
}
</script>
<style lang="scss" scoped>
.search{
  position: absolute;
  top: 50px;
  left: 0px;
  right: 0px;
  min-height: calc(100% - 50px);
  background: #f2f2f2;
  z-index: 3;
  .search-result{
    background: #fff;
  }
  .result h3 {
    font-size: 15px;
    color: #999;
    padding: 9px 15px;
    font-weight: 400;
  }
  .search-header{
    position: relative;
    padding: 12px;
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-direction: row;
    .input-wrapper{
      position: relative;
      width: 82%;
      input{
        width: 100%;
        height: 30px;
        line-height: 36px;
        border: 1px solid #f5f5f5;
        border-radius: 4px;
        text-indent: 30px;
      }
      .close{
        position: absolute;
        right: 12px;
        top: 4px;
        font-size: 15px;
      }
      .icon-sousuo{
        position: absolute;
        left: 10px;
        top: 6px;
      }
    }
    .cancel{
      font-size:16px;
      color: #ef4238;
      line-height: 30px;
      margin-left: 12px;
    }
  }
  
}
</style>

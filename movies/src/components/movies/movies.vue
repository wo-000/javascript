<template>
  <div class="movies">
    <header-top :title="title"></header-top>
    <div class="top-tab">
      <city></city>
      <div class="switch-hot">
        <div class="hot-item" :class="isHot?'active':''" @click="hot">正在热映</div>
        <div class="hot-item" :class="isHot?'':'active'" @click="comingSoon">即将上映</div>
      </div>
      <div @click="isShow" class="icon iconfont icon-sousuo search-entry search-icon"></div>
    </div>
    <div class="movie-list" v-if="isHot" ref="moviewrap">
      <movie-list
        v-infinite-scroll="loadMore"
        infinite-scroll-distance="10"
        infinite-scroll-disabled="loading"
        :movies-data="moviesData"
        v-if="moviesData"
      ></movie-list>
    </div>
    <div class="comingsoon" v-if="!isHot">
      <wash :wash-data="washData"></wash>
      <movie-list :movies-data="comingData" v-if="comingData"></movie-list>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import HeaderTop from "@/components/common/header";
import City from "@/components/common/city";
import MovieList from "@/components/common/movieList";
import Wash from "@/components/common/wash";
import Search from "@/components/search/search";
export default {
  data() {
    return {
      title: "电影首页",
      moviesData: [],
      comingData: [],
      washData: [],
      movieIds: [],
      movieIdslist: "",
      isHot: true,
      placeholderText: "搜电影、搜影院",
      isSearch: false,
      pageNumber: 0,
      loading: true,
      index: 12
    };
  },
  components: {
    HeaderTop,
    City,
    MovieList,
    Wash,
    Search
  },
  methods: {
    getMoviesInfo() {
      this.$axios
        .get("/api/ajax/movieOnInfoList?token=")
        .then(res => {
          this.moviesData = res.data.movieList;
          this.movieIds = res.data.movieIds;

          var movieIdslistString = "";
          var arrMovieId = this.movieIds.slice(this.index, 24);
          for (let i = 0; i < arrMovieId.length; i++) {
            i !== arrMovieId.length - 1
              ? (movieIdslistString += arrMovieId[i] + ",")
              : (movieIdslistString += arrMovieId[i]);
          }
          this.movieIdslist = movieIdslistString;
          this.loading = false;
          console.log(this.movieIdslist);
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getComingSoonInfo() {
      this.$axios
        .get(
          `/api/ajax/comingList?ci=${this.$store.state.cityId}&token=&limit=10`
        )
        .then(res => {
          this.comingData = res.data.coming;
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getComingMost() {
      this.$axios
        .get(
          `/api/ajax/mostExpected?ci=${
            this.$store.state.cityId
          }&limit=10&offset=0&token=`
        )
        .then(res => {
          this.washData = res.data.coming;
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    hot() {
      this.isHot = true;
    },
    comingSoon() {
      this.isHot = false;
    },
    isShow() {
      this.$router.push({
        path: "/search"
      });
    },
    loadMore() {
      this.loading = true;
      console.log(this.movieIdslist);
      this.$axios
        .get(`/api/ajax/moreComingList?token=&movieIds=${this.movieIdslist}`)
        .then(res => {
          console.log(res.data);
          this.moviesData = this.moviesData.concat(res.data.coming);
          console.log(this.moviesData, movieIdslistString);
          // this.movieIds=res.data.movieIds;
          var movieIdslistString = "";
          console.log(this.movieIds, res.data.coming.length);
          if (res.data.coming.length >= 12) {
            this.index += 12;
          }
          var arrMovieId = this.movieIds.slice(this.index, this.index + 12);
          for (let i = 0; i < arrMovieId.length; i++) {
            i !== arrMovieId.length - 1
              ? (movieIdslistString += arrMovieId[i] + ",")
              : (movieIdslistString += arrMovieId[i]);
          }
          this.movieIdslist = movieIdslistString;
          this.loading = false;
          console.log(this.index, this.movieIdslist);

          if (res.data.coming.length < 12) {
            this.loading = true;
            return;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getComingSoonInfo();
    this.getComingMost();
    this.getMoviesInfo();
    console.log(window.screen.height);
    this.$refs.moviewrap.style.height = window.screen.height - 90 + "px";
    this.$refs.moviewrap.style.position = "relative";
    this.$refs.moviewrap.style.top = "95px";
  }
};
</script>
<style>
.movie-list .group-date {
  display: none !important;
}
</style>

<style lang="scss" scoped>
@import "~@/style/css/common.scss";
.top-tab {
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
  .active {
    color: #ef4238;
  }
}
.icon-suosuo {
  width: 20px;
  height: 20px;
  background-size: 20px;
  padding: 10px 10px 10px 10px;
}
.iconfont::before {
  margin-top: 0px;
  color: $bgColor;
  font-size: 20px;
}
// .movie-list,.comingsoon{
//     // padding-top:95px;
// }
</style>

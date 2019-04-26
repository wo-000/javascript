<template>
  <div id="moviesDetail">
    <header-top :title="movieDetailInfo.nm" :isShow="isShow"></header-top>
    <div class="movie-detail">
      <div class="movie-filter"></div>
      <div
        class="poster-bg"
        :style="imgSrc2"
      ></div>
      <div class="detail box-flex">
        <div class="poster">
          <img
          :src="imgSrc1"
          >
        </div>
        <div class="content flex">
          <div class="title middle line-ellipsis">{{movieDetailInfo.nm}}</div>
          <div class="title-en-name line-ellipsis">{{movieDetailInfo.enm}}</div>
          <div class="score line-ellipsis">
            {{movieDetailInfo.sc}}
            <span class="snum">({{movieDetailInfo.snum}}人评)</span>
          </div>
          <div class="type line-ellipsis">
            <span>{{movieDetailInfo.cat}}</span>

            <div class="type-group" v-if="movieDetailInfo.version">
              <img
                style="width: 42px;"
                class="sd-imax"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAeCAYAAADTsBuJAAAD+0lEQVRoge2aPUwUQRSAPy4YiZh4DbT8VJhIvA4KkyOhBq+Uyi2gFlssPAtoPW01cWm0RaxVTCi0EkOhFXe0WoiJGhJJ1uK9cefW/ZnF3K3R/ZLNDDNvfnhv5s3bvRkIggBgGLgIjACDlPSSE+AT8B74NhAEwXngCnCm0Gn9f/wAdgeBKf5O5T8regI9Ygi4DIwCUxXE7ZT0j2PgneZHKpQ+vwiONR2sFDqNEkoDFExpgIJx9f+TwDJwySprA0+A11bZCjCR0EcbeAp8zDnHKDWgBfj6oH/XgC3Np9EAVoE9TaNUtR+AJrCTMP4R4GkaZUv7iWvfhcsOmAQ2EOW/QZT+BlH0GjBtyU6o3L71gIRcC8B9YN5hzDSqQB0Yt8pqWtZ0aN9S2VpCfUPr68QbaE+fq4QLINr/VcQwO1mTcdkBS8A54B7w3CpfRHbFIqGiDU9i8tPALeAGshsOHMbOywVkVfoJ9Q1gLKMPo/RXiCLHgU6MzJzW2+PNIf/foZZn4rIDZoDvdCsfQtcz7DIQYqR1zS86tsnLF9J3QdyKtqkhL0mbhK7MS5D1dLwWYiTbdTWId02/4WKAReBaTPmspnl8+r7Kz2YJnpIWssIbMXVziFvZTGlvDOQjykxbyeYMuaCyW5q/qXVO5I2C5hGXtIG4n4/A45x9tBGX1gt8TeNWuqdpM6FtFTHcIaHv9hGDerEtpH4T2TV1JMjICgK6OK0BTDS0Tf6ophe+39BBFFJHVrxhHLiO+PVOQtsGsoJtBfqaeiljbiXknchrgDXEJd1CIiFzCOdhMqd8XpqaelbZaqQurZ1vlXUQo0WjLkPVkrfPA2eyDDCMRC+jkfJ9wpWS1wATyKHeKzqI0q4THo4e8gFsJ6HNHGF09BkIrKeu5XFuzfj9O3SfB85khaGTSOTSRsIrm2+I+4kaJ415lX+Ro81paAIvEaUc8btrieJpeo/46GVVZVYjZXXE2E0tayChaYvsiAvINsA+slonkJ1gx/tGmW2XgVR+RfvLe3DnZYcwgjnSvJ8gW0V2yyHJSqsiC9DTfmrAXcTteJach0RAN3QOmbvB5UXsgXa4jvj9AySMNJ8cHsa0WbLyxoWNIspf488/R7jQBB4RuogkPE3TdkiL0AAm5DRtO5bcEbIL3iKGGifjfcDFAM8Rd7OMvJTNaHkbUX70LRi6DdBGFL5t9dUPfMQIVdKVa1Z92mrtIGdIXeXGkGgrrs0eYvDbOoe4d5JfDARBsJAmEMMw/VHiv/qTpGEBTvc5ul8r+L+g/D2gYEoDFExpgIKpIDe1SvrLWU1PKsg1uZL+MUT4a9yn8mpicfwAdgf0cu555IpieTm395jLuR+Arz8BrLjpSMoYSlEAAAAASUVORK5CYII="
              >
            </div>
          </div>
          <div class="src line-ellipsis">{{movieDetailInfo.src}}/{{movieDetailInfo.episodeDur}}分钟</div>
          <div class="pubDesc line-ellipsis">{{movieDetailInfo.pubDesc}}</div>
        </div>
      </div>
    </div>
    <filter-area :brand-data="brandData"></filter-area>
    <shop :cinemas-data="cinemasData"></shop>
  </div>
</template>
<script>
import HeaderTop from "@/components/common/header";
import FilterArea from "@/components/common/filterArea";
import Shop from "@/components/common/shop";
export default {
  data() {
    return {
      isShow: true,
      movieDetailInfo:{},
      imgSrc:'',
      brandData:{},
      cinemasData:[]
    };
  },
  components: {
    HeaderTop,
    FilterArea,
    Shop
  },
  computed: {
    imgSrc1(){
      return (this.imgSrc.split('w.h')[0] + '148.208' + this.imgSrc.split('w.h')[1])
    },
    imgSrc2(){
      return 'background-image:url('+(this.imgSrc.split('w.h')[0] + '71.100' + this.imgSrc.split('w.h')[1])+ ');'
    }
  },
  methods: {
    getMovieInfo() {
      this.$axios
        .get(`/api/ajax/detailmovie?movieId=${this.$route.params.id}`)
        .then(res => {
          this.movieDetailInfo=res.data.detailMovie;
          this.imgSrc=res.data.detailMovie.img;
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getMovieCinema() {
      this.$axios
        .post(`/api/ajax/movie`,{
            movieId: this.$route.params.id,
            day: '2019-04-26',
            offset: 0,
            limit: 20,
            districtId: -1,
            lineId: -1,
            hallType: -1,
            brandId: -1,
            serviceId: -1,
            areaId: -1,
            stationId: -1,
            updateShowDay: true,
            cityId: '1058'
        })
        .then(res => {
          this.cinemasData=res.data.cinemas;
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getMovieArea() {
      this.$axios
        .get(`/api/ajax/filterCinemas?movieId=${this.$route.params.id}&day=2019-04-26`)
        .then(res => {
          this.brandData=res.data;
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    },

  },
  mounted() {
    this.getMovieInfo();
    this.getMovieCinema();
    this.getMovieArea();
  }
};
</script>
<style lang="scss" scoped>
#moviesDetail{
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  background: #f2f2f2;
  z-index: 99999;
  .filter{
    padding-top: 0px;
    width: 320px;
  }
  .cinema-list{
    width: 320px;
    background: #fff;
  }
}
.movie-detail {
  height: 188px;
  width: 320px;
  position: relative;
  margin-top: 50px;
  cursor: pointer;
  .movie-filter {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: #333;
  }
  .poster-bg {
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    position: absolute;
    -webkit-filter: blur(1.2rem);
    filter: blur(1.2rem);
    background-size: cover;
    background-repeat: no-repeat;
    opacity: .55;
  }
  .detail {
    height: 200px;
    width: 100%;
    padding: 19px 10px 19px 10px;
    overflow: hidden;
    display: flex;
    .poster{
       img {
        width: 110px;
        height: 150px;
        box-sizing: border-box;
      }
    }
    .content {
      width: 170px;
      overflow-x: hidden;
      margin-left: 12.5px;
      line-height: 1;
      color: #fff;
      .title {
        font-size: 20px;
        margin-top: 2px;
        font-weight: 700;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .title-en-name{
        margin-top: 10px;
        font-size: 12px;
        color: #fff;
        opacity: .8;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .score {
        font-size: 18px;
        font-weight: 700;
        color: #fc0;
        margin-top: 11px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .snum,.type,.src,.pubDesc{
        margin-top: 10px;
        font-size: 12px;
        color: #fff;
        opacity: .8;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .type-group {
        display: inline-block;
        width: 42px;
        opacity: .85;
        img{
          width: 42px;
        }
      }
    }
  }
}
</style>

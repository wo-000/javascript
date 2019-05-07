<template>
  <div class="cimema">
    <header-top :title="title"></header-top>
    <div class="top-tab">
      <city></city>
      <div class="search-entry search-input" @click="isShow">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwFJREFUSA3FVs1qU0EUTibBRQiCRF3UB3BTcFHwJ0XRJ+gDhDaQ5vcJ3PgCfYL80AYSyQP4BIKQiosuhLoQXOjCbqQIJUgoyY3fdzNnmCRzk3uvBQfmzrlzzvm+OTNzz7mJxH9qyTC83W733mQyeTKbzbbQc8lk8hL9Ip1OfyqVSr/CYCzbBBKDQHU6nX2MZfQ8HNWyM949LOAU/bharb7F6DlsnFNOYhDmp9NpGx7bTi/35HkqlaphAadu9eLsCjFIS57nNRHlLct0AnmIiL5ivETPQf8Q4y56Gt1v0F8rpRog78pc0LhATFJEemIZXwHoKJvNNguFwm9r3hcHg8Gd0WjUwEJfY+K26BH54SZyQ8ztBcB7K9IzAO01Go2fAhg0NpvNB9C9Q9+hjY781bpt9y8MyBTP1CZFpC/CkJKIdrSHyMUmiKPxXBeSJvOb2mq1DiDLRbqCvFer1f7QIGzT9nuwpz/bNnZxfy6uPv0VYWvKouKZho1UfGTUkR/JOyI3uDIno2JygMEzPTHhRRJlnFH78yvglueJ78JRzEhQyFkMXbfX5Rg0p/2HWi/4K+YKq9qSWf2dymvs0cax8W1AEuesCSaHm2gGZwnfYCuszhhh1l6EMYohGJwlfANF4gt5w+qYBv+52Tg2vg2sWNowIVVll2nQNogqa3/mcDZP48/frKdiPcWqpKKkmXstfWRR+/uFg7hB9VpSpikMTPg690YmpR/834gjiI9FXh79IoEzUUibn6GUtHnG3Bslbbbb7QxIfwDjriY5r9frj0Aux7jALSnTYxGH0bXW7gDkQ9jIdaRfLFLCfEefUXA1UxapvKl6bBF1EXUZAa0sYIFYyBFt7D8QHBu/kuebyFeINXnsf65KpfIR94WXqrSO3ElMB33hDrBNh5DX/mVCf4It7ctFwntyE3kgsbXaRL/fvz8ejx8DMPR/9SbyUMT2IqLIa8mjAMWxdZB/y2QyT80/cRzQMD78lNDKOHOa84fwZbFYtCtiGJj4Noy81+uZcvkXH+aXwmK6+EsAAAAASUVORK5CYII="
        >
        <span>搜索</span>
      </div>
    </div>
    <filter-area :brand-data="brandData"></filter-area>
    <shop :cinemas-data="cinemasData"></shop>
    <!-- <search v-if="isSearch" @flagShow="flagSearch" :placeholder-text="placeholderText"></search> -->
  </div>
</template>
<script>
import HeaderTop from "@/components/common/header";
import City from "@/components/common/city";
import FilterArea from "@/components/common/filterArea";
import Shop from "@/components/common/shop";
import Search from "@/components/search/search";
export default {
  data() {
    return {
      title: "影院",
      cinemasData: [],
      brandData: {},
      placeholderText: "搜影院",
      isSearch: false
    };
  },
  components: {
    HeaderTop,
    City,
    FilterArea,
    Shop,
    Search
  },
  methods: {
    cinemaInfo() {
      this.$axios
        .get("/api/ajax/cinemaList", {
          params: {
            day:  this.formatDate.format(),
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
            reqId: "1556000688670",
            cityId: this.$store.state.cityId
          }
        })
        .then(res => {
          this.cinemasData = res.data.cinemas;
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    filterCinema() {
      this.$axios
        .get(`/api/ajax/filterCinemas?ci=${this.$store.state.cityId}`)
        .then(res => {
          this.brandData = res.data;
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    flagSearch(val) {
      this.isSearch = val;
    },
    isShow() {
      this.$router.push({
        path:'/search'
      })
      // this.isSearch = true;
    }
  },
  mounted() {
    this.cinemaInfo();
    this.filterCinema();
  }
};
</script>
<style lang="scss" scoped>
@import "~@/style/css/common.scss";
.filter-wrap {
    padding-top: 135px;
}
.top-tab {
  position: fixed;
  background: #f5f5f5;
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
.search-input {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 28px;
  font-size: 13px;
  color: #b2b2b2;
  margin-left: 18px;
  border: 0.5px solid #eee;
  border-radius: 5px;
  margin-right: 8px;
  background: #fff;
  width: 220px;
  img {
    width: 14px;
    height: 14px;
    margin-left: 3px;
    margin-right: 4px;
  }
}
</style>

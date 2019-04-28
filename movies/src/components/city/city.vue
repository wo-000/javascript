<template>
  <div id="city" ref="cityChoose">
    <div id="hot" class="city-title">
      <h4>热门城市</h4>
      <div class="city-list city-list-inline clearfix">
        <div
          class="city-item"
          v-for="item in hotCity"
          :key="item.id"
          @click="changeCity(item.cityId,item.name)"
        >{{item.name}}</div>
      </div>
    </div>
    <div class="cities">
      <div class="city-list" v-for="(item,key) in cities" :key="key" :ref="key+1">
        <h4>{{key}}</h4>
        <div class="city-list city-list-block clearfix">
          <div class="city-item" v-for="city in item" :key="city.id">{{city.name}}</div>
        </div>
      </div>
    </div>
    <div class="chooseABC">
      <div
        class="filterABC"
        v-for="(item,key) of cities"
        @click="moveCity(key)"
        @touchstart="start"
        @touchmove="move"
        @touchend="end"
        :ref="key"
        :key="key"
      >{{key}}</div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      hotCity: [],
      cities: {},
      keyIndex: 0,
      isMove: false
    };
  },
  updated() {
    document.body.style.position='relative'
     document.body.style.height='auto'
      document.body.style.overflow='scroll'
  },
  methods: {
    getCityInfo() {
      this.$axios
        .get("static/mock/city.json")
        .then(res => {
          this.hotCity = res.data.data.hotCities;
          this.cities = res.data.data.cities;
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    changeCity(cityId, cityName) {
      this.$store.dispatch("changeCityIdFun", cityId);
      this.$store.dispatch("changeCityFun", cityName);
      this.$router.back();
    },
    moveCity(key) {
      console.log(this.$refs[key + 1][0].offsetTop);
      document.documentElement.scrollTop = this.$refs[key + 1][0].offsetTop;
      document.body.scrollTop = this.$refs[key + 1][0].offsetTop;
    },
    start(e) {
      this.isMove = true;
    },
    move(e) {
      if (this.isMove) {
        this.keyIndex = Math.floor(
          (e.touches[0].clientY - this.$refs["A"][0].offsetTop - 100) / 16
        );
        if (this.keyIndex < 0 || this.keyIndex > this.abcIndex.length - 1) {
          return;
        }
        document.documentElement.scrollTop = this.$refs[
          this.abcIndex[this.keyIndex] + 1
        ][0].offsetTop;
        document.body.scrollTop = this.$refs[
          this.abcIndex[this.keyIndex] + 1
        ][0].offsetTop;
        // console.log(e.touches[0].clientY,this.$refs['A'][0].offsetTop,Math.floor((e.touches[0].clientY-this.$refs['A'][0].offsetTop-100)/16))
      }
    },
    end(e) {
      this.isMove = false;
    }
  },
  watch: {},
  created() {
    this.getCityInfo();
  },
  computed: {
    abcIndex() {
      let abcIndex = [];
      for (let i in this.cities) {
        abcIndex.push(i);
      }
      return abcIndex;
    }
  }
};
</script>
<style lang="scss" scoped>
#city {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 7;
  h4 {
    padding-left: 15px;
    line-height: 30px;
    font-size: 14px;
    font-weight: 400;
    background: #ddd;
  }
  .city-list-inline {
    background-color: #f5f5f5;
    padding-bottom: 8px;
    .city-item {
      float: left;
      background: #fff;
      width: 28%;
      height: 33px;
      margin-top: 15px;
      margin-left: 4%;
      padding: 0 4px;
      border: 1px solid #e6e6e6;
      border-radius: 3px;
      line-height: 33px;
      text-align: center;
      box-sizing: border-box;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .city-list-block {
    background-color: #f5f5f5;
    padding-right: 30px;
    .city-item {
      height: 44px;
      line-height: 44px;
      margin-left: 15px;
      border-bottom: 1px solid #c8c7cc;
    }
  }
}
.chooseABC {
  position: fixed;
  top: 100px;
  right: 0px;
  height: 100%;
  z-index: 3;
}
.filterABC {
  width: 30px;
  text-align: center;
}
.clearfix:after {
  content: " ";
  display: table;
  clear: both;
}
</style>

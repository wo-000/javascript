<template>
  <div class="filter-wrap" ref="filterwrap" @click.self="hideFilter">
    <div class="filter" ref="filter">
      <div class="nav-wrap filter-nav-wrap">
        <div class="tab mb-line-b">
          <div class="item" @click="showCity(0)" :class="isShow==0?'chosenTitle':''">
            <!--  -->
            全城
            <span class="drop"></span>
          </div>
          <div class="item" @click="showCity(1)" :class="isShow==1?'chosenTitle':''">
            品牌
            <span class="drop"></span>
          </div>
          <div class="item" @click="showCity(2)" :class="isShow==2?'chosenTitle':''">
            特色
            <span class="drop"></span>
          </div>
        </div>
        <div class="close-tab" ref="itemTab">
          <div class="tab-content">
            <div class="page special" v-if="isShow==2">
              <div id="special-content">
                <div class="item-title">特色功能</div>
                <div class="item-list">
                  <div
                    class="item"
                    :class="item.id==-1?'chosen':''"
                    v-for="item in this.brandData.service.subItems"
                    :key="item.id"
                  >{{item.name}}</div>
                  <!-- <div class="item chosen">全部</div>
                  <div class="item">可退票</div>
                  <div class="item">可改签</div>
                  <div class="item">会员卡</div>-->
                </div>
              </div>
              <div id="special-btn">
                <span class="btn" id="cancel-btn">重置</span>
                <span class="btn" id="confirm-btn">确定</span>
              </div>
            </div>
            <div class="page brand" v-if="isShow==1">
              <div id="brand-content" v-if="brandData.brand">
                <!-- <div class="item brand-list chosen" v-if="brandData.brand.subItems[0].id==-1">
                <span class="brand-name">全部</span>
                <span class="brand-count">2</span>
                </div>-->
                <div
                  class="item brand-list"
                  :class="item.id==-1?'chosen':''"
                  v-for="item in brandData.brand.subItems"
                  :key="item.id"
                >
                  <span class="brand-name">{{item.name}}</span>
                  <span class="brand-count">{{item.count}}</span>
                </div>
              </div>
            </div>
            <div class="page region" v-if="isShow==0">
              <div id="region-tab">
                <ul class="tab">
                  <li class="item" :class="chooseAreaNum==0?'chosen':''" @click="chooseArea(0)">商区</li>
                  <li class="item" :class="chooseAreaNum==1?'chosen':''" @click="chooseArea(1)">地铁站</li>
                </ul>
              </div>
              <div class="region-list" ref="regionList">
                <div id="region-sidenav">
                  <div id="district" v-if="brandData.district&&chooseAreaNum==0">
                    <div
                      class="district-li item"
                      v-for="(item,index) in brandData.district.subItems"
                      :key="item.id"
                      @click="chooseDistrict(item.id,index)"
                      :class="districtId==item.id?'chosen':''"
                    >{{item.name}}({{item.count}})</div>
                  </div>
                  <div id="subway" v-if="brandData.subway&&chooseAreaNum==1">
                    <div
                      class="district-li item"
                      v-for="(item,index) in brandData.subway.subItems"
                      :key="item.id"
                      @click="chooseSubway(item.id,index)"
                      :class="subwayId==item.id?'chosen':''"
                    >{{item.name}}({{item.count}})</div>
                  </div>
                </div>
                <div id="region-list-item">
                  <div id="filter-list" v-if="brandData.district&&chooseAreaNum==0">
                    <div
                      class="item chosen"
                      v-if="brandData.district.subItems[0].id==-1&&this.districtId=='-1'"
                    >
                      <span class="item-name">{{brandData.district.subItems[0].name}}</span>
                      <span class="item-count">{{brandData.district.subItems[0].count}}</span>
                    </div>
                    <div
                      class="item"
                      :class="areaFilter.subItems[index].id==-1?'chosen':''"
                      v-for="(item,index) in areaFilter.subItems"
                      :key="item.id"
                    >
                      <span class="item-name">{{item.name}}</span>
                      <span class="item-count">{{item.count}}</span>
                    </div>
                  </div>

                  <div id="filter-list" v-if="brandData.subway&&chooseAreaNum==1">
                    <div
                      class="item chosen"
                      v-if="brandData.subway.subItems[0].id==-1&&this.subwayId=='-1'"
                    >
                      <span class="item-name">{{brandData.subway.subItems[0].name}}</span>
                      <span class="item-count">{{brandData.subway.subItems[0].count}}</span>
                    </div>
                    <div
                      class="item"
                      :class="subwayFilter.subItems[index].id==-1?'chosen':''"
                      v-for="(item,index) in subwayFilter.subItems"
                      :key="item.id"
                    >
                      <span class="item-name">{{item.name}}</span>
                      <span class="item-count">{{item.count}}</span>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    brandData: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      isShow: 3,
      districtId: -1,
      subwayId: -1,
      areaFilter: [],
      subwayFilter: [],
      chooseAreaNum: 0
    };
  },
  methods: {
    showCity(num) {
      if (this.$route.path.indexOf("cinema") === -1) {
        this.$refs.filter.classList.add("filter-movie-detail");
        this.$refs.filterwrap.classList.add("filter-movie-wrap");
      }

      if (num != this.isShow) {
        this.isShow = num;
        document.getElementsByTagName("body")[0].style.height = "100%";
        document.getElementsByTagName("body")[0].style.width = "100%";
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
        document.getElementsByTagName("body")[0].style.position = "fixed";
        this.$refs["filter"].style.height = "100%";
        // this.$refs['itemTab'].style.height = (this.$refs["filter"].clientHeight - 180) +'px';
        if (num == 0) {
          this.$nextTick(function() {
            this.$refs.regionList.style.height =
              this.$refs["filter"].clientHeight - 230 + "px";
          });
        }

        // this.$refs.regionList.style.height = (this.$refs["filter"].clientHeight - 230) +'px';
        // document.getElementById('#region-list').style.height= (this.$refs["filter"].clientHeight - 240) +'px';
        console.log(this.$refs["filter"].style.height);
        // this.$refs['regionList'].style.height = '100%'
      } else {
        this.isShow = 3;
        document.getElementsByTagName("body")[0].style.height = "auto";
        document.getElementsByTagName("body")[0].style.overflow = "auto";
        document.getElementsByTagName("body")[0].style.position = "relative";
        this.$refs["filter"].style.height = "auto";

        this.$refs.filter.classList.remove("filter-movie-detail");
        this.$refs.filterwrap.classList.remove("filter-movie-wrap");
        // this.$refs['itemTab'].style.height = 'auto';
      }
    },
    chooseDistrict(id, index) {
      this.districtId = id;
      this.areaFilter = this.brandData.district.subItems[index];
      // console.log(this.brandData, id, this.brandData.district.subItems[index]);
    },
    chooseArea(num) {
      this.chooseAreaNum = num;
    },
    chooseSubway(id, index) {
      this.subwayId = id;
      this.subwayFilter = this.brandData.subway.subItems[index];
      // console.log(this.brandData, id, this.brandData.district.subItems[index]);
    },
    hideFilter() {
      this.isShow = 3;
      document.getElementsByTagName("body")[0].style.height = "auto";
      document.getElementsByTagName("body")[0].style.overflow = "auto";
      document.getElementsByTagName("body")[0].style.position = "relative";
      this.$refs["filter"].style.height = "auto";
      this.$refs.filter.classList.remove("filter-movie-detail");
      this.$refs.filterwrap.classList.remove("filter-movie-wrap");
    }
  },
  mounted() {
    console.log(this.brandData);
    if (this.$route.path.indexOf("cinema") != -1) {
      this.$refs.filter.classList.add("filter-cinema");
    } else {
      this.$refs.filter.classList.remove("filter-cinema");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/style/css/common";
.filter-cinema {
  position: fixed;
  top: 92px;
  left: 0px;
  right: 0px;
  z-index: 2;
  background: rgba(0, 0, 0, 0.4);
}
.filter-movie-wrap {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 4;
}
.filter-movie-detail {
  position: fixed;
  top: 50px;
  left: 0px;
  right: 0px;
  z-index: 2;
  background: rgba(0, 0, 0, 0.4);
}
.nav-wrap.filter-nav-wrap {
  width: 100%;
  height: 40px;
  z-index: 10;
  background-color: #fff;
  .tab {
    display: flex;
    border-bottom: 1px solid $borderColorLight;
    .item {
      -webkit-box-flex: 1;
      flex: 1;
      text-align: center;
      line-height: 40px;
      position: relative;
      font-size: 13px;
      color: $fontColor;
      @include line-ellipsis;
      &::after {
        content: " ";
        position: absolute;
        width: 1px;
        right: 0px;
        top: 10px;
        background: $borderColorLight;
        height: 20px;
      }
      &:last-child::after {
        background: none;
      }
      .drop {
        display: inline-block;
        position: absolute;
        top: 18px;
        width: 0;
        height: 0;
        margin-left: 4px;
        border: 4px solid transparent;
        border-top-color: #b0b0b0;
      }
    }
    .chosenTitle {
      color: #e54847;
      .drop {
        border-bottom-color: #f03d37;
        border-top-color: transparent;
        top: 14px;
      }
    }
  }
  .page.region {
    #region-list-item {
      width: 65%;
      height: 100%;
      float: right;
      overflow: scroll;
    }
    #filter-list {
      background: #f5f5f5;
      .item {
        position: relative;
        height: 45px;
        line-height: 45px;
        padding: 0 0 0 25px;
        span {
          display: inline-block;
        }
        span.item-name {
          width: 80%;
          font-size: 12px;
          color: #333;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        span.item-count {
          float: right;
          width: 20px;
          margin-right: 10px;
          color: #8f9296;
          font-size: 12px;
          text-align: right;
        }
      }
      .chosen {
        color: #f03d37;
        &::before {
          content: "√";
          display: block;
          position: absolute;
          left: 12px;
          width: 11.5px;
          height: 8px;
          color: #dd403b;
        }
        span.item-name {
          color: #f03d37;
        }
        span.item-count {
          color: #f03d37;
        }
      }
    }
    #region-tab {
      height: 44px;
      ul {
        padding: 0;
        margin: 0;
        li {
          position: relative;
          display: inline-block;
          padding: 0 10px;
          width: 50%;
          height: 100%;
          line-height: 44px;
          text-align: center;
        }
        li.chosen {
          color: #f03d37;
          &::after {
            content: "";
            position: absolute;
            display: block;
            bottom: 0;
            left: 0;
            width: 90% !important;
            border-top: 2px solid #f03d37;
            width: 0.03125rem;
            right: 0;
            top: 42px;
            background: none;
            height: 2px;
          }
        }
      }
    }
    .region-list {
      background: #f5f5f5;
      // height: 380px;
      #region-sidenav {
        width: 35%;
        height: 100%;
        float: left;
        overflow: scroll;
        #district,
        #subway {
          min-height: 100%;
          background: #fff;
          .district-li {
            height: 44px;
            padding-left: 10px;
            line-height: 44px;
            font-size: 12px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
          .chosen {
            color: #f03d37;
            background: #f5f5f5;
          }
        }
      }
    }
  }
  .close-tab {
    position: relative;
    width: 100%;
    background: #fff;
    z-index: 100;
    overflow: scroll;
    .tab-content {
      font-size: 15px;
      .page {
        position: relative !important;
        background-color: #fff;
        overflow: auto;
        z-index: 999;
      }
      .page.brand {
        min-height: 150px;
        max-height: 300px;
        #brand-content .brand-list {
          position: relative;
          line-height: 44px;
          height: 44px;
          padding: 0 15px 0 26px;
          border-bottom: 1px solid #e5e5e5;
          color: #333;
          font-size: 12px;
          .brand-count {
            text-align: right;
          }
          span {
            display: inline-block;
            width: 49%;
          }
        }
        .item.chosen .brand-count {
          color: #dd403b;
          text-align: right;
        }
        .item.chosen {
          &::before {
            content: "√";
            display: block;
            position: absolute;
            left: 12px;
            width: 11.5px;
            height: 8px;
            color: #dd403b;
          }
          .brand-name {
            color: #dd403b;
          }
        }
      }
      .page.special {
        min-height: 208px;
        overflow: hidden;
      }
      .item-title {
        margin-left: 12px;
        margin-top: 11px;
        font-size: 15px;
      }

      #special-content {
        min-height: 150px;
        max-height: 270px;
        overflow: scroll;
        .item.chosen {
          background: #fcf0f0;
          color: #f03d37;
          border: 1px solid #f03d37;
        }
        .item-list {
          margin: 0 12px 12px;
          &::after {
            display: block;
            clear: both;
            content: "";
          }
          .item {
            float: left;
            width: 21.3%;
            margin-right: 3%;
            margin-top: 10px;
            line-height: 30px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: center;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 11px;
          }
        }
      }
      #special-btn {
        height: 60px;
        width: 100%;
        border-top: 1px solid #e5e5e5;
        margin-top: 10px;
        background: #fafafa;
        .btn {
          display: inline-block;
          height: 34px;
          width: 21.3%;
          margin: 13px 11px;
          border: 1px solid #e5e5e5;
          border-radius: 6px;
          text-align: center;
          line-height: 34px;
          font-size: 14px;
        }
        #confirm-btn {
          float: right;
          background: #f03d37;
          border: 1px solid #f03d37;
          color: #fff;
        }
      }
    }
  }
  .clearfix:after {
    content: " ";
    display: table;
    clear: both;
  }
}
</style>

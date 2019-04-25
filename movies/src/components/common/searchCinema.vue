<template>
  <div>
    <div class="list" v-if="cinemasList.length>0">
      <div class="cinema cell" v-for="item in cinemasList" :key="item.id">
        <div class="info">
          <p class="name-price">
            <span class="name one-line">{{item.nm}}</span>
            <span class="sell-price">
              <span class="price">{{item.sellPrice}}</span>
              元起
            </span>
          </p>
          <p class="address one-line">{{item.addr}}</p>
          <p class="feature-tags">
            <span>座</span>
            <span>杜比全景声厅</span>
            <span>改签</span>
            <span class="featrue" v-if="item.snack==1">小吃</span>
            <span class="featrue" v-if="item.vipDesc!==''">折扣卡</span>
          </p>
        </div>
        <div class="distance">{{item.distance}}</div>
      </div>
    </div>
    <div class="more-result">查看全部{{cinemasTotal||0}}家电影院</div>
  </div>
</template>
<script>
export default {
  props:{
    cinemasList:{
      type:Array,
      default:[]
    },
    cinemasTotal:{
      type:Number,
      default:0
    }
  }
};
</script>
<style lang="scss" scoped>
.list {
  border-top: 1px solid #e6e6e6;
  padding-left: 15px;
  .cinema {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 15px 15px 15px 0;
    &:last-child {
      border-bottom: none;
    }
    .name-price {
      font-size: 16px;
      color: #000;
      margin-bottom: 6px;
      display: -webkit-box;
      display: flex;
    }
    .info {
      -webkit-box-flex: 1;
      flex: 1;
      overflow: hidden;
    }
    .name-score {
      font-size: 16px;
      color: #222;
      display: -webkit-box;
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      margin-bottom: 2px;
    }
    .distance {
      font-size: 13px;
      color: #999;
    }
    .address {
      font-size: 13px;
      color: #999;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .sell-price {
      font-size: 11px;
      color: #999;
      white-space: nowrap;
      margin-left: 10px;
    }
    .price {
      font-size: 17px;
      color: #ef4238;
    }
    .feature-tags{
      margin-top: 7px;
      span {
        border: 1px solid #589daf;
        color: #589daf;
        position: relative;
        display: inline-block;
        padding: 0 3px;
        height: 17px;
        line-height: 15px;
        border-radius: 2px;
        font-size: 10px;
      }
      .featrue {
        color: #f90;
        border-color: #f90;
      }
    }
  }
  .version {
    background-size: contain;
    background-repeat: no-repeat;
    height: 14px;
    margin-left: 5px;
    display: inline-block;
  }
}
.more-result {
  text-align: center;
  line-height: 44px;
  height: 50px;
  font-size: 15px;
  color: #ef4238;
  border-top: 1px solid #e6e6e6;
  border-bottom: 6px solid #f5f5f5;
}

</style>


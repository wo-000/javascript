<template>
  <div class="cinema-list">
    <div class="list-wrap">
      <div class="item mb-line-b" v-for="item in cinemasData" :key="item.id">
        <div class="title-block box-flex middle">
          <div class="title line-ellipsis">
            <span>{{item.nm}}</span>
            <span class="price-block">
              <span class="price">{{item.sellPrice}}</span>
              <span class="q">元起</span>
            </span>
          </div>
          <div class="location-block box-flex">
            <div class="flex line-ellipsis">{{item.addr}}</div>
            <div class="distance">{{item.distance}}</div>
          </div>
          <div class="flex"></div>
          <div class="label-block">
            <div class="allowRefund" v-if="item.tag.allowRefund==1">退</div>
            <div class="endorse" v-if="item.tag.endorse==1">改签</div>
            <div class="snack" v-if="item.tag.snack==1">小吃</div>
            <div class="vipTag" v-if="item.tag.vipTag">折扣卡</div>
            <div class="hallType" v-for="(typeItem,index) in item.tag.hallType" :key="index" >
              {{typeItem}}
            </div>
          </div>
          <div class="discount-block"  v-if="item.promotion.cardPromotionTag">
            <div>
              <div class="discount-label normal card">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg=="
                  alt
                >
              </div>
              <div class="discount-label-text" >{{item.promotion.cardPromotionTag}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    cinemasData:{
      type:Array,
      default:[]
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/style/css/common";
.cinema-list {
  margin-top: 2px;
  .item {
    padding: 13px 0 13px 0;
    margin: 0 15px;
    background-color: #fff;
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid $borderColorLight;
    .box-flex {
      display: -webkit-box;
      display: flex;
    }
    .title-block {
      display: block;
      .title {
        height: 23px;
        line-height: 23px;
        font-size: 16px;
        color: #000;
        @include line-ellipsis;
      }
      .price-block {
        padding-top: 9px;
        padding-left: 3px;
        .price {
          font-size: 18px;
          color: #f03d37;
        }
        .q {
          margin-left: 3px;
          font-size: 11px;
          color: #f03d37;
        }
      }
    }
    .location-block {
      margin-top: 6px;
      font-size: 13px;
      color: #666;
      .flex {
        -webkit-box-flex: 1;
        flex: 1;
        @include line-ellipsis;
      }
      .distance,
      .region {
        margin-left: 5px;
      }
    }
    .label-block {
      height: 17px;
      line-height: 17px;
      margin-top: 4px;
      margin-bottom: 4px;
      overflow: hidden;
      font-size: 0;
      flex-shrink: 0;
      & > div {
        position: relative;
        display: inline-block;
        padding: 0 3px;
        height: 15px;
        line-height: 15px;
        border-radius: 2px;
        font-size: 10px;
        margin-right: 6px;
      }
      .allowRefund,
      .endorse,
      .hallType {
        color: #589daf;
        border: 1px solid #589daf;
      }
      .snack,
      .vipTag {
        color: #f90;
        border: 1px solid #f90;
      }
    }
    .discount-block {
      color: #999;
      margin-bottom: 4px;
      .discount-label {
        width: 15px;
        height: 14px;
        position: relative;
        top: 3px;
        float: left;
        margin-right: 6px;
        img {
          width: 100%;
        }
        .discount-label-text {
          margin-left: 0;
          font-size: 11px;
          display: inline-block;
        }
      }
    }
  }
  .box-flex:not(.column).middle,
  .inline-flex:not(.column).middle {
    -webkit-box-align: center;
    align-items: center;
  }
}
</style>

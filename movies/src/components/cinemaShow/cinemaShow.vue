<template>
  <div class="cinema-show">
    <header-top :title="title" :isShow="isShow"></header-top>
    <div class="cinema-info">
      <div class="title line-ellipsis">{{title}}</div>
      <div class="location line-ellipsis">{{addr}}</div>
      <div class="location-icon">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAsCAYAAADmZKH2AAAAAXNSR0IArs4c6QAACAVJREFUWAm1mQtsVEUXx8/cpYCiFPFZjW+UaARNEL+IUYMVQbCo3UJbQUV8JKDRfCq+jdWIRo3GGBMfiKJY2wItggj4Csa3+AxGRRNFUT/8olbbQogtu+Pv3O2Mt7t32y2lk5RzZs5j/nPmzJm5i5E+tFnL7bC2lIyQlJSIlRJrZG8j8qexssUEsmW3AfLdc+Xmj52dAl+9a9OW2GNtSsoAMgXLcdZKIq8HIxag620gqxJGVi2dbj7PqxsjKBgcoE5Kp2U+YM6M8VPQkDHyHmBvXVZt3izEoEdwgBqRSsmDOJua7ZDJUmznBjHyM/RXnP2eNjIcegD9g9A/3ooUxdi9HgRyLZH8IlsW7XcLDmBTiFYt0Sp2Rhh0AKaJsZWJhKxlgmYny6YzVtuh7VvlrFRayojYdIAOdjosbDs+LmuqNi+4sWwaC85aa5JL5FaTljtxGKgRimn+qSUONY1J8322o576LPSgdEpuQ+/SaDQDIw9yeG5kkalsH7HgkvX2XlZ1k1NG6fsgIcneJrSzj9LKent0h0gj236cG8f/gsZqc4XrO5oDrrzOXoCw1isYeZX8qO5u+5xuofTCV+yQbc2yCP0KZ0P0rmmsNI+4vtIu4FjV2B1W3nK5QV68OKpSkjWGDe6HlqyzC5lrdgiEw0UQziYIr7mpwnzSjubZDhFVDpMW1Bt230tm9hcwnZNUmQN5R3nSKMHhe4rcHKh9bR7ctAapRGGUDhKxFlSmLp5otmm/vxpRaufElzPfrzoH8x8CQJ974baCVlF/iXCkKqF8R2OVuUv5nhq2emOcx41xArr78Pcn/JcmISsbK8zHPdmrPNlgr7RpebRTdwuAjwT49gE6gOCcCLDmwUPl4U7FvGRmoy3Z3iGPUqDLQyXywTcr5fi8nVP/BhPMbagy33pZDEM5WUBSz8PFoYhL8KmHcmG4rQxOjNg8VjvZtEb6OWxymR0NsE9ZUAZYjkZmAHkpB+yj8gY7Po9KOKzby275gMCHeFzOTXDGbMkax8fRC5vsfrJDVjPxAU6Os1VaCvibBD+XGlDPXxhL/hnK7bBc65vTj6PYRuctrbE2MFV19rB2kU2hgZG20fvL8JrxenDjG8f/SSa8XKUkbCtgZiyrMquytYnWKdwpSxg/sFO2lqvq7Gy9aL+83m5mSQfrmCmSsUFHkDkEoZKVD7oDpu839GaFuvwDyDlxwFTeVGneZVtmsABXIyf1GD2bKStqT3hGBiSuThg2ovCb4+NoW7uUAqhIZeh+0d2lrTrh08jIK8prYzu6jRwp9XtGk4UbGRZwUjw4BC1OGEcBdpgfJ8qe74Yh39534i72bjBKjfzluxZw7E3B4CJbpAnnDpP3l4fxL2WAgi9/C9ISrRLFAeH79xboCjTHC1H+ITJ4coTPy+Lf65EKm/IqZgT+3ai4Ai7bX7yBkSM8H8PsOUheJ2J/q4hSciyVfXaMmh9CPpFQ+TJFCFd7YQwDID9/YOWXIJWQTyN642rW2fDWiIx59ulzTRtb85QfSMsjPLEqfT/CcK1N4LA9x0aSDeEBWsFN8V1EJYdlwae5QereZ6Eh18yPCA5RAYNTeVe95JSyKZMO5x7+GP3DnYztWgdojepGwBxBBE5DXubk0D+4L8dyE+Td1oo6O46a867aAKqVF8vwMKnpLPWOrMzzfAzDBM0yQCYDaLMTA2Q8juenrTRCH4gBVtYdMPWD3fXOH3Q5+qkQHLmwyAlwfCrROcn14yivjY0Dh8gYAC5mYfiNb8hXyEAZw0S+nMRpclcfhZ9znYyoPaM8Y5nG1up9GRZJnL7EkynnU9DpRikLOZxtVt0T+NuHA9BMMn/FR/RKcuzrqG4+nmvradLhkk75eor7f5T34PSJ3sHXuXNA2ZjJ1VTr+v1FWdwknkj+0ic39am+Vufz4LQTXQHRayniZVxfbX5SWX+0i5rs3lv/Fv2wLlH/2TsW5pybeI+BMg+F8H5li4s7jDyr3xZOvqvptnZ5Ap8O2FaCcWV0ji7g9BchkFxMPEmdsNCO59vigajBruLJ8ZsIQNL7MzIne5e6gFNF8mwN0bvfGVEeruNtdoPr7wpK4b4UYPc6X8y3kNr6vOs7mgNOBaOmyy0Y/Fv70nJfRb29xBn1hXKlnYdv3U7XXuMKnes6URoLroaPaAxm4uQNp8w+L+BkVbj+zlDsJ1AV64ha5qVi5CP9NOR08hjPbbHgVE0NineT8wH4ifbVIT/ENJAr12q/t00fCdi/zCIzH+1Gvhk0RCYzz9Z8vno8iax2X4rs24Ab6Zxg9DhV/Coc5/wy5HQc1dM+rZ6rTeRmN8aB+4n39KlNSfOjH4thegSnNp0A1wBwTMTH2mG7y3R9qUTGurCz1tnBbf+XRdj5lwsTbmRhE1nY5i7KMZ2CwKnd7BV2z5btspyJSp0fjDcUiZyTXQJUrgui8q+APdnpQ9cP2kOm1JUZ/60QkeWweXMuW1MjxCHR18hiJyN/RpPJHwLkdDemlIv8RFLhQ9goMP0ltLRQYOqn4Mipsmsk938p0/o0Ck8dTvgpWO4pKZa7/9cqVyObD3CCSqOg8xC4a2mV3GkMr75etJ0Cp/6J1hlEpx6A+7r5iGoLff8dgPNWPoMupsC+6HR6Q3canE7S+WPO4mge+smNfJAI5AISf5Mf6yXTJ3A6l5aKigbRbb6NPdtLo8V/ijw0ej+Z392vB4Xg7DM4NwnbnOC785jiEfLNkycafpPue/sHSyPizI2qhfQAAAAASUVORK5CYII="
        >
      </div>
    </div>
    <div class="tuan-wrap" v-if="snacksData.length>0">
      <div class="gap" style="height: 10px; background-color: #f0f0f0;"></div>
      <div class="tuan-list">
        <div class="tuan-title mb-line-b">影院超值套餐</div>
        <div class="tuan-item mb-line-b" 
          v-for="(item,index) in snacksData"
          :key="index"
        >
          <img
            data-ui-type="image-viewer"
            src="//p1.meituan.net/440.0/deal/18660aa9cc5cbb609d5d8d206b40617348333.jpg"
          >

          <div
            class="item-info"
          >
            <div class="title">
              <span v-if="item.recommendPersonNum==2">双人</span>
              <span v-if="item.recommendPersonNum==1">单人</span>
              {{item.title}}
            </div>

            <div class="sell-num">{{item.curNumberDesc}}</div>
            <div class="price">
              <span class="sell-price">
                <span>¥</span>
                <span class="num">{{item.price}}</span>
              </span>
            </div>
            <div class="buy-btn">去购买</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderTop from "@/components/common/header";
export default {
  data() {
    return {
      title: "",
      addr:'',
      isShow: true,
      cinemaDetailData: {},
      snacksData:[]
    };
  },
  components: {
    HeaderTop
  },
  methods: {
    getCinemaDetail() {
      console.log(this.$route);
      this.$axios
        .get(`/api/ajax/cinemaDetail?cinemaId=${this.$route.params.id}`)
        .then(res => {
          this.cinemaDetailData = res.data;
          this.title = res.data.cinemaData.nm;
          this.addr = res.data.cinemaData.addr;
          this.snacksData=res.data.dealList.dealList;
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getCinemaDetail();
  }
};
</script>
<style lang="scss" scoped>
.cinema-show{
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 6;
  background: #fff;
  min-height: 100%;
}
.cinema-info {
  position: relative;
  padding: 15px 100px 15px 15px;
  padding-top: 60px;
  .title {
    font-size: 17px;
    line-height: 24px;
    font-weight: 700;
    color: #333;
  }
  .location {
    margin-top: 2px;
    font-size: 13px;
    line-height: 18.5px;
    color: #999;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .location-icon {
    position: absolute;
    right: 0;
    top: calc(50% + 20px);
    width: 70px;
    height: 31px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    border-left: 1px solid #d8d8d8;
    text-align: center;
    img {
      display: inline-block;
      width: 19px;
      height: 22px;
      margin-top: 5px;
    }
  }
}
.tuan-wrap {
  .tuan-list {
    position: relative;
    margin: 0 0 0 15px;
  }
  .tuan-title {
    line-height: 45px;
    height: 45px;
    font-size: 15px;
    color: #666;
  }
  .tuan-item {
    cursor: pointer;
    position: relative;
    width: 100%;
    padding: 13px 0;
    overflow: hidden;
    border-top: 1px solid #f1f1f1;
    img {
      display: inline-block;
      width: 92px;
      height: 92px;
      float: left;
    }
    .item-info {
      position: relative;
      margin: 0 15px 0 102px;
      height: 92px;
      overflow: hidden;
      .title {
        font-size: 14px;
        line-height: 18px;
        color: #333;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        span {
          display: inline-block;
          vertical-align: top;
          margin-top: 1px;
          margin-right: 7px;
          padding: 0 4px;
          font-size: 10px;
          line-height: 15px;
          height: 15px;
          background: #f90;
          border-radius: 2px;
          color: #fff;
        }
      }
      .sell-num {
        display: inline-block;
        position: absolute;
        bottom: 34px;
        right: 0;
        line-height: 16px;
        height: 16px;
        font-size: 12px;
        color: #999;
      }
      .price {
        position: absolute;
        bottom: 0;
        left: 0;
        .sell-price {
          color: #f03d37;
          display: inline-block;
          span {
            font-size: 14px;
          }
          .num {
            font-size: 17px;
          }
        }
      }
      .buy-btn {
        position: absolute;
        right: 0;
        bottom: 0;
        display: inline-block;
        padding: 0 8px;
        height: 27px;
        line-height: 27px;
        font-size: 12px;
        border-radius: 3px;
        color: #fff;
        background-color: #f03d37;
      }
    }
  }
}
</style>

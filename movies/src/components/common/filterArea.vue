<template>
  <div class="filter">
    <div class="nav-wrap filter-nav-wrap">
      <div class="tab mb-line-b">
        <div class="item">
          <!-- chosenTitle -->
          全城
          <span class="drop"></span>
        </div>
        <div class="item">
          品牌
          <span class="drop"></span>
        </div>
        <div class="item">
          特色
          <span class="drop"></span>
        </div>
      </div>
      <div class="close-tab">
        <div class="tab-content">
          <div class="page special" style="display:none">
            <div id="special-content">
              <div class="item-title">特色功能</div>
              <div class="item-list">
                <div class="item chosen">全部</div>

                <div class="item">可退票</div>

                <div class="item">可改签</div>

                <div class="item">会员卡</div>
              </div>
            </div>
            <div id="special-btn">
              <span class="btn" id="cancel-btn">重置</span>
              <span class="btn" id="confirm-btn">确定</span>
            </div>
          </div>
          <div class="page brand" style="display:none">
            <div id="brand-content" v-if="brandData.brand">
              <!-- <div class="item brand-list chosen">
                <span class="brand-name">全部</span>
                <span class="brand-count">2</span>
              </div> -->
              <div class="item brand-list" v-for="item in brandData.brand.subItems" :key="item.id">
                <span class="brand-name">{{item.name}}</span>
                <span class="brand-count">{{item.count}}</span>
              </div>
            </div>
          </div>
          <div class="page region" style="display:none">
            <div id="region-tab">
              <ul class="tab">
                <li class="item chosen">商区</li>
                <li class="item">地铁站</li>
              </ul>
            </div>
            <div id="region-list">
              <div id="region-sidenav">
                <div id="district">
                  <div class="district-li item chosen">全部(2)</div>

                  <div class="district-li item">鼓楼广场(1)</div>
                </div>
                <div id="subway" style="display:none"></div>
              </div>
              <div id="region-list-item">
                <div id="filter-list">
                  <div class="item chosen">
                    <span class="item-name">全部</span>
                    <span class="item-count">1</span>
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
</template>
<script>
export default {
  props:{
    brandData:{
      type:Object,
      default:{}
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/style/css/common";
.filter {
  padding-top: 95px;
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
        span{
          display: inline-block;
        }
        span.item-name {
          width: 80%;
          font-size: 14px;
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
      .chosen{
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
    #region-list {
      background: #f5f5f5;
      height: 380px;
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
            font-size: 14px;
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
        max-height: 352px;
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

<template>
  <div class="wash">
    <div class="wash-list">
      <div class="most-expected">
        <p class="title">近期最受期待</p>
        <div class="most-expected-list">

          <div class="expected-item" v-for="(item,index) in washData" :key="item.id">
            <div class="poster default-img-bg">
              <img :src="imgsUrl[index]" onerror="this.style.visibility='hidden'">
              <span class="wish-bg"></span>
              <span class="wish"><span class="wish-num">{{item.wish}}</span>人想看</span>
              <!-- <div class="toggle-wish">
                <span></span>
              </div> -->
            </div>
            <h5 class="name line-ellipsis">{{item.nm}}</h5>
            <p class="date">{{item.comingTitle}}</p>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  props:{
    washData:{
      type:Array,
      default:[]
    }
  },
  data(){
    return{
    }
  },
  watch: {
    washData(){
      this.comingData=this.washData
    }
  },
  computed: {
    imgsUrl(){
      let arrImgs=[];
      for(let i=0;i<this.washData.length;i++){
        arrImgs.push(this.washData[i].img.split('w.h')[0]+'170.230'+this.washData[i].img.split('w.h')[1])
      }
      return arrImgs;
    }
  },
}
</script>
<style lang="scss" scoped>
@import '~@/style/css/common.scss';
.wash-list{
  border-bottom: 10px solid #f5f5f5;
  .most-expected {
    padding: 12px 0 12px 15px;
    background-color: #fff;
    .title {
      margin: 0 0 12px;
      font-size: 14px;
      color: #333;
    }
    .most-expected-list{
      overflow: scroll;
      white-space: nowrap;
      .expected-item {
        display: inline-block;
        width: 85px;
        overflow: hidden;
        margin-right: 10px;
        .wish-bg {
          display: inline-block;
          width: 100%;
          height: 35px;
          position: absolute;
          bottom: 0;
          background-image: -webkit-linear-gradient(top,rgba(77,77,77,0),#000);
          background-image: linear-gradient(-180deg,rgba(77,77,77,0),#000);
        }
        .poster {
          width: 85px;
          height: 115px;
          position: relative;
          margin-bottom: 6px;
          .wish {
            position: absolute;
            left: 4px;
            bottom: 2px;
            color: #faaf00;
            font-size: 11px;
            font-weight: 600;
          }
          img{
            width: 100%;
            height: 100%;
          }
        }
        .name {
          margin: 0 0 3px;
          font-size: 13px;
          color: #222;
          @include line-ellipsis;
        }
        .date {
          margin: 0;
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
} 
</style>

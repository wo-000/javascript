<template>
  <div>
    <div class="list" v-if="moviesList.length">
      <div class="movie cell" v-for="(item,index) in moviesList" :key="item.id">
        <img
          class="poster"
          v-lazy="imgsUrl[index]"
        >
        <div class="info">
          <div class="name-score">
            <p class="name">
              <span class="one-line">{{item.nm}}</span>
              <span class="version"></span>
            </p>

            <span class="score">
              <span class="num">{{item.sc}}</span>分
            </span>
          </div>
          <div class="detail-section">
            <div class="detail-items">
              <p class="ename one-line">{{item.enm}}</p>
              <p class="catogary">{{item.cat}}</p>
              <p class="release">{{item.rt}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="more-result">查看全部{{moviesTotal||0}}部影视剧</div>
  </div>
</template>
<script>
export default {
  props:{
    moviesList:{
      type:Array,
      default:[]
    },
    moviesTotal:{
      type:Number,
      default:0
    }
  },
  data(){
    return{

    }
  },
  watch: {
    
  },
  computed: {
    imgsUrl(){
      let arrImgs=[];
      for(let i=0;i<this.moviesList.length;i++){
        arrImgs.push(this.moviesList[i].img.split('w.h')[0]+'128.180'+this.moviesList[i].img.split('w.h')[1])
      }
      return arrImgs;
    }
  },
};
</script>
<style lang="scss" scoped>
.list {
  border-top: 1px solid #e6e6e6;
  padding-left: 15px;
  .movie {
    padding: 12px 0;
    min-height: 114px;
    border-bottom: 1px solid #e6e6e6;
    &:last-child {
      border-bottom: none;
    }
    .poster {
      background-color: #eee;
      width: 64px;
      height: 90px;
      float: left;
      margin-right: 10px;
    }
    .info {
      margin-right: 15px;
      margin-top: 1px;
    }
    .name-score {
      font-size: 16px;
      color: #222;
      display: -webkit-box;
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      margin-bottom: 2px;
      .name {
        display: -webkit-box;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-flex: 1;
        flex-grow: 1;
        max-height: 24px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        .one-line {
          display: inline-block;
          font-weight: 700;
          font-size: 17px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
      .score {
        color: #fa0;
        font-size: 10px;
        flex-shrink: 0;
        padding-left: 5px;
        .num {
          font-size: 16px;
        }
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
.detail-items {
  -webkit-box-flex: 1;
  flex-grow: 1;
  overflow: hidden;
  padding-right: 10px;
  margin-right: 48px;
  min-height: 27px;
  p {
    font-size: 13px;
    color: #666;
    margin-top: 2px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>


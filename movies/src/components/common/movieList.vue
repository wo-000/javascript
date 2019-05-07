<template>
  <div class="movie-info">
    <div class="item" 
      v-for="(item,index) in moviesData"
      :key="item.id"
      @click="detailHandle(item.id)"
      >
      <p class="group-date" v-if="item.comingTitle">{{item.comingTitle}}</p>
      <div class="main-block" v-if="item.globalReleased">
        <div class="avatar" >
          <div class="default-img-bg">
            <img v-lazy="imgsData1[index]" onerror="this.style.visibility='hidden'">		
          </div>
        </div> 
        <div class="mb-outline-b content-wrapper">
          <div class="column content">
            <div class="box-flex movie-title">
              <div class="title line-ellipsis ">{{item.nm}}</div>
            </div>
            <div class="detail column">
              <div class="score line-ellipsis"> 
                <span class="score-suffix">观众评 </span>
                <span class="grade">{{item.sc}}</span>
              </div>
              <div class="actor line-ellipsis">主演: {{item.star}}</div>
               <div class="show-info line-ellipsis">{{item.showInfo}}</div>
            </div>
          </div>
          <div class="button-block" data-id="1211727">
            <div class="btn normal"><span class="fix" data-bid="dp_wx_home_movie_btn">购票</span></div>
          </div>
        </div>
      </div>
      <div class="main-block" v-if="!item.globalReleased">
        <div class="avatar" >
          <div class="default-img-bg">
            <img v-lazy="imgsData1[index]" onerror="this.style.visibility='hidden'">		
          </div>
        </div> 
        <div class="mb-outline-b content-wrapper">
          <div class="column content">
            <div class="box-flex movie-title">
              <div class="title line-ellipsis ">{{item.nm}}</div>
            </div>
            <div class="detail column">
              <div class="wantsee score line-ellipsis"> 
                <span class="person">{{item.wish}} </span>
                <span class="p-suffix">人想看</span>
              </div>
              <div class="actor line-ellipsis">主演: {{item.star}}</div>
               <div class="show-info line-ellipsis">{{item.showInfo||item.rt+' 上映'}}</div>
            </div>
          </div>
          <div class="button-block" data-id="1211727">
            <div class="btn pre normal"  v-if="item.version!=''"><span class="fix" data-bid="dp_wx_home_movie_btn">预售</span></div>
            <div class="btn toggle-wish-btn normal" v-else><span class="fix" data-bid="dp_wx_home_movie_btn">想看</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    moviesData:{
      type:Array,
      default:[]
    }
  },
  data(){
    return {
      imgsData:[]
    }
  },
  watch: {
    moviesData(){
      this.imgsData=this.moviesData
    }
  },
  computed: {
    imgsData1(){
      let arrImgs=[];
      for(let i=0;i<this.imgsData.length;i++){
        arrImgs.push(this.imgsData[i].img.split('w.h')[0]+'128.180'+this.imgsData[i].img.split('w.h')[1])
      }
      // console.log(arrImgs)
      return arrImgs;
    }
  },
  methods: {
    detailHandle(id){
      this.$router.push({
        path:'/movies/'+id
      })
    }
  },
}
</script>
<style lang="scss" scoped>
@import '@/style/css/common.scss';
.item{
  padding: 0 15px;
}
.movie-info{
  padding-bottom:56px;
}
.detail .wantsee .person {
  color: #faaf00;
  font-size: 15px;
  font-weight: 600;
}
.group-date {
  padding-top: 15px;
  margin: 0;
  font-size: 14px;
  color: #333;
}
.main-block{
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: end;
  flex: 1;
  padding-top: 15px;
  .content-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 12px;
    height: 100px;
    border-bottom: 1px solid $borderColorLight
  }
  .movie-title{
    font-size: 17px;
    color: #333;
    font-weight: 700;
    padding-right: 5px;
    padding-bottom: 3px;
    width: 100px;
    @include line-ellipsis
  }
  .button-block{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 6px;
  }
  .detail.column{
    .line-ellipsis{
      font-size: 13px;
      color: #666;
      padding-top: 2px;
      width: 160px;
      @include line-ellipsis
    }
  }
  .grade{
    font-weight: 700;
    color: #faaf00;
    font-size: 15px;
  }
  .avatar{
    img{
      height:90px;
      width: 61px;
    }
  }
  .button-block{
    .btn{
      width: 47px;
      height: 27px;
      line-height: 28px;
      text-align: center;
      box-sizing: border-box;
      background-color: #f03d37;
      color: #fff;
      border-radius: 4px;
      white-space: nowrap;
      font-size: 12px;
      cursor: pointer;
    }
    .pre{
      background: #3c9fe6
    }
    .toggle-wish-btn{
      background-color: #faaf00;
    }
  }
}
</style>

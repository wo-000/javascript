<template>
  <div id="app">
    <!-- <span class="icon iconfont icon-sousuo"></span> -->

    <!-- 底部按钮 -->
    <div class="bottom-nav-bar">
      <div class="nav-icon-wrapper" :class="currentIndex==0?'current':''" @click="goMovies">
          <span class="icon iconfont icon-yingyuana"></span>
          <span class="nav-text">电影</span>
      </div>
      <div class="nav-icon-wrapper" :class="currentIndex==1?'current':''" @click="goMoviefile">
          <span class="icon iconfont icon-Moviefile"></span>
          <span class="nav-text">影院</span>
      </div>
      <div class="nav-icon-wrapper" :class="currentIndex==2?'current':''" @click="goUser">
          <span class="icon iconfont icon-user"></span>
          <span class="nav-text">我的</span>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      currentIndex:0
    }
  },
  components:{
  },
  methods: {
    goMovies(){
      this.$router.push({
        path:'/movies'
      })
      this.currentIndex=0;
    },
    goMoviefile(){
      this.$router.push({
        path:'/cinema'
      })
      this.currentIndex=1;
    },
    goUser(){
      this.$router.push({
        path:'/user'
      })
      this.currentIndex=2;
    }
  },
}
</script>

<style>
@import './style/css/reset.css';
@import './style/css/font.css';
.bottom-nav-bar{
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  border-top: .5px solid #d8d8d8;
  display: -webkit-box;
  display: flex;
  justify-content: space-around;
}
.nav-icon-wrapper{
  float: left;
  width: 25px;
  height: 51px;
  line-height: 51px;
  box-sizing: border-box;
  color: #f03d37;
  position: relative;
  text-align: center;
  -webkit-box-flex: 1;
  flex: 1;
}
.iconfont{
  display: block;
  width: 25px;
  height: 25px;
  margin: auto;
  background-repeat: no-repeat;
  background-size: 25px;
  font-size: 21px;
}
.iconfont::before{
  display: block;
  width: 25px;
  height: 25px;
  margin: auto;
  background-repeat: no-repeat;
  background-size: 25px;
  margin-top: -6px;
  color: #696969;
}
.nav-text{
  line-height: 12px;
  position: absolute;
  top: 33px;
  left: 0;
  right: 0;
  font-size: 10px;
  color: #696969;
}
.current .iconfont::before,.current .nav-text{
  color: #f03d37;
}
</style>

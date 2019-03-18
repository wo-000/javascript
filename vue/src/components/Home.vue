<template>
  <div class="home">
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in imgList" :key="item.id">
          <img :src="item.images.small" :alt="item.title" >
        </mt-swipe-item>
    </mt-swipe>

    <div class="grid">
      <my-ul>
        <li v-for="(item,index) in routers" :key="index">
          <router-link :to="item.route">
            <span :class="item.className"></span>
            <b>{{item.title}}</b>
          </router-link>
        </li>
      </my-ul>
    </div>

  </div>
   
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      imgList:[],
      routers:[
        {
          title:'news',
          className:'back-news',
          route:{
            name:'NewsList'
          }
        },{
          title:'图文',
          className:'back-pic',
          route:{
            name:'home'
          }
        },{
          title:'商品',
          className:'back-shop',
          route:{
            name:'home'
          }
        },{
          title:'留言',
          className:'back-feedback',
          route:{
            name:'home'
          }
        }, {
          title:'搜索',
          className:'back-seach',
          route:{
            name:''
          }
        }, {
          title:'联系',
          className:'back-lx',
          route:{
            name:''
          }
        }
      ]
    }
  },
  created() {
    this.$axios.get('/movie/top250')
    .then(res=>{
      this.imgList=res.data.subjects.slice(0,2);
    })
    .catch(err=>{

    })
  },
}
</script>

<style scoped>
.mint-swipe{
  height: 200px;
  width: 100%;
}
.mint-swipe img{
  width: 100%;
  height: 200px;
}
.grid span{
  display: inline-block;
  margin: 10px 0;
  width: 50px;
  height: 50px;
  background-repeat: round;
}
.back-news{
  background-image: url('../imgs/news.png');
}
.back-pic{
  background-image: url('../imgs/picShare.png');
}
.back-shop{
  background-image: url('../imgs/goodsShow.png');
}
.back-feedback{
  background-image: url('../imgs/feedback.png');
}
.back-seach{
  background-image: url('../imgs/search.png');
}
.back-lx{
  background-image: url('../imgs/callme.png');
}

a{
  text-decoration: none;
}
ul li{
  float: left;
  width: 33.333%;
  text-align: center;
}
ul li b{
  display: block;
  color: #666;
}
</style>

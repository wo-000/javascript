<template>
   <div>
       <nav-bar :title="title"></nav-bar>
       <div class="demo" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">

    <mt-loadmore :bottom-method="loadBottom" :auto-fill="autoFill" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul >
            <li v-for="news in newsLists" :key="news.id">
                <router-link :to="{name:'NewsDetail',params:{id:news.id}  }">
                    <img class="" :src="news.images.small">
                    <div >
                        <span>{{news.title}}</span>
                        <div class="news-desc">
                            <p>点击数:{{news.click}}</p>
                            <p>发表时间:{{news.year}}</p>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </mt-loadmore>
    </div>
   </div>
</template>
<script>
export default {
     data(){
        return {
            title:'新闻2',
            newsLists:[],
            allLoaded:false,
            autoFill:false,
            count:10,
            wrapperHeight:0
        }
    },
    methods: {
        loadBottom(){
            console.log("aaa");
            this.loadInfo(this.count)
            // this.$refs.loadmore.onBottomLoaded();
        },
        handleBottomChange(status){
            console.log(status)
        },
        loadInfo(count){
            this.$axios.get('/movie/top250?start=0&count='+this.count)
            .then(res=>{
                this.count+=10;
                console.log(res.data.subjects);
                this.newsLists=res.data.subjects;
            }).catch(err=>console.log(err))
        }
    },
    created() {
        this.loadInfo(this.count);
    },
     mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
    
}
</script>
<style scoped>
ul {
    margin:0;
    padding: 0;
}
p{
    margin:2px 30px 0px 0px;
}
.demo img{

    width: 42px;
    height: 42px;
    margin-right: 20px;

}
.demo{
    padding-bottom: 60px;
}
.demo a {
    display: flex;
    padding-left: 5px;
    align-items: center;
    margin: 5px 0px;
    border-bottom: 1px solid #dfdcdc;
    padding-bottom: 5px;
    color:black;
}

.news-desc{
    display: flex;
    color:#2196f3;
}
</style>

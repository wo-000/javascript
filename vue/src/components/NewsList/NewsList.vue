<template>
   <div>
       <nav-bar :title="title"></nav-bar>
       <div class="demo">
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
    </div>
   </div>
</template>
<script>
export default {
     data(){
        return {
            title:'新闻2',
            newsLists:[]
        }
    },
    methods: {
        
    },
    created() {
        this.$axios.get('/movie/top250')
        .then(res=>{
            console.log(res.data.subjects);
            this.newsLists=res.data.subjects;
        }).catch(err=>console.log(err))
    },
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

<template>
<div>
      <nav-bar :title="newsData.title"></nav-bar>
     <div class="demo">
      <ul >
            <p>{{newsData.mobile_url}}</p>
            <p>{{newsData.title}}</p>
            <p>{{newsData.summary}}</p>
        </ul>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            newsData:{}
        }
    },
    created() {
        this.$axios.get('/movie/subject/'+this.$route.params.id)
        .then(res=>{
            console.log(res.data);
            this.newsData=res.data;
        }).catch(err=>console.log(err))
    },
}
</script>
<style scoped>
ul{
    width: 100%;
    overflow: hidden;
}
</style>

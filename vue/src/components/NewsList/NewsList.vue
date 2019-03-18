<template>
   <div>
       <nav-bar :title="title"></nav-bar>
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
            console.log(res.data)
        }).catch(err=>console.log(err))
    },
}
</script>
<style scoped>

</style>

<template>
    <div class="content">
        <Banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></Banner>
        <DetailHeader></DetailHeader>
        <DetailList :list="list"></DetailList>
    </div>
</template>
<script>
import Aaxios from 'axios'
import Banner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
    name:'Detail',
    data(){
        return{
            sightName:'',
            bannerImg:'',
            gallaryImgs:[],
            list:[],
            
        }
    },
    components:{
        Banner,
        DetailHeader,
        DetailList
    },
    methods:{
        getDetailInfo(){
            // Aaxios.get('/api/detail.json?id=' + this.$route.params.id)
            Aaxios.get('/api/detail.json',{
                params:{
                    id:this.$route.params.id
                }
            }).then(this.handleGetDataSuc)
        },
        handleGetDataSuc(res){
            this.sightName=res.data.data.sightName;
            this.bannerImg=res.data.data.bannerImg;
            this.gallaryImgs=res.data.data.gallaryImgs;
            this.list=res.data.data.categoryList;
            console.log(res.data)
        }
    },
    mounted() {
        this.getDetailInfo()
    }
}
</script>
<style lang="stylus" scoped>
.content
    height: 50rem
</style>

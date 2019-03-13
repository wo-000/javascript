<template>
    <h1>
        <a :href="'#'+title" :style="'color:'+color">{{title}}</a>
        {{count}}
        <button @click="addHandle">+1</button>
        <button @click="reduceHandle">-1</button>
        <hr>
        <p>{{filtersList}}</p>
    </h1>
</template>
<script>
export default {
    props:{
        title:{
            type:String
        },
        color:{
            type:String
        }
    },
    computed: {
        count(){
            return this.$store.state.count
        },
        filtersList(){
            console.log(this.$store.getters.filterList)
            return this.$store.getters.filterList
        }
    },
    methods: {
        addHandle(){
            this.$store.commit('add')
        },
        reduceHandle(){
            this.$store.commit('reduce')
        }
    },
}
</script>
<style scoped>
    h1 a{
        color: #39f;
        font-size: 29px;
    }
</style>
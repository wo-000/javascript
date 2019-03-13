<template>
    <h1>
        <a :href="'#'+title" :style="'color:'+color">{{title}}</a>
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
}
</script>
<style scoped>
    h1 a{
        color: #39f;
        font-size: 29px;
    }
</style>
<template>
     <div>
        <mt-header :title="title">
            <div @click="backHandle" slot="left">
                <mt-button icon="back">back</mt-button>
            </div>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
    </div>
</template>
<script>
export default {
    name:'nav-bar',
    props:[
        'title'
    ],
    data(){
        return {

        }
    },
    methods: {
        backHandle(){
            this.$router.go(-1)
        }
    },
}
</script>
<style scoped>

</style>

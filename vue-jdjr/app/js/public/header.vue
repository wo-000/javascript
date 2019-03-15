<template>
    <div :class="$style.header">
        <span :class="$style.left">
            <em>注册</em>&nbsp;|&nbsp;<em>登陆</em>
        </span>
        <btn :class="$style.btnDownload">APP下载</btn>
    </div>
</template>
<script>
import btn from '../core/btn.vue'
export default {
    components:{
        btn,
    }
}
</script>
<style lang="scss" module>
.header{
    color: #666;
    height: 100px;
    line-height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    font-size: 32px;
    background: #fff url(//img12.360buyimg.com/jrpmobile/jfs/t1/10297/24/14008/46685/5c862b47Eef810b58/30b8c5430103352a.jpg) no-repeat center center;
    background-size: auto 50%;
    z-index: 2;
    .left{
        font-size: 28px;
        height: 30px;
        line-height: 30px;
        margin: 17px 0 0 18px;
    }
    .btnDownload{
        font-size: 24px;
        float: right;
        border-width: 0;
        line-height: 56px;
        height: 56px;
        padding: 0 10px;
        border-radius: 4px;
        margin: 28px 24px 0 0;
    }
}
</style>

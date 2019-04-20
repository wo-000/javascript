<template>
    <scroll ref="suggest"
          class="suggest"
          
  >
  <!-- :data="result"
          :pullup="pullup"
          :beforeScroll="beforeScroll"
          @scrollToEnd="searchMore"
          @beforeScroll="listScroll" -->
    <ul class="suggest-list">
      <!-- <li @click="selectItem(item)" class="suggest-item" v-for="item in result">
        <div class="icon">
          <i :class="getIconCls(item)"></i>
        </div>
        <div class="name">
          <p class="text" v-html="getDisplayName(item)"></p>
        </div>
      </li> -->
      <!-- <loading v-show="hasMore" title=""></loading> -->
    </ul>
    <div  class="no-result-wrapper">
        <!-- v-show="!hasMore && !result.length" -->
      <!-- <no-result title="抱歉，暂无搜索结果"></no-result> -->
    </div>
  </scroll>
</template>
<script>
import Scroll from '@/base/scroll/scroll'
export default {
    props:{
        query:{
            type:String,
            default:''
        }
    },
    data(){
        return{
            page:1
        }
    },
    components:{
        Scroll,
    },
    methods: {
        search(){
            console.log(this.query)
            var url=`/api/soso/fcgi-bin/search_for_qq_cp`
            this.$axios.get(url,{
                params:{
                    g_tk: 5381,
                    uin: 0,
                    format: 'json',
                    inCharset: 'utf-8',
                    outCharset: 'utf-8',
                    needNewCode: 1,
                    w: this.query,
                    t: 0,
                    flag: 1,
                    sem: 1,
                    aggr: 0,
                    perpage: 20,
                    n: 20,
                    p: 1,
                    remoteplace: 'txt.mqq.all'
                }
            })
            .then((res)=>{
                console.log(res)
            })
            .catch((error)=>{
                console.log(error)
            })
            // search(this.query,this.page)
        }
    },
    watch: {
        query(){
            this.search()
        }
    },
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .suggest
    height: 100%
    overflow: hidden
    .suggest-list
      padding: 0 30px
      .suggest-item
        display: flex
        align-items: center
        padding-bottom: 20px
      .icon
        flex: 0 0 30px
        width: 30px
        [class^="icon-"]
          font-size: 14px
          color: $color-text-d
      .name
        flex: 1
        font-size: $font-size-medium
        color: $color-text-d
        overflow: hidden
        .text
          no-wrap()
    .no-result-wrapper
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
<template>
  <div class="search">
    <div class="search-box-wrapper">
      <search-box ref="searchBox" @query="onQueryChange"></search-box>
    </div>

    <div ref="shortcutWrapper" class="shortcut-wrapper">
      <scroll class="shortcut">
        <div>
          <div class="hot-key">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li @click="addQuery(item.k)" :key="item.n" class="item" v-for="item in hotKey">
                <span>{{item.k}}</span>
              </li>
            </ul>
          </div>
        </div>
      </scroll>
    </div>

    <Suggest :query="query"></Suggest>
  </div>
</template>

<script type="text/ecmascript-6">
import SearchBox from '@/base/search-box/search-box'
import Suggest from '@/components/suggest/suggest'
import Scroll from '@/base/scroll/scroll'
export default{
  data(){
    return {
      hotKey:[],
      query:''
    }
  },
  components:{
    SearchBox,
    Scroll,
    Suggest
  },
  methods: {
    getHotKey(){
      let url='/api/splcloud/fcgi-bin/gethotkey.fcg'
      this.$axios.get(url)
      .then((res)=>{
        this.hotKey=res.data.data.hotkey.slice(0,10)
        console.log(res)
      })
      .catch((error)=>{
        console.log(error)
      })
    },
    onQueryChange(query){
      this.query=query
    },
    addQuery(k){
      this.$refs.searchBox.setQuery(k)
    }
  },
  mounted() {
    this.getHotKey()
  },
  watch: {
    query(newQuery){
      if (!newQuery) {
          setTimeout(() => {
            // this.$refs.shortcut.refresh()
          }, 20)
        }
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .search
    .search-box-wrapper
      margin: 20px
    .shortcut-wrapper
      position: fixed
      top: 178px
      bottom: 0
      width: 100%
      .shortcut
        height: 100%
        overflow: hidden
        .hot-key
          margin: 0 20px 20px 20px
          .title
            margin-bottom: 20px
            font-size: $font-size-medium
            color: $color-text-l
          .item
            display: inline-block
            padding: 5px 10px
            margin: 0 20px 10px 0
            border-radius: 6px
            background: $color-highlight-background
            font-size: $font-size-medium
            color: $color-text-d
        .search-history
          position: relative
          margin: 0 20px
          .title
            display: flex
            align-items: center
            height: 40px
            font-size: $font-size-medium
            color: $color-text-l
            .text
              flex: 1
            .clear
              extend-click()
              .icon-clear
                font-size: $font-size-medium
                color: $color-text-d
    .search-result
      position: fixed
      width: 100%
      top: 178px
      bottom: 0
</style>
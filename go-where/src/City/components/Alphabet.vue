<template>
  <ul class="list">
      <li class="item" 
          v-for="item of letters" 
          :key="item"
          @click="handleClick"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          :ref="item"
      >{{item}}</li>
  </ul>

</template>

<script>
export default {
  name: 'CityAlphabet',
  props:{
    cities:Object
  },
  data(){
    return {
      touchStatus:false,
      startY:0,
      timer: null
    }
  },
  updated() {
    this.startY=this.$refs['A'][0].offsetTop   //提升页面性能，滑动优化
  },
  computed: {
    letters(){
      const letters=[];
      for(let i in this.cities){
        letters.push(i)
      }
      return letters;
    }
  },
  methods:{
    handleClick(e){
      this.$emit('change',e.target.innerText)
    },
    handleTouchStart(){
      this.touchStatus=true;
    },
    handleTouchMove(e){
      if(this.touchStatus){

        if(this.timer){    //函数节流，减少handleTouchMove执行频率，提升性能
          clearTimeout(this.timer)
        }
        this.timer=setTimeout(()=>{
          
          const touchY=e.touches[0].clientY - 79;
          const index=Math.floor((touchY-this.startY)/20)
          if(index>=0&&index<this.letters.length){
            this.$emit('change',this.letters[index])
          }

        },10)

        /**
         * 
         * 未实行函数节流
         * 
         */

        // // const startY=this.$refs['A'][0].offsetTop;
        // const touchY=e.touches[0].clientY - 79;
        // const index=Math.floor((touchY-this.startY)/20)
        // if(index>=0&&index<this.letters.length){
        //   this.$emit('change',this.letters[index])
        // }
        // console.log(index)
      }
    },
    handleTouchEnd(){
      this.touchStatus=false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
  .list
    font-size .26rem
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>

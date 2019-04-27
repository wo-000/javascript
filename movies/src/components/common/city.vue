<template>
  <div class="city">
    <div class="city-entry">
      <span class="city-name" @click="changeCity">{{city}}</span><i class="city-entry-arrow"></i>
    </div>
  </div>
</template>
<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
  computed: {
    ...mapState({
      city:state=>state.city,
      cityId:state=>state.cityId
    })
  },
  methods: {
    changeCity(){
      this.$router.push({
        path:'/city'
      })
    }
  },
  mounted() {
    console.log(this.city,this.cityId)
  },
}
</script>
<style lang="scss" scoped>
  .city-entry{
    padding-left: 8px;
    font-size: 15px;
    color: #666;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .city-name{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 70px;
    max-width: 19.2vw;
  }
  .city-entry-arrow{
    margin-right: 5px;
    width: 0;
    height: 0;
    border: 4px solid #b0b0b0;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    display: inline-block;
    margin-left: 4px;
    margin-top: 5px;
  }
    
</style>

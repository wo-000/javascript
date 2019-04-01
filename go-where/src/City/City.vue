<template>
  <div>
        <CityHeader></CityHeader>
        <CitySearch></CitySearch>
        <CityList :cities="cities" :hotCities="hotCities" :letter="letter"></CityList>
        <CityAlphabet :cities="cities"  @change="letterChange"></CityAlphabet>
  </div>
</template>

<script>
import CityHeader from '@/City/components/Header'
import CitySearch from '@/City/components/Search'
import CityList from '@/City/components/List'
import CityAlphabet from '@/City/components/Alphabet'


import Axios from 'axios'
export default {
  name: 'City',
  data(){
      return{
          cities:{},
          hotCities:[],
          letter:''
      }
  },
  components:{
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
  },
  methods:{
    getCityInfo(){
        Axios.get('/api/city.json')
      .then(this.getCityInfoSuc)
    },
    getCityInfoSuc(res){
        this.cities=res.data.data.cities
        this.hotCities=res.data.data.hotCities
    },
    letterChange(letter){
        this.letter=letter
    }
  },
  mounted() {
      this.getCityInfo()
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

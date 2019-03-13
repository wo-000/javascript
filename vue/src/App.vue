<template>
  <div id="app">
    <div class="divTest">hello{{text}}</div>
    <v-title title="vue" :color="colorData"></v-title>
    <v-button @click="handleClick"></v-button>
    <router-view/>
  </div>
</template>

<script>
import vTitle from './components/title';
import vButton from './components/button';
export default {
  name: 'App',
  data(){
    return {
      text:',Vue',
      colorData:''
    }
  },
  components:{
    vTitle,
    vButton
  },
  methods: {
    handleClick(color){
      console.log(color)
      this.colorData=color;
    }
  },
}
</script>

<style scoped>
  .divTest{
    color: #f00;
    font-size: 20px;
  }
</style>

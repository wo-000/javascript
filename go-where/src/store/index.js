import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex);

// let defaultCity='北京';
// try{  //try  catch 防止部分浏览器禁用缓存或者使用隐身模式抛出异常
//     defaultCity=localStorage.city||'北京'
// }catch(e){

// }

export default new Vuex.Store({
    state,
    actions:{
        changeCity(ctx,city){
            ctx.commit('changeCity',city)
            // console.log(ctx,city)
        }
    },
    mutations,
})
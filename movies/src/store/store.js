import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
    cityId:10,
    city:'上海'
}

const getters={
    getCityId(state){
        return state.cityId
    },
    getCity(state){
        return state.city
    }
}

const mutations={
    changeCityId(state,cityNum){
        state.cityId=cityNum
    },
    changeCity(state,cityName){
        state.city=cityName
    }
}

const actions={
    changeCityIdFun:(context,cityNum)=>{
        context.commit('changeCityId',cityNum)
    },
    changeCityFun:(context,cityName)=>{
        context.commit('changeCity',cityName)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
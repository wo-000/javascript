import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
    
}

const mutations={
    add(state){
        state.count++
    },
    redus(state){
        state.count--
    }
}

const actions={
    add:({commit})=>{
        commit('add')
    },
    redus:({commit})=>{
        commit('redus')
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
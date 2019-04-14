import * as types from './mutation-types'

const matutations ={
    [types.set_singer](state,singer){
        state.singer=singer
    },
    [types.set_playing_state](state,flag){
        state.playing=flag
    },
    [types.set_full_screen](state,flag){
        state.fullScreen=flag
    },
    [types.set_playlist](state,list){
        state.playlist=list
    },
    [types.set_sequence_list](state,list){
        state.sequenceList=list
    },
    [types.set_play_mode](state,mode){
        state.mode=mode
    },
    [types.set_current_index](state,index){
        state.currentIndex=index
    }
}

export default matutations
import * as types from './mutation-types'

export const selectPlay=function({commit,state},{list,index}){
    commit(types.set_sequence_list,list)
    commit(types.set_playlist,list)
    commit(types.set_current_index,index)
    commit(types.set_play_mode,true)
    commit(types.set_full_screen,true)
}
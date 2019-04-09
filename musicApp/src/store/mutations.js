import * as types from './mutation-types'

const matutations ={
    [types.set_singer](state,singer){
        state.singer=singer
    }
}

export default matutations
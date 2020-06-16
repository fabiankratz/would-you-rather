import {LOAD_INITIAL_DATA} from '../actions/shared'

const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_INITIAL_DATA:
            return { ...state, ...payload.questions }
        default:
            return state
    }
}

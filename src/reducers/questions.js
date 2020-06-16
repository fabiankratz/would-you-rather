import {LOAD_INITIAL_DATA} from '../actions/shared'
import {ADD_QUESTION} from '../actions/shared'

const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_INITIAL_DATA:
            return { ...state, ...payload.questions }
        case ADD_QUESTION:
            return {
                ...state,
                [payload.question.id]: payload.question
            }
        default:
            return state
    }
}

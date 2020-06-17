import {LOAD_INITIAL_DATA} from '../actions/shared'
import {ADD_QUESTION} from '../actions/questions'
import {ANSWER_QUESTION} from '../actions/questions'

const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_INITIAL_DATA:
            return { ...state, ...payload.users }
        case ADD_QUESTION:
            return {
                ...state,
                [payload.question.author]: {
                    ...state[payload.question.author],
                    questions: state[payload.question.author].questions.concat([payload.question.id])
                }
            }
        case ANSWER_QUESTION:
            return {
                ...state,
                [payload.authedUser]: {
                  ...state[payload.authedUser],
                  answers: {
                    ...state[payload.authedUser].answers,
                    [payload.qid]: payload.answer
                  }
                }
            }
        default:
            return state
    }
}

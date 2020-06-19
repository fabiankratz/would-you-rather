import { LOAD_INITIAL_DATA } from "../actions/shared";
import { ADD_QUESTION } from "../actions/questions";
import { ANSWER_QUESTION } from "../actions/questions";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_INITIAL_DATA:
      return { ...state, ...payload.questions };
    case ADD_QUESTION:
      return {
        ...state,
        [payload.question.id]: payload.question,
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        [payload.qid]: {
          ...state[payload.qid],
          [payload.answer]: {
            ...state[payload.qid][payload.answer],
            votes: state[payload.qid][payload.answer].votes.concat([
              payload.authedUser,
            ]),
          },
        },
      };
    default:
      return state;
  }
};

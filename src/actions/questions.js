import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

export const ADD_QUESTION = "ADD_QUESTION";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    payload: {
      question,
    },
  };
}

export function handleAddQuestion(question) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return _saveQuestion({ ...question, author: authedUser })
      .then((formattedQuestion) => {
        dispatch(addQuestion(formattedQuestion));
      })
      .catch(console.log);
  };
}

export const ANSWER_QUESTION = "ANSWER_QUESTION";

function answerQuestion(questionAnswer) {
  return {
    type: ANSWER_QUESTION,
    payload: {
      ...questionAnswer,
    },
  };
}

export function handleAnswerQuestion(questionAnswer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return _saveQuestionAnswer({ ...questionAnswer, authedUser })
      .then(() => {
        dispatch(answerQuestion({ ...questionAnswer, authedUser }));
      })
      .catch(console.log);
  };
}

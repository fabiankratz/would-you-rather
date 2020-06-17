import {_getUsers, _getQuestions} from '../utils/_DATA'
import {setAuthedUser} from './authedUser'
import {handleAddQuestion, handleAnswerQuestion} from './questions'
import {showLoading, hideLoading} from 'react-redux-loading-bar'
import {startLoading, finishLoading } from './loading'

export const LOAD_INITIAL_DATA = 'LOAD_INITIAL_DATA'

function loadInitialData (data) {
    return {
        type: LOAD_INITIAL_DATA,
        payload: {
            ...data
        }
    }
}

export function handleLoadInitialData () {
    return (dispatch, getState) => {
        dispatch(startLoading())
        dispatch(showLoading())
        return Promise.all([_getUsers(), _getQuestions()]).then(values => {
           dispatch(loadInitialData({users: values[0], questions: values[1]}))
           //dispatch(setAuthedUser("sarahedo"))
           //dispatch(handleAddQuestion({optionOneText:"Be happy", optionTwoText: "Be sad"}))
           //dispatch(handleAnswerQuestion({qid: "am8ehyc8byjqgar0jgpub9", answer: "optionOne"}))
           dispatch(finishLoading())
           dispatch(hideLoading())
        }).catch(e => {
            console.log(e)
            dispatch(hideLoading())
        })
    }
}
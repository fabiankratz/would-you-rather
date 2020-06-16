import {_getUsers, _getQuestions} from '../utils/_DATA'

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
        return Promise.all([_getUsers(), _getQuestions()]).then(values => {
           dispatch(loadInitialData({users: values[0], questions: values[1]}))
        }).catch(console.log)
    }
}
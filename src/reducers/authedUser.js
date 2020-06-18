import {SET_AUTHED_USER} from '../actions/authedUser'
import {LOGOUT} from '../actions/authedUser'

const initialState = null

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_AUTHED_USER:
            return payload.id
        case LOGOUT:
            return null
        default:
            return state
    }
}

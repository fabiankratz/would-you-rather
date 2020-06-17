import { FINISH_LOADING, START_LOADING } from '../actions/loading'

const initialState = true

export default (state = initialState, { type }) => {
  switch (type) {
    case FINISH_LOADING:
      return false

    case START_LOADING:
      return true
    default:
      return state
  }
}

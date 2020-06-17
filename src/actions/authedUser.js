export const SET_AUTHED_USER = "SET_AUTHED_USER"

export function setAuthedUser (id) {
    return {
        type: SET_AUTHED_USER,
        payload: {
            id
        }
    }
}

export function handleSaveAuthedUser (id) {
    return (dispatch) => {
        localStorage.setItem("authedUser", id)
        dispatch(setAuthedUser(id))
    }
}
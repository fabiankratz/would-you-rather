export const SET_AUTHED_USER = "SET_AUTHED_USER"

export function setAuthedUser (id) {
    return {
        type: SET_AUTHED_USER,
        payload: {
            id
        }
    }
}

export const LOGOUT = "LOGOUT"

export function logout () {
    return {
        type: LOGOUT
    }
}